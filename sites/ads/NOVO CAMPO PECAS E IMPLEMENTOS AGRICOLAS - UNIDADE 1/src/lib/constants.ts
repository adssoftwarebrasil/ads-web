export const WHATSAPP_URL = 'https://wa.me/5567992920122';
export const PHONE_TEL = 'tel:+556799220122';
export const EMAIL = 'contato@novocampoagricolas.com.br';
export const MAPS_URL =
  'https://www.google.com/maps?ll=-22.222714,-54.777424&z=15&t=m&hl=pt-BR&gl=US&mapclient=embed&q=Av.+Weimar+Gon%C3%A7alves+Torres,+5435+-+Centro+Dourados+-+MS+79830-020';

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
