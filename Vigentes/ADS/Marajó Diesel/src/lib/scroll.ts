export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export const navItems: { label: string; target: string }[] = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Produtos', target: 'servicos' },
  { label: 'Vantagens', target: 'vantagens' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];
