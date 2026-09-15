import { ServiceCards } from '../components/ContentBlocks.jsx'
export default function ServicesSection() {
  return (
    <section className="section-space page-width" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Built around your surface</p>
          <h2>
            The right finish.
            <br />
            <span className="gold">For the way you use it.</span>
          </h2>
        </div>
        <p>
          From a garage refresh to a busy commercial floor, explore the options
          and what to consider before choosing your coating.
        </p>
      </div>
      <ServiceCards />
    </section>
  )
}
