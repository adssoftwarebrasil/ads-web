export function imageUrl(src, seed, width = 1200) {
  if (src && src.trim().length > 0) return src
  return `https://picsum.photos/seed/${encodeURIComponent(seed || 'placeholder')}/${width}/${Math.round(
    width * 0.66,
  )}`
}
