import { services } from '../content/services.js'
import { areas } from '../content/areas.js'
import { articles } from '../content/articles.js'
import { projects } from '../content/projects.js'
export function normalizePath(path = '/') {
  const parts = path.split(/[?#]/)[0].split('/').filter(Boolean)
  return `/${parts.join('/')}${parts.length ? '/' : ''}`
}
export const routes = [
  {
    path: '/epoxy-flooring-questions/',
    type: 'questions',
    title: 'Epoxy Flooring Questions: Cost, Timing & Installers',
    description:
      'Get answers about GTA epoxy and polyaspartic flooring costs, installation, repairs, winter care and SMA’s five-year warranty. Explore guides and project photos.',
  },
  {
    path: '/',
    type: 'home',
    title: 'Epoxy & Polyaspartic Flooring in the GTA',
    description:
      'Explore epoxy and polyaspartic coatings for garages, basements, porches and commercial spaces in Mississauga, Oakville, Toronto, Burlington and Milton.',
  },
  {
    path: '/services/',
    type: 'services',
    title: 'Epoxy Flooring & Concrete Coating Services',
    description:
      'Find the right coating for your garage, basement, porch or commercial floor. Explore six flooring services from SMA Surface Solutions in the GTA.',
  },
  {
    path: '/service-areas/',
    type: 'areas',
    title: 'Floor Coating Service Areas in the GTA',
    description:
      'SMA Surface Solutions serves Mississauga, Oakville, Toronto, Burlington and Milton. Explore local flooring options and plan your estimate.',
  },
  {
    path: '/blog/',
    type: 'blog',
    title: 'Flooring Guides: Cost, Coatings & Care',
    description:
      'Practical guides to garage floor coating costs, epoxy vs. polyaspartic, cure times, preparation and winter care for Ontario homeowners.',
  },
  {
    path: '/projects/',
    type: 'projects',
    title: 'Epoxy Flooring Before & After Projects',
    description:
      'See seven before-and-after flooring transformations from SMA Surface Solutions, including garages, entry steps, a balcony and a walkway.',
  },
  {
    path: '/about/',
    type: 'about',
    title: 'About SMA Surface Solutions',
    description:
      'Learn about SMA Surface Solutions: epoxy and polyaspartic flooring services for homes and commercial spaces across five Greater Toronto Area cities.',
  },
  {
    path: '/contact/',
    type: 'contact',
    title: 'Request a Flooring Quote in the GTA',
    description:
      'Tell SMA Surface Solutions about your garage, basement, porch or commercial flooring project. Request a free estimate by phone, email or WhatsApp.',
  },
  {
    path: '/privacy/',
    type: 'privacy',
    title: 'Privacy & Contact Information',
    description:
      'Learn how enquiry details are shared with SMA Surface Solutions and how to contact the business about your information.',
  },
  ...services.map((data) => ({
    path: `/services/${data.slug}/`,
    type: 'service',
    title: data.title + ' in the GTA',
    description: data.description,
    data,
  })),
  ...areas.map((data) => ({
    path: `/service-areas/${data.slug}/`,
    type: 'area',
    title: data.title,
    description: data.description,
    data,
  })),
  ...articles.map((data) => ({
    path: `/blog/${data.slug}/`,
    type: 'article',
    title: data.title,
    description: data.description,
    data,
  })),
  ...projects.map((data) => ({
    path: `/projects/${data.slug}/`,
    type: 'project',
    title: data.title,
    description: data.description,
    data,
  })),
]
export const notFound = {
  path: '/404/',
  type: 'notfound',
  title: 'Page Not Found',
  description:
    'This page could not be found. Explore SMA Surface Solutions flooring services, projects and guides.',
  noindex: true,
}
export function getRoute(path) {
  return routes.find((route) => route.path === normalizePath(path)) || notFound
}
