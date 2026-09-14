import test from 'node:test'
import assert from 'node:assert/strict'
import { normalizePath, getRoute, routes } from '../src/lib/routes.js'
import {
  validateEnquiry,
  makeEmailLink,
  makeWhatsAppLink,
} from '../src/lib/enquiry.js'

test('canonical route matching strips queries and normalizes trailing slash', () => {
  assert.equal(normalizePath('/blog?utm_source=maps'), '/blog/')
  assert.equal(getRoute('/services/garage-epoxy-flooring').type, 'service')
  assert.equal(getRoute('/does-not-exist/').type, 'notfound')
  assert.equal(
    getRoute('/services/garage-epoxy-flooring/extra/').type,
    'notfound',
  )
  assert.equal(new Set(routes.map((r) => r.path)).size, routes.length)
})

test('enquiries validate required fields and preserve the supplied reply address in email', () => {
  assert.ok(validateEnquiry({}).name)
  assert.ok(
    validateEnquiry({ name: 'Sam', email: 'invalid', message: 'Garage quote' })
      .email,
  )
  const enquiry = {
    name: 'Sam & Lee',
    email: 'sam@example.com',
    phone: '+1 647 555 1234',
    city: 'Oakville',
    service: 'Garage flooring',
    message: 'A 400 sq ft garage & cracked step',
  }
  assert.deepEqual(validateEnquiry(enquiry), {})
  const link = new URL(makeEmailLink(enquiry))
  assert.equal(link.protocol, 'mailto:')
  assert.ok(
    !link.search.includes('+'),
    'mailto spaces must use percent encoding',
  )
  assert.ok(
    link.search.includes('%0D%0A'),
    'mailto body must use CRLF line breaks',
  )
  assert.ok(
    decodeURIComponent(link.search).includes('Flooring enquiry from Sam & Lee'),
  )
  assert.match(link.searchParams.get('body'), /sam@example.com/)
  assert.match(link.searchParams.get('body'), /400 sq ft garage & cracked step/)
  assert.match(link.searchParams.get('body'), /Oakville/)
  assert.equal(new URL(makeWhatsAppLink(enquiry)).hostname, 'wa.me')
})
