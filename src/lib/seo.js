import { site } from '../content/site.js'
import { services } from '../content/services.js'
import { areas } from '../content/areas.js'
import manifest from '../content/image-manifest.json'

export const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ],
  )
export const absoluteUrl = (path) => `${site.url}${path}`
export function breadcrumbs(route) {
  const items = [{ label: 'Home', href: '/' }]
  const parent = {
    service: ['Services', '/services/'],
    area: ['Service areas', '/service-areas/'],
    article: ['Guides', '/blog/'],
    project: ['Our work', '/projects/'],
  }[route.type]
  if (parent) items.push({ label: parent[0], href: parent[1] })
  if (route.path !== '/')
    items.push({ label: route.data?.title || route.title, href: route.path })
  return items
}
export function structuredData(route) {
  const url = absoluteUrl(route.path)
  const business = {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    url: site.url + '/',
    telephone: '+16477120706',
    email: site.email,
    logo: absoluteUrl('/assets/optimized/logo2-320.webp'),
    image: absoluteUrl('/assets/images/background.webp'),
    areaServed: site.cities.map((name) => ({
      '@type': 'City',
      name: `${name}, Ontario, Canada`,
    })),
    sameAs: [site.instagram, site.facebook, site.maps],
  }
  const graph = [
    business,
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: site.name,
      url: site.url + '/',
      inLanguage: 'en-CA',
      publisher: { '@id': business['@id'] },
    },
    {
      '@type':
        route.type === 'article'
          ? 'WebPage'
          : route.type === 'about'
            ? 'AboutPage'
            : route.type === 'contact'
              ? 'ContactPage'
              : 'WebPage',
      '@id': url + '#webpage',
      url,
      name: route.title,
      description: route.description,
      inLanguage: 'en-CA',
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': business['@id'] },
    },
  ]
  if (route.path !== '/')
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': url + '#breadcrumbs',
      itemListElement: breadcrumbs(route).map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        item: absoluteUrl(item.href),
      })),
    })
  if (route.type === 'service')
    graph.push({
      '@type': 'Service',
      '@id': url + '#service',
      name: route.data.title,
      description: route.description,
      url,
      serviceType: route.data.title,
      provider: { '@id': business['@id'] },
      areaServed: business.areaServed,
      mainEntityOfPage: { '@id': url + '#webpage' },
    })
  if (route.type === 'article')
    graph.push({
      '@type': 'BlogPosting',
      '@id': url + '#article',
      headline: route.title,
      description: route.description,
      image: [absoluteUrl(route.data.image)],
      datePublished: route.data.date,
      author: {
        '@type': 'Organization',
        name: site.name,
        url: site.url + '/about/',
      },
      publisher: { '@id': business['@id'] },
      mainEntityOfPage: { '@id': url + '#webpage' },
      inLanguage: 'en-CA',
      citation: route.data.sources.map((s) => s.url),
    })
  if (route.type === 'services' || route.type === 'areas')
    graph.push({
      '@type': 'ItemList',
      itemListElement: (route.type === 'services' ? services : areas).map(
        (item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.title,
          url: absoluteUrl(
            `/${route.type === 'services' ? 'services' : 'service-areas'}/${item.slug}/`,
          ),
        }),
      ),
    })
  return { '@context': 'https://schema.org', '@graph': graph }
}
export function renderHead(route) {
  const title = `${route.title} | ${site.name}`
  const source =
    route.data?.image || route.data?.after || '/assets/images/background.webp'
  const image = absoluteUrl(manifest[source]?.src || source)
  const json = JSON.stringify(structuredData(route)).replace(/</g, '\\u003c')
  return `<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(route.description)}" />
<meta name="robots" content="${route.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />
<link rel="canonical" href="${absoluteUrl(route.path)}" />
<meta property="og:locale" content="en_CA" />
<meta property="og:site_name" content="${site.name}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(route.description)}" />
<meta property="og:type" content="${route.type === 'article' ? 'article' : 'website'}" />
<meta property="og:url" content="${absoluteUrl(route.path)}" />
<meta property="og:image" content="${image}" />
<meta property="og:image:alt" content="${escapeHtml(route.data?.imageAlt || route.data?.afterAlt || 'SMA Surface Solutions floor coatings')}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(route.description)}" />
<meta name="twitter:image" content="${image}" />
${route.type === 'article' ? `<meta property="article:published_time" content="${route.data.date}" />` : ''}
<script type="application/ld+json">${json}</script>`
}
