import {
  cityRegion,
  costGuide,
  getNearbyCities,
  getParentCity,
  inHouseCoverageLabel,
  isDaytonExclusive,
  lockedH1,
  regionLabel,
  site,
  type City,
  type Service,
} from "@/config/site";
import { uniqueLocalCopy } from "@/lib/local-copy";

export type Faq = { question: string; answer: string };

function directoryLine(): string {
  return `${site.disclosure} If the listings block is empty, use the form anyway. Requests in this coverage stay with ${site.exclusiveContractor} at ${site.leadsEmail}.`;
}

export function introParagraphs(city: City, service: Service): string[] {
  const comingSoon =
    city.status === "coming_soon"
      ? `${city.name} is coming soon as a full ${site.name} market. This URL is live so nearby-city links do not 404. You can still send the quote form; Dayton / Miami Valley requests stay with ${site.exclusiveContractor} at ${site.leadsEmail}.`
      : null;

  const directory = directoryLine();
  const serviceLine = serviceIntro(city, service);

  if (comingSoon) {
    return [comingSoon, directory, uniqueLocalCopy(city, service), serviceLine];
  }

  return [
    `This page is ${site.name}'s ${city.name}, ${city.stateAbbr} listing for ${service.name.toLowerCase()}. ${directory}`,
    uniqueLocalCopy(city, service),
    serviceLine,
    `${city.setting} ${city.roofs} ${city.storms}`,
  ];
}

function serviceIntro(city: City, service: Service): string {
  switch (service.slug) {
    case "roof-repair":
      return `Use this ${city.name} page for a leak, missing shingles, failed flashing, or ice-dam damage that may not need a full tear-off. Ask for a written scope that names the material — asphalt vs slate — and whether they will be on your roof or sending a patch-and-go truck. ${site.name} does not send a crew of its own.`;
    case "roof-replacement":
      return `Use this ${city.name} page when the covering is due: age, widespread storm damage, or a deck that will not take another overlay. A written scope should say tear-off vs overlay, underlayment, flashing, and who hauls the old roof.`;
    case "storm-damage":
      return `Use this ${city.name} page after wind, hail, or ice. ${regionLabel(city)} storms lift tabs and open flashing; document with photos before anyone talks a full replacement. Emergency leak-stop and a later reroof are different visits.`;
    case "roof-inspection":
      return `This ${city.name} page is for a walk of the deck, flashing, and attic — before a sale, an insurance conversation, or winter ice season. Ask for findings in writing. ${site.name} does not invent an inspection score.`;
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
      return cityRegion(city) === "cincinnati"
        ? "Wind, hail, or ice after a Southwest Ohio storm — document first, then decide repair vs replacement."
        : "Wind, hail, or ice after a Central Ohio storm — document first, then decide repair vs replacement.";
    case "roof-inspection":
      return "A walk of the deck, flashing, and attic before a sale, an insurance claim, or winter ice season.";
    default:
      return service.blurb;
  }
}

export function hubIntro(city: City): string[] {
  const lead = `This is the ${city.name}, ${city.stateAbbr} hub on ${site.name} — a directory, not a contractor website. Open a service page for the quote form. ${city.name} requests stay with ${site.exclusiveContractor}. Paid spots, when they exist, are labeled.`;

  return [
    lead,
    city.setting,
    `${city.housing} ${city.roofs} ${city.storms}`,
    city.localNote,
    site.disclosure,
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
    lead: `How to choose a ${service.name.toLowerCase()} company in ${city.name} — the same checks apply whether you found a listing here or a truck on the street.`,
    items: [
      {
        title: "License",
        body: `Ask for the license or registration the company uses to work in ${city.state}. Write down the number. ${site.name} does not invent license IDs on this page.`,
      },
      {
        title: "Material they actually work",
        body: `${city.roofs} Asphalt is not slate. If your house still has slate or tile, ask who last did that covering in ${city.name} — not a generic photo set.`,
      },
      {
        title: "Ice, wind, and access",
        body:
          cityRegion(city) === "dayton"
            ? `${city.storms} ${city.housing} Local access (tight Dayton lots, hillside Miamisburg, low-pitch Huber ranches) changes the job. Ask how they stage in a freeze.`
            : cityRegion(city) === "cincinnati"
              ? `${city.storms} ${city.housing} Local access (Ohio River hillsides, Price Hill and Hyde Park lots, later suburban planes) changes the job. Ask how they stage in a freeze.`
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

export function faqs(city: City, service: Service): Faq[] {
  const parent = getParentCity(city);
  const nearby = getNearbyCities(city);
  const nearbyNames = nearby.map((item) => item.name);

  return [
    {
      question: `Is ${site.name} a ${service.name.toLowerCase()} company in ${city.name}?`,
      answer: `No. ${site.name} is a directory. We do not tear off roofs, patch ice dams, or send a truck. ${city.name} sits in the ${inHouseCoverageLabel(city)} coverage. Quote requests on this URL stay with ${site.exclusiveContractor} at ${site.leadsEmail}. We do not invent contractors to fill the page.`,
    },
    {
      question: `Why are some listings marked Featured or Exclusive?`,
      answer: `Those labels exist for paid placements if a future market outside Dayton, Columbus, and Cincinnati gets a listing. They are not for sale on ${city.name} pages. We do not sell exclusive or sold Dayton, Columbus, or Cincinnati leads, and we do not invent companies to fill empty slots.`,
    },
    {
      question: `What does ${service.name.toLowerCase()} cost in ${city.name}?`,
      answer: `${site.name} does not publish a ${city.name}-specific price. The only dollar ranges we cite are national: roof replacement about $9,607 on average, and roof repair typically $395–$1,966 (${costGuide.sourceName}). Your job may be outside that range. Use the form and ask the company for a written number.`,
    },
    {
      question:
        city.status === "coming_soon"
          ? `This ${city.name} page says coming soon. Can I still request a quote?`
          : `What happens after I submit the form on this ${city.name} page?`,
      answer:
        city.status === "coming_soon"
          ? `Yes. ${city.name} is a stub so links from ${parent ? parent.name : "nearby cities"} keep working. Submit the form. Dayton / Miami Valley requests stay with ${site.exclusiveContractor} at ${site.leadsEmail}. You should get a phone call, not a ${site.name} crew.`
          : `We take the request and hold it at ${site.leadsEmail}. ${city.name} is in the ${inHouseCoverageLabel(city)} coverage, so it stays with ${site.exclusiveContractor}. We do not sell that lead to another contractor. The inbox is ${site.leadsEmail} only. Expect a call from ${site.exclusiveContractor} — not from a ${site.name} roofer.`,
    },
    {
      question:
        nearbyNames.length > 0
          ? `Do you cover ${nearbyNames[0]} and other towns near ${city.name}?`
          : `Which towns near ${city.name} have their own ${site.name} pages?`,
      answer:
        nearbyNames.length > 0
          ? `Yes — we keep a separate URL for nearby cities so you can open a real page instead of a comma list. From ${city.name} that includes ${joinAnd(nearbyNames)}. Each of those pages has its own quote form.`
          : `We publish one URL per city. If you do not see your town, send the form with your ZIP and we will hold the request.`,
    },
  ];
}

export function hubFaqs(city: City): Faq[] {
  return [
    {
      question: `What is the ${city.name} ${site.name} hub?`,
      answer: `This is the city index — not a contractor homepage. From here you can open ${city.name} pages for roof repair, roof replacement, storm damage, and roof inspection.`,
    },
    {
      question: `Does ${site.name} work on roofs in ${city.name}?`,
      answer: `No. ${site.name} publishes directory pages. We do not send a crew. ${city.name} quote requests stay with ${site.exclusiveContractor} at ${site.leadsEmail}. We do not sell those ${inHouseCoverageLabel(city)} leads to other contractors.`,
    },
    {
      question: `Are featured listings ads?`,
      answer: `Featured and exclusive labels are for paid placements if a market outside Dayton, Columbus, and Cincinnati is added later. They are not offered as sold ${city.name} leads. We do not invent company names to fill a page.`,
    },
    {
      question: `Where is the quote form?`,
      answer: `On this hub and on every ${city.name} service page. Same fields. We need a name, phone, email, ZIP, service type, timing, and your agreement to the privacy policy. Roof type and age are optional.`,
    },
    {
      question: `How do contractors get on this ${city.name} page?`,
      answer: `They do not buy ${city.name} leads. See For Pros. Dayton / Miami Valley, Columbus, and Cincinnati requests stay with ${site.exclusiveContractor}. Paid listings may exist later outside those cities. There is no credit-card form on this site. The inbox is ${site.leadsEmail} only.`,
    },
  ];
}

export function metaDescription(city: City, service: Service): string {
  if (city.status === "coming_soon") {
    return `${lockedH1(service, city)}. ${site.name} directory page (coming soon). Request a quote and we hold it. Not a contractor.`;
  }
  return `${lockedH1(service, city)}. Compare listed companies, read a national cost range, and request a callback. ${site.name} is a directory, not a roofing contractor.`;
}

function joinAnd(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}
