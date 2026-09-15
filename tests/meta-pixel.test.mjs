import test from 'node:test'
import assert from 'node:assert/strict'
import { parseHTML } from 'linkedom'
import { createMetaPixel } from '../src/lib/meta-pixel.js'

function setup() {
  const { document } = parseHTML('<html><head></head><body></body></html>')
  const values = new Map()
  const browser = {
    location: { hostname: 'www.smasurfacesolutions.com' },
    localStorage: {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    },
  }
  return { document, browser, pixel: createMetaPixel(browser, document) }
}

test('no Meta script or events load before consent or after rejection', () => {
  const { document, browser, pixel } = setup()
  pixel.start()
  pixel.contact('phone')
  assert.equal(document.querySelectorAll('script').length, 0)
  assert.equal(browser.fbq, undefined)
  pixel.choose(false)
  pixel.start()
  assert.equal(document.querySelectorAll('script').length, 0)
  assert.equal(pixel.choice(), 'denied')
})

test('accepting initializes once and sends only one page view per document', () => {
  const { document, browser, pixel } = setup()
  pixel.choose(true)
  pixel.choose(true)
  pixel.start()
  assert.equal(document.querySelectorAll('script').length, 1)
  assert.equal(
    document.querySelector('script').src,
    'https://connect.facebook.net/en_US/fbevents.js',
  )
  assert.deepEqual(
    browser.fbq.queue.filter((args) => args[0] === 'init'),
    [['init', '1282062623966748']],
  )
  assert.deepEqual(
    browser.fbq.queue.filter((args) => args[0] === 'trackSingle'),
    [['trackSingle', '1282062623966748', 'PageView']],
  )
})

test('contact tracking uses a channel allowlist and stops after withdrawal', () => {
  const { browser, pixel } = setup()
  pixel.choose(true)
  pixel.contact('phone')
  pixel.contact('someone@example.com')
  assert.deepEqual(
    browser.fbq.queue.filter((args) => args[2] === 'Contact'),
    [
      [
        'trackSingle',
        '1282062623966748',
        'Contact',
        { contact_channel: 'phone' },
      ],
    ],
  )
  pixel.choose(false)
  pixel.contact('email')
  assert.equal(
    browser.fbq.queue.filter((args) => args[0] === 'trackSingle').length,
    0,
  )
  assert.deepEqual(browser.fbq.queue.at(-1), ['consent', 'revoke'])
})

test('saved consent persists across page loads and storage failures do not break the site', () => {
  const { document, browser, pixel } = setup()
  pixel.choose(true)
  const next = createMetaPixel(browser, document)
  assert.equal(next.choice(), 'granted')
  const blocked = createMetaPixel(
    {
      ...browser,
      localStorage: {
        getItem() {
          throw new Error('storage blocked')
        },
        setItem() {
          throw new Error('storage blocked')
        },
      },
    },
    document,
  )
  assert.equal(blocked.choice(), null)
  assert.doesNotThrow(() => blocked.choose(false))
})

test('preview and local builds do not send production tracking', () => {
  const { document, browser } = setup()
  browser.location.hostname = 'localhost'
  const pixel = createMetaPixel(browser, document)
  pixel.choose(true)
  assert.equal(browser.fbq, undefined)
  assert.equal(document.querySelectorAll('script').length, 0)
})
