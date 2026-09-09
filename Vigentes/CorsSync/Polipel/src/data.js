import {
  BadgeCheck,
  Box,
  BriefcaseBusiness,
  Clock3,
  Handshake,
  MapPinned,
  PackageCheck,
  Palette,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'

export const PHONE_DISPLAY = '(62) 99939-8017'
export const PHONE_LINK = 'tel:+5562999398017'
export const WHATSAPP_LINK =
  'https://wa.me/5562999398017?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Polipel%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.'
export const INSTAGRAM_LINK =
  'https://www.instagram.com/polipelpapelariaeembalagens/'
export const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Rua+Senador+Jaime+1198+Setor+Centro+Oeste+Goiania+GO+74550-185'

export const solutions = [
  {
    title: 'Embalagens',
    description:
      'Opções práticas e versáteis para proteger, organizar e apresentar os produtos do seu comércio.',
    icon: Sparkles,
    featured: true,
    label: 'Para o seu negócio',
  },
  {
    title: 'Embalagens para comércio',
    description: 'Sacolas, caixas e opções para proteger e apresentar produtos.',
    icon: ShoppingBag,
    label: 'Para vender',
  },
  {
    title: 'Delivery e encomendas',
    description: 'Embalagens práticas para entregas e pedidos do dia a dia.',
    icon: PackageCheck,
    label: 'Para entregar',
  },
  {
    title: 'Papelaria completa',
    description: 'Materiais para estudo, criação, organização e uso diário.',
    icon: Palette,
    label: 'Para criar',
  },
  {
    title: 'Material de escritório',
    description: 'Papel e itens essenciais para manter o trabalho em movimento.',
    icon: BriefcaseBusiness,
    label: 'Para organizar',
  },
]

export const benefits = [
  {
    title: 'Atendimento próximo',
    description: 'Orientação rápida para encontrar uma solução adequada à sua necessidade.',
    icon: Handshake,
  },
  {
    title: 'Variedade que resolve',
    description: 'Papelaria e embalagens reunidas em um só lugar para facilitar sua compra.',
    icon: Box,
  },
  {
    title: 'Qualidade e durabilidade',
    description: 'Produtos certificados e escolhidos para uma rotina mais segura e prática.',
    icon: BadgeCheck,
  },
  {
    title: 'Fácil acesso em Goiânia',
    description: 'Loja no Setor Centro-Oeste, com atendimento para Goiânia e região.',
    icon: MapPinned,
  },
  {
    title: 'Agilidade no atendimento',
    description: 'Uma equipe experiente e pronta para ajudar sem complicação.',
    icon: Clock3,
  },
]

