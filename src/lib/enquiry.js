import { site } from '../content/site.js'
export function validateEnquiry(form) {
  const errors = {}
  if (!form.name?.trim())
    errors.name = 'Enter your name so we know who to reply to.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email?.trim() || ''))
    errors.email = 'Enter a valid email address.'
  if (!form.message?.trim())
    errors.message = 'Tell us a little about the surface you want to coat.'
  if ((form.message?.length || 0) > 3000)
    errors.message = 'Keep your message under 3,000 characters.'
  return errors
}
export function enquiryText(form) {
  return [
    `Name: ${form.name?.trim() || ''}`,
    `Email: ${form.email?.trim() || ''}`,
    `Phone: ${form.phone?.trim() || 'Not provided'}`,
    `City: ${form.city || 'Not provided'}`,
    `Service: ${form.service || 'Not sure yet'}`,
    '',
    form.message?.trim() || '',
  ].join('\n')
}
export function makeEmailLink(form) {
  return `mailto:${site.email}?subject=${encodeURIComponent(`Flooring enquiry from ${form.name?.trim() || 'a customer'}`)}&body=${encodeURIComponent(enquiryText(form).replace(/\n/g, '\r\n'))}`
}
export function makeWhatsAppLink(form) {
  return `${site.whatsapp}?${new URLSearchParams({ text: enquiryText(form) })}`
}
