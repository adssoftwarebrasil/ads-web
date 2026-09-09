export const contact = {
  phoneDisplay: '(62) 99428-3094',
  phone: '+5562994283094',
  email: 'opticarenascergo@gmail.com',
  instagram: 'https://www.instagram.com/opticarenascertrindade/',
  facebook: 'https://www.facebook.com/opticarenascertrindade/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Coronel+Anacleto+390+Sala+02+Vila+Jardim+Salvador+Trindade+GO',
  address: 'Rua Coronel Anacleto, 390, sala 02, Vila Jardim Salvador, Trindade, GO',
}

const whatsappText = encodeURIComponent(
  'Olá! Encontrei a Óptica Renascer pelo site e gostaria de receber atendimento.',
)

const examText = encodeURIComponent(
  'Olá! Encontrei a Óptica Renascer pelo site e gostaria de agendar um exame de vista.',
)

export const links = {
  whatsapp: 'https://wa.me/5562994283094?text=' + whatsappText,
  exam: 'https://wa.me/5562994283094?text=' + examText,
}

export const navItems = [
  { label: 'Óculos', href: '#oculos' },
  { label: 'Lentes', href: '#lentes' },
  { label: 'A Renascer', href: '#renascer' },
  { label: 'Visite-nos', href: '#visite' },
]

export const lensSolutions = [
  {
    title: 'Lentes multifocais',
    text: 'Praticidade para enxergar com conforto em diferentes distâncias.',
  },
  {
    title: 'Filtro azul',
    text: 'Uma opção para a rotina com computador, celular e outras telas.',
  },
  {
    title: 'Antirreflexo',
    text: 'Mais nitidez visual e menos reflexos no dia a dia.',
  },
  {
    title: 'Transitions',
    text: 'Lentes que se adaptam à luminosidade dentro e fora de ambientes.',
  },
  {
    title: 'Polarizadas',
    text: 'Mais conforto visual para momentos de alta luminosidade.',
  },
  {
    title: 'Leitura e computador',
    text: 'Soluções pensadas para suas atividades e necessidades visuais.',
  },
]

export const faqs = [
  {
    question: 'Posso agendar exame de vista pela Óptica Renascer?',
    answer:
      'Sim. Fale com nossa equipe pelo WhatsApp para consultar os horários disponíveis e fazer seu agendamento.',
  },
  {
    question: 'Vocês trabalham com lentes multifocais e antirreflexo?',
    answer:
      'Sim. Também temos opções com filtro azul, Transitions e soluções para leitura e computador.',
  },
  {
    question: 'Há armações femininas, masculinas e infantis?',
    answer:
      'Sim. A loja oferece modelos para diferentes estilos, necessidades visuais e faixas de preço.',
  },
  {
    question: 'A ótica faz ajuste e manutenção de óculos?',
    answer:
      'Sim. Entre em contato ou visite a loja para que a equipe avalie o ajuste ou a manutenção necessária.',
  },
]
