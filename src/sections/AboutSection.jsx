const FEATURES = [
  {
    icon: '/assets/icons/star.svg',
    title: 'High Quality Materials',
    description: 'We use top-tier epoxy products that provide exceptional durability.',
  },
  {
    icon: '/assets/icons/experinced_team.svg',
    title: 'Experienced Team',
    description: 'Our skilled professionals deliver expert installation.',
  },
  {
    icon: '/assets/icons/fast_turnaround.svg',
    title: 'Fast Turnaround',
    description: 'Efficient project completion without compromising quality.',
  },
  {
    icon: '/assets/icons/competitive_pricing.svg',
    title: 'Competitive Pricing',
    description: 'Premium quality solutions at fair and competitive prices.',
  },
]

export default function AboutSection({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="w-full bg-base px-5 md:px-10 lg:px-20 py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="lg:flex-[4] pt-0 lg:pt-5">
            <MainContent />
          </div>

          <div className="lg:flex-[5] flex flex-col lg:flex-row items-start gap-5 w-full">
            <div className="lg:flex-[5] w-full">
              <img
                src="/assets/images/about.png"
                alt="Epoxy flooring installation"
                className="w-full h-[220px] lg:h-[260px] object-cover rounded-2xl"
              />
            </div>
            <div className="lg:flex-[3] w-full">
              <WhoWeAreCard />
            </div>
          </div>
        </div>

        <div className="h-16" />

        {/* Features */}
        <Features />

        <div className="h-10" />
        <div className="h-px bg-border-faint" />
      </div>
    </section>
  )
}

function MainContent() {
  return (
    <div>
      <h2 className="text-4xl lg:text-[48px] font-extrabold leading-[1.1]">
        <span className="text-white">About </span>
        <span className="text-gold">SMA</span>
        <br />
        <span className="text-white">Surface Solutions</span>
      </h2>

      <p className="mt-5 text-lg font-medium text-white">
        Your trusted epoxy flooring experts in Ontario.
      </p>

      <p className="mt-5 text-sm leading-[1.8] text-muted">
        We are dedicated to providing high-quality, durable, and beautiful epoxy flooring
        solutions for homes, garages, basements, and commercial spaces.
      </p>
    </div>
  )
}

function WhoWeAreCard() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-7 h-0.5 bg-gold" />
        <span className="text-[10px] font-bold tracking-[1.5px] text-gold">OUR STORY</span>
      </div>

      <h3 className="mt-4 text-[28px] font-extrabold text-white">Who We Are</h3>

      <p className="mt-4 text-[13px] leading-[1.8] text-muted">
        At SMA Surface Solutions, we specialize in delivering premium epoxy flooring systems
        that are built to last.
      </p>

      <p className="mt-[18px] text-[13px] leading-[1.8] text-muted">
        From garages to commercial facilities, we transform ordinary concrete into stunning
        surfaces.
      </p>
    </div>
  )
}

function Features() {
  return (
    <div className="text-center">
      <p className="text-[10px] tracking-[2px] font-bold text-gold">WHY CHOOSE US</p>
      <div className="mt-2.5 w-[100px] h-px bg-gold mx-auto" />
      <h3 className="mt-3.5 text-[28px] font-extrabold text-white">Quality You Can Count On</h3>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-surface rounded-2xl p-6 flex flex-col items-center justify-center">
      <img
        src={icon}
        alt=""
        className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-contain"
      />
      <p className="mt-3 text-sm lg:text-[15px] font-bold text-white text-center">{title}</p>
      <p className="mt-2.5 text-[11px] lg:text-xs leading-[1.6] text-muted text-center">
        {description}
      </p>
    </div>
  )
}
