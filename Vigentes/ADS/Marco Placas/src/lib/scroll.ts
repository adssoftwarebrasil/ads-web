export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export const WHATSAPP_URL =
  'https://wa.me/553199749902?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';
