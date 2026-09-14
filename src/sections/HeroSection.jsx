import ResponsiveImage from '../components/ResponsiveImage.jsx'
import { Phone } from 'lucide-react'
import { site } from '../content/site.js'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <ResponsiveImage
        src="/assets/images/background.webp"
        alt=""
        width={1875}
        height={839}
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay (right -> left) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to left, transparent, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.94) 100%)',
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[120px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-12 lg:px-[120px] py-32">
        <div className="hero-copy w-full sm:max-w-[700px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tight">
            <span className="text-white">PREMIUM </span>
            <span className="text-gold">EPOXY</span>
            <br />
            <span className="text-white text-[2.1rem] sm:text-5xl lg:text-[62px]">
              FLOORING SOLUTIONS
            </span>
          </h1>

          <p className="mt-5 text-sm lg:text-sm text-muted-soft leading-relaxed max-w-md">
            Durable. Beautiful. Built to Last. Transform your garage, basement
            or commercial space with epoxy and polyaspartic flooring. Serving
            Mississauga, Oakville, Toronto, Burlington and Milton.
          </p>
          <p className="mt-4 text-sm text-gold font-semibold">
            Polyaspartic preferred · Efficient installation · 5-year warranty
          </p>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/contact/"
              className="bg-gold text-black font-extrabold text-[13px] tracking-wider px-8 py-[18px] rounded-sm hover:brightness-110 transition"
            >
              GET A FREE QUOTE
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-gold text-gold font-bold text-[13px] tracking-wider px-8 py-[18px] rounded-sm hover:bg-gold hover:text-black transition"
            >
              <Phone size={17} aria-hidden="true" /> CALL NOW
            </a>
            <a
              href="/projects/"
              className="border border-white/40 text-white font-bold text-[13px] tracking-wider px-8 py-[18px] rounded-sm hover:border-white transition"
            >
              VIEW OUR WORK
            </a>
          </div>

          {/* Stats Row - desktop only */}
          <div className="hidden lg:flex items-center mt-16">
            <StatItem
              number="Serving"
              label="The GTA"
              icon="/assets/icons/location.svg"
            />
            <Divider />
            <StatItem
              number="See our work"
              label="Before & After"
              icon="/assets/icons/complete.svg"
            />
            <Divider />
            <StatItem
              number="Free"
              label="Project Estimates"
              icon="/assets/icons/satisfaction.svg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ number, label, icon }) {
  return (
    <div className="flex items-center gap-3">
      <img src={icon} alt="" decoding="async" className="h-20 w-20" />
      <div className="flex flex-col items-start">
        <span className="text-[22px] font-extrabold text-gold">{number}</span>
        <span className="text-sm text-muted-soft tracking-wide">{label}</span>
      </div>
    </div>
  )
}

function Divider() {
  return <div className="h-10 w-0.5 mx-6 bg-[#616161]" />
}
