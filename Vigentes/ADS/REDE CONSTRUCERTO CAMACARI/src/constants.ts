export const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=557197438426&text&type=phone_number&app_absent=0';

export const WHATSAPP_PHONE = '557197438426';

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
