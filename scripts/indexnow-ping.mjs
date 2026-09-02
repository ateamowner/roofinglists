/**
 * IndexNow ping for roofinglists.com.
 * The key is public by design — do not require a secret env var.
 *
 *   node scripts/indexnow-ping.mjs --sitemap out/sitemap.xml --write indexnow-urls.json
 *   node scripts/indexnow-ping.mjs --urls indexnow-urls.json
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "roofinglists.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = join(ROOT, "public");
const KEY_NAME_RE = /^[0-9a-f]{32}\.txt$/i;

function parseArgs(argv) {
  const out = { sitemap: "", write: "", urls: "" };
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    const value = argv[i + 1];
    if (flag === "--sitemap" && value) {
      out.sitemap = value;
      i += 1;
    } else if (flag === "--write" && value) {
      out.write = value;
      i += 1;
    } else if (flag === "--urls" && value) {
      out.urls = value;
      i += 1;
    } else {
      throw new Error(`Unknown or incomplete argument: ${flag}`);
    }
  }
  return out;
}

function resolveKeyFile() {
  const matches = readdirSync(PUBLIC_DIR).filter((name) => KEY_NAME_RE.test(name));
  if (matches.length !== 1) {
    throw new Error(
      `Expected exactly one IndexNow key file in public/, found ${matches.length}`
    );
  }
  const filename = matches[0];
  const key = readFileSync(join(PUBLIC_DIR, filename), "utf8").trim();
  const stem = filename.replace(/\.txt$/i, "");
  if (key !== stem) {
    throw new Error("IndexNow key file contents must match the filename");
  }
  return { filename, key };
}

function resolveSitemapPath(input) {
  const candidates = input
    ? [input, join(input, "index.xml")]
    : ["out/sitemap.xml", "out/sitemap.xml/index.xml"];
  for (const candidate of candidates) {
    if (existsSync(candidate) && statSync(candidate).isFile()) {
      return candidate;
    }
  }
  throw new Error(`Could not find sitemap XML (tried ${candidates.join(", ")})`);
}

function locsFromSitemapXml(xml) {
  const locs = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((m) =>
    m[1].trim()
  );
  if (locs.length === 0) {
    throw new Error("No <loc> entries in sitemap");
  }
  for (const loc of locs) {
    if (!loc.endsWith("/")) {
      throw new Error(`Sitemap loc is missing its trailing slash: ${loc}`);
    }
  }
  return locs;
}

function payloadFromLocs(key, urlList) {
  return {
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList,
  };
}

async function pingIndexNow(payload) {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  console.log(`IndexNow ${res.status} ${res.statusText}: ${text}`);
  if (res.status !== 200 && res.status !== 202) {
    process.exitCode = 1;
  }
}

const args = parseArgs(process.argv.slice(2));
const { key } = resolveKeyFile();

if (args.urls) {
  const urlList = JSON.parse(readFileSync(args.urls, "utf8"));
  if (!Array.isArray(urlList) || urlList.length === 0) {
    throw new Error(`No URLs in ${args.urls}`);
  }
  await pingIndexNow(payloadFromLocs(key, urlList));
} else if (args.sitemap || args.write) {
  const sitemapPath = resolveSitemapPath(args.sitemap);
  const urlList = locsFromSitemapXml(readFileSync(sitemapPath, "utf8"));
  if (args.write) {
    writeFileSync(args.write, `${JSON.stringify(urlList, null, 2)}\n`);
    console.log(`Wrote ${urlList.length} sitemap locs to ${args.write}`);
  } else {
    await pingIndexNow(payloadFromLocs(key, urlList));
  }
} else {
  throw new Error(
    "Usage: --sitemap out/sitemap.xml [--write indexnow-urls.json]  OR  --urls indexnow-urls.json"
  );
}
