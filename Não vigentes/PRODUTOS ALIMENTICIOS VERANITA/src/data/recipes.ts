export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: string;
  servings: string;
  category: string;
  ingredients: string[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'farofa-especial',
    title: 'Farofa Especial da Casa',
    description:
      'Uma farofa tradicional, crocante e cheia de sabor para acompanhar qualquer refeição.',
    image:
      'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '25 min',
    difficulty: 'Fácil',
    servings: '6 porções',
    category: 'Acompanhamentos',
    ingredients: [
      '2 xícaras de farinha de mandioca',
      '1 colher de sopa de Alho Frito Veranita',
      '100g de bacon em cubos',
      '1 cebola média picada',
      'Cheiro-verde a gosto',
      'Sal a gosto',
    ],
    steps: [
      'Em uma frigideira grande, doure o bacon em fogo médio até ficar crocante.',
      'Acrescente a cebola e refogue até ficar transparente.',
      'Adicione o alho frito Veranita e mexa por alguns segundos.',
      'Junte a farinha de mandioca aos poucos, mexendo sempre para não empelotar.',
      'Tempere com sal, finalize com cheiro-verde e sirva quente.',
    ],
  },
  {
    id: 'frango-lemon-pepper',
    title: 'Frango Grelhado com Lemon Pepper',
    description:
      'Um clássico saboroso, com toque cítrico e picante que conquista a todos.',
    image:
      'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '40 min',
    difficulty: 'Fácil',
    servings: '4 porções',
    category: 'Pratos Principais',
    ingredients: [
      '4 filés de peito de frango',
      '2 colheres de sopa de Lemon Pepper Veranita',
      '3 colheres de sopa de azeite',
      'Suco de 1 limão',
      'Sal a gosto',
    ],
    steps: [
      'Tempere os filés com lemon pepper, sal e suco de limão. Deixe marinar por 20 minutos.',
      'Aqueça uma frigideira com azeite em fogo médio-alto.',
      'Grelhe os filés por cerca de 5 minutos de cada lado, até dourarem.',
      'Sirva imediatamente com salada fresca ou arroz branco.',
    ],
  },
  {
    id: 'picanha-chimichurri',
    title: 'Picanha ao Chimichurri',
    description:
      'Carne grelhada no ponto, finalizada com o sabor marcante do chimichurri tradicional.',
    image:
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '35 min',
    difficulty: 'Médio',
    servings: '4 porções',
    category: 'Churrasco',
    ingredients: [
      '1 peça de picanha (cerca de 1kg)',
      '3 colheres de sopa de Chimichurri Veranita',
      'Sal grosso a gosto',
      '2 colheres de sopa de azeite',
    ],
    steps: [
      'Salgue a picanha com sal grosso e deixe descansar por 10 minutos.',
      'Grelhe na churrasqueira ou frigideira pesada até o ponto desejado.',
      'Fatie em medalhões e regue generosamente com chimichurri Veranita.',
      'Sirva acompanhado de farofa e vinagrete.',
    ],
  },
  {
    id: 'batata-paprica',
    title: 'Batatas Rústicas com Páprica Defumada',
    description:
      'Batatas crocantes por fora, macias por dentro, com o aroma irresistível da páprica defumada.',
    image:
      'https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '45 min',
    difficulty: 'Fácil',
    servings: '4 porções',
    category: 'Acompanhamentos',
    ingredients: [
      '1kg de batatas em gomos',
      '2 colheres de sopa de Páprica Defumada Veranita',
      '4 colheres de sopa de azeite',
      'Alecrim fresco',
      'Sal e pimenta a gosto',
    ],
    steps: [
      'Pré-aqueça o forno a 200°C.',
      'Em uma tigela, misture as batatas com azeite, páprica defumada, sal, pimenta e alecrim.',
      'Disponha em uma assadeira em camada única.',
      'Asse por cerca de 35 minutos, virando na metade do tempo, até ficarem douradas.',
    ],
  },
  {
    id: 'pipoca-gourmet',
    title: 'Pipoca Gourmet com Molho Especial',
    description:
      'A pipoca perfeita para tardes em família, com sabor irresistível e textura crocante.',
    image:
      'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1200',
    time: '15 min',
    difficulty: 'Fácil',
    servings: '4 porções',
    category: 'Snacks',
    ingredients: [
      '1 xícara de Milho de Pipoca Veranita',
      '3 colheres de sopa de óleo',
      '2 colheres de sopa de Molho para Pipoca Veranita',
      'Sal a gosto',
    ],
    steps: [
      'Aqueça o óleo em uma panela grande de fundo grosso.',
      'Adicione o milho, tampe e mexa ocasionalmente.',
      'Quando todos os grãos estourarem, transfira para um recipiente.',
      'Regue com o molho para pipoca e tempere com sal a gosto.',
    ],
  },
  {
    id: 'molho-caipira-aperitivo',
    title: 'Aperitivos com Molho de Pimenta Caipira',
    description:
      'Petiscos rápidos e saborosos, perfeitos para receber amigos com um toque de ardência caipira.',
    image:
      'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '20 min',
    difficulty: 'Fácil',
    servings: '6 porções',
    category: 'Petiscos',
    ingredients: [
      '500g de linguiça calabresa em rodelas',
      '3 colheres de sopa de Molho de Pimenta Caipira Veranita',
      '1 cebola roxa em fatias',
      'Cheiro-verde a gosto',
    ],
    steps: [
      'Doure a linguiça em uma frigideira até ficar bem crocante.',
      'Acrescente a cebola e refogue por 2 minutos.',
      'Adicione o molho de pimenta caipira e misture bem.',
      'Finalize com cheiro-verde e sirva como aperitivo quente.',
    ],
  },
];
