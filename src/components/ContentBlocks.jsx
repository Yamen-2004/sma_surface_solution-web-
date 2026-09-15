import { ArrowUpRight } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage.jsx'
import { services } from '../content/services.js'
import { articles } from '../content/articles.js'
export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        {items.map((item, i) => (
          <li key={item.label}>
            {item.href && i !== items.length - 1 ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
export function PageHeading({ label, title, intro, children }) {
  return (
    <div className="page-heading">
      {label && <p className="eyebrow">{label}</p>}
      <h1>{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
      {children}
    </div>
  )
}
export function Sections({ sections = [] }) {
  return (
    <div className="prose">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {section.bullets?.length > 0 && (
            <ul>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}
export function FAQs({
  items = [],
  title = 'Your questions, answered',
  id = 'questions',
}) {
  if (!items.length) return null
  return (
    <section className="faq-section" id={id}>
      <h2>{title}</h2>
      <div>
        {items.map((f) => (
          <details key={f.question}>
            <summary>
              {f.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
export function QuoteBand({
  title = 'Let’s plan your floor.',
  text = 'Tell us about the surface, your city and the finish you have in mind. We’ll help you work out the next step.',
}) {
  return (
    <section className="quote-band">
      <div>
        <p className="eyebrow">Your next project</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <a className="button button-gold" href="/contact/">
        Request a free estimate <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </section>
  )
}
export function ServiceCards({ slugs, limit }) {
  const list = (
    slugs
      ? slugs
          .map((slug) => services.find((s) => s.slug === slug))
          .filter(Boolean)
      : services
  ).slice(0, limit)
  return (
    <div className="service-grid">
      {list.map((s) => (
        <a className="service-tile" href={`/services/${s.slug}/`} key={s.slug}>
          <div className="tile-image">
            <ResponsiveImage
              src={s.image}
              alt={s.imageAlt}
              loading="lazy"
              decoding="async"
              width="680"
              height="460"
            />
            <span className="tile-arrow" aria-hidden="true">
              <ArrowUpRight size={22} />
            </span>
          </div>
          <div className="tile-content">
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <span className="text-link">Explore this service →</span>
          </div>
        </a>
      ))}
    </div>
  )
}
export function ArticleCards({ slugs, limit }) {
  const list = (
    slugs
      ? slugs
          .map((slug) => articles.find((a) => a.slug === slug))
          .filter(Boolean)
      : articles
  ).slice(0, limit)
  return (
    <div className="article-grid">
      {list.map((a) => (
        <article className="article-card" key={a.slug}>
          <a href={`/blog/${a.slug}/`} className="article-image">
            <ResponsiveImage
              src={a.image}
              alt={a.imageAlt}
              width="680"
              height="460"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="article-category">{a.category}</p>
          <h3>
            <a href={`/blog/${a.slug}/`}>{a.title}</a>
          </h3>
          <p>{a.description}</p>
          <a className="text-link" href={`/blog/${a.slug}/`}>
            Read the guide <span aria-hidden="true">→</span>
          </a>
        </article>
      ))}
    </div>
  )
}
