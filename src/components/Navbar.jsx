import { useEffect, useRef, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { site } from '../content/site.js'
const links = [
  ['Services', '/services/'],
  ['Our work', '/projects/'],
  ['Areas', '/service-areas/'],
  ['Guides', '/blog/'],
  ['About', '/about/'],
]
export default function Navbar({ path = '/' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggle = useRef(null)
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 30)
    scroll()
    window.addEventListener('scroll', scroll, { passive: true })
    const key = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    window.addEventListener('keydown', key)
    return () => {
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('keydown', key)
    }
  }, [])
  return (
    <header
      className={`site-header ${path !== '/' || scrolled || open ? 'is-solid' : ''}`}
    >
      <div className="header-inner">
        <a
          href="/"
          className="brand-link"
          aria-label="SMA Surface Solutions home"
        >
          <img
            src="/assets/optimized/logo2-320.webp"
            width="320"
            height="115"
            alt="SMA Surface Solutions"
          />
        </a>
        <nav aria-label="Primary" className="desktop-nav">
          {links.map(([label, href]) => (
            <a
              href={href}
              key={href}
              aria-current={path.startsWith(href) ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-gold header-quote" href={site.phoneHref}>
          <Phone size={18} aria-hidden="true" /> Call now
        </a>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile"
        className="mobile-nav"
        hidden={!open}
      >
        {[['Home', '/'], ...links, ['Contact', '/contact/']].map(
          ([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ),
        )}
        <a href={site.phoneHref}>
          <Phone size={18} aria-hidden="true" /> {site.phone}
        </a>
      </nav>
    </header>
  )
}
