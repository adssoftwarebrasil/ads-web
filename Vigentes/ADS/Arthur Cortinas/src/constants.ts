export const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5566999197080&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos!';

export const WHATSAPP_URL_ENCODED =
  'https://api.whatsapp.com/send/?phone=5566999197080&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos!';

export const INSTAGRAM_URL = 'https://www.instagram.com/arthurcortinassinop/';

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
