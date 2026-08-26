export const WHATSAPP_URL = 'http://wa.me/556798212819';
export const INSTAGRAM_URL = 'https://www.instagram.com/ouro.fino_joias/';
export const EMAIL = 'contato@ourofinojoias.com.br';

export const IMG = {
  logo: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Flogo-sem-fundo.webp',
  hero: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Fhero-background.webp',
  aliancasDeOuro: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Faliacas-de-ouro.webp',
  pingenteCoracao: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Fpingente-coracao-dourado.webp',
  correntesDouradas: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Fcorrentes-douradas-diferentes.webp',
  correnteDeOuro: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Fcorrente-de-ouro-pingente.webp',
  joiasPersonalizadas: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Fjoias-personalizadas.webp',
  anelDiamante: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Fanel-diamante-ouro-noivado.webp',
  aliancasCaixa: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Faliancas-douradas-caixa.webp',
  aneisPedras: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Faneis-ouro-pedras.webp',
  pulseiraGrosso: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Fpulseira-de-ouro-grosso.webp',
  pingenteAgro: 'https://storage.lucasmendes.dev/site-sp/ouro%20fino%20joias%2Fimg%2Fjoias-personalizadas-pingente-ouro-agro.webp',
};

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
