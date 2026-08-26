export const WHATSAPP = 'http://wa.me/556697227511';

export interface Product {
  name: string;
  category: string;
  image: string;
}

export const categories: string[] = [
  'Todos',
  'EMBALAGENS',
  'EQUIPAMENTOS DE EPI',
  'PANOS E MOPS',
  'PAPÉIS E HIGIENE',
  'PISCINA',
  'PRODUTOS DE LIMPEZA ( QUÍMICOS)',
  'SACOS DE LIXO E LIXEIRAS',
  'UTENSÍLIOS DE LIMPEZA',
  'UTILIDADES GERAIS',
  'VASSOURAS, RODOS E CABOS',
];

export const products: Product[] = [
  {
    name: 'EMBALAGEM 1000 LITROS - CONTAINER',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%201000%20LITROS%20-%20CONTAINER.jpg',
  },
  {
    name: 'EMBALAGEM 200 LITROS - BOCA GRANDE ROSCA',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%20200%20LITROS%20-%20BOCA%20GRANDE%20ROSCA.jpg',
  },
  {
    name: 'EMBALAGEM 200 LITROS BOCA MEDIA',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%20200%20LITROS%20BOCA%20MEDIA.jpg',
  },
  {
    name: 'EMBALAGEM 200 LITROS LATÃO',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%20200%20LITROS%20LAT%C3%83O.jpg',
  },
  {
    name: 'EMBALAGEM 200L DUAS BOCAS',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%20200L%20DUAS%20BOCAS.png',
  },
  {
    name: 'EMBALAGEM 50 LITROS LEITEIRA',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%2050%20LITROS%20LEITEIRA.jpg',
  },
  {
    name: 'EMBALAGEM 50L DUAS BOCAS PEQUENAS   MM QUÍMICA',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%2050L%20DUAS%20BOCAS%20PEQUENAS%20_%20MM%20QU%C3%8DMICA.jpg',
  },
  {
    name: 'EMBALAGEM 80 LITROS PERUANA   MM QUIMICA',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%2080%20LITROS%20PERUANA%20_%20MM%20QUIMICA.jpg',
  },
  {
    name: 'EMBALAGEM VAZIA 20L',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%20VAZIA%2020L.jpg',
  },
  {
    name: 'EMBALAGEM VAZIA 32L   MM QUIMICA',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%20VAZIA%2032L%20_%20MM%20QUIMICA.jpg',
  },
  {
    name: 'EMBALAGEM VAZIA 5 LITROS  MM QUIMICA',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%20VAZIA%205%20LITROS_%20MM%20QUIMICA.jpg',
  },
  {
    name: 'EMBALAGEM VAZIA 500ML C  VALVULA   MM QUIMICA',
    category: 'EMBALAGENS',
    image: 'https://storage.lucasmendes.dev/site-sp/limponop/produtos/EMBALAGENS/EMBALAGEM%20VAZIA%20500ML%20C_%20VALVULA%20_%20MM%20QUIMICA.jpg',
  },
];

export const productWhatsApp = (name: string): string =>
  `${WHATSAPP}?text=${encodeURIComponent(
    `Olá! Gostaria de saber o preço e disponibilidade do produto: ${name}`,
  )}`;

export interface Coverage {
  city: string;
  state: string;
  isHead?: boolean;
}

export const coverage: Coverage[] = [
  { city: 'Sinop', state: 'MT', isHead: true },
  { city: 'Guarantã do Norte', state: 'MT' },
  { city: 'Matupá', state: 'MT' },
  { city: 'Itaúba', state: 'MT' },
  { city: 'Colder', state: 'MT' },
  { city: 'Santa Carmem', state: 'MT' },
];

export interface Review {
  initial: string;
  name: string;
  meta: string;
  text: string;
}

export const reviews: Review[] = [
  {
    initial: 'D',
    name: 'Dayanne Bortoluzzi Brito Padovezzi',
    meta: 'Guia local · 12 avaliações',
    text: '"Loja com produtos variados e de qualidade. Atendimento excelente."',
  },
  {
    initial: 'V',
    name: 'Victor Hugo Padovezzi',
    meta: 'Guia local · 101 avaliações · 118 fotos',
    text: '"Excelente diversidade de produtos de limpeza em geral! Impossível entrar na loja e sair sem comprar nada! Recomendo..."',
  },
  {
    initial: 'P',
    name: 'Pousada Lar da Josefa',
    meta: '1 avaliação',
    text: '"A melhor Loja de Produtos de limpeza, ótima qualidade, valores bons, e o atendimento sensacional!"',
  },
];

export const cities: string[] = [
  'Sinop - MT',
  'Guarantã do Norte - MT',
  'Matupá - MT',
  'Itaúba - MT',
  'Colder - MT',
  'Santa Carmem - MT',
  'Outra cidade',
];
