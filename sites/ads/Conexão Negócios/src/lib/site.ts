export const WHATSAPP_URL = 'https://wa.me/5562996076949';

export const openWhatsApp = () => {
  window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
};

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
