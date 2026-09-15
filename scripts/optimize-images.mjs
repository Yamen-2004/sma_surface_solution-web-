import { createHash } from 'node:crypto'
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicRoot = path.join(root, 'public')
const outputDirectory = path.join(publicRoot, 'assets', 'optimized')
const manifestPath = path.join(root, 'src', 'content', 'image-manifest.json')
const rasterExtension = /\.(?:avif|gif|jpe?g|png|tiff?|webp)$/i

async function findImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await findImages(filename)))
    else if (entry.isFile() && rasterExtension.test(entry.name))
      files.push(filename)
  }
  return files
}

await mkdir(outputDirectory, { recursive: true })
await mkdir(path.dirname(manifestPath), { recursive: true })
const files = [
  ...(await findImages(path.join(publicRoot, 'assets', 'images'))),
  ...(await findImages(path.join(publicRoot, 'assets', 'projects'))),
]
const manifest = {}
let sourceBytes = 0
let defaultBytes = 0
let variantBytes = 0

for (const filename of files) {
  const sourceUrl = `/${path.relative(publicRoot, filename).split(path.sep).join('/')}`
  const metadata = await sharp(filename).metadata()
  if (!metadata.width || !metadata.height)
    throw new Error(`Missing image dimensions: ${sourceUrl}`)
  const sourceWidth =
    metadata.orientation >= 5 && metadata.orientation <= 8
      ? metadata.height
      : metadata.width
  const isLogo = sourceUrl === '/assets/images/logo2.png'
  const requestedWidths = isLogo ? [320, 640] : [480, 960, 1600]
  const widths = [
    ...new Set(requestedWidths.map((width) => Math.min(width, sourceWidth))),
  ]
  const base = path
    .basename(filename, path.extname(filename))
    .replace(/[^a-z0-9_-]/gi, '-')
    .toLowerCase()
  const hash = createHash('sha256').update(sourceUrl).digest('hex').slice(0, 12)
  const variants = []

  for (const width of widths) {
    const outputName = isLogo
      ? `logo2-${width}.webp`
      : `${base}-${hash}-${width}.webp`
    const destination = path.join(outputDirectory, outputName)
    const info = await sharp(filename)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: isLogo ? 90 : 80, effort: 6 })
      .toFile(destination)
    variants.push({
      src: `/assets/optimized/${outputName}`,
      width: info.width,
      height: info.height,
      size: info.size,
    })
    variantBytes += info.size
  }

  const preferred =
    variants.filter((variant) => variant.width <= 960).at(-1) ?? variants[0]
  manifest[sourceUrl] = {
    src: preferred.src,
    width: preferred.width,
    height: preferred.height,
    srcSet: variants
      .map((variant) => `${variant.src} ${variant.width}w`)
      .join(', '),
  }
  const originalSize = (await stat(filename)).size
  sourceBytes += originalSize
  defaultBytes += preferred.size
  console.log(
    `${sourceUrl}: ${(originalSize / 1024).toFixed(1)} KB -> ${(preferred.size / 1024).toFixed(1)} KB (${preferred.width} x ${preferred.height})`,
  )
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(
  `Optimized ${files.length} images. Originals: ${(sourceBytes / 1024 / 1024).toFixed(2)} MB; default variants: ${(defaultBytes / 1024 / 1024).toFixed(2)} MB; all variants: ${(variantBytes / 1024 / 1024).toFixed(2)} MB.`,
)
