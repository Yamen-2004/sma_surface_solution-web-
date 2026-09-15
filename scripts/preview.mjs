import http from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'
const root = resolve('dist')
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
}
http
  .createServer(async (req, res) => {
    try {
      const path = decodeURIComponent(
        new URL(req.url, 'http://localhost').pathname,
      )
      const file = resolve(root, '.' + path)
      if (file !== root && !file.startsWith(root + sep)) {
        res.writeHead(403)
        res.end()
        return
      }
      const info = await stat(file)
      if (info.isDirectory() && !path.endsWith('/')) {
        res.writeHead(308, { Location: path + '/' })
        res.end()
        return
      }
      const target = info.isDirectory() ? resolve(file, 'index.html') : file
      const body = await readFile(target)
      res.writeHead(200, {
        'Content-Type': types[extname(target)] || 'application/octet-stream',
      })
      res.end(req.method === 'HEAD' ? undefined : body)
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(await readFile(resolve(root, '404.html')))
    }
  })
  .listen(4173, '127.0.0.1', () =>
    console.log('SMA production preview: http://127.0.0.1:4173/'),
  )
