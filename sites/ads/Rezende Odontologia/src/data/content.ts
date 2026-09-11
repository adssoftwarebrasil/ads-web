export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: '#inicio', label: 'Início' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#dr-pedro', label: 'Dr. Pedro' },
  { href: '#clinica', label: 'Clínica' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export type HistoryChapter = {
  key: string;
  label: string;
  year?: string;
  title: string;
  paragraphs: string[];
  images: string[];
};

const historySet = (prefix: string) =>
  Array.from({ length: 6 }, (_, index) => `/media/history/${prefix}-0${index + 1}.webp`);

export const historyChapters: HistoryChapter[] = [
  {
    key: 'origens',
    label: '01 / ORIGENS',
    title: 'As raízes de uma trajetória na odontologia.',
    paragraphs: [
      'Nomes como Silvestre Rezende fazem parte das origens da ligação da família Rezende com a odontologia. Uma história iniciada por profissionais que ajudaram a construir valores que continuariam presentes ao longo dos anos.',
    ],
    images: historySet('origens'),
  },
  {
    key: '1979',
    label: '02 / 1979',
    year: '1979',
    title: 'Um marco na história Rezende.',
    paragraphs: [
      'Em 1979, a trajetória da família Rezende na odontologia ganha um novo capítulo, fortalecendo uma relação construída com pacientes, famílias e a comunidade.',
    ],
    images: historySet('1979'),
  },
  {
    key: 'trajetoria',
    label: '03 / TRAJETÓRIA',
    title: 'Princípios que acompanharam essa história.',
    paragraphs: [
      'Ao longo dessa caminhada, a atuação da família Rezende foi marcada pela proximidade com os pacientes, pelo compromisso profissional e pela valorização de uma odontologia responsável. Essa trajetória também passou por Governador Valadares e pelo Vale do Aço, acompanhando diferentes momentos da história familiar.',
    ],
    images: historySet('trajetoria'),
  },
  {
    key: 'hoje',
    label: '04 / HOJE',
    title: 'Uma história que continua evoluindo.',
    paragraphs: [
      'Dr. Pedro Rezende Filho dá continuidade a essa trajetória, unindo experiência construída ao longo dos anos, atualização técnica, recursos tecnológicos e uma estrutura preparada para a odontologia atual.',
      'Hoje, a Rezende Odontologia mantém essa história viva em Ipatinga, com atendimento próximo e planejamento individual para cada paciente.',
    ],
    images: historySet('hoje'),
  },
];

export type Treatment = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  /** Quando ausente, o card aponta para uma seção interna em vez do WhatsApp. */
  service?: string;
  href?: string;
  contain?: boolean;
};

export const treatments: Treatment[] = [
  {
    number: '01',
    title: 'Implantes Dentários',
    description:
      'Planejamento para reposição de dentes ausentes, buscando devolver função, estabilidade e naturalidade ao sorriso.',
    image: '/media/implante-dentario-procedimento.webp',
    alt: 'Procedimento relacionado a implantes dentários',
    cta: 'Quero saber sobre implantes',
    service: 'implantes dentários',
  },
  {
    number: '02',
    title: 'Próteses Dentárias',
    description: 'Soluções para reabilitar dentes comprometidos ou ausentes, de acordo com cada necessidade.',
    image: '/media/protese-dentaria-modelo.webp',
    alt: 'Modelo odontológico para prótese dentária',
    cta: 'Falar sobre próteses',
    service: 'próteses dentárias',
  },
  {
    number: '03',
    title: 'Facetas Dentárias',
    description: 'Planejamento estético para forma, proporção e aparência do sorriso quando houver indicação clínica.',
    image: '/media/facetas-dentarias-rezende.webp',
    alt: 'Modelo de facetas dentárias em resina utilizado no planejamento da Rezende Odontologia',
    cta: 'Entender minhas opções',
    service: 'facetas dentárias',
  },
  {
    number: '04',
    title: 'Reabilitação Oral',
    description: 'Planejamento integrado para recuperar estética, mastigação e equilíbrio do sorriso.',
    image: '/media/reabilitacao-oral-caso-clinico.webp',
    alt: 'Imagem de caso clínico de reabilitação oral',
    cta: 'Conhecer possibilidades',
    service: 'reabilitação oral',
    contain: true,
  },
  {
    number: '05',
    title: 'Clareamento Dental',
    description: 'Tratamento realizado após avaliação profissional para melhorar a tonalidade dos dentes.',
    image: '/media/clareamento-dental-card-rezende.webp',
    alt: 'Moldeira de clareamento dental utilizada na Rezende Odontologia',
    cta: 'Falar sobre clareamento',
    service: 'clareamento dental',
  },
  {
    number: '06',
    title: 'Diagnóstico Digital',
    description: 'Scanner intraoral e recursos de imagem auxiliam na análise e no planejamento.',
    image: '/media/diagnostico-digital-rezende.webp',
    alt: 'Escaneamento digital 3D utilizado no diagnóstico odontológico',
    cta: 'Conhecer a tecnologia',
    href: '#tecnologia',
  },
];

export type TechnologyItem = {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const technologyItems: TechnologyItem[] = [
  {
    label: '01 / RECURSO DIGITAL',
    title: 'Scanner intraoral',
    description: 'Digitalização da boca para auxiliar diferentes etapas de avaliação e planejamento.',
    image: '/media/scanner-intraoral-rezende.webp',
    alt: 'Scanner intraoral utilizado na Rezende Odontologia',
  },
  {
    label: '02 / RECURSO DIGITAL',
    title: 'Raio-X digital',
    description: 'Imagem digital como apoio ao diagnóstico e à definição de condutas clínicas.',
    image: '/media/raio-x-digital-rezende.webp',
    alt: 'Aparelho de raio-X digital portátil utilizado na Rezende Odontologia',
  },
  {
    label: '03 / RECURSO DIGITAL',
    title: 'Planejamento individual',
    description: 'A tecnologia complementa o essencial: avaliação clínica e planejamento para cada paciente.',
    image: '/media/planejamento-individual-rezende.webp',
    alt: 'Dr. Pedro Rezende explicando o planejamento individual do tratamento ao paciente',
  },
];

export const routineImages: string[] = [
  ...Array.from({ length: 5 }, (_, index) => `/media/routine/instrumentos-0${index + 1}.webp`),
  ...Array.from({ length: 5 }, (_, index) => `/media/routine/procedimentos-0${index + 1}.webp`),
];

export const resultImages: string[] = Array.from(
  { length: 12 },
  (_, index) => `/media/results/caso-${String(index + 1).padStart(2, '0')}.webp`
);

export type ContentSlide = { image: string; alt: string };

export const contentSlides: ContentSlide[] = [
  { image: '/media/conteudo-implantes.webp', alt: 'Conteúdo sobre implantes dentários' },
  { image: '/media/conteudo-sorriso.webp', alt: 'Conteúdo sobre limpeza profissional' },
  { image: '/media/conteudo-implante.webp', alt: 'Conteúdo sobre implantes dentários' },
  { image: '/media/conteudo-dor-de-dente.webp', alt: 'Conteúdo sobre dor de dente' },
  { image: '/media/conteudo-fio-dental.webp', alt: 'Conteúdo sobre fio dental' },
  { image: '/media/conteudo-coroas.webp', alt: 'Conteúdo sobre coroas dentárias' },
];

export type FaqItem = { question: string; answer: string; whatsappCta?: boolean };

export const faqItems: FaqItem[] = [
  {
    question: 'Como saber se preciso de um implante?',
    answer:
      'A indicação depende de avaliação clínica e, quando necessário, exames complementares. A consulta é o momento adequado para verificar as possibilidades para cada caso.',
  },
  {
    question: 'A clínica realiza próteses dentárias?',
    answer: 'Sim. A Rezende Odontologia trabalha com próteses e diferentes possibilidades de reabilitação oral.',
  },
  {
    question: 'A Rezende Odontologia utiliza scanner intraoral?',
    answer:
      'Sim. O scanner intraoral faz parte dos recursos digitais informados pela clínica e pode auxiliar em diferentes etapas de avaliação e planejamento.',
  },
  {
    question: 'Vocês fazem clareamento dental?',
    answer: 'Sim. A possibilidade e o protocolo adequado devem ser definidos após avaliação profissional.',
  },
  {
    question: 'Onde fica a Rezende Odontologia?',
    answer: 'A clínica está na Av. Orquídea, 1136, bairro Esperança, em Ipatinga/MG — CEP 35162-290.',
  },
  {
    question: 'Como posso agendar uma avaliação?',
    answer: 'O contato pode ser feito diretamente pelo WhatsApp da clínica.',
    whatsappCta: true,
  },
];

export const formServices = [
  'Quero uma avaliação',
  'Implante',
  'Prótese',
  'Facetas',
  'Clareamento',
  'Reabilitação Oral',
];
