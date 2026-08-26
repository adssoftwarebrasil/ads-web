export const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=557996288567&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

export const PHONE_TEL = 'tel:+557996288567';
export const PHONE_DISPLAY = '(79) 99628-8567';
export const EMAIL = 'contato@expressocar.com';

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
