export const contato = {
  telefoneFixo: '(19) 3256-5817',
  telefoneFixoLink: 'tel:+551932565817',
  whatsapp: '(19) 99825-3635',
  whatsappNumero: '5519998253635',
  email: 'contato@cirurgicacampmed.com.br',
  instagram: '@cirurgicacampmed',
  instagramUrl: 'https://www.instagram.com/cirurgicacampmed',
  endereco: 'Rua Major Solon, 685 — Cambuí, Campinas, SP',
  enderecoCurto: 'Rua Major Solon, 685 — Cambuí',
  bairro: 'Cambuí, Campinas',
  horarioSemana: 'Segunda a sexta, das 08h às 18h',
  horarioSabado: 'Sábado, das 08h às 12h',
  horarioResumo: 'Seg–Sex 08h–18h · Sáb 08h–12h',
  mapaEmbed:
    'https://maps.google.com/maps?q=Campmed%2C%20Rua%20Major%20Solon%2C%20685%2C%20Cambu%C3%AD%20%E2%80%93%20Campinas%2C%20SP&t=m&z=16&output=embed&iwloc=near',
  mapaLink:
    'https://www.google.com/maps/search/?api=1&query=Campmed%2C+Rua+Major+Solon%2C+685%2C+Cambu%C3%AD%2C+Campinas%2C+SP',
};

/** Monta um link de WhatsApp já com a mensagem escrita para o visitante. */
export function whats(mensagem: string): string {
  return `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}

export const whatsGeral = whats(
  'Olá! Vim pelo site da CAMPMED e gostaria de falar com um especialista.',
);

export type Produto = {
  nome: string;
  indicacao: string;
  publico: string;
  imagem?: string;
};

export type Categoria = {
  slug: string;
  nome: string;
  nomeCurto: string;
  resumo: string;
  descricao: string;
  indicadoPara: string;
  perfilTitulo: string;
  perfilTexto: string;
  beneficios: string[];
  diferenciais: string[];
  capa: string;
  produtos: Produto[];
};

export const categorias: Categoria[] = [
  {
    slug: 'produtos-ortopedicos',
    nome: 'Produtos Ortopédicos',
    nomeCurto: 'Ortopédicos',
    resumo: 'Órteses, munhequeiras, joelheiras e suportes',
    descricao:
      'Linha completa de produtos ortopédicos para reabilitação, prevenção e suporte. Indicação personalizada conforme orientação médica ou fisioterápica.',
    indicadoPara:
      'Pacientes em reabilitação, idosos, atletas e profissionais com lesões musculoesqueléticas',
    perfilTitulo:
      'Pós-cirúrgico, lesões articulares, prevenção esportiva, correção postural',
    perfilTexto:
      'Indicado após prescrição médica ou fisioterápica, em casos de entorses, fraturas, pós-operatórios ortopédicos e dores crônicas articulares.',
    beneficios: [
      'Estabilização articular e alívio de dor',
      'Auxílio na recuperação pós-cirúrgica',
      'Prevenção de lesões recorrentes',
      'Melhora da postura e qualidade de vida',
    ],
    diferenciais: [
      'Materiais hipoalergênicos e respiráveis',
      'Ajuste anatômico para cada região do corpo',
      'Compatíveis com protocolos de reabilitação',
    ],
    capa: '/img/categoria-produtos-ortopedicos.jpg',
    produtos: [
      {
        nome: 'Munhequeira com Tala',
        indicacao: 'Tendinite, síndrome do túnel do carpo',
        publico: 'Adultos com dor no punho',
        imagem: '/img/munhequeira-com-tala.jpg',
      },
      {
        nome: 'Munhequeira Ajustável',
        indicacao: 'Suporte para punho e mão',
        publico: 'Adultos com dor no punho',
        imagem: '/img/munhequeira-ajustavel.jpg',
      },
      {
        nome: 'Joelheira Elástica',
        indicacao: 'Estabilização e compressão do joelho',
        publico: 'Pacientes ortopédicos e atletas',
        imagem: '/img/joelheira-elastica.jpg',
      },
      {
        nome: 'Joelheira Articulada',
        indicacao: 'Instabilidade do joelho, pós-cirúrgico',
        publico: 'Pacientes ortopédicos',
        imagem: '/img/joelheira-articulada.jpg',
      },
      {
        nome: 'Bota Ortopédica',
        indicacao: 'Imobilização do tornozelo e pé',
        publico: 'Pós-cirúrgico e fraturas',
        imagem: '/img/bota-ortopedica.jpg',
      },
      {
        nome: 'Tornozeleira',
        indicacao: 'Entorses e suporte do tornozelo',
        publico: 'Atletas e pacientes',
        imagem: '/img/tornozeleira.jpg',
      },
      {
        nome: 'Tipoia Americana',
        indicacao: 'Fraturas de braço e ombro',
        publico: 'Pacientes com imobilização',
        imagem: '/img/tipoia-americana.jpg',
      },
      {
        nome: 'Tipoia Funcional',
        indicacao: 'Imobilização de ombro e braço',
        publico: 'Pós-cirúrgico e fraturas',
        imagem: '/img/tipoia-funcional.jpg',
      },
      {
        nome: 'Palmilha Ortopédica',
        indicacao: 'Correção postural e conforto',
        publico: 'Adultos com dores nos pés',
        imagem: '/img/palmilha-ortopedica.jpg',
      },
      {
        nome: 'Suporte de Coxa',
        indicacao: 'Lesões musculares na coxa',
        publico: 'Atletas e pacientes',
        imagem: '/img/suporte-de-coxa.jpg',
      },
      {
        nome: 'Muletas Axilares',
        indicacao: 'Auxílio na marcha',
        publico: 'Pós-cirúrgicos e fraturas',
        imagem: '/img/muletas-axilares.jpg',
      },
      {
        nome: 'Separador de Dedos',
        indicacao: 'Joanete e alinhamento dos dedos',
        publico: 'Adultos com deformidades nos pés',
        imagem: '/img/separador-de-dedos.jpg',
      },
      {
        nome: 'Calcanheira de Silicone',
        indicacao: 'Dor no calcanhar, esporão',
        publico: 'Adultos com dores nos pés',
        imagem: '/img/calcanheira-de-silicone.jpg',
      },
    ],
  },
  {
    slug: 'equipamentos-medicos',
    nome: 'Equipamentos Médicos',
    nomeCurto: 'Equipamentos',
    resumo: 'Aparelhos de pressão, oxímetros, termômetros e mais',
    descricao:
      'Equipamentos médicos de precisão para monitoramento e diagnóstico domiciliar ou clínico. Orientação técnica para uso correto e calibração.',
    indicadoPara:
      'Profissionais de saúde, clínicas, cuidadores e pacientes em acompanhamento domiciliar',
    perfilTitulo:
      'Monitoramento de sinais vitais, acompanhamento de doenças crônicas, uso em consultórios',
    perfilTexto:
      'Para acompanhamento de hipertensão, diabetes, doenças pulmonares e monitoramento pós-internação.',
    beneficios: [
      'Precisão em medições de sinais vitais',
      'Monitoramento contínuo em casa',
      'Prevenção de complicações de saúde',
      'Facilidade de uso para cuidadores',
    ],
    diferenciais: [
      'Aparelhos com certificação INMETRO e ANVISA',
      'Calibração e orientação de uso na loja',
      'Marcas de referência hospitalar',
    ],
    capa: '/img/categoria-equipamentos-medicos.jpg',
    produtos: [
      {
        nome: 'Aparelho de Pressão Digital',
        indicacao: 'Monitoramento de hipertensão',
        publico: 'Hipertensos e idosos',
      },
      {
        nome: 'Oxímetro de Dedo',
        indicacao: 'Medição de saturação de oxigênio',
        publico: 'Pacientes respiratórios',
      },
      {
        nome: 'Termômetro Digital',
        indicacao: 'Aferição de temperatura corporal',
        publico: 'Uso geral',
      },
      {
        nome: 'Glicosímetro',
        indicacao: 'Monitoramento de glicemia',
        publico: 'Diabéticos',
      },
    ],
  },
  {
    slug: 'cadeiras-rodas-banho',
    nome: 'Cadeiras de Rodas e Banho',
    nomeCurto: 'Cadeiras',
    resumo: 'Cadeiras de rodas, banho e mobilidade',
    descricao:
      'Soluções completas em mobilidade: cadeiras de rodas manuais e motorizadas, cadeiras de banho e acessórios. Orientação para escolha do modelo ideal.',
    indicadoPara:
      'Pessoas com mobilidade reduzida, idosos, cuidadores e instituições de saúde',
    perfilTitulo:
      'Dificuldade de locomoção, pós-cirúrgico, uso domiciliar e institucional',
    perfilTexto:
      'Indicado para pacientes com limitação de mobilidade temporária ou permanente, idosos com risco de queda e pacientes em reabilitação.',
    beneficios: [
      'Autonomia e independência no dia a dia',
      'Segurança durante o banho e transferência',
      'Modelos ajustáveis para cada necessidade',
      'Conforto prolongado para uso diário',
    ],
    diferenciais: [
      'Teste presencial do modelo antes da compra',
      'Ajuste personalizado de largura e apoios',
      'Modelos leves e dobráveis para transporte',
    ],
    capa: '/img/categoria-cadeiras-rodas-banho.jpg',
    produtos: [
      {
        nome: 'Cadeira de Rodas D600',
        indicacao: 'Mobilidade reduzida, até 120kg, alumínio aeronáutico',
        publico: 'Idosos e pacientes ortopédicos',
        imagem: '/img/cadeira-de-rodas-d600.jpg',
      },
      {
        nome: 'Cadeira de Banho D40',
        indicacao: 'Banho e sobrevaso 3x1, até 100kg',
        publico: 'Idosos e pessoas com limitação',
        imagem: '/img/cadeira-de-banho-d40.jpg',
      },
      {
        nome: 'Banco de Banho',
        indicacao: 'Segurança no banho, ajustável',
        publico: 'Idosos e pacientes em reabilitação',
        imagem: '/img/banco-de-banho.jpg',
      },
      {
        nome: 'Cadeira Higiênica',
        indicacao: 'Higiene e banho com rodízios',
        publico: 'Pacientes acamados e idosos',
        imagem: '/img/cadeira-higienica.jpg',
      },
    ],
  },
  {
    slug: 'camas-hospitalares',
    nome: 'Camas Hospitalares',
    nomeCurto: 'Camas',
    resumo: 'Camas manuais e elétricas para uso domiciliar e clínico',
    descricao:
      'Camas hospitalares para home care e instituições. Modelos manuais e elétricos com ajustes de altura, cabeceira e pés. Entrega e montagem em Campinas.',
    indicadoPara:
      'Pacientes acamados, cuidadores domiciliares, clínicas e instituições de saúde',
    perfilTitulo:
      'Home care, pós-cirúrgico prolongado, cuidados paliativos, internação domiciliar',
    perfilTexto:
      'Indicada para pacientes que necessitam permanecer acamados por longos períodos, com necessidade de ajuste de posição para alimentação, respiração ou tratamento.',
    beneficios: [
      'Ajuste de posição para conforto e tratamento',
      'Prevenção de escaras e complicações',
      'Facilita o trabalho do cuidador',
      'Grade lateral para segurança do paciente',
    ],
    diferenciais: [
      'Montagem e orientação de uso inclusos',
      'Modelos com colchão hospitalar específico',
      'Suporte para acessórios (suporte de soro, mesa auxiliar)',
    ],
    capa: '/img/categoria-camas-hospitalares.jpg',
    produtos: [
      {
        nome: 'Cama Hospitalar Manual',
        indicacao: 'Home care e repouso prolongado',
        publico: 'Pacientes acamados',
      },
      {
        nome: 'Cama Hospitalar Elétrica',
        indicacao: 'Ajuste automatizado de posição',
        publico: 'Home care com cuidador',
      },
      {
        nome: 'Colchão Hospitalar',
        indicacao: 'Prevenção de escaras',
        publico: 'Pacientes acamados',
      },
      {
        nome: 'Mesa Auxiliar de Leito',
        indicacao: 'Alimentação e apoio no leito',
        publico: 'Pacientes e cuidadores',
      },
    ],
  },
  {
    slug: 'fraldas-geriatricas',
    nome: 'Fraldas Geriátricas',
    nomeCurto: 'Fraldas',
    resumo: 'Fraldas e absorventes geriátricos das melhores marcas',
    descricao:
      'Fraldas geriátricas de alta absorção para conforto e dignidade do paciente. Linha completa com diversos tamanhos e marcas reconhecidas.',
    indicadoPara: 'Idosos com incontinência urinária, pacientes acamados e cuidadores',
    perfilTitulo:
      'Incontinência urinária leve a severa, pós-cirúrgico, pacientes acamados',
    perfilTexto:
      'Para pacientes com incontinência urinária, durante internação domiciliar ou para uso contínuo em idosos que necessitam de proteção.',
    beneficios: [
      'Alta absorção para maior conforto',
      'Prevenção de dermatites e assaduras',
      'Diversos tamanhos para ajuste correto',
      'Discretas e confortáveis para uso contínuo',
    ],
    diferenciais: [
      'Orientação sobre tamanho e nível de absorção',
      'Marcas hospitalares de alta performance',
      'Preços especiais para compras recorrentes',
    ],
    capa: '/img/categoria-fraldas-geriatricas.jpg',
    produtos: [
      {
        nome: 'Fralda Geriátrica Noturna',
        indicacao: 'Incontinência severa / uso noturno',
        publico: 'Idosos e acamados',
      },
      {
        nome: 'Fralda Geriátrica Diurna',
        indicacao: 'Incontinência leve a moderada',
        publico: 'Idosos ativos',
      },
      {
        nome: 'Absorvente Geriátrico',
        indicacao: 'Incontinência leve',
        publico: 'Adultos com escape urinário',
      },
      {
        nome: 'Lençol Descartável',
        indicacao: 'Proteção do colchão',
        publico: 'Pacientes acamados',
      },
    ],
  },
  {
    slug: 'instrumentos-cirurgicos',
    nome: 'Instrumentos Cirúrgicos',
    nomeCurto: 'Instrumentos',
    resumo: 'Pinças, tesouras e instrumentais de alta qualidade',
    descricao:
      'Instrumentais cirúrgicos de aço inox para procedimentos clínicos e hospitalares. Produtos certificados para uso profissional.',
    indicadoPara: 'Médicos, dentistas, enfermeiros e clínicas especializadas',
    perfilTitulo:
      'Procedimentos cirúrgicos, curativos avançados, suturas e instrumentação clínica',
    perfilTexto:
      'Para profissionais de saúde que realizam procedimentos invasivos, curativos complexos ou que necessitam de instrumental de precisão.',
    beneficios: [
      'Aço inoxidável de alta durabilidade',
      'Precisão em procedimentos cirúrgicos',
      'Facilidade de esterilização',
      'Ampla variedade de modelos e tamanhos',
    ],
    diferenciais: [
      'Material de grau cirúrgico certificado',
      'Assessoria para montagem de kits',
      'Fornecimento para clínicas e consultórios',
    ],
    capa: '/img/categoria-instrumentos-cirurgicos.jpg',
    produtos: [
      {
        nome: 'Pinça Hemostática',
        indicacao: 'Procedimentos cirúrgicos',
        publico: 'Profissionais de saúde',
      },
      {
        nome: 'Tesoura Cirúrgica',
        indicacao: 'Corte de tecidos e curativos',
        publico: 'Médicos e enfermeiros',
      },
      {
        nome: 'Cabo de Bisturi',
        indicacao: 'Instrumentação cirúrgica',
        publico: 'Cirurgiões',
      },
      {
        nome: 'Kit de Sutura',
        indicacao: 'Suturas e fechamentos',
        publico: 'Profissionais de saúde',
      },
    ],
  },
  {
    slug: 'inaladores',
    nome: 'Inaladores',
    nomeCurto: 'Inaladores',
    resumo: 'Nebulizadores e inaladores para uso residencial',
    descricao:
      'Inaladores e nebulizadores de alta performance para tratamento respiratório domiciliar. Orientação sobre o modelo correto e técnica de uso.',
    indicadoPara: 'Pacientes com asma, bronquite, sinusite e doenças respiratórias crônicas',
    perfilTitulo: 'Asma, bronquite, sinusite, DPOC e tratamentos respiratórios prescritos',
    perfilTexto:
      'Para uso conforme prescrição médica em tratamentos de doenças respiratórias agudas ou crônicas, em adultos e crianças.',
    beneficios: [
      'Nebulização eficiente da medicação',
      'Alívio rápido de crises respiratórias',
      'Uso seguro em casa para todas as idades',
      'Manutenção simples e durável',
    ],
    diferenciais: [
      'Demonstração de uso na loja',
      'Modelos para adultos e pediátricos',
      'Assistência técnica para as principais marcas',
    ],
    capa: '/img/categoria-inaladores.jpg',
    produtos: [
      {
        nome: 'Inalador Portátil Dellamed',
        indicacao: 'Nebulização portátil e silenciosa',
        publico: 'Adultos e crianças',
        imagem: '/img/inalador-portatil-dellamed.jpg',
      },
      {
        nome: 'Nebulizador G-Tech',
        indicacao: 'Inalação de medicamentos',
        publico: 'Adultos e crianças',
        imagem: '/img/nebulizador-g-tech.jpg',
      },
      {
        nome: 'Inalador Compressor G-Tech',
        indicacao: 'Nebulização com compressor',
        publico: 'Uso domiciliar',
        imagem: '/img/inalador-compressor-g-tech.jpg',
      },
    ],
  },
];

export function getCategoria(slug?: string): Categoria | undefined {
  return categorias.find((c) => c.slug === slug);
}

/** Faixa de confiança exibida na primeira dobra, sobre o vídeo institucional. */
export const selosDeConfianca = [
  { valor: '+25 anos', rotulo: 'de experiência no mercado de saúde' },
  { valor: 'Produtos', rotulo: 'certificados pela ANVISA' },
  { valor: 'Atendimento', rotulo: 'especializado e consultivo' },
  { valor: 'Principais', rotulo: 'marcas do mercado hospitalar' },
];

export const marcas = [
  { nome: 'Dellamed', imagem: '/img/marca-dellamed.jpg' },
  { nome: 'G-Tech', imagem: '/img/marca-g-tech.jpg' },
  { nome: 'Tena', imagem: '/img/marca-tena.jpg' },
  { nome: 'Protdesc', imagem: '/img/marca-protdesc.jpg' },
  { nome: 'Bioland', imagem: '/img/marca-bioland.jpg' },
];

export const etapasAtendimento = [
  {
    titulo: 'Conte sua necessidade',
    texto:
      'Entre em contato pelo WhatsApp ou visite a loja. Nossa equipe entende o que você precisa.',
  },
  {
    titulo: 'Orientação técnica',
    texto:
      'Indicamos o produto ideal com base na sua condição, orientação médica e necessidades específicas.',
  },
  {
    titulo: 'Teste e escolha',
    texto:
      'Experimente o produto na loja, receba orientação de uso e leve com segurança.',
  },
];

export const diferenciais = [
  {
    titulo: 'Produtos Certificados',
    texto:
      'Trabalhamos exclusivamente com marcas reconhecidas e certificadas pela ANVISA para garantir segurança.',
  },
  {
    titulo: 'Equipe Técnica Especializada',
    texto:
      'Profissionais capacitados para orientar sobre indicação, uso correto e manutenção de cada produto.',
  },
  {
    titulo: 'Atendimento Humanizado',
    texto:
      'Entendemos a sensibilidade do momento. Atendemos com cuidado, paciência e respeito.',
  },
  {
    titulo: 'Atendemos Clínicas e Profissionais',
    texto:
      'Fornecimento para consultórios, clínicas e instituições de saúde com condições especiais.',
  },
  {
    titulo: 'Teste Antes de Comprar',
    texto:
      'Na nossa loja, você pode experimentar cadeiras, órteses e equipamentos antes de decidir.',
  },
  {
    titulo: 'Referência Local em Campinas',
    texto:
      'Tradição e confiança no bairro Cambuí, atendendo a região de Campinas há anos.',
  },
];

export const depoimentos = [
  {
    nome: 'Yane Matoch',
    texto:
      'A empresa em que trabalho é cliente dele há mais de 10 anos. Eu em particular há 5 anos. Atendimento excelente, muito atenciosos. Em especial o Gustavo, atendimento nota 10. Indico de olhos fechados para todos que conheço. Entrega rápida!',
  },
  {
    nome: 'Ferraz Giovannetti',
    texto:
      'Sempre que precisamos de materiais descartáveis para o consultório, encontramos no atendimento do Gustavo e de toda a equipe um exemplo de profissionalismo e dedicação. São extremamente prestativos, atenciosos e ágeis. Recomendo de olhos fechados!',
  },
  {
    nome: 'Nathalia Barros',
    texto:
      'Atendimento excelente! Equipe muito atenciosa, educada e prestativa. Produtos de qualidade e entrega rápida. Recomendo muito!',
  },
  {
    nome: 'Natália Zanella',
    texto: 'Excelente atendimento e preços!',
  },
  {
    nome: 'Luiz Calixto',
    texto: 'Bons preços e ótimo atendimento!',
  },
  {
    nome: 'Marineide Ferreira',
    texto: 'Atendimento excelente.',
  },
];
