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
  /** Reserved contractor for Dayton, Columbus, and Cincinnati in-house coverage. */
  exclusiveContractor: "A Team Contracting",
  description:
    "RoofingLists is a lead-generation directory for roofing. Dayton / Miami Valley, Columbus / Franklin County, and Cincinnati / Hamilton County quote requests stay with A Team Contracting. We do not invent company names, phones, licenses, star ratings, or city-specific prices.",
  disclosure:
    "RoofingLists is a directory. Dayton / Miami Valley and Columbus / Franklin County quote requests stay with A Team Contracting. We do not sell those leads to other contractors. Cincinnati is also in-house — not a contractor-pay market. Paid spots, when they exist, are labeled.",
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

/** Dayton ring, Columbus, and Cincinnati are in-house A Team leads. None of those regions is a contractor-pay SKU. */
export type CityRegion = "dayton" | "columbus" | "cincinnati";

export type City = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  status: CityStatus;
  nearbySlugs: string[];
  parentSlug?: string;
  /** Defaults to dayton (in-house). Set columbus or cincinnati for those hubs — also in-house. */
  region?: CityRegion;
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
      "oakwood-oh",
      "riverside-oh",
      "moraine-oh",
      "huber-heights-oh",
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
      "oakwood-oh",
      "centerville-oh",
      "moraine-oh",
      "beavercreek-oh",
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
      "riverside-oh",
      "fairborn-oh",
      "kettering-oh",
      "bellbrook-oh",
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
      "kettering-oh",
      "oakwood-oh",
      "bellbrook-oh",
      "springboro-oh",
      "miamisburg-oh",
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
      "riverside-oh",
      "fairborn-oh",
      "clayton-oh",
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
      "riverside-oh",
      "huber-heights-oh",
      "springfield-oh",
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
      "west-carrollton-oh",
      "moraine-oh",
      "centerville-oh",
      "germantown-oh",
      "springboro-oh",
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
      "bellbrook-oh",
      "fairborn-oh",
      "centerville-oh",
      "springfield-oh",
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
      "englewood-oh",
      "clayton-oh",
      "tipp-city-oh",
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
      "vandalia-oh",
      "troy-oh",
      "huber-heights-oh",
      "dayton-oh",
      "clayton-oh",
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
  {
    slug: "oakwood-oh",
    name: "Oakwood",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "kettering-oh",
      "moraine-oh",
      "centerville-oh",
      "beavercreek-oh",
    ],
    setting:
      "Oakwood is a small inner-ring city immediately south of Dayton, with tree-lined streets, early 20th-century two-stories, and tighter lots than later Kettering ranches.",
    roofs:
      "Asphalt is common on later replacements; early houses along Far Hills and Schantz still carry slate or a mixed covering that is not a three-tab patch.",
    housing:
      "Tudor, colonial, and foursquare stock on shaded lots — older Dayton-adjacent housing, not a 1990s subdivision street.",
    storms:
      "Mature shade holds ice on north planes; ice dams show up where attic ventilation is weak on those older roofs.",
    localNote:
      "An Oakwood slate leftover is a different crew than a Kettering ranch overlay, even though the cities share a border.",
  },
  {
    slug: "west-carrollton-oh",
    name: "West Carrollton",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "moraine-oh",
      "miamisburg-oh",
      "kettering-oh",
      "germantown-oh",
    ],
    setting:
      "West Carrollton sits southwest of Dayton along the Great Miami River and the I-75 / Dixie Drive corridor, between Moraine and Miamisburg.",
    roofs:
      "Older mill-town pitches mixed with later ranch asphalt. Slate is less common than Oakwood; aging three-tab is the usual covering.",
    housing:
      "Industrial-era two-stories near the river plus later ranches and split-levels off Dixie.",
    storms:
      "River-adjacent ice and freeze–thaw wear flashing; open I-75-corridor lots catch more wind than a tree-lined Oakwood street.",
    localNote:
      "A Dixie-corridor ranch is a different leak path than a hillside Miamisburg two-story, even when both sit on the same river.",
  },
  {
    slug: "trotwood-oh",
    name: "Trotwood",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "clayton-oh",
      "englewood-oh",
      "moraine-oh",
      "brookville-oh",
    ],
    setting:
      "Trotwood is a west Montgomery County city along the Salem Avenue / State Route 49 corridor, with more open lots than inner-city Dayton.",
    roofs:
      "Mostly asphalt on post-war and later houses. Historic slate is uncommon compared with Oakwood or downtown Dayton.",
    housing:
      "Post-war streets, later infill, and wider lots than a Dayton bungalow block.",
    storms:
      "Open west-side lots see wind-driven ice that a street-tree Dayton alley does not; low-pitch asphalt still holds melt at the eaves.",
    localNote:
      "A Trotwood ranch plane is closer to Huber geometry than to an Oregon District slate roof, even though both are Montgomery County.",
  },
  {
    slug: "englewood-oh",
    name: "Englewood",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "clayton-oh",
      "vandalia-oh",
      "trotwood-oh",
      "dayton-oh",
      "brookville-oh",
    ],
    setting:
      "Englewood sits northwest of Dayton near I-70 and the National Road (US-40), with a small older core and later subdivisions.",
    roofs:
      "Later architectural shingles on subdivision streets; the older National Road core has aging asphalt and more flashing lines.",
    housing:
      "1970s–2000s colonials and ranches plus a compact older core — not inner-city Dayton bungalow stock.",
    storms:
      "I-70-corridor wind on open subdivision lots; ice still sits on lower-pitch ranches after a Miami Valley freeze.",
    localNote:
      "An Englewood subdivision colonial is a different reroof than a Vandalia tri-level, even when both sit north of downtown Dayton.",
  },
  {
    slug: "riverside-oh",
    name: "Riverside",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "fairborn-oh",
      "beavercreek-oh",
      "huber-heights-oh",
      "kettering-oh",
    ],
    setting:
      "Riverside wraps the east side of Dayton against Wright-Patterson Air Force Base, along the Woodman Drive corridor.",
    roofs:
      "A mix of older east-Dayton asphalt and later military-adjacent housing. Slate is uncommon; flashing age varies block to block.",
    housing:
      "East-side Dayton stock plus base-adjacent streets — tighter than Beavercreek subdivisions, newer on average than Fairborn’s downtown.",
    storms:
      "Wind off more open base-adjacent corridors; ice-dam leaks still show up on older east-side attics with weak ventilation.",
    localNote:
      "A Riverside roof next to the base is a different replacement history than a Fairborn downtown pitch, even when both sit by Wright-Patterson.",
  },
  {
    slug: "moraine-oh",
    name: "Moraine",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "dayton-oh",
      "kettering-oh",
      "west-carrollton-oh",
      "oakwood-oh",
      "miamisburg-oh",
    ],
    setting:
      "Moraine sits immediately south of Dayton along the I-75 industrial corridor, with plant-era streets between Kettering and West Carrollton.",
    roofs:
      "Aging asphalt on worker-era houses and later replacements. Slate leftovers are rarer than Oakwood; simple gables are common.",
    housing:
      "Mid-century industrial-adjacent streets and later infill — older Dayton housing nearby, not a Springboro subdivision.",
    storms:
      "I-75-corridor wind plus ice on older flashing. Staging on tighter plant-era lots differs from a wide Beavercreek street.",
    localNote:
      "A Moraine gable next to the industrial corridor is not an Oakwood slate walk, even though the two cities share a Dayton-south border.",
  },
  {
    slug: "bellbrook-oh",
    name: "Bellbrook",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "centerville-oh",
      "beavercreek-oh",
      "xenia-oh",
      "kettering-oh",
      "springboro-oh",
    ],
    setting:
      "Bellbrook is a Greene County city southeast of Dayton, with a compact historic Main Street and later housing toward Sugarcreek Township.",
    roofs:
      "Older downtown pitches — some aged covering — plus later architectural shingles on wider township-edge lots.",
    housing:
      "Small-town two-stories in the core and later colonials on the edges. Not a Huber brick-ranch grid.",
    storms:
      "North valleys on older downtown roofs hold ice; later open lots catch more wind than the tree-lined core.",
    localNote:
      "A Bellbrook Main Street pitch is a different inspection than a later Sugarcreek-edge colonial, even when both use a Bellbrook address.",
  },
  {
    slug: "springboro-oh",
    name: "Springboro",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "centerville-oh",
      "miamisburg-oh",
      "franklin-oh",
      "bellbrook-oh",
      "germantown-oh",
    ],
    setting:
      "Springboro sits in Warren County on the I-75 corridor south of Centerville and Miamisburg, with a historic downtown and large later subdivisions.",
    roofs:
      "1990s–2010s architectural shingles dominate the subdivisions; the older downtown still has aging asphalt and tighter access.",
    housing:
      "Later two-stories and colonials on HOA streets, plus a compact historic core that is closer to Franklin’s mill-town scale than to Dayton bungalows.",
    storms:
      "Open subdivision lots shed snow faster on steeper planes but take more wind; downtown ice still sits on older flashing.",
    localNote:
      "A Springboro HOA colonial is a different scope than a downtown two-story, even when both sit in Warren County south of Dayton.",
  },
  {
    slug: "troy-oh",
    name: "Troy",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "tipp-city-oh",
      "vandalia-oh",
      "huber-heights-oh",
      "springfield-oh",
      "dayton-oh",
    ],
    setting:
      "Troy is the Miami County seat north of Tipp City on the I-75 corridor, with a public-square downtown and later edges.",
    roofs:
      "Brick and two-story stock around the square still show aging asphalt and some older covering; later edges are architectural shingle.",
    housing:
      "County-seat downtown two-stories plus 1970s–2000s ranches and colonials — older housing than a Vandalia tri-level street.",
    storms:
      "Ice on downtown eaves and freeze–thaw at brick chimneys; open north-edge lots catch more wind than the square.",
    localNote:
      "A Troy public-square two-story is a different roof than a Tipp subdivision ranch, even though both sit in Miami County.",
  },
  {
    slug: "clayton-oh",
    name: "Clayton",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "englewood-oh",
      "trotwood-oh",
      "vandalia-oh",
      "brookville-oh",
      "dayton-oh",
    ],
    setting:
      "Clayton sits northwest of Dayton in what was Randolph Township, with rural-edge lots mixed into later residential streets.",
    roofs:
      "Asphalt on later houses and aging covering on older rural-edge buildings. Slate is uncommon; simple planes are typical.",
    housing:
      "A mix of older farmhouse leftovers and later ranches — more open than Trotwood’s post-war grid, less subdivision than Englewood.",
    storms:
      "Open northwest lots take wind-driven snow; ice still backs under low-pitch eaves after a Miami Valley freeze.",
    localNote:
      "A Clayton rural-edge plane is not an Englewood HOA colonial, even when both sit northwest of Dayton off I-70.",
  },
  {
    slug: "brookville-oh",
    name: "Brookville",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "clayton-oh",
      "englewood-oh",
      "trotwood-oh",
      "dayton-oh",
      "germantown-oh",
    ],
    setting:
      "Brookville is a small west Montgomery County city along the US-35 / I-70 west side, with a compact downtown and later edges.",
    roofs:
      "Older in-town asphalt and some aged covering downtown; later edges are simpler architectural-shingle planes.",
    housing:
      "Small-town two-stories in the core and later ranches on the edges — more rural-adjacent than Kettering.",
    storms:
      "West-side open lots catch wind; downtown ice sits on older flashing the way other Miami Valley cores do.",
    localNote:
      "A Brookville downtown pitch is a different walk than a later west-edge ranch, even when both use a Brookville ZIP.",
  },
  {
    slug: "germantown-oh",
    name: "Germantown",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "miamisburg-oh",
      "west-carrollton-oh",
      "franklin-oh",
      "springboro-oh",
      "dayton-oh",
    ],
    setting:
      "Germantown is a historic German village southwest of Dayton, with brick two-stories, a compact downtown, and later edges toward the river towns.",
    roofs:
      "Older brick-house asphalt and some leftover older covering downtown; later edges are standard architectural shingle.",
    housing:
      "Nineteenth-century and early 20th-century village stock — closer to older Dayton housing than to a Springboro subdivision.",
    storms:
      "Ice on brick-chimney flashing is a regular village-core story; later open edges shed snow faster.",
    localNote:
      "A Germantown brick two-story is a different material conversation than a West Carrollton Dixie ranch, even when both sit southwest of Dayton.",
  },
  {
    slug: "franklin-oh",
    name: "Franklin",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    nearbySlugs: [
      "springboro-oh",
      "miamisburg-oh",
      "germantown-oh",
      "west-carrollton-oh",
      "centerville-oh",
    ],
    setting:
      "Franklin is a Warren County mill town on the Great Miami River and I-75, south of Miamisburg and Springboro toward the Middletown side of the valley.",
    roofs:
      "Older mill-town pitches and aging asphalt downtown; later housing adds architectural shingle on simpler planes.",
    housing:
      "Historic two-stories near the river plus later edges — older stock than Springboro’s HOA streets.",
    storms:
      "River-adjacent ice and I-75-corridor wind. North planes on older downtown roofs hold freeze–thaw longer.",
    localNote:
      "A Franklin mill-town two-story is not a Springboro subdivision reroof, even though both sit in Warren County on I-75.",
  },
  {
    slug: "columbus-oh",
    name: "Columbus",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    region: "columbus",
    nearbySlugs: [],
    setting:
      "Columbus is Ohio’s capital in Franklin County, with older city lots, street trees, and a mix of bungalows and two-stories from German Village to Clintonville plus later suburban edges. AEP Ohio is the usual electric utility on the bill.",
    roofs:
      "Mostly asphalt shingles; older Clintonville and German Village blocks can still carry slate or a mixed covering that is not a three-tab patch.",
    housing:
      "Victorian, Craftsman, and early 20th-century stock on tighter lots than later Hilliard or Grove City subdivisions.",
    storms:
      "Central Ohio freeze–thaw and ice wear flashing and shingles; ice dams show up on older attics with weak ventilation after a hard freeze.",
    localNote:
      "A Clintonville bungalow or German Village two-story is a different shade and access problem than a later suburban ranch, even when both sit on AEP Ohio. We do not invent a Columbus-only dollar figure.",
  },
  {
    slug: "cincinnati-oh",
    name: "Cincinnati",
    state: "Ohio",
    stateAbbr: "OH",
    status: "live",
    region: "cincinnati",
    nearbySlugs: [],
    setting:
      "Cincinnati sits on Ohio River hills in Hamilton County, with older city lots, street trees, and a mix of Italianates, bungalows, and hillside two-stories from Over-the-Rhine to Price Hill and Hyde Park plus later suburban edges. Duke Energy Ohio is the usual electric utility on the bill.",
    roofs:
      "Steeper hillside pitches and aging asphalt; some historic blocks still carry slate or tile that need a different crew than a standard three-tab tear-off.",
    housing:
      "Hillside Italianates, brick two-stories, and mid-century houses on tighter lots than later Mason or West Chester subdivisions.",
    storms:
      "Ohio River freeze–thaw and ice wear flashing and shingles; north slopes hold ice, and hillside access in a freeze changes how a crew stages. Ice dams show up on older attics with weak ventilation.",
    localNote:
      "A hillside Price Hill or Hyde Park two-story is a different shade and access problem than a later suburban ranch, even when both sit on Duke Energy Ohio. We do not invent a Cincinnati-only dollar figure.",
  },
];

export const cityRegionOrder: CityRegion[] = [
  "dayton",
  "columbus",
  "cincinnati",
];

export const cityRegionHeadings: Record<
  CityRegion,
  { heading: string; intro: string }
> = {
  dayton: {
    heading: "Dayton-area cities",
    intro:
      "Live Miami Valley markets. Each hub links roof repair, replacement, storm damage, and inspection. Quote requests in this ring stay with A Team Contracting.",
  },
  columbus: {
    heading: "Columbus / Franklin County",
    intro:
      "Live Central Ohio hub. Nearby links only point at cities that already exist on this site — Columbus has no in-repo neighbor yet. Quote requests stay with A Team Contracting. We do not sell those leads.",
  },
  cincinnati: {
    heading: "Cincinnati / Hamilton County",
    intro:
      "Live Southwest Ohio hub. Nearby links only point at cities that already exist on this site — Cincinnati has no in-repo neighbor yet. Quote requests stay with A Team Contracting. We do not sell those leads.",
  },
};

export function cityRegion(city: City): CityRegion {
  return city.region ?? "dayton";
}

export function isDaytonExclusive(city: City): boolean {
  return cityRegion(city) === "dayton";
}

/** Dayton ring, Columbus, and Cincinnati stay with A Team. Not contractor-pay roofinglists markets. */
export function isInHouseLead(city: City): boolean {
  const region = cityRegion(city);
  return (
    region === "dayton" || region === "columbus" || region === "cincinnati"
  );
}

export function inHouseCoverageLabel(city: City): string {
  const region = cityRegion(city);
  if (region === "dayton") return "Dayton / Miami Valley";
  if (region === "columbus") return `${city.name} / Franklin County`;
  return `${city.name} / Hamilton County`;
}

export function regionLabel(city: City): string {
  const region = cityRegion(city);
  if (region === "columbus") return "Franklin County / Columbus";
  if (region === "cincinnati") return "Hamilton County / Cincinnati";
  return "Miami Valley";
}

export function citiesInRegion(region: CityRegion): City[] {
  return cities.filter(
    (city) => city.status === "live" && cityRegion(city) === region
  );
}

export function listingsHoldNote(city: City): string {
  return `${site.name} does not invent company names, phone numbers, licenses, star ratings, or city prices. ${inHouseCoverageLabel(city)} requests stay with ${site.exclusiveContractor}. Paid spots, when they exist, are labeled.`;
}

export function listingsEmptyNote(city: City): string {
  return `No live listings on this URL yet. Use the form. ${inHouseCoverageLabel(city)} requests stay with ${site.exclusiveContractor} at ${site.leadsEmail}. We do not sell those leads.`;
}

/** Sidebar copy on the quote form. Homepage (no city) names both live in-house markets. */
export function formLeadNote(city?: City): string {
  if (city) {
    return `No credit card. ${inHouseCoverageLabel(city)} requests stay with ${site.exclusiveContractor} at ${site.leadsEmail}. We do not sell those leads.`;
  }
  return `No credit card. Dayton / Miami Valley, Columbus / Franklin County, and Cincinnati / Hamilton County requests stay with ${site.exclusiveContractor} at ${site.leadsEmail}. We do not sell those leads.`;
}

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

const knownCitySlugs = new Set(cities.map((city) => city.slug));
for (const city of cities) {
  for (const nearby of city.nearbySlugs) {
    if (!knownCitySlugs.has(nearby)) {
      throw new Error(
        `City ${city.slug} nearbySlugs references missing city ${nearby}`
      );
    }
  }
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
