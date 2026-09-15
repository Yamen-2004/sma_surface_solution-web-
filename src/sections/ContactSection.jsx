import { useRef, useState } from 'react'
import { Phone, Mail, ArrowUpRight, Copy, Check } from 'lucide-react'
import { site } from '../content/site.js'
import { services } from '../content/services.js'
import {
  enquiryText,
  makeEmailLink,
  makeWhatsAppLink,
  validateEnquiry,
} from '../lib/enquiry.js'

export default function ContactSection({ standalone = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [feedback, setFeedback] = useState('')
  const [copied, setCopied] = useState(false)
  const formRef = useRef(null)
  const change = (e) => {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }))
    setFeedback('')
    setCopied(false)
  }
  const validate = () => {
    const next = validateEnquiry(form)
    setErrors(next)
    if (Object.keys(next).length) {
      formRef.current?.elements.namedItem(Object.keys(next)[0])?.focus()
      return false
    }
    return true
  }
  const email = (e) => {
    e.preventDefault()
    if (!validate()) return
    window.location.href = makeEmailLink(form)
    setFeedback(
      'Your email draft is ready to open. Send it from your email app to finish. Your details stay here if the app does not open.',
    )
  }
  const copy = async () => {
    if (!validate()) return
    try {
      await navigator.clipboard.writeText(enquiryText(form))
      setCopied(true)
      setFeedback(
        `Copied. Paste your enquiry into an email to ${site.email} or into WhatsApp.`,
      )
    } catch {
      setFeedback(
        'Clipboard access is unavailable. Select and copy your details below, or use the email or WhatsApp option.',
      )
    }
  }
  return (
    <section
      id="contact"
      className={`contact-section ${standalone ? '' : 'section-space page-width'}`}
    >
      {!standalone && (
        <div className="section-heading">
          <div>
            <p className="eyebrow">Start with a conversation</p>
            <h2>
              Your floor.
              <br />
              <span className="gold">Our next conversation.</span>
            </h2>
          </div>
          <p>
            A few details help us understand your space. Choose the way you
            would like to get in touch.
          </p>
        </div>
      )}
      <div className="contact-layout">
        <div className="contact-details">
          <h2>
            Let’s talk about
            <br />
            your project.
          </h2>
          <p>
            Tell us where you are, what the surface looks like today, and how
            you want to use it. If you have photos, you can attach them in your
            email or WhatsApp conversation.
          </p>
          <a className="contact-method" href={site.phoneHref}>
            <Phone aria-hidden="true" />
            <span>
              <small>Call SMA</small>
              <strong>{site.phone}</strong>
            </span>
          </a>
          <a className="contact-method" href={`mailto:${site.email}`}>
            <Mail aria-hidden="true" />
            <span>
              <small>Email SMA</small>
              <strong>{site.email}</strong>
            </span>
          </a>
          <a
            className="button button-outline"
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className="contact-area">
            <h3>Serving the GTA</h3>
            <p>{site.cities.join(' · ')}</p>
            <a
              className="text-link"
              href={site.maps}
              target="_blank"
              rel="noreferrer"
            >
              View our Google Business Profile ↗
            </a>
          </div>
        </div>
        <noscript>
          <style>{`.quote-form { display: none !important; }`}</style>
          <p className="form-note">
            Call, email or open WhatsApp using the contact links to discuss your
            project. The enquiry composer requires JavaScript.
          </p>
        </noscript>
        <form
          method="post"
          action={`mailto:${site.email}`}
          encType="text/plain"
          className="quote-form"
          ref={formRef}
          onSubmit={email}
          noValidate
        >
          <h2>Prepare your enquiry</h2>
          <p className="form-note">
            Complete the details, then send through your email app or WhatsApp.
            Fields marked * are required.
          </p>
          <div className="form-grid">
            {[
              ['name', 'Full name', 'text', 'name', true],
              ['email', 'Email address', 'email', 'email', true],
              ['phone', 'Phone number', 'tel', 'tel', false],
            ].map(([name, label, type, autoComplete, required]) => (
              <div className="form-field" key={name}>
                <label htmlFor={`quote-${name}`}>
                  {label}
                  {required ? ' *' : ' (optional)'}
                </label>
                <input
                  id={`quote-${name}`}
                  name={name}
                  type={type}
                  autoComplete={autoComplete}
                  required={required}
                  maxLength={150}
                  value={form[name]}
                  onChange={change}
                  aria-invalid={!!errors[name]}
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                />
                {errors[name] && (
                  <p id={`error-${name}`} className="field-error">
                    {errors[name]}
                  </p>
                )}
              </div>
            ))}
            <div className="form-field">
              <label htmlFor="quote-city">Project city (optional)</label>
              <select
                id="quote-city"
                name="city"
                value={form.city}
                onChange={change}
              >
                <option value="">Select your city</option>
                {site.cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
                <option>Another location — please ask</option>
              </select>
            </div>
            <div className="form-field full">
              <label htmlFor="quote-service">Service (optional)</label>
              <select
                id="quote-service"
                name="service"
                value={form.service}
                onChange={change}
              >
                <option value="">Help me choose</option>
                {services.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="form-field full">
              <label htmlFor="quote-message">About your project *</label>
              <textarea
                id="quote-message"
                name="message"
                rows={5}
                required
                maxLength={3000}
                value={form.message}
                onChange={change}
                placeholder="For example: a two-car garage in Oakville, bare concrete with a few cracks. We’d like a grey flake finish."
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? 'error-message' : 'message-hint'
                }
              />
              <p id="message-hint" className="form-note">
                Approximate size, current condition and your preferred finish
                are helpful.
              </p>
              {errors.message && (
                <p id="error-message" className="field-error">
                  {errors.message}
                </p>
              )}
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="button button-gold">
              Open email draft <ArrowUpRight size={17} aria-hidden="true" />
            </button>
            <a
              className="button button-outline"
              href={makeWhatsAppLink(form)}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (!validate()) e.preventDefault()
                else
                  setFeedback(
                    'Finish sending your enquiry in WhatsApp. Your details remain here.',
                  )
              }}
            >
              Open in WhatsApp
            </a>
            <button type="button" className="copy-button" onClick={copy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}{' '}
              {copied ? 'Copied' : 'Copy details'}
            </button>
          </div>
          <p role="status" aria-live="polite" className="form-feedback">
            {feedback}
          </p>
          <p className="form-note">
            Your enquiry is shared when you send it through your chosen app.{' '}
            <a href="/privacy/">How your details are used</a>.
          </p>
        </form>
      </div>
    </section>
  )
}
