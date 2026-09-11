export const WHATSAPP_URL = 'https://wa.me/559281102050';

export function openWhatsApp() {
  window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
