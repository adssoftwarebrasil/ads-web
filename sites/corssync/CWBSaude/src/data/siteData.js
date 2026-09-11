import {
  Baby,
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  ShieldCheck,
  UserRound,
  UsersRound,
} from 'lucide-react'

export const contact = {
  whatsapp: '5562992875512',
  whatsappDisplay: '(62) 99287-5512',
  secondaryWhatsapp: '5562991615576',
  secondaryWhatsappDisplay: '(62) 99161-5576',
  email: 'cassiowanbaster01@gmail.com',
  instagram: 'planodesaudegoianiaoficial',
  address: 'Av. Palmeiras, Qd. 01, Lt. 08, Sala 1 — Goiânia, GO',
  hours: '8h às 18h',
}

const quoteMessage = 'Olá! Vim pelo site da CWB Saúde e gostaria de receber uma cotação de plano de saúde.'

export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(quoteMessage)}`
export const secondaryWhatsappUrl = `https://wa.me/${contact.secondaryWhatsapp}?text=${encodeURIComponent(quoteMessage)}`

export const plans = [
  {
    icon: UserRound,
    eyebrow: 'Para você',
    title: 'Plano individual',
    description: 'Uma escolha orientada para cuidar da sua saúde em cada fase da vida.',
    tags: ['Adultos', 'Idosos'],
  },
  {
    icon: UsersRound,
    eyebrow: 'Para quem você ama',
    title: 'Plano familiar',
    description: 'Proteção para a família, com opções que também contemplam o público infantil.',
    tags: ['Famílias', 'Infantil'],
  },
  {
    icon: Building2,
    eyebrow: 'Para sua empresa',
    title: 'Plano empresarial',
    description: 'Soluções para contratação por CNPJ, alinhadas ao perfil da sua equipe.',
    tags: ['CNPJ', 'Equipes'],
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: 'Para sua profissão',
    title: 'Coletivo por adesão',
    description: 'Planos por profissão, sindicato ou entidade de classe para categorias elegíveis.',
    tags: ['Profissões', 'Sindicatos'],
  },
]

export const benefits = [
  {
    icon: ShieldCheck,
    title: 'Corretora autorizada Hapvida',
    text: 'Atendimento especializado para orientar sua contratação com segurança.',
  },
  {
    icon: HeartHandshake,
    title: 'Consultoria personalizada',
    text: 'Seu momento, suas prioridades e seu perfil orientam cada recomendação.',
  },
  {
    icon: Baby,
    title: 'Soluções para cada fase',
    text: 'Opções para crianças, adultos, idosos, famílias, profissionais e empresas.',
  },
]

export const faqItems = [
  {
    question: 'Quais tipos de plano a CWB Saúde comercializa?',
    answer:
      'A CWB Saúde trabalha com planos individuais, familiares, empresariais e coletivos por adesão, incluindo opções voltadas ao público infantil e idoso.',
  },
  {
    question: 'A empresa pode contratar um plano pelo CNPJ?',
    answer:
      'Sim. A consultoria da CWB Saúde inclui planos empresariais. A equipe avalia o perfil da empresa e orienta sobre as possibilidades de contratação.',
  },
  {
    question: 'O que é um plano coletivo por adesão?',
    answer:
      'É uma modalidade destinada a pessoas vinculadas a uma categoria profissional, sindicato ou entidade de classe. A elegibilidade é verificada durante o atendimento.',
  },
  {
    question: 'A cotação tem compromisso?',
    answer:
      'Não. Você pode solicitar uma cotação e conversar com a equipe para entender as opções antes de decidir.',
  },
  {
    question: 'Onde a CWB Saúde atende?',
    answer:
      'A área de atendimento informada contempla Goiânia e Aparecida de Goiânia, com atendimento rápido também pelo WhatsApp.',
  },
]
