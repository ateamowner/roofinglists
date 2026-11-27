import {
  cityRegion,
  costGuide,
  getNearbyCities,
  getParentCity,
  isDaytonExclusive,
  regionLabel,
  site,
  type City,
  type Service,
} from "@/config/site";
import { uniqueLocalCopy } from "@/lib/local-copy";
import type { Listing } from "@/types/listing";

export type Faq = { question: string; answer: string };

function directoryLine(city: City): string {
  return `Need a roof leak fixed, storm damage checked, or a replacement quote in ${city.name}? Compare the companies listed on this page, call one directly, or use the Request an estimate button on a card. ${site.name} is an independent directory, not a contractor, and never sells your information.`;
}

export function introParagraphs(city: City, service: Service): string[] {
  const comingSoon =
    city.status === "coming_soon"
      ? `${city.name} is coming soon as a full ${site.name} market. This URL is live so nearby-city links do not 404. You can still send the quote form and we follow up.`
      : null;

  const directory = directoryLine(city);
  const serviceLine = serviceIntro(city, service);

  if (comingSoon) {
    return [comingSoon, directory, uniqueLocalCopy(city, service), serviceLine];
  }

  return [
    directory,
    uniqueLocalCopy(city, service),
    serviceLine,
    `${city.setting} ${city.roofs} ${city.storms}`,
  ];
}

function serviceIntro(city: City, service: Service): string {
  switch (service.slug) {
    case "roof-repair":
      return `Use this ${city.name} page for a leak, missing shingles, failed flashing, or ice-dam damage that may not need a full tear-off. Ask for a written scope that names the material, asphalt vs slate, and whether they will be on your roof or sending a patch-and-go truck. ${site.name} does not send a crew of its own.`;
    case "roof-replacement":
      return `Use this ${city.name} page when the covering is due: age, widespread storm damage, or a deck that will not take another overlay. A written scope should say tear-off vs overlay, underlayment, flashing, and who hauls the old roof.`;
    case "storm-damage":
      return `Use this ${city.name} page after wind, hail, or ice. ${regionLabel(city)} storms lift tabs and open flashing; document with photos before anyone talks a full replacement. Emergency leak-stop and a later reroof are different visits.`;
    case "roof-inspection":
      return `This ${city.name} page is for a walk of the deck, flashing, and attic, before a sale, an insurance conversation, or winter ice season. Ask for findings in writing. ${site.name} does not invent an inspection score.`;
    default:
      return service.blurb;
  }
}

/** Hub service-card blurb. Dayton cities keep the shared Miami Valley service.blurb. */
export function serviceCardBlurb(city: City, service: Service): string {
  if (isDaytonExclusive(city)) return service.blurb;
  switch (service.slug) {
    case "roof-repair":
      return "Leak, missing shingles, flashing, or ice-dam damage that does not yet need a full tear-off.";
    case "roof-replacement":
      return "A full reroof: tear-off or overlay, underlayment, flashing, and a written scope for the planes that come off.";
    case "storm-damage":
      if (cityRegion(city) === "cincinnati") {
        return "Wind, hail, or ice after a Southwest Ohio storm, document first, then decide repair vs replacement.";
      }
      if (cityRegion(city) === "national") {
        if (city.slug === "syracuse-ny") {
          return "Wind, hail, or ice after a Central New York storm, document first, then decide repair vs replacement.";
        }
        return "Wind, hail, or ice after a southern Wisconsin storm, document first, then decide repair vs replacement.";
      }
      return "Wind, hail, or ice after a Central Ohio storm, document first, then decide repair vs replacement.";
    case "roof-inspection":
      return "A walk of the deck, flashing, and attic before a sale, an insurance claim, or winter ice season.";
    default:
      return service.blurb;
  }
}

export function hubIntro(city: City): string[] {
  const lead = `This is the ${city.name}, ${city.stateAbbr} hub on ${site.name}, a directory, not a contractor website. Each service page lists verified ${city.name}-area roofing companies with a Request an estimate button on every card. Paid spots, when they exist, are labeled.`;

  return [
    lead,
    city.setting,
    `${city.housing} ${city.roofs} ${city.storms}`,
    city.localNote,
  ];
}

export function howToChoose(
  city: City,
  service: Service
): {
  lead: string;
  items: { title: string; body: string }[];
} {
  return {
    lead: `How to choose a ${service.name.toLowerCase()} company in ${city.name}, the same checks apply whether you found a listing here or a truck on the street.`,
    items: [
      {
        title: "License",
        body: `Ask for the license or registration the company uses to work in ${city.state}. Write down the number. ${site.name} does not invent license IDs on this page.`,
      },
      {
        title: "Material they actually work",
        body: `${city.roofs} Asphalt is not slate. If your house still has slate or tile, ask who last did that covering in ${city.name}, not a generic photo set.`,
      },
      {
        title: "Ice, wind, and access",
        body:
          cityRegion(city) === "dayton"
            ? `${city.storms} ${city.housing} Local access (tight Dayton lots, hillside Miamisburg, low-pitch Huber ranches) changes the job. Ask how they stage in a freeze.`
            : cityRegion(city) === "cincinnati"
              ? `${city.storms} ${city.housing} Local access (Ohio River hillsides, Price Hill and Hyde Park lots, later suburban planes) changes the job. Ask how they stage in a freeze.`
              : cityRegion(city) === "national"
                ? city.slug === "syracuse-ny"
                  ? `${city.storms} ${city.housing} Local access (Eastwood and Strathmore lots, later suburban planes) changes the job. Ask how they stage in a freeze.`
                  : `${city.storms} ${city.housing} Local access (isthmus lots, near-east / Willy Street shade, later west-side and Fitchburg-edge planes) changes the job. Ask how they stage in a freeze.`
                : `${city.storms} ${city.housing} Local access (tight German Village lots, Clintonville shade, later suburban planes) changes the job. Ask how they stage in a freeze.`,
      },
      {
        title: "Written scope",
        body: `Get the work in writing: repair vs replacement, tear-off vs overlay, flashing, ice-and-water at eaves, who hauls debris, and how they protect the house. “We’ll take a look” is not a scope.`,
      },
      {
        title: "Reviews with addresses",
        body: `Prefer reviews that mention a street or neighborhood in ${city.name}. Star averages with no job location are easy to fake. ${site.name} does not publish star ratings or review counts.`,
      },
      {
        title: "Insurance vs out of pocket",
        body: `${service.slug === "storm-damage" ? "If this is storm damage, say that first and keep photos." : "If this is not a storm claim, say so."} A salesperson should not treat a planned reroof like an emergency rescue, or the reverse.`,
      },
      {
        title: "Warranty",
        body: `Ask what is warranted (workmanship, flashing, a missed leak) and for how long. “We stand behind our work” is not a warranty.`,
      },
    ],
  };
}

export function costGuideCopy(city: City): {
  heading: string;
  paragraphs: string[];
  citations: { label: string; href: string }[];
} {
  return {
    heading: `Cost guide (national range, not a ${city.name} survey)`,
    paragraphs: [
      costGuide.line,
      costGuide.disclaimer,
      `Pitch, access, asphalt vs slate, ice-dam work, and disposal change the number. A written scope from a company that will actually stand on your lot is the only local price that matters.`,
    ],
    citations: [
      { label: costGuide.sourceName, href: costGuide.sourceUrl },
      { label: costGuide.repairSourceName, href: costGuide.repairSourceUrl },
    ],
  };
}

export function faqs(city: City, service: Service, listings: Listing[] = []): Faq[] {
  const parent = getParentCity(city);
  const nearby = getNearbyCities(city);
  const nearbyNames = nearby.map((item) => item.name);
  const listedNames = listings.map((listing) => listing.name);

  return [
    {
      question: `Is ${site.name} a ${service.name.toLowerCase()} company in ${city.name}?`,
      answer: `No. ${site.name} is an independent directory. We do not tear off roofs, patch ice dams, or send a truck, and we are not affiliated with the companies listed. We do not invent contractors to fill the page.`,
    },
    {
      question: `Which ${service.name.toLowerCase()} companies are listed for ${city.name}, and how were they checked?`,
      answer:
        listedNames.length > 0
          ? `This page lists ${joinAnd(listedNames)}. Each one was checked against its own website and its BBB profile (${site.listingsCheckedOn}) for name, address, phone, years in business, and whether it serves ${city.name}. Ohio has no state roofing license, so order is based on where the company is based, years in business, and BBB accreditation. We do not copy star ratings or review counts.`
          : `We are still verifying ${city.name} companies for this service. We only list a company after checking its own website and its BBB profile, and we do not invent companies to fill the page.`,
    },
    {
      question: `What does ${service.name.toLowerCase()} cost in ${city.name}?`,
      answer: `${site.name} does not publish a ${city.name}-specific price. The only dollar ranges we cite are national: roof replacement about $9,607 on average, and roof repair typically $395–$1,966 (${costGuide.sourceName}). Your job may be outside that range. Ask the company for a written number.`,
    },
    {
      question:
        city.status === "coming_soon"
          ? `This ${city.name} page says coming soon. Can I still request a quote?`
          : `What happens after I send a Request an estimate form on this ${city.name} page?`,
      answer:
        city.status === "coming_soon"
          ? `Yes. ${city.name} is a stub so links from ${parent ? parent.name : "nearby cities"} keep working. Submit the form and we follow up. You should get a phone call, not a ${site.name} crew.`
          : `Your request, with the company name you picked, goes to the ${site.name} inbox, not straight to the company. We follow up, usually within one business day. To reach a company yourself, call the phone number on its card. We do not sell your request.`,
    },
    {
      question:
        nearbyNames.length > 0
          ? `Do you cover ${nearbyNames[0]} and other towns near ${city.name}?`
          : `Which towns near ${city.name} have their own ${site.name} pages?`,
      answer:
        nearbyNames.length > 0
          ? `Yes, we keep a separate URL for nearby cities so you can open a real page instead of a comma list. From ${city.name} that includes ${joinAnd(nearbyNames)}. Each of those pages has its own listings and estimate forms.`
          : `We publish one URL per city. If you do not see your town, send the form with your ZIP and we will hold the request.`,
    },
  ];
}

/** Homepage FAQs only. Same facts as the visible homepage / For Pros copy. */
export function homeFaqs(): Faq[] {
  return [
    {
      question: `Is ${site.name} a roofing company?`,
      answer: `No. ${site.name} is an independent directory of roofing companies. We are not a contractor. We do not send a crew, and we do not invent company names, star ratings, or city-specific prices. ${site.disclosure}`,
    },
    {
      question: `How are companies chosen for a city page?`,
      answer: `We list up to three roofing companies per city and service. Each one is checked against its own website and its BBB profile for name, address, phone, years in business, and the cities it serves. Ohio has no state roofing license, so order is based on where the company is based, years in business, and BBB accreditation. Listings are free.`,
    },
    {
      question: `Do you publish star ratings or city-specific prices?`,
      answer: `No. ${site.name} does not copy star ratings or review counts, and does not invent company names, phones, licenses, or city-specific prices. Each listed company links to its own BBB profile. The only dollar ranges we cite are national: roof replacement about $9,607 on average, and roof repair typically $395–$1,966 (${costGuide.sourceName}).`,
    },
    {
      question: `What happens after I submit a form?`,
      answer: `Your request goes to the ${site.name} inbox, not straight to a listed company, and we follow up, usually within one business day. To reach a company yourself, call the number on its card. There is no credit card on the form, and we do not sell your request.`,
    },
    {
      question: `How do contractors get listed on ${site.name}?`,
      answer: `Listings are editorial and free. We add a company after checking its own website and BBB profile. Featured (paid placement) is $99/month for an approved contractor outside Dayton, Columbus, and Cincinnati. Corrections go to ${site.leadsEmail}.`,
    },
  ];
}

export function hubFaqs(city: City): Faq[] {
  return [
    {
      question: `What is the ${city.name} ${site.name} hub?`,
      answer: `This is the city index, not a contractor homepage. From here you can open ${city.name} pages for roof repair, roof replacement, storm damage, and roof inspection, each with verified local roofing companies.`,
    },
    {
      question: `Does ${site.name} work on roofs in ${city.name}?`,
      answer: `No. ${site.name} publishes directory pages. We do not send a crew, and we are not affiliated with the ${city.name} companies we list.`,
    },
    {
      question: `Are featured listings ads?`,
      answer: `Featured and exclusive labels are for paid placements. This ${city.name} hub has none today. Every listing here is free and editorial, and we do not invent company names to fill a page.`,
    },
    {
      question: `Where is the quote form?`,
      answer: `On this hub, on every ${city.name} service page, and behind the Request an estimate button on each company card. The card form asks for your name, phone, email, address or ZIP, and a short job note.`,
    },
    {
      question: `How do contractors get on this ${city.name} page?`,
      answer: `We add a company after checking its own website and BBB profile, including whether it serves ${city.name}. Listings are free. Corrections go to ${site.leadsEmail}.`,
    },
  ];
}

export function metaDescription(city: City, service: Service, listingCount = 0): string {
  const noun = service.name.toLowerCase();
  if (city.status === "coming_soon") {
    return `${service.name} in ${city.name}, ${city.stateAbbr}: ${site.name} directory page (coming soon). Request a quote and we follow up. Not a contractor.`;
  }
  const options =
    listingCount > 0
      ? [
          `Compare ${listingCount} verified ${noun} companies in ${city.name}, ${city.stateAbbr}, checked against their own sites and BBB profiles. Request an estimate. No copied ratings.`,
          `Compare ${listingCount} verified ${noun} companies in ${city.name}, ${city.stateAbbr}, checked against their sites and BBB profiles. Request an estimate.`,
          `${listingCount} verified ${noun} companies in ${city.name}, ${city.stateAbbr}, checked against BBB profiles. Request an estimate.`,
        ]
      : [
          `${service.name} in ${city.name}, ${city.stateAbbr}: we are still verifying local companies. Read a national cost range and request a callback. Not a contractor.`,
          `${service.name} in ${city.name}, ${city.stateAbbr}: companies still being verified. Request a callback.`,
        ];
  return options.find((text) => text.length <= 160) ?? options[options.length - 1].slice(0, 160);
}

function joinAnd(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}
