import { useEffect, useState } from 'react'

export default function HeroSection({ sectionRef, onViewWorkPressed, onGetQuotePressed }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/images/background.png"
        alt=""
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
        <div
          className={`w-full sm:max-w-[700px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tight">
            <span className="text-white">PREMIUM </span>
            <span className="text-gold">EPOXY</span>
            <br />
            <span className="text-white text-[2.1rem] sm:text-5xl lg:text-[62px]">
              FLOORING SOLUTIONS
            </span>
          </h1>

          <p className="mt-5 text-sm lg:text-sm text-muted-soft leading-relaxed max-w-md">
            Durable. Beautiful. Built to Last. Transform your garage, basement or commercial
            space with high-quality epoxy flooring in Ontario.
          </p>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={onGetQuotePressed}
              className="bg-gold text-black font-extrabold text-[13px] tracking-wider px-8 py-[18px] rounded-sm hover:brightness-110 transition"
            >
              GET A FREE QUOTE
            </button>
            <button
              onClick={onViewWorkPressed}
              className="border border-white/40 text-white font-bold text-[13px] tracking-wider px-8 py-[18px] rounded-sm hover:border-white transition"
            >
              VIEW OUR WORK
            </button>
          </div>

          {/* Stats Row - desktop only */}
          <div className="hidden lg:flex items-center mt-16">
            <StatItem
              number="Serving"
              label="Ontario"
              icon="/assets/icons/location.svg"
            />
            <Divider />
            <StatItem
              number="+50"
              label="Projects Completed"
              icon="/assets/icons/complete.svg"
            />
            <Divider />
            <StatItem
              number="100%"
              label="Satisfaction"
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
      <img src={icon} alt="" className="h-20 w-20" />
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
