export const WHATSAPP_URL = 'http://wa.me/5516992943445';
export const LOGO_URL =
  'https://storage.lucasmendes.dev/site-sp/atacadao%20das%20baterias%2Fimg%2Flogo.webp';

export const NAV_ITEMS = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Vantagens', id: 'advantages' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
