import { services } from '../content/services.js'
import { areas } from '../content/areas.js'
import { articles } from '../content/articles.js'
import { projects } from '../content/projects.js'
import { site } from '../content/site.js'
import ResponsiveImage from '../components/ResponsiveImage.jsx'
import {
  ArticleCards,
  Breadcrumbs,
  FAQs,
  PageHeading,
  QuoteBand,
  Sections,
  ServiceCards,
} from '../components/ContentBlocks.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import QuestionsPage from './QuestionsPage.jsx'
import DecisionSupport from '../components/DecisionSupport.jsx'
import { quickAnswers } from '../content/questions.js'

const dateFormat = (date) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

function Contents({ sections, faqs }) {
  return (
    <aside className="article-sidebar">
      <nav aria-label="On this page">
        <p>In this guide</p>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.heading}
          </a>
        ))}
        {!!faqs?.length && <a href="#questions">Questions & answers</a>}
      </nav>
      <div className="sidebar-quote">
        <h2>Planning a project?</h2>
        <p>Talk through the surface, finish and next steps with SMA.</p>
        <a className="text-link" href="/contact/">
          Request an estimate →
        </a>
        <a className="sidebar-phone" href={site.phoneHref}>
          {site.phone}
        </a>
      </div>
    </aside>
  )
}

export function AreasList() {
  return (
    <div className="area-list">
      {areas.map((a, i) => (
        <a href={`/service-areas/${a.slug}/`} key={a.slug}>
          <span className="area-number" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3>{a.name}</h3>
            <p>{a.description}</p>
          </div>
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}

export function ProjectCards({ limit }) {
  return (
    <div className="project-grid">
      {projects.slice(0, limit).map((p) => (
        <article key={p.slug}>
          <a href={`/projects/${p.slug}/`}>
            <div className="project-cover">
              <ResponsiveImage src={p.after} alt={p.afterAlt} />
              <span>View transformation ↗</span>
            </div>
            <h3>{p.title}</h3>
          </a>
          <p>{p.description}</p>
        </article>
      ))}
    </div>
  )
}

export default function ContentPages({ route }) {
  const d = route.data
  if (route.type === 'questions') return <QuestionsPage />
  if (route.type === 'service')
    return (
      <div className="page-width inner-page">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services/' },
            { label: d.shortTitle || d.title },
          ]}
        />
        <div className="detail-hero">
          <PageHeading
            label="Flooring services"
            title={d.title}
            intro={d.intro}
          >
            <a className="button button-gold" href="/contact/">
              Discuss your project ↗
            </a>
          </PageHeading>
          <ResponsiveImage
            src={d.image}
            alt={d.imageAlt}
            className="detail-photo"
            loading="eager"
          />
        </div>
        <div className="reading-layout">
          <div>
            <Sections sections={d.sections} />
            <FAQs items={d.faqs} />
          </div>
          <Contents sections={d.sections} faqs={d.faqs} />
        </div>
        <section className="section-space">
          <div className="section-heading">
            <h2>Plan with confidence.</h2>
            <a href="/blog/" className="text-link">
              All flooring guides →
            </a>
          </div>
          <ArticleCards slugs={d.relatedArticles} limit={3} />
        </section>
        <section className="compact-section">
          <h2>Available across the GTA</h2>
          <div className="inline-links">
            {areas.map((a) => (
              <a key={a.slug} href={`/service-areas/${a.slug}/`}>
                {a.name} ↗
              </a>
            ))}
          </div>
        </section>
        <DecisionSupport />
        <QuoteBand />
      </div>
    )
  if (route.type === 'area')
    return (
      <div className="page-width inner-page">
        <Breadcrumbs
          items={[
            { label: 'Service areas', href: '/service-areas/' },
            { label: d.name },
          ]}
        />
        <PageHeading
          label={`${d.name}, Ontario`}
          title={d.title}
          intro={d.intro}
        >
          <a href="/contact/" className="button button-gold">
            Request an estimate in {d.name} ↗
          </a>
        </PageHeading>
        <div className="reading-layout">
          <div>
            <Sections sections={d.sections} />
            <FAQs items={d.faqs} />
          </div>
          <Contents sections={d.sections} faqs={d.faqs} />
        </div>
        <section className="section-space">
          <h2 className="block-heading">Explore coatings for your space.</h2>
          <ServiceCards slugs={d.serviceSlugs} limit={3} />
        </section>
        <section className="compact-section">
          <h2>See the finish before you decide.</h2>
          <p className="muted">
            Explore our project gallery for examples of different surfaces and
            finishes.
          </p>
          <a href="/projects/" className="text-link">
            Browse before & after projects →
          </a>
        </section>
        <section className="compact-section">
          <h2>Cost, timing and choosing your installer</h2>
          <p className="muted">
            Explore practical answers before booking a floor coating project in{' '}
            {d.name}.
          </p>
          <div className="inline-links">
            <a href="/blog/garage-floor-coating-cost-gta/">
              What affects your garage floor quote? →
            </a>
            <a href="/blog/choosing-epoxy-flooring-contractor-gta/">
              How to compare installers →
            </a>
            <a href="/epoxy-flooring-questions/">All flooring questions →</a>
          </div>
        </section>
        <DecisionSupport />
        <QuoteBand title={`A better finish for your ${d.name} space.`} />
      </div>
    )
  if (route.type === 'article') {
    const wordCount = [
      d.intro,
      ...d.sections.flatMap((s) => [
        s.heading,
        ...s.paragraphs,
        ...(s.bullets || []),
      ]),
    ]
      .join(' ')
      .split(/\s+/).length
    return (
      <article className="page-width inner-page article-page">
        <Breadcrumbs
          items={[{ label: 'Guides', href: '/blog/' }, { label: d.title }]}
        />
        <PageHeading label={d.category} title={d.title} intro={d.intro}>
          <div className="article-byline">
            <a href="/about/">SMA Surface Solutions</a>
            <span>·</span>
            <time dateTime={d.date}>{dateFormat(d.date)}</time>
            <span>·</span>
            <span>{Math.max(3, Math.ceil(wordCount / 200))} min read</span>
          </div>
        </PageHeading>
        {quickAnswers[d.slug] && (
          <section
            className="quick-answer"
            aria-labelledby="quick-answer-title"
          >
            <p className="eyebrow">The answer at a glance</p>
            <h2 id="quick-answer-title">{quickAnswers[d.slug].question}</h2>
            <p>{quickAnswers[d.slug].answer}</p>
          </section>
        )}
        <ResponsiveImage
          className="article-hero-image"
          src={d.image}
          alt={d.imageAlt}
          loading="eager"
          sizes="(max-width: 1200px) 100vw, 1152px"
        />
        <div className="reading-layout">
          <div>
            <Sections sections={d.sections} />
            <FAQs items={d.faqs} />
            <section className="article-sources" id="sources">
              <h2>Further reading & technical references</h2>
              <p>
                These manufacturer references explain general principles and
                product-specific requirements. They do not imply that SMA uses
                or represents these products. Confirm the specification for your
                own project.
              </p>
              <ul>
                {d.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noreferrer">
                      {s.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <Contents sections={d.sections} faqs={d.faqs} />
        </div>
        <section className="section-space">
          <h2 className="block-heading">Put the advice into practice.</h2>
          <ServiceCards slugs={d.relatedServices} limit={3} />
        </section>
        <DecisionSupport />
        <QuoteBand />
        <section className="section-space">
          <h2 className="block-heading">Keep exploring.</h2>
          <ArticleCards
            slugs={articles.filter((a) => a.slug !== d.slug).map((a) => a.slug)}
            limit={3}
          />
        </section>
      </article>
    )
  }
  if (route.type === 'project')
    return (
      <div className="page-width inner-page">
        <Breadcrumbs
          items={[
            { label: 'Our work', href: '/projects/' },
            { label: d.title },
          ]}
        />
        <PageHeading
          label="From the project gallery"
          title={d.title}
          intro={d.description}
        />
        <div className="before-after">
          <figure>
            <ResponsiveImage src={d.before} alt={d.beforeAlt} loading="eager" />
            <figcaption>
              Before <span>{d.beforeAlt}</span>
            </figcaption>
          </figure>
          <figure>
            <ResponsiveImage src={d.after} alt={d.afterAlt} loading="eager" />
            <figcaption>
              After <span>{d.afterAlt}</span>
            </figcaption>
          </figure>
        </div>
        <div className="prose project-story">
          <h2>A closer look at the transformation</h2>
          {d.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            <a href={`/services/${d.serviceSlug}/`}>
              Explore the related flooring service →
            </a>
          </p>
        </div>
        <QuoteBand title="Have a similar surface in mind?" />
        <section className="section-space">
          <h2 className="block-heading">More transformations.</h2>
          <div className="inline-links">
            {projects
              .filter((p) => p.slug !== d.slug)
              .map((p) => (
                <a key={p.slug} href={`/projects/${p.slug}/`}>
                  {p.title} →
                </a>
              ))}
          </div>
        </section>
      </div>
    )
  if (route.type === 'contact')
    return (
      <div className="page-width inner-page">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
        <PageHeading
          label="Your project starts here"
          title="A better floor starts with a conversation."
          intro="Planning a garage, basement, porch or commercial floor? Let’s talk through your space and the finish you have in mind."
        />
        <ContactSection standalone />
      </div>
    )
  if (route.type === 'about')
    return (
      <div className="page-width inner-page">
        <Breadcrumbs items={[{ label: 'About SMA' }]} />
        <div className="detail-hero">
          <PageHeading
            label="SMA Surface Solutions"
            title="Good spaces start from the ground up."
            intro="We provide epoxy and polyaspartic floor coating services for homes and commercial spaces across Mississauga, Oakville, Toronto, Burlington and Milton."
          />
          <ResponsiveImage
            className="detail-photo"
            src="/assets/images/about.png"
            alt="Front porch steps finished with grey speckled coating"
            loading="eager"
          />
        </div>
        <div className="prose">
          <section>
            <h2>A coating is more than its colour.</h2>
            <p>
              The right finish starts with the concrete underneath and the way a
              space will be used. Garage floors, basement slabs and exterior
              steps face different conditions. Our services give you a place to
              compare those options before discussing your project.
            </p>
            <p>
              Explore our before-and-after photographs to see examples of
              finished surfaces, and use our guides to prepare questions about
              surface preparation, coating systems and care.
            </p>
          </section>
          <section>
            <h2>Start with your surface.</h2>
            <p>
              A useful enquiry includes your city, a few photographs, the
              approximate area, existing damage or coatings, and your preferred
              finish. We can then discuss the project and the next steps for an
              estimate.
            </p>
            <p>
              <a href="/projects/">Explore our work →</a>
            </p>
          </section>
        </div>
        <QuoteBand />
      </div>
    )
  if (route.type === 'privacy')
    return (
      <div className="page-width inner-page">
        <Breadcrumbs items={[{ label: 'Privacy' }]} />
        <PageHeading
          title="Your enquiry. Your information."
          intro="How the contact options on this website work."
        />
        <div className="prose">
          <section>
            <h2>Information you choose to share</h2>
            <p>
              The enquiry form asks for your name, email, optional phone number,
              city and service, and a description of your project. The form
              prepares a message in your browser. It does not automatically send
              or store that enquiry on a website server.
            </p>
            <p>
              When you open an email draft or WhatsApp conversation, the details
              you entered are passed to the app you choose. You must send the
              message there to complete your enquiry. Copying the details places
              them on your device’s clipboard.
            </p>
          </section>
          <section>
            <h2>Contacting SMA</h2>
            <p>
              Details you send to SMA are used to respond to your enquiry and
              discuss your flooring project. Avoid including sensitive
              information that is not necessary for an estimate.
            </p>
            <p>
              To ask about information you have shared, contact{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </section>
          <section>
            <h2>External services and website access</h2>
            <p>
              Links to Google Maps, Instagram, Facebook and WhatsApp take you to
              services with their own privacy practices. Your email provider
              also processes messages you send. Like other websites, the hosting
              service may process basic request information such as an IP
              address to deliver and protect the site.
            </p>
            <p>
              Fonts and site images are served with the website. There is no
              marketing subscription form.
            </p>
          </section>
          <section>
            <h2>Optional advertising cookies</h2>
            <p>
              If you accept advertising cookies, we load the Meta Pixel to
              measure page visits and clicks to call, email or open WhatsApp.
              Meta receives event information, the page URL, browser and device
              information, IP address and cookie identifiers. Meta may connect
              this information with your Facebook or Instagram activity to
              measure and personalize advertising.
            </p>
            <p>
              Our tracking code does not send your enquiry fields, name, email,
              phone number or project message as event parameters. A contact
              click does not confirm that a message was sent or a job booked. We
              do not load the pixel before you accept advertising cookies.
            </p>
            <p>
              You can reject advertising cookies and still use all contact
              options. Use Cookie settings in the footer to change your choice;
              withdrawing consent stops further events from our integration.
              Your choice is saved in this browser. You can also clear cookies
              in your browser settings. For Meta’s handling of information, see
              the{' '}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noreferrer"
              >
                Meta Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    )
  if (route.type === 'notfound')
    return (
      <div className="page-width inner-page not-found">
        <p className="eyebrow">404 · Page not found</p>
        <h1>
          This page has moved
          <br />
          out of the picture.
        </h1>
        <p>Find the finish, project or advice you were looking for.</p>
        <div className="inline-links">
          <a href="/">Back to home →</a>
          <a href="/services/">Explore services →</a>
          <a href="/blog/">Read our guides →</a>
        </div>
      </div>
    )
  const config = {
    services: [
      'Services',
      'Made for your everyday. Built for your surface.',
      'Explore the coatings, finishes and practical considerations for the space you want to transform.',
    ],
    areas: [
      'Service areas',
      'Local projects. A lasting impression.',
      'Floor coating services across five GTA communities. Find advice for planning your project, then talk to us about your address and surface.',
    ],
    blog: [
      'The flooring journal',
      'A little knowledge. A better floor.',
      'Straightforward guides to choosing a coating, planning your project and looking after the finished surface.',
    ],
    projects: [
      'The project gallery',
      'The difference is in the finish.',
      'Explore seven before-and-after transformations: garage floors, entry steps, a balcony and a walkway.',
    ],
  }[route.type]
  return (
    <div className="page-width inner-page">
      <Breadcrumbs items={[{ label: config[0] }]} />
      <PageHeading label={config[0]} title={config[1]} intro={config[2]} />
      {route.type === 'blog' && (
        <div className="guide-questions-link">
          <a href="/epoxy-flooring-questions/" className="text-link">
            Looking for a quick answer? Browse flooring questions →
          </a>
        </div>
      )}
      {route.type === 'services' ? (
        <ServiceCards />
      ) : route.type === 'areas' ? (
        <AreasList />
      ) : route.type === 'blog' ? (
        <ArticleCards />
      ) : (
        <ProjectCards />
      )}
      <QuoteBand />
    </div>
  )
}
