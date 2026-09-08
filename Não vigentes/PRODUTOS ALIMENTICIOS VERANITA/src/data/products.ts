export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  weight: string;
  cod: string;
  ncm: string;
  ean: string;
  dun: string;
}

const BASE =
  'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita/produtos%20em%20destaque';

export const products: Product[] = [
  {
    id: 'alho-frito-pote',
    name: 'Alho Frito - Pote',
    category: 'Especiarias',
    image: `${BASE}/ALHO%20FRITO%20-%20POTE.webp`,
    description:
      'Alho frito crocante, no ponto certo, ideal para finalizar pratos com sabor e textura inconfundíveis.',
    weight: '500g',
    cod: '5401',
    ncm: '20059900',
    ean: '7 896069 570001',
    dun: '3 7896069 570002',
  },
  {
    id: 'alho-picado',
    name: 'Alho Picado',
    category: 'Especiarias',
    image: `${BASE}/ALHO%20PICADO.webp`,
    description:
      'Praticidade na medida certa: alho picado pronto para temperar carnes, arroz, feijão e refogados.',
    weight: '500g',
    cod: '5402',
    ncm: '07032000',
    ean: '7 896069 570015',
    dun: '3 7896069 570016',
  },
  {
    id: 'chimichurri',
    name: 'Chimichurri',
    category: 'Temperos',
    image: `${BASE}/CHIMICHURRI.webp`,
    description:
      'Mistura tradicional argentina com ervas selecionadas, perfeita para carnes grelhadas e churrascos.',
    weight: '500g',
    cod: '5403',
    ncm: '21039090',
    ean: '7 896069 570029',
    dun: '3 7896069 570030',
  },
  {
    id: 'farofa-costela',
    name: 'Farofa Pronta - Sabor Costela',
    category: 'Farofas',
    image: `${BASE}/FAROFA%20PRONTA%20-%20SABOR%20COSTELA.webp`,
    description:
      'Farofa temperada com sabor marcante de costela, crocante e pronta para servir.',
    weight: '500g',
    cod: '5404',
    ncm: '11062000',
    ean: '7 896069 570043',
    dun: '3 7896069 570044',
  },
  {
    id: 'farofa-pronta',
    name: 'Farofa Pronta',
    category: 'Farofas',
    image: `${BASE}/FAROFA%20PRONTA.webp`,
    description:
      'Receita tradicional da casa, com a crocância e o tempero que combinam com qualquer refeição.',
    weight: '500g',
    cod: '5405',
    ncm: '11062000',
    ean: '7 896069 570057',
    dun: '3 7896069 570058',
  },
  {
    id: 'lemon-pepper',
    name: 'Lemon Pepper',
    category: 'Temperos',
    image: `${BASE}/LEMON%20PEPPER.webp`,
    description:
      'Equilíbrio cítrico e picante que realça o sabor de aves, peixes e legumes assados.',
    weight: '500g',
    cod: '5406',
    ncm: '09030090',
    ean: '7 896069 576838',
    dun: '3 7896069 576839',
  },
  {
    id: 'milho-pipoca',
    name: 'Milho de Pipoca',
    category: 'Pipocas',
    image: `${BASE}/MILHO%20DE%20PIPOCA.webp`,
    description:
      'Grãos selecionados que estouram macios e crocantes, garantindo a melhor pipoca da sua casa.',
    weight: '500g',
    cod: '5407',
    ncm: '10059010',
    ean: '7 896069 570071',
    dun: '3 7896069 570072',
  },
  {
    id: 'molho-pimenta-caipira',
    name: 'Molho de Pimenta Caipira',
    category: 'Molhos',
    image: `${BASE}/MOLHO%20DE%20PIMENTA%20CAIPIRA.webp`,
    description:
      'Molho artesanal com toque caipira, ardência equilibrada e sabor que valoriza qualquer prato.',
    weight: '500g',
    cod: '5408',
    ncm: '21039010',
    ean: '7 896069 570085',
    dun: '3 7896069 570086',
  },
  {
    id: 'molho-pipoca',
    name: 'Molho para Pipoca',
    category: 'Molhos',
    image: `${BASE}/MOLHO%20PARA%20PIPOCA.webp`,
    description:
      'Realça o sabor da sua pipoca com a cremosidade e tempero perfeitos para todos os momentos.',
    weight: '500g',
    cod: '5409',
    ncm: '21039090',
    ean: '7 896069 570099',
    dun: '3 7896069 570100',
  },
  {
    id: 'oregano',
    name: 'Orégano',
    category: 'Especiarias',
    image: `${BASE}/OR%C3%89GANO.webp`,
    description:
      'Folhas selecionadas com aroma intenso, ideais para massas, pizzas, saladas e molhos.',
    weight: '500g',
    cod: '5410',
    ncm: '09099900',
    ean: '7 896069 570113',
    dun: '3 7896069 570114',
  },
  {
    id: 'pipoca-premium',
    name: 'Pipoca Premium',
    category: 'Pipocas',
    image: `${BASE}/PIPOCA%20PREMIUM.webp`,
    description:
      'Linha premium de pipoca com grãos especialmente selecionados para experiência superior.',
    weight: '500g',
    cod: '5411',
    ncm: '10059010',
    ean: '7 896069 570127',
    dun: '3 7896069 570128',
  },
  {
    id: 'paprica-defumada',
    name: 'Páprica Defumada',
    category: 'Especiarias',
    image: `${BASE}/P%C3%81PRICA%20DEFUMADA.webp`,
    description:
      'Aroma defumado e cor vibrante para realçar o sabor de carnes, batatas e pratos especiais.',
    weight: '500g',
    cod: '5412',
    ncm: '09041290',
    ean: '7 896069 570141',
    dun: '3 7896069 570142',
  },
];

export const categories = ['Especiarias', 'Temperos', 'Molhos', 'Farofas', 'Pipocas'];

export const LOGO =
  'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita/img/LOGO%20VERANITA%20-%20ALTA.png';

export const social = {
  instagram: 'https://www.instagram.com/produtos_veranita/',
  tiktok: 'https://www.tiktok.com/@produtosveranita',
  facebook: 'https://www.facebook.com/profile.php?id=61570238001482',
  whatsapp: 'https://wa.me/5516997516375',
};
