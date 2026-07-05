import { Phone, Mail, MapPin, Facebook } from 'lucide-react'

const SERVICES_LINKS = [
  'Garage Epoxy Flooring',
  'Basement Flooring',
  'Commercial Flooring',
  'Deck Restoration',
]

const COMPANY_LINKS = ['About Us', 'Our Projects', 'Contact Us']

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808]">
      <div className="h-px bg-border-soft" />

      <div className="px-5 md:px-12 lg:px-[120px] py-10 md:py-[60px]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-9 lg:gap-10">
          <div className="lg:flex-[3]">
            <Brand />
          </div>
          <div className="lg:flex-[2]">
            <LinksColumn title="Services" links={SERVICES_LINKS} />
          </div>
          <div className="lg:flex-[2]">
            <LinksColumn title="Company" links={COMPANY_LINKS} />
          </div>
          <div className="lg:flex-[2]">
            <ContactColumn />
          </div>
        </div>
      </div>

      <div className="h-px bg-border-soft" />

      <div className="px-5 lg:px-[120px] py-5 flex items-center justify-between flex-wrap gap-2">
        <p className="text-xs text-muted-faintest">
          © 2026 SMA Surface Solutions. Developed by{' '}
          <a
            href={`https://wa.me/962797937334?text=${encodeURIComponent(
              'Hello Yamen, I saw your work on SMA app and I want to connect with you!'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="text-gold font-medium underline"
          >
            Yamen Khazar
          </a>
        </p>
        <p className="hidden md:block text-xs text-muted-faintest">Ontario, Canada</p>
      </div>
    </footer>
  )
}

function Brand() {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded bg-gold flex items-center justify-center">
          <span className="text-lg font-black text-black">S</span>
        </div>
        <div>
          <p className="text-base font-black text-white tracking-wider leading-none">SMA</p>
          <p className="text-[8px] font-medium text-gold tracking-wider leading-tight">
            SURFACE SOLUTIONS
          </p>
        </div>
      </div>

      <p className="mt-5 text-[13px] leading-[1.7] text-muted-faint">
        Ontario's premier epoxy flooring specialists. Delivering high-performance flooring
        solutions for over a decade.
      </p>

      <div className="mt-6 flex items-center gap-2.5">
        <SocialIcon
          href="https://www.instagram.com/sma_surface_solution?igsh=MTM5a3d0a210MDVyMA=="
          label="Instagram"
        >
          <img src="/assets/icons/instagram.svg" alt="" className="w-4 h-4" />
        </SocialIcon>
        <SocialIcon
          href="https://www.facebook.com/share/1EGznWuMHm/?mibextid=wwXIfr"
          label="Facebook"
        >
          <Facebook size={16} className="text-white" />
        </SocialIcon>
        <SocialIcon href="https://wa.me/16477120706" label="WhatsApp">
          <img src="/assets/icons/whatsapp.svg" alt="" className="w-4 h-4" />
        </SocialIcon>
      </div>
    </div>
  )
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center border border-border rounded-[3px] hover:border-gold transition"
    >
      {children}
    </a>
  )
}

function LinksColumn({ title, links }) {
  return (
    <div>
      <p className="text-[11px] font-bold text-white tracking-[2px]">{title.toUpperCase()}</p>
      <div className="mt-1 w-6 h-0.5 bg-gold" />
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-[13px] leading-relaxed text-muted-faint hover:text-gold transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactColumn() {
  return (
    <div>
      <p className="text-[11px] font-bold text-white tracking-[2px]">CONTACT</p>
      <div className="mt-1 w-6 h-0.5 bg-gold" />
      <div className="mt-5 space-y-3">
        <ContactItem icon={<Phone size={14} className="text-gold" />} text="+1 (647) 712-0706" />
        <ContactItem icon={<Mail size={14} className="text-gold" />} text="Smasolutions@gmail.com" />
        <ContactItem icon={<MapPin size={14} className="text-gold" />} text="Ontario, Canada" />
      </div>
    </div>
  )
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2.5">
      {icon}
      <span className="text-[13px] text-muted-faint">{text}</span>
    </div>
  )
}
