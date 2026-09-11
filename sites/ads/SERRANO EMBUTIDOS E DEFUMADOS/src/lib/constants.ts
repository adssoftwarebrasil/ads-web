export const WHATSAPP_URL =
  'http://wa.me/556696054019?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20Serrano%20Embutidos.';

export const PHONE_HREF = 'tel:+556696054019';
export const PHONE_LABEL = '(66) 9605-4019';
export const EMAIL = 'serranoembutidos136@gmail.com';
export const LOGO =
  'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/logo.webp';

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
