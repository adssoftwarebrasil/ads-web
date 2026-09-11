export function imageOrPlaceholder(src: string | undefined, seed: string, width = 1200): string {
  return src && src.trim().length > 0
    ? src
    : `https://picsum.photos/seed/${encodeURIComponent(seed || 'placeholder')}/${width}/${Math.round(width * 0.66)}`;
}
