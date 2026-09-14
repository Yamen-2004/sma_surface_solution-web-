import { site } from '../content/site.js'

export default function DecisionSupport() {
  return (
    <section
      className="decision-support section-space"
      aria-labelledby="choose-sma"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">The SMA approach</p>
          <h2 id="choose-sma">
            Your floor.
            <br />
            <span className="gold">Our commitment.</span>
          </h2>
        </div>
        <p>
          We prefer polyaspartic systems, value your time and back our work with
          a five-year warranty.
        </p>
      </div>
      <div className="decision-links">
        <a href="/services/polyaspartic-garage-flooring/">
          <span className="eyebrow">01 · Our preferred finish</span>
          <h3>Polyaspartic, chosen for your space</h3>
          <p>
            Our preferred option for suitable projects, with the system matched
            to your surface and how you use it.
          </p>
          <span className="text-link">Explore polyaspartic flooring →</span>
        </a>
        <a href="/blog/garage-floor-coating-cure-time/">
          <span className="eyebrow">02 · Respect for your time</span>
          <h3>Efficient work. Less disruption.</h3>
          <p>
            We value speed because your home needs to keep working. Discuss
            access and return-to-use timing as part of your project.
          </p>
          <span className="text-link">Plan your garage downtime →</span>
        </a>
        <a href="/contact/">
          <span className="eyebrow">03 · Trust in the work</span>
          <h3>A five-year warranty</h3>
          <p>
            We offer a five-year warranty. Confirm the coverage, care
            requirements and terms for your installation with your quote.
          </p>
          <span className="text-link">Discuss your project →</span>
        </a>
      </div>
      <div className="inline-links">
        <a href="/projects/">See SMA’s before & after projects →</a>
        <a href={site.maps} target="_blank" rel="noreferrer">
          Read customer feedback on Google ↗
        </a>
      </div>
    </section>
  )
}
