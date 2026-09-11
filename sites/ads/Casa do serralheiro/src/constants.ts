export const WHATSAPP_URL = 'https://wa.me/553538217719';
export const WHATSAPP_NUMBER = '553538217719';
export const PHONE_DISPLAY = '+55 35 3821-7719';
export const PHONE_TEL = '+553538217719';
export const EMAIL = 'artursegecs0612@gmail.com';
export const INSTAGRAM_URL = 'https://instagram.com/casadoserralheirolavras';
export const INSTAGRAM_HANDLE = '@casadoserralheirolavras';
export const LOGO_URL =
  'https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2Flogo.png';

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
