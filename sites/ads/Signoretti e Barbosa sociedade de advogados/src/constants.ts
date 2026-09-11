export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=556599602210';
export const INSTAGRAM_URL = 'https://www.instagram.com/signorettiebarbosa.adv';

export const NAV_LINKS: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Áreas de Atuação', id: 'areas' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
