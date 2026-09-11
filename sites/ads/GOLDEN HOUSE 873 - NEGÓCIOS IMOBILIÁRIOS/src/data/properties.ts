export interface Property {
  id: string;
  titulo: string;
  tipo: 'venda' | 'aluguel' | 'venda_ou_aluguel';
  tipoImovel: 'Casa' | 'Apartamento' | 'Village';
  telefoneContato: string;
  localizacao: {
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  detalhes: {
    quartos: number;
    suites: number;
    banheiros: number;
    vagas: number;
    areaConstruida: string;
    areaTerreno?: string;
  };
  precos: {
    venda?: number;
    aluguel?: number;
    condominio?: number;
    iptu?: number;
  };
  descricaoCurta: string;
  descricaoCompleta: string;
  imagens: string[];
  comodidades: string[];
  diferenciais: string[];
  condominio: {
    nome?: string;
    lazer: string[];
  };
  destaque: boolean;
  disponivel: boolean;
}

export const properties: Property[] = [
  {
    id: 'alphaville-1-salvador',
    titulo: 'Espetacular Casa em Alphaville 1',
    tipo: 'venda',
    tipoImovel: 'Casa',
    telefoneContato: '557193469993',
    localizacao: {
      endereco: 'Alphaville 1',
      bairro: 'Alphaville',
      cidade: 'Salvador',
      estado: 'Bahia'
    },
    detalhes: {
      quartos: 5,
      suites: 4,
      banheiros: 6,
      vagas: 5,
      areaConstruida: '700m²',
      areaTerreno: '800m²'
    },
    precos: {
      venda: 5000000,
      condominio: 2100,
      iptu: 1700
    },
    descricaoCurta: 'Mansão com 5/4, energia solar e lazer privativo completo em Alphaville 1.',
    descricaoCompleta: 'Belíssima residência de alto padrão com 700m² de área construída. Possui 5 quartos (4 suítes), suíte master com banheira e closet. Home office, sala em 3 ambientes, espaço gourmet, piscina e churrasqueira. Diferenciais: Dependência completa, energia solar e 5 vagas de garagem.',
    imagens: [
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.56.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.57%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.57%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.57%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.57%20%284%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.57%20%285%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.57%20%286%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.57.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.58%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.58%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.58%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.58%20%284%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FAlphaville%2FWhatsApp%20Image%202026-02-10%20at%2010.27.58.jpeg'

    ],
    comodidades: ['Suíte Master com Banheira', 'Closet', 'Home Office', 'Espaço Gourmet', 'Energia Solar', 'Dependência Completa'],
    diferenciais: ['Alto Padrão', 'Energia Solar', 'Ampla Garagem'],
    condominio: { nome: 'Alphaville 1', lazer: ['Segurança 24h', 'Clube Completo'] },
    destaque: true,
    disponivel: true
  },
  {
    id: 'village-new-joanes-buraquinho',
    titulo: 'Village Moderno em Buraquinho',
    tipo: 'aluguel',
    tipoImovel: 'Village',
    telefoneContato: '557193469993',
    localizacao: {
      endereco: 'New Joanes',
      bairro: 'Buraquinho',
      cidade: 'Lauro de Freitas',
      estado: 'Bahia'
    },
    detalhes: {
      quartos: 2,
      suites: 2,
      banheiros: 3,
      vagas: 1,
      areaConstruida: '98m²',
      areaTerreno: '20m² (Privativa)'
    },
    precos: {
      aluguel: 6200
    },
    descricaoCurta: 'Village mobiliado com ar-condicionado e área externa privativa.',
    descricaoCompleta: 'Excelente village com 98m² muito bem distribuído. 2 suítes, cozinha com armários planejados, cooktop e forno embutido. Área externa privativa com pergolado. Ar-condicionado em todos os cômodos.',
    imagens: [
              'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FCapa-Village-Moderno-em-Buraquinho.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.30%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.30%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.30.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.31%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.31%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.31%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.31%20%284%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.31.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.32%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.32%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.32%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.32%20%284%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20New%2FWhatsApp%20Image%202026-02-02%20at%2012.10.32.jpeg'
    ],
    comodidades: ['Armários Planejados', 'Ar-condicionado', 'Pergolado', 'Cooktop e Forno'],
    diferenciais: ['Taxas Inclusas', 'Pronto para morar'],
    condominio: { lazer: ['Segurança'] },
    destaque: false,
    disponivel: true
  },
  {
    id: 'unique-residence-priscila-dutra',
    titulo: 'Unique Residence - Priscila Dutra',
    tipo: 'venda',
    tipoImovel: 'Apartamento',
    telefoneContato: '557193469993',
    localizacao: {
      endereco: 'Av. Priscila Dutra',
      bairro: 'Vilas do Atlântico',
      cidade: 'Lauro de Freitas',
      estado: 'Bahia'
    },
    detalhes: {
      quartos: 3,
      suites: 2,
      banheiros: 3,
      vagas: 2,
      areaConstruida: '95m²'
    },
    precos: {
      venda: 768000
    },
    descricaoCurta: 'Apartamento 3/4 com infraestrutura de lazer espetacular na Priscila Dutra.',
    descricaoCompleta: 'Apartamento com planta bem distribuída, varanda, sala ampla, cozinha e área de serviço. Localização estratégica próximo a Vilas, Miragem e Buraquinho.',
    imagens: [
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.37%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.37.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.38%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.38%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.38%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.38%20%284%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.38.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.39%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.39%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.39%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.39%20%284%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Unique%2FWhatsApp%20Image%202026-02-03%20at%2019.01.39.jpeg'
    ],
    comodidades: ['Varanda', 'Área de Serviço', 'Sala Ampla'],
    diferenciais: ['Localização Estratégica', 'Infraestrutura de Clube'],
    condominio: { 
      nome: 'Unique Residence', 
      lazer: ['Parque Aquático', 'Academia', 'Pet Place', 'Quadra de Areia', 'Ciclovia', 'Portaria 24h'] 
    },
    destaque: true,
    disponivel: true
  },

  {
    id: 'casa-duplex-buraquinho-venda-aluguel',
    titulo: 'Casa Duplex em Buraquinho',
    tipo: 'venda_ou_aluguel',
    tipoImovel: 'Casa',
    telefoneContato: '557193469993',
    localizacao: {
      endereco: 'Buraquinho',
      bairro: 'Buraquinho',
      cidade: 'Lauro de Freitas',
      estado: 'Bahia'
    },
    detalhes: {
      quartos: 3,
      suites: 3,
      banheiros: 4,
      vagas: 2,
      areaConstruida: '108,42m²',
      areaTerreno: '185m²'
    },
    precos: {
      venda: 890000,
      aluguel: 6500
    },
    descricaoCurta: '3 suítes com varanda gourmet e amplo garden privativo.',
    descricaoCompleta: 'Casa duplex com 3 suítes, varanda gourmet, lavabo e área externa privativa de 60m².',
    imagens: [
              'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FCapa-Duplex-em-Buraquinho.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.18.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.19%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.19%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.19%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.19.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.20%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.20.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.21%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.21%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.21%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.21.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.22%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.22%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.22%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.22.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-01-31%20at%2011.24.23.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20essence_%2FWhatsApp%20Image%202026-02-06%20at%2007.22.11.jpeg'

    ],
    comodidades: ['Varanda Gourmet', '3 Suítes', 'Garden 60m²'],
    diferenciais: ['Lazer Completo', 'Segurança 24h'],
    condominio: { lazer: ['Lazer Completo', 'Portaria 24h'] },
    destaque: false,
    disponivel: true
  },

  {
    id: 'casa-duplex-foz-do-joanes',
    titulo: 'Casa Duplex no Foz do Joanes',
    tipo: 'venda',
    tipoImovel: 'Casa',
    telefoneContato: '557193469993',
    localizacao: {
      endereco: 'Foz do Joanes',
      bairro: 'Buraquinho',
      cidade: 'Lauro de Freitas',
      estado: 'Bahia'
    },
    detalhes: {
      quartos: 3,
      suites: 3,
      banheiros: 4,
      vagas: 2,
      areaConstruida: '106,33m²',
      areaTerreno: '209m²'
    },
    precos: {
      venda: 870000
    },
    descricaoCurta: 'Casa com Garden Privativo de 77m² e Varanda Gourmet.',
    descricaoCompleta: 'Excelente casa duplex no condomínio Foz do Joanes. Possui 3 suítes, sala de estar e jantar integradas, cozinha ampla e lavabo. O grande destaque é a área externa privativa (garden) de 77m² e a varanda gourmet.',
    imagens: [
              'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FCapa-Casa-Duplex-no-foz-do-Joanes.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.51%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.51%20%282%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.51.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.52%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.52.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.54%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.54%20%283%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.54%20%284%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.55%20%281%29.jpeg',
              'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20House_%2FWhatsApp%20Image%202026-01-30%20at%2007.55.55.jpeg'
    ],
    comodidades: ['Varanda Gourmet', 'Garden de 77m²', 'Cozinha Ampla', 'Sala Integrada'],
    diferenciais: ['Garden Privativo', 'Condomínio Foz do Joanes', 'Próximo à Praia'],
    condominio: { 
      nome: 'Foz do Joanes',
      lazer: ['Lazer Completo', 'Segurança 24h'] 
    },
    destaque: true,
    disponivel: true
  },

  {
    id: 'casa-moderna-foz-joanes-buraquinho',
    titulo: 'Casa no Foz do Joanes - Buraquinho',
    tipo: 'venda',
    tipoImovel: 'Casa',
    telefoneContato: '557193469993',
    localizacao: {
      endereco: 'Foz do Joanes',
      bairro: 'Buraquinho',
      cidade: 'Lauro de Freitas',
      estado: 'Bahia'
    },
    detalhes: {
      quartos: 4,
      suites: 4,
      banheiros: 4,
      vagas: 2,
      areaConstruida: '170m²'
    },
    precos: {
      venda: 1080000
    },
    descricaoCurta: 'Casa moderna com 4 suítes, excelente acabamento e espaço gourmet.',
    descricaoCompleta: 'Casa moderna com excelente acabamento no condomínio Foz do Joanes. Possui 4 suítes, 2 vagas de garagem e espaço gourmet. O condomínio oferece infraestrutura completa com piscina, sauna, espaço gourmet, parquinho e portaria 24 horas.',
    imagens: [
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FCapa-Casa-no-Foz-do-Joanes-Buraquinho.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2FGenerated%20Image%20February%2004%2C%202026%20-%202_15AM.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2FIMG_2349_Original.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2FIMG_2350_Original.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2FIMG_2357_Original.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2FIMG_2358_Original.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_13_35969393_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_14_35969417_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_15_35969391_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_15_35969418_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_16_35969387_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_17_35969420_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_18_35969383_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_18_35969421_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_1_35969381_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_1_35969386_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_1_35969423_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_20_35969385_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_2_35969390_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_3_35969392_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_4_35969402_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_4_35969405_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_6_35969404_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_6_35969407_g.jpg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2FIMOVEIS%2FCasa%20Joanes%20Exclusive_%2Ffoto_7_35969408_g.jpg'
    ],
    comodidades: ['Espaço Gourmet', '4 Suítes', 'Casa Moderna', 'Excelente Acabamento'],
    diferenciais: ['Casa Moderna', 'Excelente Acabamento', 'Condomínio com Lazer Completo'],
    condominio: {
      nome: 'Foz do Joanes',
      lazer: ['Piscina', 'Sauna', 'Espaço Gourmet', 'Parquinho', 'Portaria 24h']
    },
    destaque: true,
    disponivel: true
  },
  {
    id: 'apartamento-rio-vermelho-1q-aluguel',
    titulo: 'Apartamento Rio Vermelho - 1/4',
    tipo: 'aluguel',
    tipoImovel: 'Apartamento',
    telefoneContato: '557193469993',
    localizacao: {
      endereco: 'Rio Vermelho',
      bairro: 'Rio Vermelho',
      cidade: 'Salvador',
      estado: 'Bahia'
    },
    detalhes: {
      quartos: 1,
      suites: 1,
      banheiros: 1,
      vagas: 1,
      areaConstruida: '38m²'
    },
    precos: {
      aluguel: 3300,
      condominio: 618.12,
      iptu: 931.12
    },
    descricaoCurta: 'Apartamento 1/4 semi mobiliado com infraestrutura completa em Rio Vermelho.',
    descricaoCompleta: 'Apartamento bem distribuído com 38m², semi mobiliado, ideal para quem busca praticidade e conforto. Possui 1 quarto, ar-condicionado e 1 vaga de garagem. O condomínio oferece excelente infraestrutura com academia, piscina coberta, salão de festas, lavanderia, depósito, elevadores e portaria 24h, proporcionando segurança e comodidade no dia a dia.',
    imagens: [
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2FCapa-Novo-Empreendimento.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F7.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F8%20%281%29.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F9.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F10%20%281%29.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F11%20%281%29.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F13%20%281%29.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F13.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F15.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F16.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F17.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F18.jpeg',
      'https://storage.lucasmendes.dev/site-sp/golden-house%2Fgolden-alteracao%2FNovo-Empreendimento%2F19.jpeg'
    ],
    comodidades: ['Ar-condicionado', 'Semi Mobiliado', 'Vaga de Garagem', '1 Quarto'],
    diferenciais: ['Condomínio Completo', 'Excelente Infraestrutura', 'Portaria 24h'],
    condominio: {
      lazer: ['Academia', 'Piscina Coberta', 'Salão de Festas', 'Lavanderia', 'Depósito', 'Elevadores', 'Portaria 24h']
    },
    destaque: true,
    disponivel: true
  }
];