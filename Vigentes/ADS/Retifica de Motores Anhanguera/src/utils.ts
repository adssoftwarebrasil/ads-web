export const WHATSAPP_URL = 'https://wa.me/556235584336';
export const PHONE_TEL = 'tel:+556235584336';
export const LOGO_URL =
  'https://storage.lucasmendes.dev/site-sp/retifica%20de%20motores%20anhanguera%2Fimg%2Flogo-sem-fundo.png';

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
