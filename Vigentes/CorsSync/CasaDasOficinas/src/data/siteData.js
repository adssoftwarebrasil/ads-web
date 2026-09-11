import { Boxes, CarFront, Wrench } from 'lucide-react'

export const whatsappNumber = '5575992487220'
export const whatsappMessage =
  'Olá! Vim pelo site da Casa das Oficinas e gostaria de atendimento.'
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

export const serviceTracks = [
  {
    id: 'oficinas',
    eyebrow: 'Para oficinas',
    title: 'Distribuição que acompanha o ritmo do seu box',
    description:
      'Encontre peças para o dia a dia da oficina com atendimento direto e uma equipe pronta para ajudar na identificação do que você precisa.',
    cta: 'Pedir uma cotação',
    Icon: Boxes,
  },
  {
    id: 'motoristas',
    eyebrow: 'Para seu carro',
    title: 'Autopeças e acessórios para nacionais e importados',
    description:
      'Compra no varejo com orientação no balcão, variedade de itens e atendimento por telefone ou WhatsApp.',
    cta: 'Consultar uma peça',
    Icon: CarFront,
  },
  {
    id: 'servicos',
    eyebrow: 'Para manutenção',
    title: 'Cuidado automotivo do check-up ao reparo',
    description:
      'Serviços de manutenção preventiva e reparos para manter seu veículo seguro, confiável e pronto para rodar.',
    cta: 'Falar sobre meu carro',
    Icon: Wrench,
  },
]

export const serviceTags = [
  'Manutenção preventiva',
  'Reparos automotivos',
  'Freios e suspensão',
  'Troca de óleo',
  'Revisão automotiva',
  'Injeção eletrônica',
  'Elétrica automotiva',
  'Alinhamento e balanceamento',
]

export const coverageCities = [
  'Feira de Santana',
  'Amélia Rodrigues',
  'Conceição da Feira',
  'Conceição do Jacuípe',
  'São Gonçalo dos Campos',
  'Tanquinho',
  'Anguera',
  'Antônio Cardoso',
  'Água Fria',
  'Candeal',
  'Coração de Maria',
  'Ipecaetá',
  'Irará',
  'Santa Bárbara',
]
