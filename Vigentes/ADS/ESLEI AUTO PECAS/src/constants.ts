export const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5562985538497&text&type=phone_number&app_absent=0';

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
