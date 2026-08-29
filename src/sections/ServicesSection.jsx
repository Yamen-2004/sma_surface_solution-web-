import { useEffect, useRef, useState } from 'react'
import { Warehouse, Zap, Layers, Home, Footprints, Building2 } from 'lucide-react'

const SERVICES = [
  {
    title: 'Garage Epoxy Flooring',
    description:
      'Premium garage flooring solutions built for durability, protection, and modern aesthetics.',
    Icon: Warehouse,
    image: '/assets/images/garage-epoxy-flooring.png',
  },
  {
    title: 'Polyaspartic Garage Flooring',
    description:
      'Fast-curing, UV-stable polyaspartic coatings that get your garage back in service in as little as a day.',
    Icon: Zap,
    image:
      '/assets/images/polyaspartic-garage-flooring.png',
  },
  {
    title: 'Epoxy Flake Flooring',
    description:
      'Decorative flake epoxy systems that add texture, slip resistance, and a custom finish to any space.',
    Icon: Layers,
    image:
      '/assets/images/flake-epoxy-garages.png',
  },
  {
    title: 'Basement Epoxy Flooring',
    description: 'Moisture-resistant epoxy flooring ideal for basements, gyms, and living spaces.',
    Icon: Home,
    image:
      '/assets/images/basement-epoxy-flooring.png',
  },
  {
    title: 'Porch & Front Steps Coating',
    description:
      'Weather-resistant coatings for porches and front steps, combining curb appeal with long-lasting protection.',
    Icon: Footprints,
    image:
      '/assets/images/porch-front-steps-coating.jpg',
  },
  {
    title: 'Commercial Epoxy Flooring',
    description: 'Heavy-duty flooring systems designed for warehouses and commercial spaces.',
    Icon: Building2,
    image:
      '/assets/images/commercial-epoxy-flooring.jpg'
  },
]

export default function ServicesSection({ sectionRef }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SERVICES.length)
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [paused])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    const SWIPE_THRESHOLD = 50
    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      setActive((i) => (i - 1 + SERVICES.length) % SERVICES.length)
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      setActive((i) => (i + 1) % SERVICES.length)
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    setPaused(false)
  }

  return (
    <section
      ref={sectionRef}
      className="w-full bg-base px-5 md:px-10 lg:px-20 py-16 lg:py-[90px]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-0.5 bg-gold" />
          <span className="text-[11px] font-bold tracking-[2px] text-gold">WHAT WE OFFER</span>
          <div className="w-10 h-0.5 bg-gold" />
        </div>

        <h2 className="mt-5 text-4xl lg:text-[52px] font-extrabold text-white leading-[1.1]">
          Our Services
        </h2>

        <p className="mt-[18px] text-[15px] leading-[1.8] text-[#8E8E8E] max-w-2xl mx-auto">
          Professional epoxy flooring solutions crafted for durability and modern aesthetics.
        </p>

        <div
          className="mt-14 lg:mt-16 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {SERVICES.map((service) => (
              <div key={service.title} className="w-full flex-shrink-0 px-2 sm:px-8 lg:px-24">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {SERVICES.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.title}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? 'w-6 bg-gold' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 h-px bg-border-faint mx-10 lg:mx-20" />
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const { title, description, Icon, image } = service
  return (
    <div className="group rounded-[18px] border border-border-faint bg-card overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.22)] hover:border-gold hover:-translate-y-1.5 transition-all duration-250 max-w-md mx-auto">
      <div className="relative h-[180px] w-full">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.65))' }}
        />
        <div className="absolute top-4 left-4 bg-gold rounded-xl p-2.5">
          <Icon size={20} className="text-black" strokeWidth={2} />
        </div>
      </div>
      <div className="p-[18px] text-left">
        <p className="text-[17px] font-bold text-white">{title}</p>
        <p className="mt-3 text-[13px] leading-[1.7] text-muted line-clamp-3">{description}</p>
      </div>
    </div>
  )
}
