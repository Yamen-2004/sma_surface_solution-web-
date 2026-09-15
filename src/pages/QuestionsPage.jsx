import { questionGroups } from '../content/questions.js'
import {
  Breadcrumbs,
  PageHeading,
  QuoteBand,
} from '../components/ContentBlocks.jsx'
import DecisionSupport from '../components/DecisionSupport.jsx'
import { site } from '../content/site.js'

export default function QuestionsPage() {
  return (
    <div className="page-width inner-page">
      <Breadcrumbs items={[{ label: 'Epoxy flooring questions' }]} />
      <PageHeading
        label="Answers before you book"
        title="Epoxy flooring questions, answered."
        intro="Cost, preparation, coating choices and everyday care for garage, basement and exterior projects across Mississauga, Oakville, Toronto, Burlington and Milton."
      />
      <nav
        className="inline-links question-topics"
        aria-label="Question topics"
      >
        {questionGroups.map((group) => (
          <a href={`#${group.id}`} key={group.id}>
            {group.title} ↓
          </a>
        ))}
      </nav>
      {questionGroups.map((group) => (
        <section className="question-group" id={group.id} key={group.id}>
          <h2>{group.title}</h2>
          <div className="question-grid">
            {group.items.map((item) => (
              <article id={item.id} key={item.id}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
                <a href={item.href} className="text-link">
                  {item.link} →
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="compact-section">
        <h2>Does SMA serve my area?</h2>
        <p className="muted">
          SMA serves {site.cities.join(', ')}. Tell us your project location and
          surface so we can discuss the work and scheduling.
        </p>
        <a href="/service-areas/" className="text-link">
          Explore your service area →
        </a>
      </section>
      <DecisionSupport />
      <QuoteBand
        title="Have a question about your own floor?"
        text="Bring your photos and priorities. Let’s discuss the coating options for your space."
      />
    </div>
  )
}
