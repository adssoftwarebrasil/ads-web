export const WHATSAPP_MAIN = '5569992097212';
export const WHATSAPP_CLICKART = '5569992696363';

export function openWhatsApp(number: string = WHATSAPP_MAIN, text: string = 'Olá!') {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
