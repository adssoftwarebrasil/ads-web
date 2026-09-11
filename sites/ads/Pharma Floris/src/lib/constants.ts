export const WHATSAPP_URL =
  'https://wa.me/5516992368763?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.';

export const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Produtos', id: 'products' },
  { label: 'Vantagens', id: 'advantages' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
