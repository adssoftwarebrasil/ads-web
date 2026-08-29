export const WHATSAPP_NUMBER = '5562992242454';

export function openWhatsApp(message?: string): void {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const url = message ? `${base}?text=${encodeURIComponent(message)}` : base;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
