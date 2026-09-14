export const questionGroups = [
  {
    title: 'Cost & choosing an installer',
    id: 'cost-and-installers',
    items: [
      {
        id: 'garage-floor-coating-cost-gta',
        question:
          'How much does epoxy flooring cost for a two-car garage in the GTA?',
        answer:
          'A useful price needs the measured floor area, concrete condition and proposed coating system. A two-car label alone does not describe removal, crack repairs, steps or finish choices. Send SMA your approximate dimensions and photos for an estimate, then compare written scopes as well as totals.',
        href: '/blog/garage-floor-coating-cost-gta/',
        link: 'Understand what changes the price',
      },
      {
        id: 'choosing-epoxy-flooring-contractor-gta',
        question: 'How do I choose an epoxy flooring contractor?',
        answer:
          'Compare examples of the contractor’s work, the preparation scope, named coating layers and written handover terms. Ask who will carry out the installation and how additional repairs are approved. SMA offers a five-year warranty; confirm the applicable terms alongside any project-specific documentation you need.',
        href: '/blog/choosing-epoxy-flooring-contractor-gta/',
        link: 'Use the installer comparison checklist',
      },
      {
        id: 'is-garage-floor-coating-worth-it',
        question:
          'Is professional garage floor coating worth it compared with DIY?',
        answer:
          'It depends on the result you want and the work your slab needs. Compare the complete DIY cost, preparation requirements, equipment, time and responsibility for repairs with an installer’s written scope. A kit price and a finished-floor quote describe different purchases; neither guarantees a result by itself.',
        href: '/blog/is-garage-floor-coating-worth-it/',
        link: 'Compare DIY and professional installation',
      },
      {
        id: 'warranty',
        question: 'What should a garage floor coating warranty cover?',
        answer:
          'SMA offers a five-year warranty. Ask for the coverage, exclusions, care requirements and claim process for your installation. Keep these terms with the agreed proposal so you can compare offers and know how to contact SMA if a concern arises.',
        href: '/blog/choosing-epoxy-flooring-contractor-gta/#warranty-and-handover',
        link: 'Know what to request in writing',
      },
    ],
  },
  {
    title: 'Choosing a coating & living with it',
    id: 'coatings-and-care',
    items: [
      {
        id: 'epoxy-vs-polyaspartic',
        question: 'Is polyaspartic better than epoxy for a garage floor?',
        answer:
          'Neither label is a complete specification. A floor can combine epoxy and polyaspartic layers with different roles. Compare the named products, slab suitability, exposure, finish and return-to-use instructions for your garage rather than assuming one material wins in every situation.',
        href: '/blog/epoxy-vs-polyaspartic/',
        link: 'Compare complete floor systems',
      },
      {
        id: 'are-epoxy-garage-floors-slippery',
        question: 'Are epoxy garage floors slippery when wet?',
        answer:
          'Wet-use performance depends on the exposed finish, texture, contamination and conditions. A flake pattern alone does not establish traction. Discuss where the garage gets wet, request a representative sample and ask about the proposed traction treatment and cleaning instructions.',
        href: '/blog/are-epoxy-garage-floors-slippery/',
        link: 'Plan texture and wet use',
      },
      {
        id: 'garage-floor-winter-care',
        question:
          'How do I care for a coated garage floor through an Ontario winter?',
        answer:
          'Follow the care instructions for the installed system, remove loose grit and deal with meltwater and spills promptly. Ask which cleaning products, tools and mats are compatible. A coating does not eliminate winter housekeeping or make every de-icer suitable for the finish.',
        href: '/blog/garage-floor-winter-care/',
        link: 'Read the winter care guide',
      },
      {
        id: 'choosing-garage-floor-flake-colours',
        question: 'How do I choose a garage floor flake colour?',
        answer:
          'Compare physical samples beside your cabinets and walls with the garage door both open and closed. Confirm the blend, base colour, coverage and exposed finish in the quote. Use photographs for inspiration, then approve a representative sample for your own lighting.',
        href: '/blog/choosing-garage-floor-flake-colours/',
        link: 'Choose your finish with confidence',
      },
    ],
  },
  {
    title: 'Preparation, repairs & timing',
    id: 'preparation-and-timing',
    items: [
      {
        id: 'garage-floor-coating-cure-time',
        question: 'When can I walk and park on a newly coated garage floor?',
        answer:
          'Use the installer’s written return-to-use schedule for the specific products and site conditions. Walking, parking, heavy storage and full cure are separate milestones. A claim about installation taking one day does not, by itself, mean the garage can accept a vehicle the next morning.',
        href: '/blog/garage-floor-coating-cure-time/',
        link: 'Plan your garage downtime',
      },
      {
        id: 'peeling-garage-floor-coating-repair',
        question: 'Can you coat over a peeling garage floor?',
        answer:
          'Do not assume a new layer can go directly over a failing finish. The existing coating and concrete need assessment so removal, preparation and any repairs can be specified. Share photos, previous product information and moisture history before choosing the replacement finish.',
        href: '/blog/peeling-garage-floor-coating-repair/',
        link: 'Prepare for a recoating assessment',
      },
      {
        id: 'basement-epoxy-flooring-moisture',
        question: 'Can epoxy flooring fix moisture in a basement?',
        answer:
          'A decorative coating should not be assumed to fix an unresolved leak or moisture problem. Share the water history and ask what slab assessment the proposed system requires. Clarify whether drainage, plumbing or other work must happen before the floor can be coated.',
        href: '/blog/basement-epoxy-flooring-moisture/',
        link: 'Check basement moisture first',
      },
      {
        id: 'preparing-garage-for-floor-coating',
        question: 'What should I do before the garage floor installer arrives?',
        answer:
          'Confirm what must be moved, how equipment and appliances will be handled, and the access route for the work. Share previous coatings, repairs and water issues. Ask before filling cracks or using new cleaning chemicals, and arrange parking and storage for the agreed downtime.',
        href: '/blog/preparing-garage-for-floor-coating/',
        link: 'Use the preparation checklist',
      },
      {
        id: 'porch-front-step-coating-planning',
        question: 'Can a garage coating also be used on outdoor steps?',
        answer:
          'Do not assume an indoor system is suitable outdoors. The proposed coating must suit the entrance’s exposure and concrete condition. Discuss sunlight, water collection, texture, edges and access, then agree which treads, risers and landing surfaces are included.',
        href: '/blog/porch-front-step-coating-planning/',
        link: 'Plan a porch or step coating',
      },
    ],
  },
]

export const quickAnswers = Object.fromEntries(
  questionGroups.flatMap((group) => group.items.map((item) => [item.id, item])),
)
