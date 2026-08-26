export const navItems: { label: string; id: string }[] = [
  { label: 'Home', id: 'home' },
  { label: 'A Sati', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Cobertura', id: 'coverage' },
  { label: 'Contato', id: 'contact' },
  { label: 'Trabalhe Conosco', id: 'careers' },
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
