import { useEffect, useRef, useState } from 'react'
import { getMetaPixel } from '../lib/meta-pixel.js'

export default function MarketingConsent() {
  const [open, setOpen] = useState(false)
  const [choice, setChoice] = useState(null)
  const panel = useRef(null)
  const returnFocus = useRef(null)

  useEffect(() => {
    const pixel = getMetaPixel()
    setChoice(pixel.choice())
    setOpen(pixel.choice() === null)
    pixel.start()
    const show = () => {
      returnFocus.current = document.activeElement
      setOpen(true)
      requestAnimationFrame(() => panel.current?.focus())
    }
    const contact = (event) => {
      if (event.defaultPrevented) return
      const link = event.target.closest?.('a[href]')
      if (!link) return
      const url = new URL(link.href, window.location.href)
      if (url.protocol === 'tel:') pixel.contact('phone')
      else if (url.protocol === 'mailto:') pixel.contact('email')
      else if (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com')
        pixel.contact('whatsapp')
    }
    window.addEventListener('sma-cookie-settings', show)
    document.addEventListener('click', contact)
    return () => {
      window.removeEventListener('sma-cookie-settings', show)
      document.removeEventListener('click', contact)
    }
  }, [])

  function choose(allowed) {
    getMetaPixel().choose(allowed)
    setChoice(allowed ? 'granted' : 'denied')
    setOpen(false)
    returnFocus.current?.focus()
  }

  if (!open) return null
  return (
    <section
      className="cookie-panel"
      aria-labelledby="cookie-heading"
      tabIndex={-1}
      ref={panel}
    >
      <h2 id="cookie-heading">Your cookie choice</h2>
      <p>
        Optional cookies help us understand site visits and improve our
        marketing. You can accept or decline.
      </p>
      <p>
        <a href="/privacy/">Privacy details</a>. Change your choice anytime
        using Cookie settings in the footer.
      </p>
      {choice && (
        <p>
          Current choice: optional cookies{' '}
          {choice === 'granted' ? 'accepted' : 'declined'}.
        </p>
      )}
      <div className="cookie-actions">
        <button
          type="button"
          className="button button-outline"
          onClick={() => choose(false)}
        >
          Reject optional cookies
        </button>
        <button
          type="button"
          className="button button-gold"
          onClick={() => choose(true)}
        >
          Accept optional cookies
        </button>
      </div>
    </section>
  )
}
