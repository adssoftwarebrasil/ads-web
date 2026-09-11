export interface NavItem {
  href: string;
  label: string;
}

export interface SectionHeading {
  titulo: string;
  subtitulo: string;
}

export interface Stat {
  valor: string;
  label: string;
}

export interface Servico {
  titulo: string;
  descricao: string;
  icone: string;
  imagem?: string;
}

export interface Etapa {
  titulo: string;
  descricao: string;
  icone?: string;
}

export interface Diferencial {
  titulo: string;
  descricao: string;
  icone: string;
}

export interface FotoGaleria {
  src: string;
  alt: string;
  legenda?: string;
}

export interface Depoimento {
  nome: string;
  texto: string;
  cargo?: string;
  foto?: string;
  estrelas?: number;
}

export interface Area {
  nome: string;
  descricao?: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface SiteConfig {
  empresa: {
    nome: string;
    slogan: string;
    descricao: string;
    logo: string;
  };
  contato: {
    telefone: string;
    whatsapp: string;
    email: string;
    endereco: string;
    horario: string;
    mapaEmbed: string;
    mostrarFormulario: boolean;
    formularioCampoTelefone: boolean;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  nav: NavItem[];
  hero: {
    titulo: string;
    subtitulo: string;
    ctaTexto: string;
    imagemBg: string;
    badges: string[];
  };
  secoes: {
    servicos: SectionHeading;
    processo: SectionHeading;
    galeria: SectionHeading;
    depoimentos: SectionHeading;
    areas: SectionHeading;
    faq: SectionHeading;
  };
  stats: Stat[];
  servicos: Servico[];
  processo: Etapa[];
  sobre: {
    titulo: string;
    texto: string;
    imagem: string;
    diferenciais: Diferencial[];
  };
  galeria: FotoGaleria[];
  depoimentos: Depoimento[];
  areas: Area[];
  faq: FaqItem[];
  cta_final: {
    titulo: string;
    texto: string;
    botao: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const site: SiteConfig = {
  empresa: {
    nome: 'JR Baterias',
    slogan: 'Sua bateria nova com instalação no local',
    descricao:
      'Venda e instalação de baterias automotivas em Rondonópolis - MT. Atendimento rápido e plantão 24h.',
    logo: '/images/logo.webp',
  },
  contato: {
    telefone: '(66) 99616-9158',
    whatsapp: '5566996169158',
    email: '',
    endereco: 'R. Barão do Rio Branco, 3563 - Monte Líbano, Rondonópolis - MT, 78710-272',
    horario: 'Seg a Sex: 07h às 18h • Sáb: 07h às 12h • Plantão 24h',
    mapaEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5148551306634!2d-54.6485206!3d-16.4494477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c9d6f3a2eaf5%3A0x273804e61f2b19c3!2sJR%20BATERIAS!5e0!3m2!1spt-BR!2sbr!4v1777895868548!5m2!1spt-BR!2sbr',
    mostrarFormulario: false,
    formularioCampoTelefone: true,
  },
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },
  nav: [
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ],
  hero: {
    titulo: 'Bateria nova, instalada na hora',
    subtitulo:
      'Venda e troca de baterias automotivas em Rondonópolis. Equipe rápida, plantão 24h pra você não ficar na mão.',
    ctaTexto: 'Pedir bateria no WhatsApp',
    imagemBg: '/images/hero.webp',
    badges: ['Plantão 24h', 'Instalação no local', 'Rondonópolis - MT'],
  },
  secoes: {
    servicos: {
      titulo: 'O que fazemos',
      subtitulo: 'Soluções pra você não perder tempo com bateria descarregada.',
    },
    processo: {
      titulo: 'Como funciona',
      subtitulo: 'Resolva em 3 passos.',
    },
    galeria: {
      titulo: 'Nossos Trabalhos',
      subtitulo: '',
    },
    depoimentos: {
      titulo: 'O que dizem sobre nós',
      subtitulo: '',
    },
    areas: {
      titulo: 'Onde atendemos',
      subtitulo: 'Levamos a bateria até você em Rondonópolis e região.',
    },
    faq: {
      titulo: 'Perguntas frequentes',
      subtitulo: 'Tire suas dúvidas antes de chamar a gente.',
    },
  },
  stats: [
    { valor: '24h', label: 'Plantão todos os dias' },
    { valor: '100%', label: 'Instalação no local' },
    { valor: '1x', label: 'Atendimento na hora' },
  ],
  servicos: [
    {
      titulo: 'Venda de baterias',
      descricao:
        'Baterias novas para carros, motos, caminhões e utilitários. Marcas reconhecidas e garantia de fábrica.',
      icone: 'Zap',
      imagem: '/images/baterias.webp',
    },
    {
      titulo: 'Troca e instalação no local',
      descricao:
        'Nossa equipe instala sua bateria onde você estiver — em casa, no trabalho ou na estrada.',
      icone: 'Wrench',
      imagem: '/images/hero.webp',
    },
  ],
  processo: [
    {
      titulo: 'Chama no WhatsApp',
      descricao: 'Manda o modelo do veículo ou seu local. Respondemos rápido.',
      icone: 'MessageCircle',
    },
    {
      titulo: 'A gente vai até você',
      descricao: 'Equipe sai com a bateria certa pra atender no local.',
      icone: 'Truck',
    },
    {
      titulo: 'Carro pegando na hora',
      descricao: 'Instalação rápida, teste do sistema elétrico e você de volta na rua.',
      icone: 'Car',
    },
  ],
  sobre: {
    titulo: 'JR Baterias — Rondonópolis',
    texto:
      'A JR Baterias trabalha pra resolver seu problema na hora: venda e instalação de baterias automotivas com atendimento rápido e plantão 24 horas. Estamos no Monte Líbano, mas vamos onde você precisar.',
    imagem: '/images/baterias.webp',
    diferenciais: [
      {
        titulo: 'Plantão 24 horas',
        descricao: 'Bateria descarregada não escolhe hora. A gente também não.',
        icone: 'Clock',
      },
      {
        titulo: 'Instalação no local',
        descricao: 'Você não precisa rebocar nada. Vamos até onde o carro está.',
        icone: 'MapPinned',
      },
      {
        titulo: 'Bateria certa pro seu carro',
        descricao: 'Indicamos o modelo correto e testamos o sistema elétrico.',
        icone: 'ShieldCheck',
      },
    ],
  },
  galeria: [],
  depoimentos: [],
  areas: [
    { nome: 'Rondonópolis - MT', descricao: 'Atendimento em todos os bairros' },
    { nome: 'Plantão 24h', descricao: 'Inclusive feriados e madrugada' },
  ],
  faq: [
    {
      pergunta: 'Vocês atendem 24 horas?',
      resposta:
        'Sim. Temos plantão 24h todos os dias, inclusive finais de semana e feriados. Chame no WhatsApp.',
    },
    {
      pergunta: 'Vocês vão até onde meu carro está?',
      resposta:
        'Sim. Fazemos instalação no local em Rondonópolis e região. Manda a localização que a gente vai.',
    },
    {
      pergunta: 'Quanto tempo demora a troca?',
      resposta:
        'A troca em si leva poucos minutos. Do chamado à instalação concluída, geralmente em torno de 30 minutos no perímetro urbano.',
    },
    {
      pergunta: 'A bateria tem garantia?',
      resposta:
        'Sim. Todas as baterias que vendemos têm garantia de fábrica. Te explicamos o prazo no momento da compra.',
    },
    {
      pergunta: 'Que formas de pagamento vocês aceitam?',
      resposta:
        'Aceitamos PIX, dinheiro, débito e crédito. Confirme com a equipe no momento do atendimento.',
    },
  ],
  cta_final: {
    titulo: 'Bateria descarregada? A gente resolve.',
    texto: 'Plantão 24h em Rondonópolis. Instalação no local com bateria nova e garantia.',
    botao: 'Falar no WhatsApp agora',
  },
  seo: {
    title: 'JR Baterias | Baterias Automotivas em Rondonópolis - MT',
    description:
      'Venda e instalação de baterias automotivas em Rondonópolis. Plantão 24h, instalação no local, atendimento rápido. (66) 99616-9158.',
    keywords: 'bateria automotiva rondonópolis, troca de bateria, jr baterias, bateria 24h',
  },
};
