export const WHATSAPP_URL = 'http://wa.me/5587988263372';

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
