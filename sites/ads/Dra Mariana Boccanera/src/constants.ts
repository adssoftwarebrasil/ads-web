export const WHATSAPP_URL =
  'https://wa.me/556296441515?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana.';
export const WHATSAPP_PLAIN = 'https://wa.me/556296441515';
export const INSTAGRAM_URL = 'https://www.instagram.com/mariboccanera.pediatra/';
export const EMAIL = 'contato@marianaboccanerapediatra.com.br';

export const ADDRESS_LINES = [
  'Rua J. 6 QD. 08 LT. 12,13,14',
  'R. J-6, QD. 08 LT. 11 - St. Jaó, Goiânia - GO, 74673-180',
];

export const IMG = {
  logo: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2Flogo-sem-fundo.png',
  hero: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2Fhero.webp',
  quemSomos: 'https://storage.lucasmendes.dev/site-sp/dra%20mariana%2Fimg%2FQuem%20somos.webp',
};

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
