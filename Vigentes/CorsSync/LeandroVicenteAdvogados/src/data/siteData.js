export const contact = {
  phoneDisplay: '(64) 99965-0262',
  phoneRaw: '5564999650262',
  email: 'leandro300@hotmail.com',
  instagram: 'leandrovicenteadvocacia',
  address: 'Avenida Inhumas, Q. 51, Lt. 342, s/n, Centro, Nazário - GO',
  hours: 'Segunda a sexta, das 8h às 18h',
}

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Áreas de atuação', href: '#areas' },
  { label: 'O escritório', href: '#escritorio' },
  { label: 'Atendimento', href: '#atendimento' },
]

export const practiceAreas = [
  {
    title: 'Direito Cível',
    description:
      'Orientação e atuação em relações contratuais, obrigações, cobranças, execuções e conflitos do cotidiano civil.',
    icon: 'scale',
    number: '01',
  },
  {
    title: 'Direito Trabalhista',
    description:
      'Análise e condução de reclamações trabalhistas e demais questões decorrentes das relações de trabalho.',
    icon: 'briefcase',
    number: '02',
  },
  {
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, auxílio-doença, BPC/LOAS e outros benefícios administrados pelo INSS.',
    icon: 'shield',
    number: '03',
  },
  {
    title: 'Direito Criminal',
    description:
      'Defesa técnica e acompanhamento jurídico em questões de natureza criminal, com atenção a cada etapa do caso.',
    icon: 'landmark',
    number: '04',
  },
  {
    title: 'Direito de Família',
    description:
      'Atuação em divórcios e outras demandas familiares que exigem orientação clara e condução cuidadosa.',
    icon: 'users',
    number: '05',
  },
  {
    title: 'Inventários e Sucessões',
    description:
      'Apoio jurídico na organização e regularização da transmissão patrimonial, judicial ou extrajudicial.',
    icon: 'file',
    number: '06',
  },
]

export const needPaths = [
  {
    eyebrow: 'Trabalho',
    title: 'Preciso analisar uma questão trabalhista',
    text: 'Reclamatórias e orientação sobre direitos decorrentes da relação de trabalho.',
    message: 'Olá! Gostaria de conversar sobre uma questão trabalhista.',
  },
  {
    eyebrow: 'INSS',
    title: 'Quero orientação sobre benefício previdenciário',
    text: 'Aposentadoria, auxílio-doença, BPC/LOAS e demais auxílios do INSS.',
    message: 'Olá! Gostaria de orientação sobre um benefício do INSS.',
  },
  {
    eyebrow: 'Família e patrimônio',
    title: 'Preciso resolver divórcio ou inventário',
    text: 'Condução jurídica em momentos que pedem clareza, discrição e segurança.',
    message: 'Olá! Gostaria de conversar sobre divórcio ou inventário.',
  },
]

export const createWhatsAppLink = (message) =>
  `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(message)}`

export const defaultWhatsAppLink = createWhatsAppLink(
  'Olá! Conheci o escritório pelo site e gostaria de solicitar atendimento jurídico.',
)

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`
