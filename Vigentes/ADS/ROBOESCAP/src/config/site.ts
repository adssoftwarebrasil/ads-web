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
    nome: 'Roboescap',
    slogan: 'Especialistas em escapamento desde 1991',
    descricao:
      'Oficina especializada em escapamento em Rio Claro/SP. Troca, adaptação esportiva e fabricação sob medida com máquina de dobrar cano.',
    logo: '/images/logo.webp',
  },
  contato: {
    telefone: '(19) 3534-9440',
    whatsapp: '5519998250877',
    email: 'roboescap@gmail.com',
    endereco: 'Rua 14, 720 – Consolação – Rio Claro/SP – CEP 13.500-130',
    horario: 'Seg a Sex: 8h às 17h45 · Sáb: 8h às 11h45',
    mapaEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.3403613652204!2d-47.568685900000006!3d-22.416211699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7daf7b29d33cf%3A0x93bba8b8fdcc64f7!2sRoboescap!5e0!3m2!1spt-BR!2sbr!4v1777897730288!5m2!1spt-BR!2sbr',
    mostrarFormulario: true,
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
    { href: '#galeria', label: 'Galeria' },
    { href: '#areas', label: 'Atendimento' },
    { href: '#contato', label: 'Contato' },
  ],
  hero: {
    titulo: 'Escapamento sob medida para o seu carro.',
    subtitulo:
      'Troca, adaptação esportiva e fabricação personalizada. Tradição em Rio Claro desde 1991.',
    ctaTexto: 'Chamar no WhatsApp',
    imagemBg: '/images/escapamento-duplo-cromado-carro-elevado-900x1600.webp',
    badges: ['Desde 1991', 'Máquina de dobrar cano própria', 'Material de qualidade'],
  },
  secoes: {
    servicos: {
      titulo: 'Nossos Serviços',
      subtitulo: 'Tudo que envolve o sistema de escape do seu carro.',
    },
    processo: {
      titulo: 'Como funciona',
      subtitulo: 'Do diagnóstico ao carro pronto, simples e rápido.',
    },
    galeria: {
      titulo: 'Nossa Oficina',
      subtitulo: 'Carros que passaram pelas nossas mãos.',
    },
    depoimentos: {
      titulo: 'O que dizem sobre nós',
      subtitulo: '',
    },
    areas: {
      titulo: 'Onde Atendemos',
      subtitulo: 'Rio Claro e cidades vizinhas. Mão de obra é feita aqui na oficina.',
    },
    faq: {
      titulo: 'Perguntas Frequentes',
      subtitulo: 'Tire suas dúvidas antes de trazer o carro.',
    },
  },
  stats: [
    { valor: '35+', label: 'Anos de tradição' },
    { valor: '1991', label: 'Fundada em' },
    { valor: '100%', label: 'Mão de obra própria' },
    { valor: '7', label: 'Cidades atendidas' },
  ],
  servicos: [
    {
      titulo: 'Troca de escapamento',
      descricao: 'Substituição completa do sistema de escape com peças e materiais de qualidade.',
      icone: 'Wrench',
      imagem: '/images/carro-branco-elevado-reparacao-escapamento-oficina-900x1600.webp',
    },
    {
      titulo: 'Escapamento esportivo',
      descricao:
        'Adaptação manual: tiramos o original e instalamos o esportivo, ou cano para deixar o ronco mais forte.',
      icone: 'Flame',
      imagem: '/images/audi-a3-azul-traseira-escapamento-duplo-900x1600.webp',
    },
    {
      titulo: 'Fabricação sob medida',
      descricao:
        'Com máquina de dobrar cano fabricamos escapamento do zero, ideal para carros antigos e projetos custom.',
      icone: 'Hammer',
      imagem: '/images/traseira-fiat-147-prata-escapamento-customizado-900x1600.webp',
    },
    {
      titulo: 'Solda e reparo',
      descricao:
        'Conserto de furos, vazamentos e barulhos no sistema de escape, com solda profissional.',
      icone: 'Zap',
      imagem: '/images/carro-cinza-elevado-trocando-escapamento-oficina-900x1600.webp',
    },
    {
      titulo: 'Protetor de cárter',
      descricao:
        'Instalação de protetor de cárter para proteger o motor em estradas e ruas esburacadas.',
      icone: 'Shield',
      imagem: '/images/duster-branco-elevado-em-oficina-mecanica-900x1600.webp',
    },
    {
      titulo: 'Engate',
      descricao: 'Instalação de engate para reboque, adaptado ao seu veículo com segurança.',
      icone: 'Truck',
      imagem: '/images/chevrolet-s10-prata-elevada-rampa-oficina-900x1600.webp',
    },
  ],
  processo: [
    {
      titulo: 'Avaliação do carro',
      descricao:
        'Você traz o veículo, colocamos no elevador e identificamos exatamente o que precisa.',
      icone: 'Car',
    },
    {
      titulo: 'Orçamento na hora',
      descricao: 'Explicamos o serviço, opções de material e fechamos o preço antes de começar.',
      icone: 'BadgeCheck',
    },
    {
      titulo: 'Execução na oficina',
      descricao:
        'Trabalho feito por quem entende do assunto, com peças de qualidade ou fabricação sob medida.',
      icone: 'Wrench',
    },
    {
      titulo: 'Entrega e teste',
      descricao: 'Você recebe o carro pronto, testado e com o som certo no escape.',
      icone: 'CheckCircle',
    },
  ],
  sobre: {
    titulo: 'Tradição em escapamento desde 1991',
    texto:
      'A Roboescap foi fundada em 1991 e desde então é referência em escapamento na região de Rio Claro. O foco sempre foi o sistema de escape — é o que move a empresa até hoje. Trabalhamos também com protetor de cárter e engate, sempre com material de qualidade. Nossa máquina de dobrar cano permite fabricar escapamento do zero, adaptar carros antigos e fazer esportivo personalizado para qualquer veículo.',
    imagem: '/images/jetta-branco-elevador-escapamento-roboescap-oficina-900x1600.webp',
    diferenciais: [
      {
        titulo: 'Mais de 35 anos no mercado',
        descricao: 'Desde 1991 atendendo a região com o mesmo compromisso.',
        icone: 'Award',
      },
      {
        titulo: 'Máquina de dobrar cano',
        descricao: 'Fabricamos escapamento do zero para qualquer carro, antigo ou custom.',
        icone: 'Hammer',
      },
      {
        titulo: 'Material de qualidade',
        descricao: 'Trabalhamos só com peças e canos que duram, sem improviso.',
        icone: 'ShieldCheck',
      },
      {
        titulo: 'Mão de obra especializada',
        descricao: 'Equipe focada exclusivamente em sistema de escape.',
        icone: 'Wrench',
      },
    ],
  },
  galeria: [
    {
      src: '/images/audi-a3-azul-elevador-oficina-escapamento-900x1600.webp',
      alt: 'Audi A3 azul no elevador da oficina',
    },
    {
      src: '/images/audi-a3-azul-traseira-escapamento-duplo-900x1600.webp',
      alt: 'Traseira de Audi A3 com escape duplo',
    },
    {
      src: '/images/caminhonete-vermelha-escapamento-cromado-elevador-oficina-900x1600.webp',
      alt: 'Caminhonete vermelha com escape cromado',
    },
    {
      src: '/images/carro-branco-elevado-escapamento-cromado-oficina-900x1600.webp',
      alt: 'Carro branco com escape cromado',
    },
    {
      src: '/images/carro-branco-elevado-reparacao-escapamento-oficina-900x1600.webp',
      alt: 'Reparo de escapamento em carro branco',
    },
    {
      src: '/images/carro-cinza-elevado-trocando-escapamento-oficina-900x1600.webp',
      alt: 'Troca de escapamento em carro cinza',
    },
    {
      src: '/images/carro-elevado-troca-escapamento-inox-900x1600.webp',
      alt: 'Troca de escapamento em inox',
    },
    {
      src: '/images/carro-prata-tubo-escape-cromado-elevador-900x1600.webp',
      alt: 'Carro prata com tubo de escape cromado',
    },
    {
      src: '/images/carro-preto-elevado-escapamento-cromado-oficina-900x1600.webp',
      alt: 'Carro preto com escape cromado',
    },
    {
      src: '/images/chevrolet-s10-prata-elevada-rampa-oficina-900x1600.webp',
      alt: 'Chevrolet S10 prata na rampa',
    },
    {
      src: '/images/civic-branco-elevador-oficina-escapamento-novo-900x1600.webp',
      alt: 'Honda Civic branco com escapamento novo',
    },
    {
      src: '/images/duster-branco-elevado-em-oficina-mecanica-900x1600.webp',
      alt: 'Renault Duster branco no elevador',
    },
    {
      src: '/images/escapamento-duplo-cromado-carro-elevado-900x1600.webp',
      alt: 'Escape duplo cromado em destaque',
    },
    {
      src: '/images/ford-vermelho-elevador-oficina-escapamentos-traseira-900x1600.webp',
      alt: 'Ford vermelho na oficina',
    },
    {
      src: '/images/mitsubishi-l200-triton-no-elevador-detalhe-900x1600.webp',
      alt: 'Mitsubishi L200 Triton no elevador',
    },
    {
      src: '/images/polo-preto-escapamento-duplo-elevador-automotivo-900x1600.webp',
      alt: 'VW Polo preto com escape duplo',
    },
    {
      src: '/images/ram-branca-elevada-escapamento-customizado-oficina-900x1600.webp',
      alt: 'Dodge Ram branca com escape customizado',
    },
    {
      src: '/images/traseira-fiat-147-prata-escapamento-customizado-900x1600.webp',
      alt: 'Fiat 147 prata com escape sob medida',
    },
  ],
  depoimentos: [],
  areas: [
    { nome: 'Rio Claro', descricao: 'Sede da oficina — Rua 14, 720, Consolação.' },
    { nome: 'Santa Gertrudes' },
    { nome: 'Ipeuna' },
    { nome: 'Ajapi' },
    { nome: 'Corumbataí' },
    { nome: 'Itirapina' },
    { nome: 'Araras' },
  ],
  faq: [
    {
      pergunta: 'Vocês fazem escapamento esportivo em qualquer carro?',
      resposta:
        'Sim. A adaptação é feita manualmente: retiramos o original e instalamos o esportivo, ou só o cano para aumentar o ronco. Funciona em praticamente qualquer veículo.',
    },
    {
      pergunta: 'Posso fabricar um escapamento do zero?',
      resposta:
        'Pode. Temos máquina de dobrar cano, o que permite fabricar do zero — ideal para carros antigos, projetos custom ou esportivo personalizado.',
    },
    {
      pergunta: 'Quanto tempo demora a troca de escapamento?',
      resposta:
        'Depende do veículo e do serviço. Trocas simples saem no mesmo dia. Para fabricação sob medida ou adaptação esportiva, combinamos o prazo após a avaliação.',
    },
    {
      pergunta: 'Vocês trabalham com protetor de cárter e engate também?',
      resposta:
        'Sim. Além do escapamento, instalamos protetor de cárter e engate para reboque, com material de qualidade.',
    },
    {
      pergunta: 'Atendem fora de Rio Claro?',
      resposta:
        'O serviço é mão de obra na oficina. Recebemos clientes de Rio Claro, Santa Gertrudes, Ipeuna, Ajapi, Corumbataí, Itirapina e Araras.',
    },
    {
      pergunta: 'Qual o horário de funcionamento?',
      resposta: 'Segunda a sexta das 8h às 17h45 e sábado das 8h às 11h45.',
    },
  ],
  cta_final: {
    titulo: 'Bora resolver o escape do seu carro?',
    texto:
      'Chama no WhatsApp ou passa na oficina. Tradição de quem trabalha com escapamento desde 1991.',
    botao: 'Falar no WhatsApp',
  },
  seo: {
    title: 'Roboescap | Escapamento em Rio Claro desde 1991',
    description:
      'Oficina especializada em escapamento em Rio Claro/SP. Troca, escape esportivo, fabricação sob medida, protetor de cárter e engate. Tradição desde 1991.',
    keywords:
      'escapamento, oficina de escapamento, escapamento esportivo, escapamento silencioso, escapamento furado, troca de escapamento, Rio Claro',
  },
};
