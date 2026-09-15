import { site } from '../content/site.js'
import { services } from '../content/services.js'
import { areas } from '../content/areas.js'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand">
          <a href="/">
            <img
              src="/assets/optimized/logo2-320.webp"
              alt="SMA Surface Solutions home"
              width="160"
              height="57"
              loading="lazy"
            />
          </a>
          <p>
            Concrete surfaces.
            <br />
            <strong>A better finish.</strong>
          </p>
          <p className="muted">
            Epoxy and polyaspartic coatings for homes and commercial spaces
            across the GTA.
          </p>
          <div className="social-links">
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer">
              Facebook ↗
            </a>
          </div>
        </div>
        <nav aria-label="Flooring services">
          <h2>Services</h2>
          {services.map((s) => (
            <a key={s.slug} href={`/services/${s.slug}/`}>
              {s.shortTitle || s.title}
            </a>
          ))}
        </nav>
        <nav aria-label="Service areas">
          <h2>Where we work</h2>
          {areas.map((a) => (
            <a key={a.slug} href={`/service-areas/${a.slug}/`}>
              {a.name}
            </a>
          ))}
          <a href={site.maps} target="_blank" rel="noreferrer">
            Find us on Google ↗
          </a>
        </nav>
        <div>
          <h2>Let’s talk floors</h2>
          <a className="footer-phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer">
            Chat on WhatsApp ↗
          </a>
          <a href="/contact/">Request your estimate →</a>
          <nav aria-label="Resources" className="footer-resources">
            <a href="/blog/">Flooring guides</a>
            <a href="/epoxy-flooring-questions/">
              Flooring questions & answers
            </a>
            <a href="/projects/">Project gallery</a>
            <a href="/about/">About SMA</a>
          </nav>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© {new Date().getFullYear()} SMA Surface Solutions</span>
        <div>
          <a href="/privacy/">Privacy</a>
          <a href="/sitemap.xml">Sitemap</a>
          <a href="/feed.xml">RSS</a>
        </div>
      </div>
    </footer>
  )
}
