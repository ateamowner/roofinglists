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
};

export function uniqueLocalCopy(city: City, service: Service): string {
  const key = `${city.slug}:${service.slug}`;
  const paragraph = copy[key];
  if (!paragraph) {
    throw new Error(`Missing unique local copy for ${key}`);
  }
  return paragraph;
}
