const PIXEL_ID = '1282062623966748'
const CONSENT_KEY = 'sma-marketing-consent-v1'

export function createMetaPixel(browser, document) {
  let consent = null
  let initialized = false
  let pageViewed = false
  const production = [
    'www.smasurfacesolutions.com',
    'smasurfacesolutions.com',
  ].includes(browser.location.hostname)
  try {
    const saved = browser.localStorage.getItem(CONSENT_KEY)
    if (saved === 'granted' || saved === 'denied') consent = saved
  } catch {
    /* Tracking stays off when storage is unavailable. */
  }

  function start() {
    if (!production || consent !== 'granted') return
    if (!initialized) {
      if (!browser.fbq) {
        const fbq = function (...args) {
          if (fbq.callMethod) fbq.callMethod.apply(fbq, args)
          else fbq.queue.push(args)
        }
        browser.fbq = fbq
        browser._fbq = fbq
        fbq.push = fbq
        fbq.loaded = true
        fbq.version = '2.0'
        fbq.queue = []
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://connect.facebook.net/en_US/fbevents.js'
        document.head.appendChild(script)
      }
      // Keep automatic events and form-field matching out of this integration.
      browser.fbq('set', 'autoConfig', false, PIXEL_ID)
      browser.fbq('init', PIXEL_ID)
      initialized = true
    }
    browser.fbq('consent', 'grant')
    if (!pageViewed) {
      browser.fbq('trackSingle', PIXEL_ID, 'PageView')
      pageViewed = true
    }
  }

  function choose(allowed) {
    consent = allowed ? 'granted' : 'denied'
    try {
      browser.localStorage.setItem(CONSENT_KEY, consent)
    } catch {
      /* Keep the choice for this page. */
    }
    if (allowed) start()
    else if (browser.fbq) {
      // Discard unsent events if consent changes before Meta's script loads.
      if (!browser.fbq.callMethod && browser.fbq.queue) {
        if (browser.fbq.queue.some((args) => args[2] === 'PageView'))
          pageViewed = false
        browser.fbq.queue = browser.fbq.queue.filter(
          (args) => args[0] !== 'trackSingle',
        )
      }
      browser.fbq('consent', 'revoke')
    }
  }

  function contact(channel) {
    if (
      !production ||
      consent !== 'granted' ||
      !['phone', 'email', 'whatsapp'].includes(channel)
    )
      return
    start()
    browser.fbq('trackSingle', PIXEL_ID, 'Contact', {
      contact_channel: channel,
    })
  }

  return { start, choose, contact, choice: () => consent }
}

let pixel
export function getMetaPixel() {
  if (typeof window === 'undefined') return null
  pixel ??= createMetaPixel(window, document)
  return pixel
}
