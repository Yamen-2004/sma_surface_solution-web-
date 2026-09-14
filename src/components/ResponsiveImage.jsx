import imageManifest from '../content/image-manifest.json'

export default function ResponsiveImage({
  src,
  alt,
  sizes = '(max-width: 700px) 100vw, 50vw',
  loading = 'lazy',
  fetchPriority,
  ...props
}) {
  const image = imageManifest[src]

  return (
    <img
      src={image?.src ?? src}
      alt={alt}
      width={image?.width}
      height={image?.height}
      srcSet={image?.srcSet}
      sizes={sizes}
      loading={loading}
      decoding="async"
      fetchpriority={fetchPriority}
      {...props}
    />
  )
}
