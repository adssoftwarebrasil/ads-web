export type ProductCategory =
  | 'Todos'
  | 'Garfos Enleiradores'
  | 'Garfos Carregadores'
  | 'Conchas'
  | 'Guincho Big Bag'
  | 'Correntes e Conexões'
  | 'Implementos Florestais'
  | 'Proteções e Estruturais';

export interface Product {
  name: string;
  category: ProductCategory;
  image: string;
}

const BASE = 'https://storage.lucasmendes.dev/site-sp/refamaq/produtos/';

export const products: Product[] = [
  {
    name: 'Garfo Enleirador Frontal 3M',
    category: 'Garfos Enleiradores',
    image: BASE + 'GARFO%20ENLEIRADOR%20FRONTAL%203M.webp',
  },
  {
    name: 'Garfo Enleirador Frontal 3,80M',
    category: 'Garfos Enleiradores',
    image: BASE + 'GARFO%20ENLEIRADOR%20FRONTAL%203%2C80M.webp',
  },
  {
    name: 'Garfo Enleirador Frontal 4,80M',
    category: 'Garfos Enleiradores',
    image: BASE + 'GARFO%20ENLEIRADOR%20FRONTAL%204%2C80M.webp',
  },
  {
    name: 'Garfo Enleirador Escavadeira Hidráulica',
    category: 'Garfos Enleiradores',
    image: BASE + 'GARFO%20ENLEIRADOR%20ESCAVADEIRA%20HIDR%C3%81ULICA.webp',
  },
  {
    name: 'Garfo Carregador',
    category: 'Garfos Carregadores',
    image: BASE + 'GARFO%20CARREGADOR.webp',
  },
  {
    name: 'Garfo Carregador Tipo C',
    category: 'Garfos Carregadores',
    image: BASE + 'GARFO%20CARREGADOR%20TIPO%20C.webp',
  },
  {
    name: 'Garfo Carregador com Mandíbula',
    category: 'Garfos Carregadores',
    image: BASE + 'GARFO%20CARREGADOR%20COM%20MAND%C3%8DBULA.webp',
  },
  {
    name: 'Concha Cavaqueira',
    category: 'Conchas',
    image: BASE + 'CONCHA%20CAVAQUEIRA.webp',
  },
  {
    name: 'Concha em V',
    category: 'Conchas',
    image: BASE + 'CONCHA%20EM%20V.webp',
  },
  {
    name: 'Concha para Arrancar Tocos',
    category: 'Conchas',
    image: BASE + 'CONCHA%20PARA%20ARRANCAR%20TOCOS.webp',
  },
  {
    name: 'Concha para Carregadeira',
    category: 'Conchas',
    image: BASE + 'CONCHA%20PARA%20CARREGADEIRA.webp',
  },
  {
    name: 'Mandíbula para Concha da Escavadeira Hidráulica',
    category: 'Conchas',
    image: BASE + 'MAND%C3%8DBULA%20PARA%20CONCHA%20DA%20ESCAVADEIRA%20HIDR%C3%81ULICA.webp',
  },
  {
    name: 'Guincho Big Bag para Carregadeiras',
    category: 'Guincho Big Bag',
    image: BASE + 'GUINCHO%20BIG%20BAG%20P%20CARREGADEIRAS.webp',
  },
  {
    name: 'Guincho Big Bag Duplo para Carregadeiras',
    category: 'Guincho Big Bag',
    image: BASE + 'GUINCHO%20BIG%20BAG%20DUPLO%20PARA%20CARREGADEIRAS.webp',
  },
  {
    name: 'Corrente Niveladora com Facas',
    category: 'Correntes e Conexões',
    image: BASE + 'CORRENTE%20NIVELADORA%20COM%20FACAS.webp',
  },
  {
    name: 'Destorcedor para Corrente Niveladora',
    category: 'Correntes e Conexões',
    image: BASE + 'DESTORCEDOR%20PARA%20CORRENTE%20NIVELADORA.webp',
  },
  {
    name: 'Destorcedor para Correntão',
    category: 'Correntes e Conexões',
    image: BASE + 'DESTORCEDOR%20PARA%20CORRENT%C3%83O.webp',
  },
  {
    name: 'Emenda Correntão',
    category: 'Correntes e Conexões',
    image: BASE + 'EMENDA%20CORRENT%C3%83O.webp',
  },
  {
    name: 'Engate Rápido',
    category: 'Correntes e Conexões',
    image: BASE + 'ENGATE%20R%C3%81PIDO.webp',
  },
  {
    name: 'Arrancador de Tocos',
    category: 'Implementos Florestais',
    image: BASE + 'ARRANCADOR%20DE%20TOCOS.webp',
  },
  {
    name: 'Capota Florestal',
    category: 'Implementos Florestais',
    image: BASE + 'CAPOTA%20FLORESTAL.webp',
  },
  {
    name: 'Capota para Carregadeira W20',
    category: 'Implementos Florestais',
    image: BASE + 'CAPOTA%20PARA%20CARREGADEIRA%20W20.webp',
  },
  {
    name: 'Cubo para Rodado Duplo de Carregadeira',
    category: 'Proteções e Estruturais',
    image: BASE + 'CUBO%20PARA%20RODADO%20DUPLO%20DE%20CARREGADEIRA.webp',
  },
  {
    name: 'Paralama Carregadeira W20',
    category: 'Proteções e Estruturais',
    image: BASE + 'PARALAMA%20CARREGADEIRA%20W20.webp',
  },
  {
    name: 'Peito de Aço',
    category: 'Proteções e Estruturais',
    image: BASE + 'PEITO%20DE%20A%C3%87O.webp',
  },
  {
    name: 'Plataforma de Aço',
    category: 'Proteções e Estruturais',
    image: BASE + 'PLATAFORMA%20DE%20A%C3%87O.webp',
  },
  {
    name: 'Proteção Esticador Esteira KOM D65',
    category: 'Proteções e Estruturais',
    image: BASE + 'PROTE%C3%87%C3%83O%20ESTICADOR%20ESTEIRA%20KOM%20D65.webp',
  },
  {
    name: 'Proteção Garfo da Roda Guia',
    category: 'Proteções e Estruturais',
    image: BASE + 'PROTE%C3%87%C3%83O%20GARFO%20DA%20RODA%20GUIA.webp',
  },
  {
    name: 'Proteção Motor Carregadeira W20',
    category: 'Proteções e Estruturais',
    image: BASE + 'PROTE%C3%87%C3%83O%20MOTOR%20CARREG%20W20.webp',
  },
  {
    name: 'Proteção para Brisa Escavadeira',
    category: 'Proteções e Estruturais',
    image: BASE + 'PROTE%C3%87%C3%83O%20PARA%20BRISA%20ESCAVADEIRA.webp',
  },
];

export const categories: ProductCategory[] = [
  'Todos',
  'Garfos Enleiradores',
  'Garfos Carregadores',
  'Conchas',
  'Guincho Big Bag',
  'Correntes e Conexões',
  'Implementos Florestais',
  'Proteções e Estruturais',
];
