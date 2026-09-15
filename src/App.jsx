import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './sections/HeroSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import ContentPages, { AreasList, ProjectCards } from './pages/ContentPages.jsx'
import { ArticleCards, FAQs } from './components/ContentBlocks.jsx'
import { getRoute } from './lib/routes.js'
import DecisionSupport from './components/DecisionSupport.jsx'

const homeFaqs = [
  {
    question: 'Which areas do you serve?',
    answer:
      'We serve Mississauga, Oakville, Toronto, Burlington and Milton. Include your project address or city when requesting an estimate so we can discuss access and scheduling.',
  },
  {
    question: 'What does a floor coating estimate depend on?',
    answer:
      'The area, existing coating, concrete condition, repairs, chosen system and site access all affect the scope. Send photographs and an approximate size to start the conversation. An assessment is needed before a firm specification and price.',
  },
  {
    question: 'Should I choose epoxy or polyaspartic?',
    answer:
      'The answer depends on your surface, exposure, desired finish and installation conditions. Some systems combine different coating layers. Our comparison guide explains what to ask when comparing a proposed system.',
  },
  {
    question: 'Can you coat damaged or previously painted concrete?',
    answer:
      'Tell us about cracks, peeling paint, damp patches or other issues before quoting. Existing coatings and damage may require preparation or repair. A new coating should not be treated as a fix for an unresolved structural or moisture problem.',
  },
]

export default function App({ path = '/' }) {
  const route = getRoute(path)
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar path={route.path} />
      <main id="main-content" tabIndex={-1}>
        {route.type === 'home' ? (
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <div className="page-width">
              <DecisionSupport />
            </div>
            <section className="section-space page-width" id="projects">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">See the transformation</p>
                  <h2>
                    Same space.
                    <br />
                    <span className="gold">A whole new surface.</span>
                  </h2>
                </div>
                <a className="text-link" href="/projects/">
                  Explore all projects →
                </a>
              </div>
              <ProjectCards limit={3} />
            </section>
            <section className="area-section section-space">
              <div className="page-width">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">Closer to home</p>
                    <h2>
                      Your neighbourhood.
                      <br />
                      Our service area.
                    </h2>
                  </div>
                  <p>
                    From garage floors to exterior steps, we work across
                    Mississauga, Oakville, Toronto, Burlington and Milton.
                  </p>
                </div>
                <AreasList />
              </div>
            </section>
            <section className="section-space page-width">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Before you choose a coating</p>
                  <h2>
                    Good questions.
                    <br />
                    <span className="gold">Clearer decisions.</span>
                  </h2>
                </div>
                <a className="text-link" href="/blog/">
                  Read all guides →
                </a>
              </div>
              <ArticleCards limit={3} />
            </section>
            <div className="page-width">
              <FAQs items={homeFaqs} />
              <a href="/epoxy-flooring-questions/" className="text-link">
                More questions about cost, coatings and choosing SMA →
              </a>
            </div>
            <ContactSection />
          </>
        ) : (
          <ContentPages route={route} />
        )}
      </main>
      <Footer />
    </>
  )
}
