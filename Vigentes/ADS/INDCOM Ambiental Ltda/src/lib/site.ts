export const WHATSAPP_NUMBER = '556285985180';
export const CLIENT_AREA_URL =
  'https://www.digimoney.com.br/analytics/LoginC/index.php?user=000476';

export function waLink(text?: string): string {
  const base = `http://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function openWhatsApp(text?: string): void {
  window.open(waLink(text), '_blank', 'noopener,noreferrer');
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
