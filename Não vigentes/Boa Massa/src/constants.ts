export const WHATSAPP_URL = 'https://wa.me/5583986537258';
export const PHONE_TEL = 'tel:+5583986537258';
export const PHONE_DISPLAY = '(83) 98653-7258';
export const EMAIL = 'faturamento.boamassa@gmail.com';
export const LOGO_URL =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=boamassa%2Flogo-2.png&version_id=null';

export const NAV_LINKS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
