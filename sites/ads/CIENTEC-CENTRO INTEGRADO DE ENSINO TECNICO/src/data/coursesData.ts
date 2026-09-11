export interface ModuloDisciplina {
  modulo: string;
  cargaHoraria: string;
  disciplinas: string[];
}

export interface CourseFullData {
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  diferenciais: string[];
  metodologia: string;
  professores: string;
  estrutura: string;
  diplomacao: string;
  areasAtuacao: string[];
  malhaCurricular: ModuloDisciplina[];
  cargaHorariaTotal: string;
  duracao: string;
  images: string[];
}

const metodologiaPadrao =
  'O Cientec adota uma metodologia 100% prática, focada na vivência profissional. Cada curso é estruturado em formato modular, permitindo ao aluno consolidar o aprendizado etapa por etapa. As aulas combinam teoria sólida com práticas em laboratórios próprios, estudos de caso, simulações realísticas e visitas técnicas a hospitais, empresas e instituições parceiras da região.';

const professoresPadrao =
  'Corpo docente formado por profissionais atuantes no mercado, com pós-graduação, mestrado e doutorado em suas áreas. Todos os professores possuem experiência prática comprovada e mantêm vínculo ativo com o setor produtivo, garantindo um ensino atualizado e aplicável.';

const estruturaPadrao =
  'O Cientec possui estrutura física moderna em Sinop, com salas climatizadas, laboratórios específicos por área (anatomia, enfermagem, estética, radiologia, cirúrgico, agropecuária), equipamentos profissionais reais, manequins de simulação realística, biblioteca técnica e áreas de convivência para os alunos.';

const diplomacaoPadrao =
  'Ao concluir o curso, o aluno recebe Diploma reconhecido pelo MEC e registrado nos órgãos competentes (Conselho Nacional de Educação / Secretaria Estadual de Educação - MT), com validade em todo o território nacional. O diploma habilita o profissional ao exercício da profissão e ao registro no respectivo conselho de classe.';

export const coursesData: CourseFullData[] = [
  {
    title: 'Técnico em Enfermagem',
    description:
      'Forme-se para atuar em hospitais, clínicas e UBSs com habilidades práticas e teóricas sólidas.',
    longDescription:
      'O curso Técnico em Enfermagem do Cientec é o mais procurado da região e prepara o aluno para atuar com excelência ao lado de médicos e enfermeiros em hospitais, clínicas, UBSs, home care e centros cirúrgicos. Com ampla carga horária prática em laboratórios e estágio supervisionado em instituições parceiras como o Hospital Regional de Sinop (HR Sinop), o aluno desenvolve habilidades técnicas, humanização do cuidado e raciocínio clínico.',
    highlights: [
      'Curso mais procurado e com maior empregabilidade da região',
      'Estágio supervisionado em hospitais e UBSs parceiros',
      'Laboratórios próprios de enfermagem e anatomia',
      'Registro automático no COREN ao final do curso',
      'Aulas práticas com manequins de simulação realística',
    ],
    diferenciais: [
      'Parceria com o Hospital Regional de Sinop (HR Sinop) para estágios',
      'Laboratório próprio com leitos, manequins de simulação e materiais hospitalares reais',
      'Professores enfermeiros atuantes no mercado regional',
      'Suporte para registro no COREN-MT',
      'Programa de empregabilidade — indicação para vagas em hospitais parceiros',
    ],
    metodologia:
      'Formato modular com aulas teóricas integradas a práticas semanais em laboratório. A cada módulo concluído, o aluno aplica o conhecimento em simulações realísticas e, na fase final, em estágio supervisionado em instituições de saúde da região.',
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao:
      'Diploma de Técnico em Enfermagem reconhecido pelo MEC e registrado no Conselho Regional de Enfermagem (COREN-MT). Habilita ao exercício pleno da profissão em todo território nacional.',
    areasAtuacao: [
      'Hospitais públicos e privados',
      'Unidades Básicas de Saúde (UBS)',
      'Clínicas e consultórios',
      'Home care',
      'Centros cirúrgicos',
      'UTI (Unidade de Terapia Intensiva)',
      'Pronto-socorro e emergência',
      'Saúde do trabalhador em empresas',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo I — Fundamentos da Enfermagem',
        cargaHoraria: '480h',
        disciplinas: [
          'Anatomia e Fisiologia Humana',
          'Microbiologia e Parasitologia',
          'Fundamentos de Enfermagem',
          'Ética e Legislação em Enfermagem',
          'Biossegurança',
          'Psicologia Aplicada à Saúde',
        ],
      },
      {
        modulo: 'Módulo II — Saúde do Adulto e do Idoso',
        cargaHoraria: '480h',
        disciplinas: [
          'Enfermagem em Clínica Médica',
          'Enfermagem em Clínica Cirúrgica',
          'Farmacologia e Administração de Medicamentos',
          'Enfermagem em Saúde Mental',
          'Enfermagem na Saúde do Idoso',
          'Práticas em Laboratório',
        ],
      },
      {
        modulo: 'Módulo III — Saúde Materno-Infantil',
        cargaHoraria: '400h',
        disciplinas: [
          'Enfermagem em Saúde da Mulher',
          'Enfermagem Obstétrica',
          'Enfermagem Pediátrica e Neonatal',
          'Enfermagem em Saúde Coletiva',
          'Imunização e Sala de Vacinas',
        ],
      },
      {
        modulo: 'Módulo IV — Urgência, Emergência e Estágio',
        cargaHoraria: '440h',
        disciplinas: [
          'Enfermagem em Urgência e Emergência',
          'Enfermagem em UTI',
          'Enfermagem Cirúrgica e Centro Cirúrgico',
          'Estágio Supervisionado Hospitalar',
          'Estágio em UBS / Saúde Coletiva',
        ],
      },
    ],
    cargaHorariaTotal: '1.800 horas',
    duracao: '18 a 24 meses',
    images: [
      '/midia/alunas-enfermagem-hr-sinop.jpeg',
      '/midia/pratica-enfermagem-manequim.jpeg',
      '/midia/laboratorio-anatomia.jpeg',
      '/midia/alunas-jaleco-hospital.jpeg',
    ],
  },
  {
    title: 'Técnico em Estética',
    description:
      'Aprenda as mais modernas técnicas estéticas e entre em um mercado em constante crescimento.',
    longDescription:
      'O curso Técnico em Estética do Cientec forma profissionais capacitados a atuar em clínicas de estética, spas, salões de beleza e até em sua própria empresa. A formação abrange procedimentos faciais, corporais, capilares, terapias e protocolos modernos com equipamentos profissionais. O mercado da beleza é um dos que mais cresce no Brasil, com alta demanda em Sinop e região.',
    highlights: [
      'Mercado de alta demanda e crescimento contínuo',
      'Práticas com equipamentos profissionais reais',
      'Possibilidade de empreender no próprio negócio',
      'Procedimentos faciais, corporais e capilares',
      'Aulas em ambiente que simula clínicas estéticas',
    ],
    diferenciais: [
      'Laboratório de estética com equipamentos profissionais (alta frequência, microcorrentes, ultrassom)',
      'Aulas práticas com modelos reais sob supervisão',
      'Formação completa: facial + corporal + capilar',
      'Conteúdo atualizado com tendências do mercado',
      'Suporte para abertura de negócio próprio',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao: diplomacaoPadrao,
    areasAtuacao: [
      'Clínicas de estética e dermatologia',
      'Spas e centros de bem-estar',
      'Salões de beleza',
      'Consultórios próprios',
      'Centros de estética hospitalar',
      'Empreendimento próprio',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo I — Fundamentos da Estética',
        cargaHoraria: '320h',
        disciplinas: [
          'Anatomia e Fisiologia da Pele',
          'Cosmetologia',
          'Biossegurança em Estética',
          'Ética e Legislação',
          'Atendimento ao Cliente',
        ],
      },
      {
        modulo: 'Módulo II — Estética Facial',
        cargaHoraria: '320h',
        disciplinas: [
          'Limpeza de Pele Profunda',
          'Peelings Químicos',
          'Tratamentos de Acne e Manchas',
          'Microagulhamento',
          'Eletroterapia Facial',
        ],
      },
      {
        modulo: 'Módulo III — Estética Corporal e Capilar',
        cargaHoraria: '320h',
        disciplinas: [
          'Drenagem Linfática',
          'Massagem Modeladora',
          'Tratamento de Celulite e Gordura Localizada',
          'Depilação',
          'Tricologia e Tratamentos Capilares',
        ],
      },
      {
        modulo: 'Módulo IV — Práticas Integradas e Estágio',
        cargaHoraria: '240h',
        disciplinas: [
          'Protocolos Avançados',
          'Gestão de Clínica de Estética',
          'Marketing Pessoal',
          'Estágio Supervisionado',
        ],
      },
    ],
    cargaHorariaTotal: '1.200 horas',
    duracao: '15 a 18 meses',
    images: [
      '/midia/laboratorio-estetica.jpeg',
      '/midia/aula-pratica-estetica.jpeg',
    ],
  },
  {
    title: 'Técnico em Radiologia',
    description:
      'Capacite-se para operar equipamentos de diagnóstico por imagem com segurança e precisão.',
    longDescription:
      'O curso Técnico em Radiologia forma profissionais especialistas em diagnóstico por imagem, capacitados a operar equipamentos de raio-X, tomografia, ressonância magnética, mamografia e densitometria. A área é estratégica em hospitais, clínicas de diagnóstico e centros de saúde, com forte demanda no Mato Grosso.',
    highlights: [
      'Profissão regulamentada com registro no CRTR',
      'Atuação em hospitais e clínicas de diagnóstico',
      'Aulas práticas com equipamentos reais',
      'Carreira estável e bem remunerada',
      'Mercado com baixa concorrência regional',
    ],
    diferenciais: [
      'Laboratório com equipamento de raio-X para práticas',
      'Conteúdo sobre proteção radiológica conforme normas da CNEN',
      'Professores radiologistas atuantes',
      'Suporte para registro no CRTR-MT',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao:
      'Diploma de Técnico em Radiologia reconhecido pelo MEC e registrado no Conselho Regional dos Técnicos em Radiologia (CRTR). Habilita ao exercício profissional em todo o Brasil.',
    areasAtuacao: [
      'Hospitais públicos e privados',
      'Clínicas de diagnóstico por imagem',
      'Centros de mamografia',
      'Consultórios odontológicos (raio-X)',
      'Setores de radioterapia',
      'Medicina nuclear',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo I — Fundamentos',
        cargaHoraria: '400h',
        disciplinas: [
          'Anatomia Humana Aplicada à Radiologia',
          'Física das Radiações',
          'Proteção Radiológica',
          'Biossegurança',
          'Ética Profissional',
        ],
      },
      {
        modulo: 'Módulo II — Técnicas Radiológicas',
        cargaHoraria: '440h',
        disciplinas: [
          'Radiologia Convencional',
          'Radiologia Odontológica',
          'Posicionamento Radiológico',
          'Câmara Escura e Processamento',
        ],
      },
      {
        modulo: 'Módulo III — Diagnóstico Avançado',
        cargaHoraria: '440h',
        disciplinas: [
          'Tomografia Computadorizada',
          'Ressonância Magnética',
          'Mamografia',
          'Densitometria Óssea',
          'Ultrassonografia (introdução)',
        ],
      },
      {
        modulo: 'Módulo IV — Estágio Supervisionado',
        cargaHoraria: '320h',
        disciplinas: [
          'Estágio em Hospital',
          'Estágio em Clínica de Diagnóstico',
          'Projeto Integrador',
        ],
      },
    ],
    cargaHorariaTotal: '1.600 horas',
    duracao: '18 meses',
    images: [
      '/midia/pratica-radiologia.jpeg',
      '/midia/laboratorio-anatomia2.jpeg',
    ],
  },
  {
    title: 'Técnico em Segurança do Trabalho',
    description:
      'Garanta ambientes de trabalho mais seguros e conforme a legislação vigente.',
    longDescription:
      'O Técnico em Segurança do Trabalho é o profissional responsável por prevenir acidentes, identificar riscos e garantir o cumprimento das Normas Regulamentadoras (NRs) nas empresas. Atua em indústrias, construção civil, agronegócio, hospitais e qualquer empresa com mais de 50 funcionários. É uma carreira com excelente empregabilidade no Mato Grosso, polo do agronegócio e da construção.',
    highlights: [
      'Exigência legal em empresas — alta empregabilidade',
      'Atuação em indústrias, construção e agronegócio',
      'Conhecimento de todas as NRs do MTE',
      'Salário e estabilidade acima da média',
      'Visitas técnicas a empresas parceiras',
    ],
    diferenciais: [
      'Visitas técnicas regulares a indústrias da região',
      'Conteúdo focado nas NRs do agronegócio (MT é polo)',
      'Suporte para registro no MTE',
      'Professores engenheiros e técnicos atuantes',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao:
      'Diploma de Técnico em Segurança do Trabalho reconhecido pelo MEC. Permite registro profissional no Ministério do Trabalho e Emprego (MTE), habilitando o profissional como responsável técnico em empresas.',
    areasAtuacao: [
      'Indústrias',
      'Construção civil',
      'Agronegócio e fazendas',
      'Hospitais',
      'Empresas com SESMT',
      'Consultorias em SST',
      'Órgãos públicos',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo I — Fundamentos de SST',
        cargaHoraria: '320h',
        disciplinas: [
          'Introdução à Segurança do Trabalho',
          'Legislação Trabalhista e Previdenciária',
          'Normas Regulamentadoras (NRs) — Visão Geral',
          'Higiene Ocupacional',
        ],
      },
      {
        modulo: 'Módulo II — Riscos e Prevenção',
        cargaHoraria: '320h',
        disciplinas: [
          'Riscos Físicos, Químicos e Biológicos',
          'Ergonomia',
          'Prevenção e Combate a Incêndios',
          'EPI e EPC',
          'PPRA / PGR e PCMSO',
        ],
      },
      {
        modulo: 'Módulo III — Gestão e Práticas',
        cargaHoraria: '320h',
        disciplinas: [
          'Gestão de Riscos',
          'CIPA',
          'Investigação de Acidentes',
          'Primeiros Socorros',
          'Psicologia Aplicada à Segurança',
        ],
      },
      {
        modulo: 'Módulo IV — Estágio e Projeto',
        cargaHoraria: '240h',
        disciplinas: [
          'Estágio Supervisionado em Empresas',
          'Visitas Técnicas',
          'Elaboração de Laudos',
          'Projeto Integrador',
        ],
      },
    ],
    cargaHorariaTotal: '1.200 horas',
    duracao: '15 a 18 meses',
    images: [
      '/midia/visita-tecnica-seguranca-trabalho.jpeg',
    ],
  },
  {
    title: 'Técnico em Agropecuária',
    description:
      'Atue no agronegócio mato-grossense com formação técnica especializada.',
    longDescription:
      'O Mato Grosso é o maior produtor agropecuário do Brasil. O curso Técnico em Agropecuária do Cientec prepara profissionais para atuar em fazendas, cooperativas, agroindústrias e revendas, com conhecimento técnico em produção vegetal, animal, gestão rural e tecnologias modernas do agronegócio. Inclui aulas de campo, visitas a propriedades e manejo direto com animais e culturas.',
    highlights: [
      'Maior polo do agronegócio brasileiro — emprego garantido',
      'Aulas de campo em propriedades parceiras',
      'Formação em produção vegetal e animal',
      'Tecnologias e gestão de fazendas modernas',
      'Mercado em expansão constante',
    ],
    diferenciais: [
      'Aulas práticas em fazendas e propriedades parceiras',
      'Manejo direto com bovinos, equinos e culturas regionais (soja, milho, algodão)',
      'Conteúdo de agricultura de precisão',
      'Visitas técnicas a cooperativas e agroindústrias',
      'Professores agrônomos e zootecnistas',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao:
      'Diploma de Técnico em Agropecuária reconhecido pelo MEC e registrado no CREA-MT. Habilita o profissional como Responsável Técnico em propriedades rurais.',
    areasAtuacao: [
      'Fazendas e propriedades rurais',
      'Cooperativas agrícolas',
      'Agroindústrias',
      'Revendas de insumos e máquinas',
      'Assistência técnica',
      'Órgãos públicos (EMATER, INDEA)',
      'Empreendimento próprio',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo I — Fundamentos Agropecuários',
        cargaHoraria: '320h',
        disciplinas: [
          'Solos e Fertilidade',
          'Botânica e Fisiologia Vegetal',
          'Zootecnia Geral',
          'Topografia',
          'Mecanização Agrícola',
        ],
      },
      {
        modulo: 'Módulo II — Produção Vegetal',
        cargaHoraria: '360h',
        disciplinas: [
          'Olericultura e Fruticultura',
          'Grandes Culturas (Soja, Milho, Algodão)',
          'Manejo Integrado de Pragas',
          'Irrigação e Drenagem',
          'Agricultura de Precisão',
        ],
      },
      {
        modulo: 'Módulo III — Produção Animal',
        cargaHoraria: '360h',
        disciplinas: [
          'Bovinocultura de Corte e Leite',
          'Avicultura e Suinocultura',
          'Equideocultura',
          'Sanidade Animal',
          'Forragicultura e Pastagens',
        ],
      },
      {
        modulo: 'Módulo IV — Gestão e Estágio',
        cargaHoraria: '320h',
        disciplinas: [
          'Gestão e Administração Rural',
          'Empreendedorismo no Agro',
          'Legislação Ambiental',
          'Estágio Supervisionado em Fazenda',
          'Projeto Integrador',
        ],
      },
    ],
    cargaHorariaTotal: '1.360 horas',
    duracao: '18 meses',
    images: [
      '/midia/alunos-agropecuaria-cavalo.jpeg',
      '/midia/aula-campo-agropecuaria.jpeg',
      '/midia/aula-campo-cavalo.jpeg',
      '/midia/visita-tecnica-agropecuaria.jpeg',
      '/midia/selfie-alunos-agropecuaria.jpeg',
      '/midia/aula-agropecuaria-campo.jpeg',
    ],
  },
  {
    title: 'Técnico em Próteses Dentárias',
    description:
      'Desenvolva habilidades para produção de próteses dentárias com precisão laboratorial.',
    longDescription:
      'O Técnico em Próteses Dentárias é o profissional especializado na confecção de próteses, aparelhos ortodônticos e dispositivos odontológicos. Trabalha em laboratórios próprios ou em parceria com dentistas, com excelente remuneração e demanda crescente. O Cientec oferece formação prática completa com manipulação de materiais e técnicas avançadas.',
    highlights: [
      'Mercado em alta com baixa concorrência',
      'Possibilidade de laboratório próprio',
      'Trabalho manual e técnico de precisão',
      'Parceria com dentistas e clínicas odontológicas',
    ],
    diferenciais: [
      'Laboratório de prótese equipado para práticas reais',
      'Conteúdo de prótese estética e CAD/CAM (introdução)',
      'Professores protéticos atuantes',
      'Suporte para abertura de laboratório próprio',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao:
      'Diploma de Técnico em Próteses Dentárias reconhecido pelo MEC e habilitação para registro no CRO (como Técnico em Prótese Dentária — TPD).',
    areasAtuacao: [
      'Laboratórios de prótese dentária',
      'Clínicas odontológicas',
      'Hospitais (setor de buco-maxilo)',
      'Laboratório próprio',
      'Indústria de materiais odontológicos',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo I — Fundamentos',
        cargaHoraria: '320h',
        disciplinas: [
          'Anatomia Dental e Oclusão',
          'Materiais Dentários',
          'Biossegurança',
          'Ética Profissional',
        ],
      },
      {
        modulo: 'Módulo II — Próteses Totais e Parciais',
        cargaHoraria: '360h',
        disciplinas: [
          'Prótese Total',
          'Prótese Parcial Removível',
          'Moldagem e Modelos',
          'Articulação e Montagem de Dentes',
        ],
      },
      {
        modulo: 'Módulo III — Próteses Fixas e Estética',
        cargaHoraria: '360h',
        disciplinas: [
          'Prótese Fixa',
          'Coroas e Pontes',
          'Prótese sobre Implante',
          'Estética e Cerâmica',
        ],
      },
      {
        modulo: 'Módulo IV — Ortodontia e Estágio',
        cargaHoraria: '240h',
        disciplinas: [
          'Aparelhos Ortodônticos',
          'Placas e Contenções',
          'Gestão de Laboratório',
          'Estágio Supervisionado',
        ],
      },
    ],
    cargaHorariaTotal: '1.280 horas',
    duracao: '18 meses',
    images: [],
  },
  {
    title: 'Instrumentação Cirúrgica',
    description:
      'Capacitação especializada para atuar diretamente em centros cirúrgicos e salas de operação.',
    longDescription:
      'Capacitação específica para profissionais que desejam atuar como instrumentadores cirúrgicos em centros cirúrgicos hospitalares. O curso prepara o aluno para auxiliar diretamente o cirurgião, manipular instrumentos e materiais cirúrgicos, conhecer técnicas operatórias e garantir a assepsia da sala.',
    highlights: [
      'Atuação direta em centros cirúrgicos',
      'Aulas práticas com instrumental real',
      'Excelente remuneração em hospitais',
      'Capacitação rápida e direcionada',
    ],
    diferenciais: [
      'Laboratório de centro cirúrgico simulado',
      'Visitas técnicas a hospitais parceiros',
      'Conteúdo de cirurgia geral, ortopédica e ginecológica',
      'Professores enfermeiros cirúrgicos atuantes',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao:
      'Certificado de Capacitação em Instrumentação Cirúrgica emitido pelo Cientec, registrado e válido em todo território nacional para fins de comprovação profissional.',
    areasAtuacao: [
      'Centros cirúrgicos hospitalares',
      'Clínicas de cirurgia',
      'Hospitais públicos e privados',
      'Clínicas odontológicas com cirurgia',
      'Cirurgias estéticas',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo Único — Instrumentação Cirúrgica',
        cargaHoraria: '180h',
        disciplinas: [
          'Anatomia Cirúrgica',
          'Biossegurança e Assepsia',
          'Identificação e Manuseio de Instrumentais',
          'Técnicas Operatórias',
          'Cirurgia Geral, Ortopédica e Ginecológica',
          'Posicionamento do Paciente',
          'Práticas em Centro Cirúrgico Simulado',
        ],
      },
    ],
    cargaHorariaTotal: '180 horas',
    duracao: '4 a 6 meses',
    images: [
      '/midia/pratica-instrumentacao-cirurgica.jpeg',
      '/midia/pratica-instrumentacao-pano.jpeg',
      '/midia/visita-centro-cirurgico.jpeg',
      '/midia/alunos-centro-cirurgico.jpeg',
    ],
  },
  {
    title: 'Sala de Vacinas',
    description:
      'Formação completa para aplicação e gerenciamento de vacinas com técnicas seguras.',
    longDescription:
      'Capacitação completa para profissionais que desejam atuar em salas de vacinação de UBSs, clínicas particulares ou empresas. O curso aborda imunologia, cadeia de frio, técnicas de aplicação, controle de eventos adversos e o calendário vacinal completo do Programa Nacional de Imunizações (PNI).',
    highlights: [
      'Calendário vacinal completo do PNI',
      'Técnicas seguras de aplicação',
      'Gerenciamento da cadeia de frio',
      'Atuação em UBSs e clínicas particulares',
    ],
    diferenciais: [
      'Conteúdo alinhado com o PNI atualizado',
      'Práticas com materiais reais',
      'Foco em segurança e farmacovigilância',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao: diplomacaoPadrao,
    areasAtuacao: [
      'UBS e Postos de Saúde',
      'Clínicas particulares de vacinação',
      'Empresas (vacinação ocupacional)',
      'Hospitais',
      'Atendimento domiciliar',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo Único — Sala de Vacinas',
        cargaHoraria: '80h',
        disciplinas: [
          'Imunologia Básica',
          'Calendário Vacinal — PNI',
          'Cadeia de Frio',
          'Técnicas de Aplicação',
          'Eventos Adversos Pós-Vacinação (EAPV)',
          'Registro e Sistemas de Informação (SI-PNI)',
          'Práticas Supervisionadas',
        ],
      },
    ],
    cargaHorariaTotal: '80 horas',
    duracao: '2 a 3 meses',
    images: ['/midia/laboratorio-vacinas.jpeg'],
  },
  {
    title: 'Atendimento Pré-Hospitalar',
    description:
      'Aprenda a salvar vidas com técnicas de primeiros socorros e atendimento de emergência.',
    longDescription:
      'Capacitação em Atendimento Pré-Hospitalar (APH) para profissionais que desejam atuar em SAMU, Bombeiros, ambulâncias particulares, eventos e empresas. O curso aborda avaliação primária, manobras de RCP, imobilizações, transporte de vítimas e emergências clínicas e traumáticas.',
    highlights: [
      'Capacitação para SAMU, Bombeiros e ambulâncias',
      'Práticas com manequins e cenários simulados',
      'Manobras de RCP e DEA',
      'Imobilização e transporte de vítimas',
    ],
    diferenciais: [
      'Simulações realísticas de acidentes',
      'Prancha rígida, talas e equipamentos de resgate reais',
      'Professores socorristas atuantes',
      'Conteúdo conforme protocolos PHTLS / AHA',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao: diplomacaoPadrao,
    areasAtuacao: [
      'SAMU 192',
      'Corpo de Bombeiros',
      'Ambulâncias particulares',
      'Eventos esportivos e shows',
      'Empresas (brigadas de emergência)',
      'Resgate em rodovias',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo Único — APH',
        cargaHoraria: '120h',
        disciplinas: [
          'Avaliação Primária e Secundária',
          'Suporte Básico de Vida (BLS)',
          'RCP e Uso do DEA',
          'Emergências Clínicas',
          'Emergências Traumáticas',
          'Imobilização e Transporte',
          'Triagem em Múltiplas Vítimas',
          'Práticas e Simulações',
        ],
      },
    ],
    cargaHorariaTotal: '120 horas',
    duracao: '3 a 4 meses',
    images: [
      '/midia/pratica-pre-hospitalar.jpeg',
      '/midia/pratica-primeiros-socorros.jpeg',
    ],
  },
  {
    title: 'Aplicação de Injetáveis',
    description:
      'Domine as técnicas corretas para aplicação segura de medicamentos injetáveis.',
    longDescription:
      'Capacitação especializada em aplicação de medicamentos injetáveis por via intramuscular, subcutânea, intradérmica e endovenosa. O curso é direcionado a técnicos em enfermagem e profissionais da saúde que desejam atuar em farmácias, clínicas, postos de saúde e atendimento domiciliar.',
    highlights: [
      'Técnicas para todas as vias de administração',
      'Foco em segurança do paciente',
      'Demanda crescente em farmácias e clínicas',
      'Práticas com materiais reais',
    ],
    diferenciais: [
      'Práticas supervisionadas com aplicação real',
      'Conteúdo sobre farmacologia aplicada',
      'Certificado reconhecido para atuação em farmácias',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao: diplomacaoPadrao,
    areasAtuacao: [
      'Farmácias e drogarias',
      'Clínicas e consultórios',
      'UBS / Postos de saúde',
      'Atendimento domiciliar (home care)',
      'Empresas de saúde ocupacional',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo Único — Aplicação de Injetáveis',
        cargaHoraria: '60h',
        disciplinas: [
          'Farmacologia Básica',
          'Vias de Administração',
          'Anatomia Aplicada',
          'Cálculo de Medicação',
          'Biossegurança',
          'Aplicação IM, SC, ID e EV',
          'Práticas Supervisionadas',
        ],
      },
    ],
    cargaHorariaTotal: '60 horas',
    duracao: '2 meses',
    images: [
      '/midia/pratica-injetaveis.jpeg',
      '/midia/certificado-injetaveis.jpeg',
    ],
  },
  {
    title: 'Socorrista e Resgatista',
    description:
      'Esteja preparado para atuar em situações de emergência e salvar vidas com competência.',
    longDescription:
      'Capacitação intensiva para socorristas e resgatistas que desejam atuar em situações de emergência, salvamento e resgate. Aborda técnicas de salvamento aquático, em altura, veicular e em ambientes confinados, além de primeiros socorros completos.',
    highlights: [
      'Técnicas de resgate em múltiplos cenários',
      'Salvamento aquático, veicular e em altura',
      'Atuação em Bombeiros civis e brigadas',
      'Práticas realísticas',
    ],
    diferenciais: [
      'Treinamento físico e técnico integrado',
      'Equipamentos de resgate profissionais',
      'Simulações de cenários reais',
      'Professores bombeiros e socorristas atuantes',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao: diplomacaoPadrao,
    areasAtuacao: [
      'Corpo de Bombeiros Civil',
      'Brigadas de incêndio em empresas',
      'Salva-vidas (clubes, parques aquáticos)',
      'Resgate em rodovias',
      'Eventos esportivos',
      'Defesa Civil',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo Único — Socorrista e Resgatista',
        cargaHoraria: '160h',
        disciplinas: [
          'Primeiros Socorros Avançados',
          'Salvamento Aquático',
          'Salvamento Veicular',
          'Salvamento em Altura',
          'Resgate em Ambientes Confinados',
          'Combate a Incêndio',
          'Triagem e Múltiplas Vítimas',
          'Práticas e Simulações',
        ],
      },
    ],
    cargaHorariaTotal: '160 horas',
    duracao: '4 meses',
    images: [
      '/midia/pratica-pre-hospitalar.jpeg',
      '/midia/pratica-primeiros-socorros.jpeg',
    ],
  },
  {
    title: 'Enfermagem do Trabalho',
    description:
      'Especialize-se em saúde ocupacional e cuidado preventivo dentro das empresas.',
    longDescription:
      'Especialização em Enfermagem do Trabalho voltada para técnicos e enfermeiros que desejam atuar em SESMT, ambulatórios empresariais e medicina ocupacional. Aborda legislação trabalhista, NR-7 (PCMSO), ergonomia, exames ocupacionais e ações de prevenção.',
    highlights: [
      'Atuação em empresas de médio e grande porte',
      'Salário acima da média da enfermagem',
      'Foco em prevenção e ergonomia',
      'Conteúdo conforme NRs do MTE',
    ],
    diferenciais: [
      'Conteúdo alinhado às NRs (NR-7, NR-9, NR-17)',
      'Foco no agronegócio e indústria mato-grossense',
      'Professores enfermeiros do trabalho atuantes',
    ],
    metodologia: metodologiaPadrao,
    professores: professoresPadrao,
    estrutura: estruturaPadrao,
    diplomacao:
      'Certificado de Capacitação em Enfermagem do Trabalho válido para registro de qualificação no COREN-MT.',
    areasAtuacao: [
      'SESMT de empresas',
      'Ambulatórios ocupacionais',
      'Clínicas de medicina do trabalho',
      'Indústrias e agroindústrias',
      'Hospitais (setor de saúde ocupacional)',
    ],
    malhaCurricular: [
      {
        modulo: 'Módulo Único — Enfermagem do Trabalho',
        cargaHoraria: '120h',
        disciplinas: [
          'Legislação Trabalhista e Previdenciária',
          'Normas Regulamentadoras (NRs)',
          'PCMSO e PPRA / PGR',
          'Exames Ocupacionais',
          'Ergonomia e LER/DORT',
          'Vacinação Ocupacional',
          'Investigação de Acidentes',
        ],
      },
    ],
    cargaHorariaTotal: '120 horas',
    duracao: '3 a 4 meses',
    images: [],
  },
];

export function findCourseData(title: string): CourseFullData | undefined {
  return coursesData.find((c) => c.title === title);
}
