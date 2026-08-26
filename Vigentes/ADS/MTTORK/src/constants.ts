export const WHATSAPP_URL = 'http://wa.me/556692426961';
export const LOGO_URL = 'https://storage.lucasmendes.dev/site-sp/mttork/img/logo-sem-fundo.webp';
export const HERO_BG_URL = 'https://storage.lucasmendes.dev/site-sp/mttork/img/hero-background.webp';

export const NAV_LINKS: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
