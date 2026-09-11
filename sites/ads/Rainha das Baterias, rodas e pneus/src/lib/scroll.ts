export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export const WHATSAPP_NUMBER = '5562994430039';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
