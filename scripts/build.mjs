import { build } from 'vite'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'
import { routes, notFound } from '../src/lib/routes.js'
import { articles } from '../src/content/articles.js'
import { site } from '../src/content/site.js'

await build()
await build({
  build: { ssr: 'src/entry-server.jsx', outDir: '.ssr', emptyOutDir: true },
})
const { render } = await import(
  pathToFileURL(resolve('.ssr/entry-server.js')).href
)
const template = await readFile('dist/index.html', 'utf8')
const output = resolve('dist')
for (const route of [...routes, notFound]) {
  const { html, head } = render(route.path)
  const file = resolve(
    output,
    route.type === 'notfound' ? '404.html' : `.${route.path}index.html`,
  )
  if (!file.startsWith(output)) throw new Error('Invalid output path')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(
    file,
    template.replace('<!--page-head-->', head).replace('<!--app-html-->', html),
  )
}
const xml = (value) =>
  String(value).replace(
    /[<>&"']/g,
    (c) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
      })[c],
  )
await writeFile(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((r) => `  <url><loc>${site.url}${r.path}</loc>${r.data?.date ? `<lastmod>${r.data.date}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`,
)
await writeFile(
  'dist/robots.txt',
  `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
)
await writeFile(
  'dist/feed.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>SMA Flooring Guides</title><link>${site.url}/blog/</link><description>Practical floor coating guides from SMA Surface Solutions.</description><language>en-ca</language><atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/>${articles.map((a) => `<item><title>${xml(a.title)}</title><link>${site.url}/blog/${a.slug}/</link><guid>${site.url}/blog/${a.slug}/</guid><description>${xml(a.description)}</description><pubDate>${new Date(a.date + 'T12:00:00Z').toUTCString()}</pubDate></item>`).join('')}</channel></rss>`,
)
console.log(
  `Generated ${routes.length} complete HTML pages, 404, sitemap and RSS feed.`,
)
