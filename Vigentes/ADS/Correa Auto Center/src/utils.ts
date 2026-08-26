export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export const WHATSAPP_URL = 'http://wa.me/556699535234';
