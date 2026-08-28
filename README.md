# RoofingLists

A lead-generation directory for roofing companies. One niche, one unique page per city. RoofingLists is not a contractor and does not invent company names, phones, licenses, star ratings, or city-specific prices.

The published site is a **static export** on GitHub Pages. There is no Node server and `next start` is not used for production.

Working brand name: **RoofingLists**. Domain: [roofinglists.com](https://roofinglists.com). Rename brand, cities, and services in `src/config/site.ts`. Unique local copy lives in `src/lib/local-copy.ts`.

This site **sells inbound roofing quotes to approved local contractors**. It is not an in-house A Team Contracting roofing shop. Until a listing is live, we still take the request and hold it at `owner@ateamcontractings.com`. We never send a lead to a contractor who is not on the approved payer list. There is no approved payer list in this repo, so the inbox is `owner@` only.

Pattern: [ateamowner/treelist](https://github.com/ateamowner/treelist) (static Next export, city routes, FAQ JSON-LD, Formsubmit, Actions Pages). Pages workflow matches [ateamowner/solarlists](https://github.com/ateamowner/solarlists) (`upload-pages-artifact` + `deploy-pages`, `pages:write`, `id-token:write`). This repo does not change [treelist.ai](https://treelist.ai) DNS.

## Run locally

```bash
npm install
npm run dev
```

Dev app: [http://127.0.0.1:43127](http://127.0.0.1:43127)

Static preview (no Next server):

```bash
npm run build
npm start
```

`npm start` serves the `out/` folder with `serve`. The live site does not run `next start`.

After `npm run build`, `out/` must contain `CNAME` (`roofinglists.com`), `.nojekyll`, `dayton-oh/`, and city × service folders such as `dayton-oh/roof-repair/`.

## GitHub Pages

This repository publishes its own Pages site from `main` via `.github/workflows/pages.yml`:

1. `npm ci` and `npm run build` (`output: "export"`)
2. Confirm `out/CNAME`, `out/.nojekyll`, and `out/dayton-oh/`
3. `upload-pages-artifact` then `deploy-pages`

Required repo settings (once): **Settings → Pages → Source = GitHub Actions**. Custom domain: `roofinglists.com`. `CNAME` is committed as `roofinglists.com` (repo root and `public/CNAME`).

Pages source was set to GitHub Actions on 2026-08-28. Custom domain roofinglists.com is set in CNAME and should be saved in repo Pages settings.

This workflow does **not** change [treelist.ai](https://treelist.ai) DNS or the TreeList repo.

## Porkbun DNS (roofinglists.com only — do not apply)

Keep Porkbun nameservers. Create these records for **roofinglists.com**. Do not apply them to treelist.ai.

**Apex `roofinglists.com` — add all four A records**

| Type | Host | Answer |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**www**

| Type | Host | Answer |
| --- | --- | --- |
| CNAME | `www` | `ateamowner.github.io` |

Do not point `www` at a path such as `ateamowner.github.io/roofinglists`. The CNAME target is the GitHub Pages host only.

Remove any Porkbun default parking / URL-forward records on `@` and `www` first.

Optional IPv6 (GitHub Pages AAAA), if you want them:

| Type | Host | Answer |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

## Quote form and `LEADS_EMAIL`

Copy `.env.example`:

- `NEXT_PUBLIC_SITE_URL=https://roofinglists.com`
- `LEADS_EMAIL=owner@ateamcontractings.com`

The quote form is a **native HTML POST** (no `fetch` / XHR). Action: `https://formsubmit.co/owner@ateamcontractings.com`. Hidden `_next` redirects to `https://roofinglists.com/request-sent/`. If Formsubmit cannot be used, the form includes a mailto fallback to the same address.

Never use `treelist@agentmail.to`. Never invent a Web3Forms, Formspree, or other backend key.

First Formsubmit delivery requires confirming `owner@ateamcontractings.com` when Formsubmit emails that inbox.

## Pages

- `/` — homepage
- `/privacy/`
- `/for-pros/`
- `/request-sent/`
- City hubs: `/dayton-oh/`, `/kettering-oh/`, `/beavercreek-oh/`, `/centerville-oh/`, `/huber-heights-oh/`, `/fairborn-oh/`, `/miamisburg-oh/`, `/xenia-oh/`, `/vandalia-oh/`, `/springfield-oh/`, `/tipp-city-oh/`
- City × service: `roof-repair`, `roof-replacement`, `storm-damage`, `roof-inspection` under each city (locked H1: `Best {Service} in {City} — 2026`)

## Add a listing

Do not invent real contractors. When you have a real company, edit `data/listings.json` (starts as `[]`).

Each object:

| Field | Notes |
| --- | --- |
| `city_slug` | Must match a city slug |
| `service_slug` | Must match a service slug |
| `name` | Real business name only |
| `areas_served` | Array of place names |
| `phone` | Real phone, or `""` |
| `license_id` | Real license, or `""` |
| `blurb` | Short, factual |
| `tier` | `standard` \| `featured` \| `exclusive` |
| `profile_url` | Optional URL, or `""` |

`featured` and `exclusive` render a **paid placement** label. See `data/listings.example.json` for shape only — do not ship the example as a live listing. Rebuild after editing so static pages pick up the file.

Do not add a contractor to live routing unless they are on the approved payer list (kept outside this repo).

## Cost guide

The only dollar ranges on the site are national:

Professional roof replacement costs about $9,607 on average ([Angi 2026](https://www.angi.com/articles/how-much-does-roof-replacement-cost.htm)). Roof repair typically ranges from $395 to $1,966 ([Angi 2026](https://www.angi.com/articles/how-much-do-roof-repairs-cost.htm)).

Labeled as national ranges, not a Dayton survey.

## SEO

- `sitemap.xml` and `robots.txt` are generated from the city/service config.
- Every city and city × service page includes JSON-LD: `LocalBusiness` for RoofingLists the publisher (not a vendor), `FAQPage` matching the visible FAQs, and `BreadcrumbList`.
