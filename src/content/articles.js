import { additionalGuides } from './additional-guides.js'
import { buyerGuides } from './buyer-guides.js'

// Manufacturer references support general buyer education, not a claim of affiliation
// or a specification for the products used on any individual SMA project.
const surfacePreparation = {
  title: 'Sika: evaluating concrete and preparing a surface for resin flooring',
  url: 'https://usa.sika.com/en/construction/floor-wall/resource-center/guides/surface-prep-guide.html',
}
const polyasparticReference = {
  title: 'Sika Canada: Sikafloor-510 N LPL polyaspartic product information',
  url: 'https://can.sika.com/en/construction/floors-walls/flooring-products/smooth-floor-coating/sikafloor-510-nlpl.html',
}
const epoxyReference = {
  title: 'Sika Canada: Sikafloor-217 epoxy product information',
  url: 'https://can.sika.com/en/construction/floors-walls/flooring-products/smooth-floor-coating/sikafloor-217.html',
}
const maintenanceReference = {
  title: 'Sika Canada: floor protection, cleaning and maintenance guidelines',
  url: 'https://can.sika.com/dam/dms/ca01/i/sikafloor_maintenance_en.pdf',
}

export const articles = [
  ...buyerGuides,
  ...additionalGuides,
  {
    slug: 'garage-floor-coating-cost-gta',
    title: 'What affects garage floor coating cost in the GTA?',
    description:
      'Compare garage floor coating quotes by preparation, repairs, system, finish and exclusions. Learn what to include when requesting a GTA project estimate.',
    category: 'Planning & pricing',
    date: '2026-09-11',
    image: '/assets/images/garage-epoxy-flooring.webp',
    imageAlt: 'Black and blue metallic floor finish in a residential garage',
    intro:
      'A useful garage floor coating budget starts with what the contractor is actually pricing. Two garages with a similar footprint can need very different work, and two quotes for the same garage can describe different coating systems. For homeowners in Mississauga and the surrounding GTA, the best starting point is a measured area, clear photographs and a written scope. This guide explains the questions that make an estimate easier to compare.',
    sections: [
      {
        id: 'measure-the-scope',
        heading: 'Measure the surfaces included in the quote',
        paragraphs: [
          'Record the approximate length and width of the garage, then identify any areas outside that rectangle. Steps, raised concrete edges, a storage recess and the apron at the door can change the scope. Ask whether these are included and how each is measured. A single total is difficult to assess when one contractor includes vertical surfaces and another prices only the main floor.',
          'Photograph the whole garage from the doorway and the back wall. Add close views of the threshold and any problem areas. Mark objects that will stay in place. These details help an estimator understand access and boundaries before confirming the final measurements.',
        ],
      },
      {
        id: 'existing-concrete',
        heading: 'Let the condition of the concrete inform the budget',
        paragraphs: [
          'Existing paint, damaged edges, cracks and old repairs deserve their own discussion. Ask which removal and repair tasks are included, which require inspection, and how additional work would be approved. A photo can identify an area to investigate, but it cannot establish the strength of the concrete or the condition beneath an old coating.',
          "Sika's surface preparation guide identifies substrate evaluation, contaminant removal and moisture assessment as parts of planning resin flooring. In practical terms, ask your contractor to explain the proposed preparation and testing for your slab. Treat an unresolved moisture issue as an assessment question before choosing a decorative finish.",
        ],
      },
      {
        id: 'compare-the-system',
        heading: 'Compare a complete system, layer by layer',
        paragraphs: [
          'A label such as epoxy, flake or polyaspartic does not describe every layer of a floor. Request the proposed primer or base coat, decorative treatment and finish coat, including the product names when the specification is confirmed. Also ask what is being offered around joints and transitions. This gives you a record you can refer to after installation.',
          'Keep appearance choices separate from necessary concrete work. A preferred colour blend is a different decision from correcting an unsuitable substrate. If the total is above your budget, ask for clearly described alternatives and what changes with each option, rather than accepting an unexplained reduction in price.',
        ],
      },
      {
        id: 'practical-costs',
        heading: 'Include the costs around the installation',
        paragraphs: [
          'Your project budget may include temporary storage, parking arrangements and moving heavy garage contents. Decide who will empty the space, who will return the contents, and whether a freezer or fixed cabinet needs special arrangements. Check those tasks before selecting a date, especially if another renovation depends on access through the garage.',
          'Ask for separate guidance on installation duration and return to use. Completing the coating work does not automatically mean that vehicles, shelving and cleaning can resume together. A clear handover schedule lets you make realistic storage arrangements without relying on a headline about a one-day installation.',
        ],
      },
      {
        id: 'quote-checklist',
        heading: 'Use the same checklist for every estimate',
        paragraphs: [
          'Put the quotes beside each other and resolve omissions before comparing totals. A short written clarification is more useful than assuming the lowest figure includes everything discussed on a call. Keep the agreed scope with your acceptance so both sides are working from the same document.',
        ],
        bullets: [
          'Measured area and the exact edges, steps or adjoining surfaces included.',
          'Preparation, existing coating removal and the allowance for concrete repairs.',
          'Proposed system, colour, texture and treatment of visible joints.',
          'Taxes, payment stages, exclusions and the process for approving extra work.',
          'Expected access restrictions, care instructions and any written warranty terms.',
        ],
      },
      {
        id: 'request-an-estimate',
        heading: 'Bring useful information to the estimate',
        paragraphs: [
          'Send SMA Surface Solutions your city, approximate floor dimensions, current photographs and the way you use the garage. Mention previous coatings, water entry and your preferred timing. Describe whether the space is mainly for parking, storage or a workshop, because those uses help frame the conversation about finish and care.',
          'This guide does not publish a square-foot price or a typical project total: an inspection and a defined scope are needed for a meaningful offer. Manufacturer information linked below explains preparation principles; it does not establish a price or identify the products that will be proposed for your home.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I get a useful estimate from photos?',
        answer:
          'Photos and approximate dimensions can start the conversation. A final scope may still require an inspection, measurements and an assessment of the concrete.',
      },
      {
        question: 'Should I compare only the price per square foot?',
        answer:
          'No. Compare the covered area, preparation, repairs, coating layers, exclusions and taxes as well. The same unit price can describe different work.',
      },
      {
        question: 'Does a quote automatically include a warranty?',
        answer:
          'Ask for the written terms of any warranty being offered. Confirm its duration, exclusions, maintenance requirements and who is responsible for a claim before accepting.',
      },
    ],
    sources: [surfacePreparation],
    relatedServices: [
      'garage-epoxy-flooring',
      'polyaspartic-garage-flooring',
      'epoxy-flake-flooring',
    ],
  },
  {
    slug: 'epoxy-vs-polyaspartic',
    title: 'Epoxy vs. polyaspartic: how to compare garage floor systems',
    description:
      'Understand epoxy and polyaspartic floor systems, UV exposure, timing, texture and the questions to ask before choosing a garage coating.',
    category: 'Choosing a coating',
    date: '2026-09-11',
    image: '/assets/images/polyaspartic-garage-flooring.webp',
    imageAlt: 'Grey speckled coating on a garage floor',
    intro:
      'Epoxy and polyaspartic are useful terms when shopping for a garage floor, but they are only the start of the specification. The floor you buy may combine different materials across its layers. Your decision should connect the condition of the concrete, the exposure at the garage door, the available downtime and the finish you want. Here is a practical way to compare proposals without treating one product category as a universal winner.',
    sections: [
      {
        id: 'whole-floor-system',
        heading: 'Start with the complete floor system',
        paragraphs: [
          'Ask what touches the concrete, what holds any decorative flakes, and what forms the exposed finish. Those layers may have different jobs and different product names. A contractor describing a polyaspartic finish may be talking about the topcoat rather than every layer below it. The written proposal should remove that ambiguity.',
          'Manufacturer examples show why the distinction matters: Sika lists its epoxy Sikafloor-217 for primer, binder and topcoat applications, while its polyaspartic Sikafloor-510 N LPL can serve several roles and is commonly described as a clear finish over decorative systems. These examples explain terminology; they are not the specification for an SMA installation.',
        ],
      },
      {
        id: 'sunlight-and-colour',
        heading: 'Discuss sunlight where the garage opens',
        paragraphs: [
          "Tell the estimator how often you leave the garage door open and whether direct sun reaches a strip of the floor. Include any adjoining outdoor surface as a separate part of the discussion. Ask for the proposed product's documented suitability for that exposure rather than treating an indoor garage finish as automatically suitable for a porch.",
          'UV performance depends on the formulation. Sika describes UV resistance for its referenced polyaspartic product and enhanced resistance to colour change for the referenced epoxy. That is a reason to read the actual product information, rather than assume all epoxies or all polyaspartics behave identically. Look at samples in your own lighting when choosing a colour.',
        ],
      },
      {
        id: 'timing',
        heading: 'Separate faster installation from permission to park',
        paragraphs: [
          'If you need the garage back quickly, make that constraint clear before accepting the proposal. Ask for the planned work dates and the earliest approved return for walking, parking, heavy storage and washing. The coating crew leaving the site is a visible milestone, but your household needs a schedule for each activity.',
          'The referenced manufacturer data separates foot traffic, light traffic and full cure, and ties curing guidance to conditions. Faster curing can help with scheduling, but the appropriate return to vehicle use must come from the actual system and installer. Arrange a backup parking option if conditions require the handover time to move.',
        ],
      },
      {
        id: 'texture-and-use',
        heading: 'Choose the surface for how you use the space',
        paragraphs: [
          'Describe the everyday tasks you expect the floor to support: parking a wet vehicle, wheeling a storage cart, kneeling beside a bicycle or sweeping workshop debris. Ask to see a finish sample and discuss texture as well as colour. A photograph can show a pattern, but it cannot tell you how that surface feels under a hand or shoe.',
          'Ask specifically about wet conditions and the proposed approach to traction. A decorative flake appearance alone is not a promise that the floor will prevent slipping. Also ask what cleaning tools and products suit the finish, so your expectations about maintenance are part of the choice before work begins.',
        ],
      },
      {
        id: 'substrate-and-scope',
        heading: 'Keep preparation in the comparison',
        paragraphs: [
          'A material comparison is incomplete when the quotes assume different work on the existing slab. Ask both contractors to address the same old coating, oil marks, damaged areas and water history. Request an explanation of any additional assessment needed before the floor system can be confirmed.',
          'Make the proposal easy to revisit by asking for a short scope, rather than relying on terms such as premium or industrial. You should be able to identify the preparation, repair allowance, named layers, finish choice and exclusions. If a system is recommended, ask which feature of your garage or schedule drove that recommendation.',
        ],
        bullets: [
          'Which products are proposed for the base and exposed finish?',
          'What supports their suitability for the expected exposure and use?',
          'What are the separate return-to-use milestones?',
          'What care instructions and written warranty terms accompany the system?',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is polyaspartic always better than epoxy?',
        answer:
          'There is no useful universal winner. Compare the specified products and layers against the slab, exposure, timing, appearance and use of your garage.',
      },
      {
        question: 'Can one floor contain both epoxy and polyaspartic?',
        answer:
          'A proposal may use different materials in different layers. Ask the installer to confirm the complete compatible system and provide the specification for your project.',
      },
      {
        question: 'Will a flake floor be completely non-slip?',
        answer:
          'Do not treat a flake pattern as a guarantee against slipping. Discuss texture, wet use and cleaning, and ask about the documented performance of the proposed finish.',
      },
    ],
    sources: [epoxyReference, polyasparticReference],
    relatedServices: [
      'garage-epoxy-flooring',
      'polyaspartic-garage-flooring',
      'epoxy-flake-flooring',
    ],
  },
  {
    slug: 'garage-floor-coating-cure-time',
    title: 'When can you walk and park on a newly coated garage floor?',
    description:
      'Plan garage floor downtime around walking, parking, heavy storage and full cure. Learn why the product, slab temperature and site conditions matter.',
    category: 'Installation planning',
    date: '2026-09-11',
    image: '/assets/images/flake-epoxy-garages.webp',
    imageAlt:
      'Blue and grey decorative flake garage floor beside an open doorway',
    intro:
      'The most useful answer to how long a garage coating takes to cure is a written return-to-use schedule for your installed system. A floor can reach one milestone before it is ready for another. Walking across it, rolling in a vehicle and washing it should not be treated as interchangeable. Plan for the installation and the waiting period together, and ask for the final guidance when the work is complete.',
    sections: [
      {
        id: 'different-milestones',
        heading: 'Understand what each timing label means',
        paragraphs: [
          'Installation time describes the work on site. A recoat window describes when the next layer can be applied. Foot traffic, light traffic and full cure are separate terms in manufacturer data. Do not translate light traffic into permission to park your particular vehicle without asking the installer what the term means for the specified system.',
          "For example, Sika's Sikafloor-217 data distinguishes traffic stages from full cure and explains that the full mechanical, chemical and physical properties develop at full cure. The practical takeaway is to request an activity-based schedule, with ordinary language such as walking, parking and cleaning, alongside any technical timing terms.",
        ],
      },
      {
        id: 'conditions',
        heading: 'Ask which conditions the schedule assumes',
        paragraphs: [
          'A product data sheet gives conditions for its timing information. It does not measure your garage. The referenced Sika polyaspartic data identifies air and substrate temperature, humidity and condensation controls among the application considerations. Your contractor should use the requirements of the actual products and the observed site conditions when setting the plan.',
          'Tell the contractor whether the garage is heated and explain any access limits that affect the work. Avoid changing heating, ventilation or the garage door position on your own during installation and curing. Ask for specific instructions, including what to do overnight, so household routines do not conflict with the agreed conditions.',
        ],
      },
      {
        id: 'parking-and-storage',
        heading: 'Plan parking and storage before the floor is coated',
        paragraphs: [
          'Choose where vehicles, bikes, bins and the items normally stored on the floor will go. Move anything you need during the waiting period to a place you can reach without crossing the garage. Chargers, work shoes, pet supplies and tools are easy to overlook when the focus is on clearing large furniture.',
          'Reserve enough flexibility that a revised handover does not force you to use the floor early. If you book temporary storage, ask how extensions work. If parking outside requires an arrangement at your property, make it before installation day. This is especially helpful when the garage is your usual route into the house.',
        ],
      },
      {
        id: 'handover-checklist',
        heading: 'Get a clear handover before resuming use',
        paragraphs: [
          'Ask for the date and time of the final application and a written schedule that reflects the completed work. Save the message where everyone in the household can find it. A spoken instruction given while equipment is being packed away can easily be remembered differently by the person returning home later.',
          "Mention your specific loads rather than asking only when the floor is ready. A rolling tool chest, a heavy fixed shelf and a car create different practical questions. Confirm whether mats or protective coverings are suitable and when they can be placed. Use the installer's directions for the finish you received.",
        ],
        bullets: [
          'When may people and pets enter the garage?',
          'When may vehicles return, and are there initial restrictions?',
          'When may shelving, appliances and workshop equipment be moved back?',
          'When may the floor get wet or be cleaned?',
          'Who should you contact if the surface or conditions raise a concern?',
        ],
      },
      {
        id: 'if-plans-change',
        heading: 'Ask before changing the plan',
        paragraphs: [
          'If you need unexpected access, call the installer instead of testing the floor by walking or driving onto it. A surface that appears dry is not your return-to-use instruction. Explain what you need to move, where it is and when it is needed; the contractor can tell you whether the current schedule allows it.',
          'If you notice an unusual surface condition, take a photograph from an accessible location and send it with the time you noticed it. Avoid experimenting with cleaners, extra heat or a covering to correct it. A precise report gives the installer a better starting point than an attempted repair that changes the surface.',
          'The manufacturer links below are examples of how cure information is presented. They do not promise a cure time for every epoxy or polyaspartic floor, and they do not identify which system SMA will propose for your project. Ask for that specification and its care guidance with your estimate.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does a one-day installation mean I can park that evening?',
        answer:
          'Not automatically. Installation duration and approved vehicle return are different milestones. Use the written schedule for the finished system.',
      },
      {
        question: 'Can I tell whether a coating has cured by touching it?',
        answer:
          "Touch is not a substitute for the installer's return-to-use guidance. Follow the schedule based on the installed products and site conditions.",
      },
      {
        question: 'Should I heat the garage to speed things up?',
        answer:
          'Ask the installer before changing the conditions. Follow the heating and ventilation directions provided for the actual coating work.',
      },
    ],
    sources: [epoxyReference, polyasparticReference],
    relatedServices: ['garage-epoxy-flooring', 'polyaspartic-garage-flooring'],
  },
  {
    slug: 'garage-floor-winter-care',
    title: 'Winter care for a coated garage floor',
    description:
      'A practical winter routine for garage floor coatings: manage slush, remove grit, choose approved cleaners and check the surface when the season changes.',
    category: 'Floor care',
    date: '2026-09-11',
    image: '/assets/images/polyaspartic-garage-flooring.webp',
    imageAlt:
      'Grey speckled garage coating with a continuous decorative finish',
    intro:
      'A coated garage still needs a winter care routine. Snow on a vehicle, gritty footwear and items moved in and out of storage all create cleanup tasks. Start with the care instructions for your actual finish, then build a simple routine around the way your household uses the garage. The aim is to keep the floor usable, notice problems early and avoid turning an ordinary cleaning job into an untested treatment.',
    sections: [
      {
        id: 'winter-setup',
        heading: 'Set up a small cleaning station',
        paragraphs: [
          'Keep the tools approved for your floor somewhere you can reach without moving the car. A designated place for the cleaner, cleaning tool and a container for collected debris makes short cleanups easier. Label the cleaner with its dilution directions and keep the original container available so anyone helping can check the instructions.',
          'Decide where wet boots, a snow brush and outdoor equipment will go when they come inside. If you want a mat or containment tray, ask the installer which options are compatible with the coating. Think about whether you can remove and clean it easily, and how it will affect the walking route through the garage.',
        ],
      },
      {
        id: 'regular-routine',
        heading: 'Use the manufacturer guidance for routine cleaning',
        paragraphs: [
          "Sika's maintenance guide recommends regular removal of dirt and debris, prompt attention to spills, and suitable neutral or mildly alkaline cleaners. It also warns that abrasive tools can scratch or dull a finish. Apply those principles through the instructions for your own floor: confirm the cleaner and tools rather than assuming a household product is suitable.",
          'Start with loose debris, then clean the affected area using the approved method. Remove the dirty solution and allow the area to dry as directed. Schedule the work for a time when people will not be walking through the wet area. If the garage gets dirty again quickly, shorter cleanups may fit your routine better than an occasional major wash.',
        ],
      },
      {
        id: 'slush-and-salt',
        heading: 'Treat slush and residue as separate tasks',
        paragraphs: [
          'After a wet or snowy trip, check where water collects around the parked vehicle and along the normal walking path. Use the approved cleanup method and keep that path clear. Notice recurring puddles or water entering at the door, and document their location. That information is useful if you later discuss drainage or an entry problem with a contractor.',
          'If a residue remains after the water is removed, identify the approved cleaning approach before scrubbing harder. Tell the installer what has been tracked inside and what cleaner you have already used. Do not assume that a chemical-resistance claim permits every de-icer, concentration or cleaning mixture to remain on the surface indefinitely.',
        ],
      },
      {
        id: 'marks-and-spills',
        heading: 'Respond to marks without guessing at a treatment',
        paragraphs: [
          'For a tyre mark, stain or unknown patch, take a clear photograph and record when it appeared. Check the care sheet for an approved treatment. If there is no guidance for that substance, ask before using a stronger chemical or an abrasive pad. Keep track of the product name and dilution when you describe what you have tried.',
          "Move stored equipment with care and avoid dragging heavy objects across the finish. Sika's maintenance guidance specifically addresses avoiding scratches during placement of equipment and furniture. For your garage, plan how a tool cabinet, snowblower or storage rack will be moved, and ask about suitable protection for the load before reorganizing the room.",
        ],
      },
      {
        id: 'spring-check',
        heading: 'Inspect after cleanup and when the season changes',
        paragraphs: [
          'Once the floor is clean and dry, look at the doorway, parking areas, steps and edges. Compare any concern with earlier photos, especially if you see a new crack, lifting edge or a change that remains after cleaning. A quick visual record is useful because lighting and surface dirt can make the same area look different from week to week.',
          'Send the installer a wide photograph showing the location and a closer view of the detail. Include whether it appeared suddenly, followed a spill or has changed over time. Ask whether it needs assessment before touching up the finish. A repair product chosen only by colour may not match the existing system.',
        ],
        bullets: [
          'Keep the installed system details and care instructions together.',
          'Check the main walking route after wet vehicles arrive.',
          'Use the approved cleaner and tools at the instructed dilution.',
          'Record persistent marks or surface changes before attempting repairs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use road salt or a de-icer directly on the coating?',
        answer:
          'Check with the installer or coating manufacturer about the specific product. Suitability depends on the installed finish and the chemical; do not assume all de-icers are interchangeable.',
      },
      {
        question: 'Is pressure washing the best way to clean it?',
        answer:
          'Ask whether pressure washing is approved for your system and garage. Follow the care instructions rather than choosing pressure or equipment settings by guesswork.',
      },
      {
        question: 'Will a coating stop water from collecting near the door?',
        answer:
          'Do not assume it will. Describe water entry and puddling when requesting an estimate so drainage, surface shape and coating scope can be discussed separately.',
      },
    ],
    sources: [maintenanceReference],
    relatedServices: [
      'garage-epoxy-flooring',
      'polyaspartic-garage-flooring',
      'epoxy-flake-flooring',
    ],
  },
  {
    slug: 'preparing-garage-for-floor-coating',
    title: 'How to prepare your garage for a floor coating installation',
    description:
      'Prepare for garage floor coating with a practical checklist covering storage, access, existing slab concerns, fixed equipment and return-to-use planning.',
    category: 'Installation planning',
    date: '2026-09-11',
    image: '/assets/images/garage-epoxy-flooring.webp',
    imageAlt:
      'Finished residential garage floor with a dark decorative coating',
    intro:
      'Good homeowner preparation makes installation day easier to organize. Your main jobs are to make the work area accessible, share what you know about the slab and arrange daily life around the temporary loss of the garage. The contractor should define the actual concrete preparation for the coating system. Use this checklist before the scheduled date so moving, storage and access details do not become last-minute decisions.',
    sections: [
      {
        id: 'confirm-boundaries',
        heading: 'Confirm exactly where the coating will go',
        paragraphs: [
          'Walk through the scope with the estimator. Identify the main slab, steps, raised edges, the threshold and any adjoining surface. Ask how the finish will end at each boundary and what will happen around fixed items. Keep a marked photograph if that makes the agreement clearer than a verbal description.',
          'Mention planned future work, such as new storage cabinets or a garage door replacement. Ask whether that work changes the sequence of the coating project. If another trade needs access, coordinate the schedule before booking so equipment and materials do not arrive when the new floor is still restricted.',
        ],
      },
      {
        id: 'empty-the-floor',
        heading: 'Clear the area and plan temporary storage',
        paragraphs: [
          'Sort garage contents into things you need during the work and things that can stay packed. Move vehicles, bins, loose shelving and other agreed items out of the work area. Put essentials somewhere accessible from the house or driveway. Allow enough room in the storage location to retrieve an item without unloading everything.',
          'Do not assume the crew will move a freezer, disconnect an appliance or dismantle a heavy workbench. Confirm responsibility for those tasks beforehand. Discuss fixed cabinets, wall-mounted storage and anything attached to the slab. Leave potentially hazardous disconnections or lifting work to the appropriate person instead of improvising on installation morning.',
        ],
      },
      {
        id: 'share-slab-history',
        heading: 'Share the history of the concrete',
        paragraphs: [
          'Tell the contractor about previous paint or sealers, recurring oil spots, repaired cracks and water entering during rain or snowmelt. If the slab is new, provide the information you have about its installation and any treatments applied. An old receipt or product container may help identify what is already on the surface.',
          "Sika's surface preparation guidance covers evaluating concrete, existing contaminants and moisture before resin flooring is installed. The homeowner's contribution is an accurate history and access for inspection. A clean-looking slab is useful to photograph, but it does not establish that the surface is suitable for a particular coating.",
        ],
      },
      {
        id: 'leave-preparation-to-scope',
        heading: 'Agree on cleaning before doing extra preparation',
        paragraphs: [
          'Ask what ordinary cleanup the contractor wants you to complete and what preparation is included in the job. Avoid adding a sealer, applying a patch or using a concrete treatment simply to improve its appearance before the crew arrives. The installer needs to know what is on the slab and choose preparation compatible with the proposed system.',
          'If you have already washed, degreased or repaired an area, say what you used and when. Keep the label or a photo of it. Ask before pressure washing shortly before the work or introducing any new chemical. This prevents a well-intended extra task from changing the assessment or planned installation sequence.',
        ],
      },
      {
        id: 'access-and-household',
        heading: 'Organize access for the crew and your household',
        paragraphs: [
          'Confirm arrival arrangements, the route for equipment and any electrical or water access the contractor requests. Discuss door operation, ventilation instructions and how the work area will be separated from household activity. Plan another entrance if the garage is your usual route indoors, and let everyone at home know when access will change.',
          'Keep children and pets away from the work area and follow the project-specific access instructions. Move deliveries, bin collection tasks and routine maintenance away from the scheduled work where practical. Provide a reliable contact number so the crew can resolve a site question without relying on someone being in the garage.',
        ],
      },
      {
        id: 'handover-plan',
        heading: 'Plan the move back in before the work starts',
        paragraphs: [
          'Ask for the anticipated downtime, then obtain the final return-to-use instructions at handover. Confirm walking, parking, heavy storage and cleaning separately. Arrange for help moving heavy contents back at the appropriate time, and ask how to protect the finished surface during that move.',
          'Keep the accepted scope, finish selection and care instructions in one place. Before installation day, send SMA Surface Solutions any changes to access or the condition of the floor. A brief update about a new leak, recent repair or item that cannot be moved is more useful before the crew and materials are scheduled around the original plan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I fill every crack myself before installation?',
        answer:
          'Ask first. The contractor should assess cracks and specify any repair work as part of the coating scope. Tell them about previous repairs and the materials used.',
      },
      {
        question: 'Do I need to remove wall-mounted shelves?',
        answer:
          'Confirm with the installer. The answer depends on access, the agreed coating boundaries and what the shelves or stored items obstruct.',
      },
      {
        question: 'Can I leave my freezer in the garage?',
        answer:
          'Discuss it before the scheduled date. Confirm whether it must move, who will handle it and how its contents and power needs will be managed.',
      },
    ],
    sources: [surfacePreparation],
    relatedServices: [
      'garage-epoxy-flooring',
      'polyaspartic-garage-flooring',
      'epoxy-flake-flooring',
    ],
  },
]
