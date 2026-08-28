/**
 * RoofingLists site config — brand, domain, inbox, cities, and services.
 * Theme tokens live here so a rebrand is one file.
 */

export const site = {
  name: "RoofingLists",
  legalName: "RoofingLists",
  domain: "roofinglists.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://roofinglists.com",
  email: "owner@ateamcontractings.com",
  leadsEmail: "owner@ateamcontractings.com",
  /** Native HTML POST to Formsubmit. No fetch/XHR, no API key. */
  formAction: "https://formsubmit.co/owner@ateamcontractings.com",
  formRedirect: "https://roofinglists.com/request-sent/",
  tagline: "A directory of roofing companies. Not the contractor on the listing.",
  year: 2026,
  description:
    "RoofingLists is a lead-generation directory for roofing. We publish a unique page per city, label paid placements, and hold quote requests until an approved local contractor is on the payer list.",
  disclosure:
    "RoofingLists is a directory. Paid spots are labeled. We are not the roofing contractor on the listing.",
  theme: {
    background: "#f4efe8",
    foreground: "#1c1916",
    card: "#fffdf9",
    primary: "#5c2a1a",
    primaryForeground: "#fdf6ee",
    muted: "#e8e0d4",
    mutedForeground: "#4a4338",
    accent: "#e8c9a0",
    accentForeground: "#3d2a12",
    border: "#c9bba8",
    featured: "#8a4b12",
    ring: "#5c2a1a",
    exclusive: "#3d1f14",
  },
} as const;

export type ListingTier = "standard" | "featured" | "exclusive";

export type CityStatus = "live" | "coming_soon";

export type City = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  status: CityStatus;
  nearbySlugs: string[];
  parentSlug?: string;
  /** Public geographic context used in hub copy. Not pricing. */
  setting: string;
  roofs: string;
  housing: string;
  storms: string;
  localNote: string;
};

export type Service = {
  slug: string;
  name: string;
  formValue: string;
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    formValue: "roof repair",
    blurb:
      "Leak, missing shingles, flashing, or ice-dam damage that does not yet need a full tear-off.",
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    formValue: "roof replacement",
    blurb:
      "A full reroof: tear-off or overlay, underlayment, flashing, and a written scope for the planes that come off.",
  },
  {
    slug: "storm-damage",
    name: "Storm Damage",
    formValue: "storm damage",
    blurb:
      "Wind, hail, or ice after a Miami Valley storm — document first, then decide repair vs replacement.",
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    formValue: "roof inspection",
    blurb:
      "A walk of the deck, flashing, and attic before a sale, an insurance claim, or winter ice season.",
  },
];

export const formServiceTypes = [
  { value: "roof repair", label: "Roof repair" },
  { value: "roof replacement", label: "Roof replacement" },
  { value: "storm damage", label: "Storm damage" },
  { value: "roof inspection", label: "Roof inspection" },
  { value: "other", label: "Other" },
] as const;

export const formTimings = [
  { value: "emergency", label: "Emergency — leaking now" },
  { value: "this_week", label: "This week" },
  { value: "this_month", label: "This month" },
  { value: "planning", label: "Planning — no rush" },
] as const;

export const formRoofTypes = [
  { value: "", label: "Not sure / skip" },
  { value: "asphalt", label: "Asphalt shingle" },
  { value: "architectural", label: "Architectural shingle" },
  { value: "metal", label: "Metal" },
  { value: "slate", label: "Slate" },
  { value: "tile", label: "Tile" },
  { value: "flat", label: "Flat / low-slope" },
  { value: "other", label: "Other" },
] as const;

export const formRoofAges = [
  { value: "", label: "Not sure / skip" },
  { value: "0_5", label: "0–5 years" },
  { value: "6_10", label: "6–10 years" },
  { value: "11_15", label: "11–15 years" },
  { value: "16_20", label: "16–20 years" },
  { value: "20_plus", label: "20+ years" },
] as const;

export const cities: City[] = [
  {
    slug: "dayton-oh",
    name: "Dayton",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "kettering-oh",
      "beavercreek-oh",
      "centerville-oh",
      "huber-heights-oh",
      "fairborn-oh",
    ],
    setting:
      "Dayton sits in the Miami Valley with older city lots, street trees, and a mix of bungalows, two-stories, and mid-century houses. Ice, wind, and tight access show up on a lot of roofs.",
    roofs:
      "Mostly asphalt shingles; some historic blocks still carry slate or tile that need a different crew than a standard three-tab tear-off.",
    housing:
      "Victorian, Craftsman, and 1940s–60s bungalows on tighter lots than the suburbs.",
    storms:
      "Miami Valley ice storms and freeze–thaw cycles wear flashing and shingles; ice dams show up on older attics with weak ventilation.",
    localNote:
      "Oregon District, St. Anne’s Hill, and other older streets add shade, slate, and alley access that a new subdivision does not have.",
  },
  {
    slug: "kettering-oh",
    name: "Kettering",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "centerville-oh",
      "beavercreek-oh",
      "miamisburg-oh",
      "xenia-oh",
    ],
    setting:
      "Kettering is a southern Dayton suburb of post-war streets, ranches, and split-levels. Long asphalt planes and mature shade trees shape most jobs.",
    roofs:
      "Long asphalt-shingle planes on ranches; some split-levels add a second, smaller roof face and more flashing lines.",
    housing:
      "1950s–70s ranches and split-levels with mature maples and oaks along the parkway streets.",
    storms:
      "Ice dams show up on lower-pitch ranches when attic ventilation is weak and gutters ice over after a Miami Valley freeze.",
    localNote:
      "A Kettering ranch is a different leak path than a Dayton Victorian — one long plane, fewer valleys, more ice sitting on a low pitch.",
  },
  {
    slug: "beavercreek-oh",
    name: "Beavercreek",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "kettering-oh",
      "fairborn-oh",
      "xenia-oh",
      "centerville-oh",
    ],
    setting:
      "Beavercreek sits east of Dayton near Wright-Patterson Air Force Base, with later subdivisions and wider lots than the city core.",
    roofs:
      "Architectural shingles on 1960s–2000s houses; fewer slate roofs than Dayton’s historic districts.",
    housing:
      "Subdivision colonials and two-stories, plus some older farmhouse leftovers on the edges.",
    storms:
      "Open lots catch more wind-driven ice than a tree-lined Dayton street; snow clears faster on steeper planes.",
    localNote:
      "HOA architectural rules come up more often here than in the city. Confirm the covering before anyone talks overlay vs tear-off.",
  },
  {
    slug: "centerville-oh",
    name: "Centerville",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "kettering-oh",
      "miamisburg-oh",
      "beavercreek-oh",
      "xenia-oh",
    ],
    setting:
      "Centerville mixes a historic downtown with 1970s–90s colonials in and around Washington Township.",
    roofs:
      "Multi-facet colonial roofs and some older downtown pitches; asphalt is common, slate appears on a few older buildings.",
    housing:
      "Two-story colonials, some HOA streets, and a compact historic core with tighter lots.",
    storms:
      "North-facing valleys hold ice longer; complex roofs have more flashing lines to check after a freeze–thaw week.",
    localNote:
      "A four-plane colonial is a different repair than a Kettering ranch, even when both sit a few miles south of Dayton.",
  },
  {
    slug: "huber-heights-oh",
    name: "Huber Heights",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "vandalia-oh",
      "fairborn-oh",
      "springfield-oh",
      "kettering-oh",
    ],
    setting:
      "Huber Heights is a northern Dayton suburb known for brick ranches. Lots are often wider than inner-city Dayton.",
    roofs:
      "Low-pitch asphalt planes on brick ranches — lots of area, less steepness for snow shed.",
    housing:
      "1950s–70s Huber brick ranches and later infill. Simple footprints compared with Centerville colonials.",
    storms:
      "Low pitch means snow and ice can sit. Ice dams and standing melt are a common reason people request a look.",
    localNote:
      "A long ranch plane can take a clean repair or reroof if the deck is sound. Pitch, not lot size, is the usual constraint.",
  },
  {
    slug: "fairborn-oh",
    name: "Fairborn",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "beavercreek-oh",
      "huber-heights-oh",
      "springfield-oh",
      "xenia-oh",
    ],
    setting:
      "Fairborn sits next to Wright-Patterson Air Force Base with an older downtown and military-adjacent housing.",
    roofs:
      "A mix of older downtown pitches and later subdivision shingles. Roof age varies block to block.",
    housing:
      "1940s–80s stock near the base and an older commercial/residential core.",
    storms:
      "Ice and wind off more open corridors near the base area; older flashing is a common find after a Miami Valley storm.",
    localNote:
      "Some Fairborn roofs need replacement before another winter. That is a roof conversation first, not a city-wide price.",
  },
  {
    slug: "miamisburg-oh",
    name: "Miamisburg",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "centerville-oh",
      "kettering-oh",
      "vandalia-oh",
      "xenia-oh",
    ],
    setting:
      "Miamisburg follows the Great Miami River south of Dayton, with hillside lots and a historic downtown.",
    roofs:
      "Steeper pitches on hillside two-stories; some older downtown roofs still show slate or aged asphalt.",
    housing:
      "Historic downtown two-stories plus later hillside and subdivision houses.",
    storms:
      "North slopes hold ice; hillside access in a freeze changes how a crew stages, not the national cost range.",
    localNote:
      "A river-adjacent lot is not automatically a simple asphalt job. Orientation, trees along the bluff, and slate leftovers matter more than the zip code.",
  },
  {
    slug: "xenia-oh",
    name: "Xenia",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "beavercreek-oh",
      "fairborn-oh",
      "centerville-oh",
      "springfield-oh",
      "dayton-oh",
    ],
    setting:
      "Xenia is the Greene County seat east of Dayton, with older stock and blocks rebuilt after historic wind events.",
    roofs:
      "A mix of replaced post-storm roofs and older asphalt that has seen ice and high wind.",
    housing:
      "Older in-town streets plus later rebuilds and subdivision edges.",
    storms:
      "Ice plus open-lot wind. Roof replacement history is part of the first questions, not an afterthought.",
    localNote:
      "A newer post-storm roof can be a clean inspection. An unrestored older roof is not, regardless of the last county-wide wind event.",
  },
  {
    slug: "vandalia-oh",
    name: "Vandalia",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "huber-heights-oh",
      "springfield-oh",
      "fairborn-oh",
      "miamisburg-oh",
    ],
    setting:
      "Vandalia sits north of Dayton near the airport corridor, with 1960s–80s housing.",
    roofs:
      "Ranch and tri-level asphalt, often lower pitch, similar in shape to Huber Heights but a different street pattern.",
    housing:
      "1960s–80s ranches and tri-levels; fewer historic slate roofs than Springfield or downtown Dayton.",
    storms:
      "Airport-area wind and ice on low-pitch planes. Snow load is a design note, not a local price list.",
    localNote:
      "Simpler roof geometry helps. Remaining shingle life and ice-dam history still come first.",
  },
  {
    slug: "springfield-oh",
    name: "Springfield",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "fairborn-oh",
      "huber-heights-oh",
      "vandalia-oh",
      "xenia-oh",
    ],
    setting:
      "Springfield is a Clark County city northeast of Dayton with older industrial-era housing.",
    roofs:
      "Aging asphalt is common; brick houses and some slate appear on older streets.",
    housing:
      "Older city stock — brick, two-stories, and houses that have seen decades of ice seasons.",
    storms:
      "Ice storms are a regular Miami Valley and Clark County story. Roof condition is the gate, not a slogan.",
    localNote:
      "We do not invent a Springfield-only dollar figure. National published ranges are the only numbers on this site.",
  },
  {
    slug: "tipp-city-oh",
    name: "Tipp City",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "vandalia-oh",
      "huber-heights-oh",
      "springfield-oh",
      "fairborn-oh",
    ],
    setting:
      "Tipp City sits in Miami County north of Dayton along the I-75 corridor, with a compact historic downtown and later subdivisions.",
    roofs:
      "Older downtown pitches mixed with later subdivision architectural shingles; asphalt is common, and a few Main Street buildings still show aged covering.",
    housing:
      "Canal-era downtown two-stories plus 1970s–2000s ranches and colonials on wider lots than inner-city Dayton.",
    storms:
      "Ice and freeze–thaw hit older flashing downtown; open subdivision lots catch more wind-driven snow than a tree-lined Dayton street.",
    localNote:
      "A Main Street two-story is a different roof than a later Tipp subdivision ranch, even when both sit in Miami County.",
  },
];

export const liveCitySlugs = cities
  .filter((city) => city.status === "live")
  .map((city) => city.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getNearbyCities(city: City): City[] {
  return city.nearbySlugs
    .map((slug) => getCity(slug))
    .filter((item): item is City => Boolean(item));
}

export function getParentCity(city: City): City | undefined {
  return city.parentSlug ? getCity(city.parentSlug) : undefined;
}

export function cityPath(city: City | string): string {
  const slug = typeof city === "string" ? city : city.slug;
  return `/${slug}`;
}

export function servicePath(
  city: City | string,
  service: Service | string
): string {
  const citySlug = typeof city === "string" ? city : city.slug;
  const serviceSlug = typeof service === "string" ? service : service.slug;
  return `/${citySlug}/${serviceSlug}`;
}

export function lockedH1(service: Service, city: City): string {
  return `Best ${service.name} in ${city.name} — ${site.year}`;
}

/** Title tag matches the H1 when it fits in 60 characters. */
export function pageTitle(service: Service, city: City): string {
  const locked = lockedH1(service, city);
  if (locked.length <= 60) return locked;
  const withoutYear = `Best ${service.name} in ${city.name}`;
  if (withoutYear.length <= 60) return withoutYear;
  return `${service.name} in ${city.name} — ${site.year}`;
}

export const costGuide = {
  line: "Professional roof replacement costs about $9,607 on average nationally. Roof repair typically ranges from $395 to $1,966.",
  sourceName: "Angi 2026",
  sourceUrl:
    "https://www.angi.com/articles/how-much-does-roof-replacement-cost.htm",
  repairSourceName: "Angi 2026 roof repair",
  repairSourceUrl: "https://www.angi.com/articles/how-much-do-roof-repairs-cost.htm",
  disclaimer:
    "These are national published ranges, not a Dayton-area or city-specific survey. RoofingLists does not invent city-specific dollar amounts. Size, pitch, material (asphalt vs slate), ice-dam work, and access change the number.",
} as const;
