import { readFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'
import assert from 'node:assert/strict'
import { parseHTML } from 'linkedom'
import { routes } from '../src/lib/routes.js'
import { site } from '../src/content/site.js'
import { articles } from '../src/content/articles.js'
const docs = new Map(),
  titles = new Set(),
  descriptions = new Set()
for (const route of routes) {
  const html = await readFile(
    resolve('dist', `.${route.path}index.html`),
    'utf8',
  )
  const { document } = parseHTML(html)
  docs.set(route.path, document)
  assert.equal(
    document.querySelectorAll('h1').length,
    1,
    `${route.path}: one H1`,
  )
  assert.equal(
    document.querySelector('link[rel=canonical]')?.getAttribute('href'),
    site.url + route.path,
    `${route.path}: canonical`,
  )
  assert.ok(
    !document.querySelector('meta[name=robots]')?.content.includes('noindex'),
    `${route.path}: indexable`,
  )
  assert.ok(!titles.has(document.title), `${route.path}: unique title`)
  titles.add(document.title)
  const description = document.querySelector('meta[name=description]')?.content
  assert.ok(description?.length > 40, `${route.path}: description`)
  assert.ok(!descriptions.has(description), `${route.path}: unique description`)
  descriptions.add(description)
  assert.ok(
    document.querySelector('main').textContent.trim().length > 300,
    `${route.path}: content in HTML`,
  )
  const ids = [...document.querySelectorAll('[id]')].map((n) => n.id)
  assert.equal(new Set(ids).size, ids.length, `${route.path}: unique IDs`)
  for (const node of document.querySelectorAll(
    'script[type="application/ld+json"]',
  ))
    assert.ok(JSON.parse(node.textContent)['@graph'])
  assert.ok(!html.includes('<!--app-html-->'), `${route.path}: rendered`)
}
let links = 0,
  images = 0
for (const [path, doc] of docs) {
  for (const a of doc.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href')
    if (!href.startsWith('/') && !href.startsWith('#')) continue
    const url = new URL(href, site.url + path)
    if (/\.[a-z]+$/i.test(url.pathname)) {
      await access(resolve('dist', '.' + url.pathname))
      continue
    }
    const destination = docs.get(url.pathname)
    assert.ok(destination, `${path}: link resolves ${href}`)
    if (url.hash)
      assert.ok(
        destination.getElementById(decodeURIComponent(url.hash.slice(1))),
        `${path}: fragment resolves ${href}`,
      )
    links++
  }
  for (const img of doc.querySelectorAll('img')) {
    assert.ok(img.hasAttribute('alt'), `${path}: alt attribute`)
    const src = img.getAttribute('src')
    if (src.startsWith('/')) await access(resolve('dist', '.' + src))
    for (const candidate of (img.getAttribute('srcset') || '')
      .split(',')
      .filter(Boolean))
      await access(resolve('dist', '.' + candidate.trim().split(' ')[0]))
    images++
  }
}
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
for (const route of routes)
  assert.ok(sitemap.includes(`<loc>${site.url}${route.path}</loc>`))
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length)
const errorPage = await readFile('dist/404.html', 'utf8')
assert.ok(errorPage.includes('noindex, follow'))
const feed = await readFile('dist/feed.xml', 'utf8')
assert.equal((feed.match(/<item>/g) || []).length, articles.length)
console.log(
  `PASS: ${docs.size} HTML pages, ${links} internal links/fragments, ${images} images, unique metadata, schema, sitemap, RSS and noindex 404.`,
)
