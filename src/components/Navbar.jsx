import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', anchor: 'home' },
  { label: 'About', anchor: 'about' },
  { label: 'Services', anchor: 'services' },
  { label: 'Projects', anchor: 'projects' },
  { label: 'Contact', anchor: 'contact' },
]

export default function Navbar({ sectionRefs, onItemTap }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      let current = 'home'
      for (const item of NAV_ITEMS) {
        const el = sectionRefs[item.anchor]?.current
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= 150) {
            current = item.anchor
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionRefs])

  const handleTap = (anchor) => {
    onItemTap(anchor)
    setMobileMenuOpen(false)
  }

  const handleCall = () => {
    window.location.href = 'tel:+16477120706'
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex items-center justify-between px-5 md:px-8 lg:px-[120px] transition-all duration-300 ${
          isScrolled ? 'py-3 bg-base/95 shadow-[0_10px_20px_rgba(0,0,0,0.3)]' : 'py-5 bg-transparent'
        }`}
      >
        {/* Logo */}
        <button onClick={() => handleTap('home')} className="flex items-center">
          <img
            src="/assets/images/logo2.png"
            alt="SMA Surface Solutions"
            className="h-[50px] md:h-[60px] w-auto"
          />
        </button>

        {/* Desktop Nav Pill */}
        <div className="hidden lg:flex items-center h-10 rounded-full border border-border bg-[#1F1F1F] px-2">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.anchor}
              label={item.label}
              isActive={activeSection === item.anchor}
              onClick={() => handleTap(item.anchor)}
            />
          ))}
        </div>

        {/* Call Button (desktop) */}
        <button
          onClick={handleCall}
          className="hidden lg:flex items-center gap-2 bg-gold text-black font-extrabold text-xs tracking-wider px-5 py-3 rounded-[20px] hover:brightness-110 transition"
        >
          <Phone size={16} strokeWidth={2.5} />
          CALL NOW
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#0F0F0F] border-t border-b border-border">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.anchor}
              onClick={() => handleTap(item.anchor)}
              className={`w-full text-left px-5 py-4 border-b border-border-soft text-[15px] font-medium ${
                activeSection === item.anchor ? 'text-gold' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="p-5">
            <button
              onClick={handleCall}
              className="w-full flex items-center justify-center gap-2 bg-gold text-black font-extrabold text-[13px] tracking-wider py-3.5 rounded-sm"
            >
              <Phone size={16} strokeWidth={2.5} />
              CALL NOW
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function NavItem({ label, isActive, onClick }) {
  return (
    <button onClick={onClick} className="group flex flex-col items-center px-5">
      <span
        className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
          isActive ? 'text-gold' : 'text-[#B0B0B0] group-hover:text-gold'
        }`}
      >
        {label}
      </span>
      <span
        className={`mt-1 w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
          isActive ? 'bg-gold' : 'bg-transparent'
        }`}
      />
    </button>
  )
}
