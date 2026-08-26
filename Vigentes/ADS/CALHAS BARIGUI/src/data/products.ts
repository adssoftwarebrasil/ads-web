export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

const BASE = 'https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui';

export const products: Product[] = [
  {
    id: 1,
    name: 'Calhas e Condutores',
    description: 'Calhas e condutores de alta qualidade para escoamento eficiente de águas pluviais em residências, comércios e indústrias.',
    category: 'Principal',
    image: `${BASE}/tubos-metalicos-prateados-grama-verde-industrial_960x1280.webp`,
  },
  {
    id: 2,
    name: 'Rufos e Chapas',
    description: 'Rufos e chapas metálicas para vedação e proteção de estruturas, garantindo impermeabilização duradoura.',
    category: 'Principal',
    image: `${BASE}/grelha-preta-aletas-anguladas-fundo-branco_1280x960.webp`,
  },
  {
    id: 3,
    name: 'Coifas e Dutos',
    description: 'Coifas e dutos industriais para ventilação e exaustão, fabricados com materiais de alta resistência.',
    category: 'Principal',
    image: `${BASE}/duto-exaustor-preto-metal-rolo-metalico_960x1280.webp`,
  },
  {
    id: 4,
    name: 'Chaminés',
    description: 'Chaminés metálicas industriais e residenciais com chapéu cone, alta durabilidade e resistência às intempéries.',
    category: 'Principal',
    image: `${BASE}/chamine-preta-industrial-com-chap-u-cone_960x1280.webp`,
  },
  {
    id: 5,
    name: 'Curvas',
    description: 'Solução prática e eficiente para direcionar a água das chuvas nas calhas, garantindo escoamento adequado.',
    category: 'Acessórios',
    image: `${BASE}/Curva.webp`,
  },
  {
    id: 6,
    name: 'Selante PU40',
    description: 'Selante de alta performance à base de poliuretano, ideal para vedação de juntas, rachaduras e impermeabilização.',
    category: 'Selantes',
    image: `${BASE}/Selante%20PU40.webp`,
  },
  {
    id: 7,
    name: 'Selante Flex Pro',
    description: 'Selante Flex Pro 900ml Cinza HM Rubber + Trincha, para impermeabilização profissional de alto desempenho.',
    category: 'Selantes',
    image: `${BASE}/Selante%20Flex%20Pro.webp`,
  },
  {
    id: 8,
    name: 'Borracha Líquida 900g',
    description: 'Borracha Líquida 900g Impermeabilizante HM Rubber, ideal para telhados, calhas e superfícies em geral.',
    category: 'Impermeabilizantes',
    image: `${BASE}/Borracha%20Li%CC%81quida%20900g.webp`,
  },
  {
    id: 9,
    name: 'Borracha Líquida 3,6 Kg',
    description: 'Borracha Líquida Cinza 3,6 Kg Impermeabilizante HM Rubber para grandes superfícies e uso profissional.',
    category: 'Impermeabilizantes',
    image: `${BASE}/Borracha%20Li%CC%81quida%20Cinza%203%2C6%20Kg.webp`,
  },
  {
    id: 10,
    name: 'Tinta Spray Emborrachado',
    description: '2x Spray Emborrachado Impermeabilizante Cinza 400ml - aplicação rápida e cobertura uniforme.',
    category: 'Impermeabilizantes',
    image: `${BASE}/Tinta%20Spray%20Emborrachado.webp`,
  },
  {
    id: 11,
    name: 'Aplicadores de PU',
    description: 'Ferramenta ideal para aplicação precisa de poliuretano, garantindo acabamento de alta qualidade.',
    category: 'Ferramentas',
    image: `${BASE}/Aplicadores%20de%20PU.webp`,
  },
  {
    id: 12,
    name: 'Rebites',
    description: 'Solução prática e resistente para unir materiais de forma segura e duradoura em trabalhos metálicos.',
    category: 'Fixação',
    image: `${BASE}/Rebites.webp`,
  },
  {
    id: 13,
    name: 'Rebitadeira',
    description: 'Ferramenta robusta e eficiente para fixação de rebites em diferentes materiais com união resistente.',
    category: 'Ferramentas',
    image: `${BASE}/Rebitadeira.webp`,
  },
  {
    id: 14,
    name: 'Buchas e Parafusos',
    description: 'Itens essenciais para fixação e montagem, oferecendo resistência e segurança para diversas aplicações.',
    category: 'Fixação',
    image: `${BASE}/Buchas%20e%20Parafusos.webp`,
  },
  {
    id: 15,
    name: 'Tesoura Importada',
    description: 'Ferramenta de corte robusta e afiada para cortar metais com precisão, acabamento limpo em chapas.',
    category: 'Ferramentas',
    image: `${BASE}/Tesoura%20Importada.webp`,
  },
  {
    id: 16,
    name: 'Tesoura Nacional',
    description: 'Ferramenta de alta qualidade para cortes precisos e eficientes em metais, com desempenho confiável.',
    category: 'Ferramentas',
    image: `${BASE}/Tesoura%20Nacional.webp`,
  },
  {
    id: 17,
    name: 'Dobradeira Importada',
    description: 'Ferramenta especializada para dobrar metais com precisão, ideal para chapas de diversos materiais.',
    category: 'Ferramentas',
    image: `${BASE}/Dobradeira%20Importada.webp`,
  },
  {
    id: 18,
    name: 'Disco de Corte',
    description: 'Ferramenta de alto desempenho para cortes rápidos e precisos em metal, concreto e cerâmica.',
    category: 'Ferramentas',
    image: `${BASE}/Disco%20de%20Corte.webp`,
  },
  {
    id: 19,
    name: 'Esmirilhadora',
    description: 'Ferramenta versátil e potente para cortar, lixar e polir superfícies com acabamento profissional.',
    category: 'Ferramentas',
    image: `${BASE}/Esmirilhadora.webp`,
  },
  {
    id: 20,
    name: 'Parafusadeira',
    description: 'Ferramenta elétrica prática para apertar e soltar parafusos, economizando tempo e esforço.',
    category: 'Ferramentas',
    image: `${BASE}/Parafusadeira.webp`,
  },
  {
    id: 21,
    name: 'Serra de Arco',
    description: 'Ferramenta manual versátil para cortar metal, madeira e plásticos com cortes retos e limpos.',
    category: 'Ferramentas',
    image: `${BASE}/Serra%20de%20Arco.webp`,
  },
  {
    id: 22,
    name: 'Trenas',
    description: 'Instrumento de medição preciso e portátil para medir distâncias e dimensões em projetos.',
    category: 'Medição',
    image: `${BASE}/Trenas.webp`,
  },
  {
    id: 23,
    name: 'Esquadro',
    description: 'Ferramenta essencial para garantir ângulos perfeitos de 90 graus em cortes e montagens.',
    category: 'Medição',
    image: `${BASE}/Esquadro.webp`,
  },
  {
    id: 24,
    name: 'Tinta Spray',
    description: 'Praticidade e acabamento perfeito com aplicação rápida e uniforme em diversas superfícies.',
    category: 'Pintura',
    image: `${BASE}/Tinta%20Spray.webp`,
  },
  {
    id: 25,
    name: 'Pincéis',
    description: 'Ferramentas essenciais para pintura e acabamento com cerdas de alta qualidade para resultados precisos.',
    category: 'Pintura',
    image: `${BASE}/Pince%CC%81is.webp`,
  },
  {
    id: 26,
    name: 'Desengripante',
    description: 'Produto eficaz para soltar peças enferrujadas, proporcionando lubrificação e facilitando mecanismos.',
    category: 'Manutenção',
    image: `${BASE}/Desengripante.webp`,
  },
  {
    id: 27,
    name: 'Solvente para Borracha',
    description: 'Solvente Para Borracha Líquida 7em1 HM Rubber Original 500ml para limpeza e diluição.',
    category: 'Manutenção',
    image: `${BASE}/Solvente%20Para%20Borracha%20Liquida.webp`,
  },
  {
    id: 28,
    name: 'Cadeado',
    description: 'Solução segura e confiável para proteger seus pertences com resistência e durabilidade.',
    category: 'Segurança',
    image: `${BASE}/Cadeado.webp`,
  },
  {
    id: 29,
    name: 'Corrente Plástica',
    description: 'Solução leve e resistente para sinalização e demarcação de áreas com praticidade e durabilidade.',
    category: 'Segurança',
    image: `${BASE}/Corrente%20Pla%CC%81stica.webp`,
  },
  {
    id: 30,
    name: 'Corda',
    description: 'Versátil e resistente, ideal para diversas aplicações industriais e ao ar livre, garantindo segurança.',
    category: 'Acessórios',
    image: `${BASE}/Corda.webp`,
  },
];

export const categories = ['Todos', 'Principal', 'Selantes', 'Impermeabilizantes', 'Ferramentas', 'Fixação', 'Medição', 'Pintura', 'Manutenção', 'Segurança', 'Acessórios'];
