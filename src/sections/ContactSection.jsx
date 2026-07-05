import { useState } from 'react'
import { Phone, Mail, MapPin, User, MessageSquare, Camera, Facebook } from 'lucide-react'

export default function ContactSection({ sectionRef }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name'
    if (!form.email.trim()) errs.email = 'Please enter your email'
    if (!form.message.trim()) errs.message = 'Please enter a message'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)

    const body = `Name : ${form.name}\nPhone Number : ${
      form.phone.trim() ? form.phone : 'Not provided'
    } \n \n \nMessage: ${form.message}`
    const subject = `New Inquiry from ${form.name} - SMA Surface Solutions`

    const mailtoUrl = `mailto:Smasolutions@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl

    setSending(false)
    setFeedback({ type: 'success', text: 'Opening your email app...' })
    setForm({ name: '', email: '', phone: '', message: '' })

    setTimeout(() => setFeedback(null), 4000)
  }

  return (
    <section
      ref={sectionRef}
      className="w-full bg-base px-5 md:px-12 lg:px-[120px] py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-[30px] h-0.5 bg-gold" />
            <span className="text-xs font-semibold tracking-[3px] text-gold">GET IN TOUCH</span>
            <div className="w-[30px] h-0.5 bg-gold" />
          </div>
          <h2 className="mt-4 text-3xl lg:text-[42px] font-extrabold text-white leading-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-soft">
            Get a free estimate today — we'll respond within 24 hours
          </p>
        </div>

        <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row items-start gap-10 lg:gap-[60px]">
          <div className="w-full lg:flex-[4]">
            <ContactInfo />
          </div>
          <div className="w-full lg:flex-[6]">
            <ContactForm
              form={form}
              errors={errors}
              sending={sending}
              feedback={feedback}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  return (
    <div>
      <h3 className="text-[26px] font-extrabold text-white leading-[1.3]">
        Let's Talk About
        <br />
        Your Project
      </h3>
      <p className="mt-4 text-sm leading-[1.7] text-muted-soft">
        Ready to transform your space? Contact us for a free consultation and estimate.
      </p>

      <div className="mt-9 space-y-5">
        <ContactItem
          icon={<Phone size={18} className="text-gold" />}
          title="Phone"
          value="+1 (647) 712-0706"
          href="tel:+16477120706"
        />
        <ContactItem
          icon={<Mail size={18} className="text-gold" />}
          title="Email"
          value="Smasolutions@gmail.com"
          href="mailto:Smasolutions@gmail.com"
        />
        <ContactItem
          icon={<MapPin size={18} className="text-gold" />}
          title="Location"
          value="Ontario, Canada"
          href="https://maps.app.goo.gl/1cvX34grGMmmZcRs6"
        />
      </div>

      <a
        href="https://wa.me/16477120706"
        target="_blank"
        rel="noreferrer"
        className="mt-9 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold text-[13px] tracking-wider py-4 rounded-sm hover:brightness-105 transition"
      >
        <img src="/assets/icons/whatsapp.svg" alt="" className="w-4 h-4" />
        CHAT ON WHATSAPP
      </a>

      <p className="mt-9 text-[11px] font-semibold tracking-[2px] text-muted-faint">FOLLOW US</p>
      <div className="mt-4 flex items-center gap-3">
        <SocialButton
          href="https://www.instagram.com/sma_surface_solution?igsh=MTM5a3d0a210MDVyMA=="
          icon={<Camera size={16} className="text-gold" />}
          label="Instagram"
        />
        <SocialButton
          href="https://www.facebook.com/share/1EGznWuMHm/?mibextid=wwXIfr"
          icon={<Facebook size={16} className="text-gold" />}
          label="Facebook"
        />
      </div>
    </div>
  )
}

function ContactItem({ icon, title, value, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 group">
      <div className="w-11 h-11 flex items-center justify-center bg-[#1A1A1A] border border-border rounded-sm group-hover:border-gold transition">
        {icon}
      </div>
      <div>
        <p className="text-[11px] tracking-wide text-muted-faint">{title}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </a>
  )
}

function SocialButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 border border-border rounded-sm bg-[#141414] px-4 py-2.5 hover:border-gold transition"
    >
      {icon}
      <span className="text-xs font-medium text-white">{label}</span>
    </a>
  )
}

function ContactForm({ form, errors, sending, feedback, onChange, onSubmit }) {
  return (
    <div className="bg-panel border border-border rounded p-7 lg:p-9">
      <h3 className="text-xl font-bold text-white">Send Us a Message</h3>

      <form onSubmit={onSubmit} className="mt-7 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Field
            label="Full Name"
            placeholder="John Doe"
            icon={<User size={18} className="text-muted-faint" />}
            value={form.name}
            onChange={onChange('name')}
            error={errors.name}
          />
          <Field
            label="Phone Number"
            placeholder="+1 (647) ..."
            icon={<Phone size={18} className="text-muted-faint" />}
            value={form.phone}
            onChange={onChange('phone')}
          />
        </div>

        <Field
          label="Email Address"
          placeholder="you@example.com"
          icon={<Mail size={18} className="text-muted-faint" />}
          value={form.email}
          onChange={onChange('email')}
          error={errors.email}
        />

        <Field
          label="Message"
          placeholder="Tell us about your project..."
          icon={<MessageSquare size={18} className="text-muted-faint" />}
          value={form.message}
          onChange={onChange('message')}
          error={errors.message}
          textarea
        />

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-gold text-black font-extrabold text-[13px] tracking-wider py-[18px] rounded-sm hover:brightness-110 transition disabled:opacity-60"
        >
          {sending ? 'SENDING...' : 'SEND MESSAGE'}
        </button>

        {feedback && (
          <p
            className={`text-sm text-center rounded-sm py-2 ${
              feedback.type === 'success' ? 'bg-[#4CAF50]/15 text-[#4CAF50]' : 'bg-[#E53935]/15 text-[#E53935]'
            }`}
          >
            {feedback.text}
          </p>
        )}
      </form>
    </div>
  )
}

function Field({ label, placeholder, icon, value, onChange, error, textarea }) {
  const baseClasses =
    'w-full bg-[#1A1A1A] border rounded-sm text-sm text-white placeholder:text-[#404040] px-3.5 py-3 focus:outline-none focus:border-gold transition'
  return (
    <div className="flex-1">
      <label className="block text-[13px] text-muted-faint mb-1.5">{label}</label>
      <div className="relative">
        {!textarea && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
        )}
        {textarea ? (
          <textarea
            rows={5}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${baseClasses} ${error ? 'border-[#E53935]' : 'border-border'}`}
          />
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${baseClasses} pl-10 ${error ? 'border-[#E53935]' : 'border-border'}`}
          />
        )}
      </div>
      {error && <p className="mt-1 text-xs text-[#E53935]">{error}</p>}
    </div>
  )
}
