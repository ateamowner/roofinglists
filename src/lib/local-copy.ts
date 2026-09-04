import type { City, Service } from "@/config/site";

const copy: Record<string, string> = {
  "dayton-oh:roof-repair":
    "Dayton repairs often start on older asphalt — a missing tab, a failed step flashing, or an ice-dam leak at a gutter line on a bungalow or two-story. Historic blocks can still carry slate or tile; those are not a three-tab patch. Tight lots and street trees change staging. We do not publish a Dayton-only price.",
  "dayton-oh:roof-replacement":
    "A Dayton reroof has to name the covering you already have: common asphalt on mid-century streets, slate or tile leftovers in Oregon District and St. Anne’s Hill, and decks that have seen decades of Miami Valley ice. Tear-off vs overlay belongs in the written scope. National ranges are the only dollars on this page.",
  "dayton-oh:storm-damage":
    "After a Miami Valley wind or ice event, Dayton owners usually need photos of lifted shingles, broken slate, and wet attic spots before anyone talks replacement. Older city housing hides leaks behind plaster. Document first. RoofingLists is a directory, not the crew on your roof.",
  "dayton-oh:roof-inspection":
    "A Dayton inspection should walk asphalt vs slate, flashing at chimneys common on older stock, and attic moisture after ice-dam season. Street-tree shade and alley access are notes, not prices. Ask for what they saw in writing.",

  "kettering-oh:roof-repair":
    "Kettering repairs are often ice-dam leaks on 1950s–70s ranches: a long low-pitch asphalt plane, a clogged gutter, and melt that backs under the first few courses. Split-levels add a second flashing line. This is a different leak than a Dayton Victorian valley.",
  "kettering-oh:roof-replacement":
    "A Kettering replacement is frequently one large asphalt rectangle on a ranch, plus a smaller split-level face. Mature maples drop debris that shortens shingle life. Ask whether the deck can take another overlay or needs tear-off. We will not invent a Kettering survey price.",
  "kettering-oh:storm-damage":
    "Wind along the parkway streets lifts tabs on those long ranch planes. Ice after a freeze–thaw week sits instead of shedding. Say what you heard (a bang, a leak in a bedroom ceiling) on the form so the callback is not a guess.",
  "kettering-oh:roof-inspection":
    "Walk the south ranch plane and the lower-pitch valleys where ice dams form. Leaf-out hides some damage that was obvious in February. A Kettering inspection is about remaining shingle life and ventilation, not a star rating we invented.",

  "beavercreek-oh:roof-repair":
    "Beavercreek repairs are more often architectural-shingle flashing and wind lift than historic slate. Wider lots help staging; HOA rules can still limit visible patches. Open lots catch more wind than a tree-lined Dayton street.",
  "beavercreek-oh:roof-replacement":
    "Later Beavercreek subdivisions usually mean younger architectural shingles and fewer slate leftovers than Dayton’s core. A replacement still has to name tear-off, underlayment, and any HOA color rule. Wider lots do not create a local price list.",
  "beavercreek-oh:storm-damage":
    "East-side open lots see wind that a Dayton alley does not. After a Miami Valley storm, look for creased architectural tabs and granule piles in gutters — then decide repair vs replacement from photos, not a county average we made up.",
  "beavercreek-oh:roof-inspection":
    "Check HOA-visible planes, ridge vents, and whether the architectural shingles still have granule. Wright-Patterson-adjacent housing is newer on average than Fairborn’s downtown, but age still varies street to street.",

  "centerville-oh:roof-repair":
    "Centerville repairs split between a historic downtown pitch — sometimes slate — and multi-facet colonials in Washington Township. More valleys mean more flashing. A leak in a north valley after ice is a common call.",
  "centerville-oh:roof-replacement":
    "A four-plane Centerville colonial is a different reroof than a Huber ranch. The written scope should say which planes come off, how ice-season flashing is rebuilt, and whether any downtown slate stays. No invented Centerville dollar figure.",
  "centerville-oh:storm-damage":
    "Complex roofs collect wind-driven rain in valleys that a simple gable does not have. After a storm, photograph each facet. Ice in a north valley is not the same claim as a missing tab on a Kettering ranch.",
  "centerville-oh:roof-inspection":
    "Count the planes, check the valleys, and look at any older downtown covering separately from a 1980s colonial. A historic-core slate roof is a specialist walk, not a drive-by asphalt glance.",

  "huber-heights-oh:roof-repair":
    "Huber Heights brick ranches leak where low-pitch asphalt lets ice sit and melt back under the first courses. Simple footprints help; pitch works against you. A flashing patch here is not a Dayton slate job.",
  "huber-heights-oh:roof-replacement":
    "A Huber reroof is often one low-pitch asphalt field on a brick ranch. Ask about deck soundness, ice-and-water at eaves, and whether snow will sit. We will not invent a Huber-only dollar figure to fill this page.",
  "huber-heights-oh:storm-damage":
    "Low pitch means wind can lift a long run of tabs and ice can pond. After a Miami Valley event, walk the eaves and the ridge. Standing melt is a Huber story more than a steep Miamisburg hillside story.",
  "huber-heights-oh:roof-inspection":
    "Look at eave ice-dam history, remaining asphalt life, and whether the low pitch has already had an overlay. Simpler geometry than Centerville — the question is usually the deck, not the number of valleys.",

  "fairborn-oh:roof-repair":
    "Fairborn repairs mix older downtown flashing with later subdivision shingles near the base. Roof age jumps block to block. A leak on a 1940s pitch is not the same visit as a 1990s architectural tab.",
  "fairborn-oh:roof-replacement":
    "Some Fairborn roofs need replacement before another ice season; others were already swapped after a prior storm. Ask when the covering last changed. We confirm that from the house, not a map guess, and we do not publish a Fairborn price.",
  "fairborn-oh:storm-damage":
    "Wind off more open corridors near Wright-Patterson and ice on older flashing are the usual pair. Document lifted tabs and wet spots. Military-adjacent housing may have a different replacement history than downtown.",
  "fairborn-oh:roof-inspection":
    "Start with age and flashing, then decide if another winter is honest. Shade here is less about downtown street trees and more about neighboring two-stories and additions.",

  "miamisburg-oh:roof-repair":
    "Miamisburg hillside two-stories and downtown leftovers mean steeper pitches, tighter staging, and the occasional slate patch. A freeze changes how a crew reaches the north slope. River-adjacent is not a premium we invented — it is an access note.",
  "miamisburg-oh:roof-replacement":
    "Steeper Miamisburg roofs shed snow better than a Huber ranch but cost more in staging. Name asphalt vs slate, hillside access, and which planes come off. National published ranges are the only dollars here.",
  "miamisburg-oh:storm-damage":
    "North slopes hold ice; wind along the river corridor can lift tabs on a west plane that looked fine from the street. Photograph from the downhill side. Access in a freeze is part of the story.",
  "miamisburg-oh:roof-inspection":
    "Walk the steep planes, the downtown covering if you are on an older street, and the attic after ice season. A bluff lot can hide a north face the street view never shows.",

  "xenia-oh:roof-repair":
    "Xenia repairs have to ask whether the roof is a post-storm rebuild or unrestored older asphalt. Wind history is a reason to inspect, not a reason to publish a Xenia price. Open lots see different lift than a tree-lined Dayton street.",
  "xenia-oh:roof-replacement":
    "If a Xenia roof was replaced after historic wind events, a new reroof may be years away — or the unrestored neighbor may be due now. Ask for the last replacement year. We will not invent a Greene County survey number.",
  "xenia-oh:storm-damage":
    "Open-lot wind plus ice is the Xenia pair. After a Miami Valley storm, look for creased tabs and any repeat of damage on a roof that has already been through high wind. Photos first, then repair vs replacement.",
  "xenia-oh:roof-inspection":
    "Replacement history is the first question. A newer post-storm deck is a different walk than aging asphalt on an older in-town street. We do not invent a local inspection fee.",

  "vandalia-oh:roof-repair":
    "Vandalia ranches and tri-levels near the airport corridor leak like other low-pitch asphalt: ice at the eaves, wind along a simpler plane. Street pattern differs from Huber Heights; the geometry is still closer to Huber than to downtown Dayton slate.",
  "vandalia-oh:roof-replacement":
    "A Vandalia reroof is usually ranch or tri-level asphalt. Airport-adjacent wind is a design note, not an airport surcharge we made up. Ask about overlay vs tear-off and ice-and-water at the eaves.",
  "vandalia-oh:storm-damage":
    "Wind off the airport corridor and ice on low-pitch planes are the usual pair. Photograph the long runs. This is not a hillside Miamisburg staging problem and not a historic-slate problem.",
  "vandalia-oh:roof-inspection":
    "Check remaining shingle life, eave ice-dam marks, and whether a prior overlay is already on the deck. Simpler geometry than Centerville colonials.",

  "springfield-oh:roof-repair":
    "Springfield’s older brick and two-story stock, plus aging asphalt and some slate, makes material the first filter. A flashing leak on a brick chimney is a Clark County regular. We do not invent a Springfield repair price.",
  "springfield-oh:roof-replacement":
    "Aging asphalt is common; slate on older streets is not a standard tear-off. A written replacement should say what covering comes off and what the deck can take. National Angi ranges are the only dollars on this URL.",
  "springfield-oh:storm-damage":
    "Ice storms are a regular Miami Valley and Clark County story. After wind or ice, photograph lifted tabs, broken slate, and interior stains. Roof condition is the gate, not a slogan.",
  "springfield-oh:roof-inspection":
    "Separate asphalt streets from any slate leftovers. Older industrial-era housing has seen decades of ice seasons — the inspection should say so in writing, without a fake star rating.",

  "tipp-city-oh:roof-repair":
    "Tipp City repairs split between canal-era downtown two-stories — older flashing, sometimes aged covering — and later Miami County subdivision asphalt. Ice hits downtown eaves differently than an open I-75-corridor ranch.",
  "tipp-city-oh:roof-replacement":
    "A Main Street two-story is a different reroof than a 1990s Tipp subdivision ranch. Name the covering, the planes, and access on a compact downtown lot. We do not publish a Tipp-only price.",
  "tipp-city-oh:storm-damage":
    "Open subdivision lots catch more wind-driven snow than a tree-lined Dayton street; downtown ice sits on older flashing. After a storm, say which part of Tipp you are in so the callback matches the roof, not the zip alone.",
  "tipp-city-oh:roof-inspection":
    "Downtown Tipp lots can fight tighter setbacks and older planes; later subdivision roofs are often simpler rectangles. Walk both the covering and the ice-season attic, not a brand ranking we invented for Miami County.",

  "oakwood-oh:roof-repair":
    "Oakwood repairs often start on early 20th-century stock — failed step flashing, a cracked slate, or an ice-dam leak under Far Hills shade. A three-tab patch does not belong on leftover slate. Tight inner-ring lots change staging. We do not publish an Oakwood-only price.",
  "oakwood-oh:roof-replacement":
    "An Oakwood reroof has to name asphalt vs slate before anyone talks tear-off. Schantz and Far Hills houses are not Kettering ranch rectangles. Ask which planes come off and whether the deck can take another overlay. National ranges are the only dollars here.",
  "oakwood-oh:storm-damage":
    "After a Miami Valley ice or wind event, Oakwood owners usually need photos of lifted tabs, broken slate, and wet attic spots on those older two-stories. Street-tree shade hides damage a drive-by misses. Document first. RoofingLists is a directory, not the crew.",
  "oakwood-oh:roof-inspection":
    "An Oakwood inspection should walk asphalt vs slate, chimney flashing common on Tudor and foursquare stock, and attic moisture after ice-dam season. Shade and alley access are notes, not a star rating we invented.",

  "west-carrollton-oh:roof-repair":
    "West Carrollton repairs split between river mill-town flashing and later Dixie-corridor ranch asphalt. Ice backs under low-pitch eaves the way it does on Huber ranches; older two-stories leak at step flashing. This is not an Oakwood slate patch.",
  "west-carrollton-oh:roof-replacement":
    "A West Carrollton replacement is often aging three-tab on a ranch or a tighter river-street two-story. Name tear-off vs overlay and ice-and-water at the eaves. I-75 access is a staging note, not a local surcharge we made up.",
  "west-carrollton-oh:storm-damage":
    "Open I-75-corridor lots catch more wind than a tree-lined Oakwood street; river-adjacent ice sits on older flashing. After a storm, say whether you are on a Dixie ranch or a mill-town two-story so the callback matches the roof.",
  "west-carrollton-oh:roof-inspection":
    "Walk remaining asphalt life, eave ice-dam marks, and whether a prior overlay is already on a low-pitch ranch. Downtown leftovers need a separate look from a later split-level. We do not invent a West Carrollton inspection fee.",

  "trotwood-oh:roof-repair":
    "Trotwood repairs are usually asphalt — a missing tab, clogged gutter, or ice-dam leak on a post-war plane along Salem or State Route 49. Historic slate is uncommon. Wider lots help staging; pitch and ventilation still decide the leak.",
  "trotwood-oh:roof-replacement":
    "A Trotwood reroof is often one asphalt field on a post-war or later house. Ask about deck soundness and ice-and-water at eaves. We will not invent a Trotwood survey price or treat this like an Oregon District slate tear-off.",
  "trotwood-oh:storm-damage":
    "West-side open lots see wind-driven ice that a Dayton alley does not. After a Miami Valley storm, photograph lifted tabs and granule in gutters. A Trotwood ranch lift is closer to Huber geometry than to downtown Dayton slate.",
  "trotwood-oh:roof-inspection":
    "Look at remaining shingle life, eave ice history, and ventilation on those longer west-side planes. Shade is less about Far Hills maples and more about open lots and neighboring additions.",

  "englewood-oh:roof-repair":
    "Englewood repairs mix later subdivision flashing with aging asphalt on the National Road core. A leak on a 1990s colonial valley is not the same visit as an older US-40 pitch. Ice still sits on lower-pitch ranches after a freeze.",
  "englewood-oh:roof-replacement":
    "Later Englewood streets usually mean architectural shingles and fewer slate leftovers than Dayton’s core. A written scope should still name tear-off, underlayment, and which planes come off. I-70 proximity is not a price list.",
  "englewood-oh:storm-damage":
    "I-70-corridor wind on open subdivision lots lifts architectural tabs that a tree-lined Dayton street may hold. After ice, check north valleys on colonials and eaves on ranches. Photos first — no invented Englewood dollar figure.",
  "englewood-oh:roof-inspection":
    "Separate the National Road core from later I-70-edge colonials. Walk ridge vents, remaining granule, and ice-season attic moisture. We do not invent a local inspection score.",

  "riverside-oh:roof-repair":
    "Riverside repairs sit on east-Dayton asphalt and military-adjacent housing along Woodman. Roof age jumps near Wright-Patterson. A leak on an older east-side pitch is not a Beavercreek HOA flashing call.",
  "riverside-oh:roof-replacement":
    "A Riverside reroof has to ask when the covering last changed — some base-adjacent streets were already swapped; older east-Dayton stock may be due. We confirm that from the house, not a map, and we do not publish a Riverside price.",
  "riverside-oh:storm-damage":
    "Wind off more open base-adjacent corridors plus ice on older east-side flashing are the usual pair. Document lifted tabs and wet attic spots. Replacement history near Wright-Patterson is a first question, not a slogan.",
  "riverside-oh:roof-inspection":
    "Start with age and flashing, then decide if another ice season is honest. Riverside is tighter than Beavercreek and newer on average than Fairborn’s downtown — the walk still has to say what covering is on the deck.",

  "moraine-oh:roof-repair":
    "Moraine repairs are often aging asphalt on plant-era gables along the I-75 corridor — failed flashing, a missing tab, or ice at the eaves. This is not an Oakwood slate job and not a Springboro HOA patch.",
  "moraine-oh:roof-replacement":
    "A Moraine replacement is usually simple asphalt geometry on industrial-adjacent housing. Ask about deck soundness and ice-and-water at eaves. Tight plant-era lots change staging. National Angi ranges are the only dollars on this URL.",
  "moraine-oh:storm-damage":
    "I-75-corridor wind lifts tabs on those simpler gables; ice still sits on older flashing. After a Miami Valley event, photograph the street plane and the attic. Access is a note, not a surcharge we invented.",
  "moraine-oh:roof-inspection":
    "Walk remaining asphalt life, eave ice-dam marks, and whether a prior overlay already sits on a plant-era deck. Geometry is simpler than Centerville; the question is the covering, not the number of valleys.",

  "bellbrook-oh:roof-repair":
    "Bellbrook repairs split between a historic Main Street pitch — older flashing, sometimes aged covering — and later Sugarcreek-edge architectural shingles. A north-valley ice leak downtown is not a later colonial flashing call.",
  "bellbrook-oh:roof-replacement":
    "A Bellbrook downtown two-story is a different reroof than a later township-edge colonial. Name the covering, the planes, and access on a compact Main Street lot. We do not publish a Bellbrook-only price.",
  "bellbrook-oh:storm-damage":
    "Older downtown roofs hold ice in north valleys; later open lots catch more wind than the tree-lined core. After a storm, say which part of Bellbrook you are in so the callback matches the roof, not the ZIP alone.",
  "bellbrook-oh:roof-inspection":
    "Count the planes downtown separately from a later Sugarcreek-edge colonial. Walk flashing, remaining shingle life, and the ice-season attic. We do not invent a Greene County inspection fee.",

  "springboro-oh:roof-repair":
    "Springboro repairs are more often architectural-shingle flashing on 1990s–2010s subdivisions than historic slate. The downtown core still has aging asphalt and tighter access. HOA-visible patches come up more than they do in Dayton.",
  "springboro-oh:roof-replacement":
    "A Springboro HOA colonial is a different written scope than a downtown two-story. Later roofs still need tear-off vs overlay named. Wider Warren County lots do not create a local price list. National ranges are the only dollars here.",
  "springboro-oh:storm-damage":
    "Open subdivision lots take wind that a tree-lined Dayton street may not; downtown ice still sits on older flashing. After a Miami Valley storm, photograph each facet on a multi-plane colonial. Document first.",
  "springboro-oh:roof-inspection":
    "Check HOA-visible planes, ridge vents, and remaining granule on later architectural shingles. Downtown Springboro is a tighter, older walk. We do not invent a star rating for Warren County.",

  "troy-oh:roof-repair":
    "Troy repairs around the public square often start on brick-chimney flashing or aging asphalt on a two-story. Later I-75-edge ranches leak at low-pitch eaves after ice. Material is the first filter — we do not invent a Troy repair price.",
  "troy-oh:roof-replacement":
    "A county-seat downtown reroof is not a Tipp subdivision ranch overlay. Name asphalt vs any older covering, which planes come off, and access on a compact square-adjacent lot. National Angi ranges are the only dollars on this page.",
  "troy-oh:storm-damage":
    "Ice on downtown eaves and wind on open north-edge lots are the Troy pair. After a storm, photograph lifted tabs, chimney flashing, and interior stains. Roof condition is the gate, not a Miami County slogan.",
  "troy-oh:roof-inspection":
    "Separate square-adjacent two-stories from later edge ranches. Older brick stock has seen decades of ice seasons — the inspection should say so in writing, without a fake rating.",

  "clayton-oh:roof-repair":
    "Clayton repairs mix later ranch asphalt with older rural-edge covering northwest of Dayton. Ice backs under low-pitch eaves; wind on open Randolph Township leftovers lifts tabs a Trotwood grid may hold. Not an Englewood HOA flashing job.",
  "clayton-oh:roof-replacement":
    "A Clayton reroof is usually asphalt on a later house or an older rural-edge plane. Ask about deck soundness and ice-and-water at the eaves. Open lots help staging. We will not invent a Clayton-only dollar figure.",
  "clayton-oh:storm-damage":
    "Northwest open lots take wind-driven snow. After a Miami Valley event, walk the eaves and the ridge on those simpler planes. This is not a hillside Miamisburg staging problem and not a historic-slate problem.",
  "clayton-oh:roof-inspection":
    "Look at remaining shingle life, eave ice-dam marks, and whether a farmhouse leftover still has an older covering next to a later ranch. We do not invent a local inspection fee.",

  "brookville-oh:roof-repair":
    "Brookville repairs split between a compact downtown pitch — older flashing — and later west-edge ranch asphalt along the US-35 / I-70 side. Ice hits downtown eaves differently than an open-edge plane.",
  "brookville-oh:roof-replacement":
    "A Brookville downtown two-story is a different reroof than a later west-edge ranch. Name the covering and the planes. Rural-adjacent access is a note, not a Brookville surcharge we made up.",
  "brookville-oh:storm-damage":
    "West-side open lots catch wind; downtown ice sits on older flashing. After a storm, say whether you are in the core or on a later edge so the callback matches the roof. Photos first.",
  "brookville-oh:roof-inspection":
    "Walk downtown covering separately from a later ranch rectangle. Remaining asphalt life and ice-season attic moisture matter more than a brand ranking we invented for west Montgomery County.",

  "germantown-oh:roof-repair":
    "Germantown village-core repairs often start at brick-chimney flashing or aging asphalt on a two-story. Later edges leak like other low-pitch asphalt after ice. A three-tab patch is the wrong answer if the covering is older leftover material.",
  "germantown-oh:roof-replacement":
    "A Germantown brick two-story is a different reroof than a West Carrollton Dixie ranch. The written scope should say what covering comes off and what the deck can take. National published ranges are the only dollars here.",
  "germantown-oh:storm-damage":
    "Ice on brick-chimney flashing is a village-core story; later open edges take more wind. After a Miami Valley storm, photograph the chimney, the north plane, and interior stains. Document first.",
  "germantown-oh:roof-inspection":
    "Separate historic village stock from later edges. Older German-village housing has seen decades of ice seasons — ask for findings in writing. We do not invent a Germantown inspection score.",

  "franklin-oh:roof-repair":
    "Franklin mill-town repairs start on older river-street flashing or aging asphalt downtown. Later I-75-edge houses leak at eaves after ice. This is not a Springboro HOA architectural-shingle call.",
  "franklin-oh:roof-replacement":
    "A Franklin downtown two-story is a different reroof than a Springboro subdivision colonial. Name asphalt vs older covering, which planes come off, and river-lot access. We do not publish a Franklin-only price.",
  "franklin-oh:storm-damage":
    "River-adjacent ice and I-75-corridor wind are the Franklin pair. North planes on older downtown roofs hold freeze–thaw. After a storm, photograph each facet. Access in a freeze is part of the story, not a surcharge.",
  "franklin-oh:roof-inspection":
    "Walk the mill-town covering separately from later edge architectural shingles. Ice-season attic moisture and chimney flashing on older stock come first. We do not invent a Warren County rating.",

  "columbus-oh:roof-repair":
    "Columbus repairs often start on older asphalt — a missing tab, failed step flashing, or an ice-dam leak at a gutter line on a Clintonville bungalow or German Village two-story. Historic blocks can still carry slate or tile; those are not a three-tab patch. Tight lots and street trees change staging. AEP Ohio on the bill is not a Columbus repair price. We do not publish a Franklin County dollar figure.",
  "columbus-oh:roof-replacement":
    "A Columbus reroof has to name the covering you already have: common asphalt on mid-century streets, slate or mixed leftovers in German Village and older Clintonville, and decks that have seen decades of Central Ohio freeze–thaw. Tear-off vs overlay belongs in the written scope. Newer suburban edges are a different geometry. National ranges are the only dollars on this page.",
  "columbus-oh:storm-damage":
    "After a Central Ohio wind or ice event, Columbus owners usually need photos of lifted shingles, broken slate, and wet attic spots before anyone talks replacement. Older city housing hides leaks behind plaster. Street-tree shade in Clintonville hides damage a drive-by misses. Document first. RoofingLists is a directory, not the crew on your roof.",
  "columbus-oh:roof-inspection":
    "A Columbus inspection should walk asphalt vs slate, flashing at chimneys common on older German Village and Clintonville stock, and attic moisture after freeze–thaw season. Street-tree shade and alley access are notes, not prices. Ask for what they saw in writing. We do not invent a Franklin County inspection fee.",

  "cincinnati-oh:roof-repair":
    "Cincinnati repairs often start on older asphalt — a missing tab, failed step flashing, or an ice-dam leak at a gutter line on a hillside Italianate or Over-the-Rhine two-story. Historic blocks can still carry slate or tile; those are not a three-tab patch. Tight hillside lots and street trees change staging. Duke Energy Ohio on the bill is not a Cincinnati repair price. We do not publish a Hamilton County dollar figure.",
  "cincinnati-oh:roof-replacement":
    "A Cincinnati reroof has to name the covering you already have: common asphalt on mid-century streets, slate or mixed leftovers on hillside Italianates and older Hyde Park blocks, and decks that have seen decades of Ohio River freeze–thaw. Tear-off vs overlay belongs in the written scope. Steeper hillside planes are a different staging problem than a later suburban ranch. National ranges are the only dollars on this page.",
  "cincinnati-oh:storm-damage":
    "After a Southwest Ohio wind or ice event, Cincinnati owners usually need photos of lifted shingles, broken slate, and wet attic spots before anyone talks replacement. Older hillside housing hides leaks behind plaster. Street-tree shade in Hyde Park and Over-the-Rhine hides damage a drive-by misses. North slopes hold ice; access in a freeze is part of the story. Document first. RoofingLists is a directory, not the crew on your roof.",
  "cincinnati-oh:roof-inspection":
    "A Cincinnati inspection should walk asphalt vs slate, flashing at chimneys common on older hillside and Over-the-Rhine stock, and attic moisture after freeze–thaw season. Hillside access and street-tree shade are notes, not prices. Ask for what they saw in writing. We do not invent a Hamilton County inspection fee.",
};

export function uniqueLocalCopy(city: City, service: Service): string {
  const key = `${city.slug}:${service.slug}`;
  const paragraph = copy[key];
  if (!paragraph) {
    throw new Error(`Missing unique local copy for ${key}`);
  }
  return paragraph;
}
