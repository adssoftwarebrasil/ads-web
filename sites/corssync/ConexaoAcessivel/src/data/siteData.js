import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  GraduationCap,
  HardHat,
  Home,
  Hospital,
  Landmark,
  Layers3,
  MapPinned,
  PackageCheck,
  Route,
  SearchCheck,
  UsersRound,
} from 'lucide-react'

import banheiro from '../assets/banheiro-acessivel.png'
import edificioInstitucional from '../assets/edificacao-institucional.webp'
import placasTateis from '../assets/placas-tateis-braille.jpeg'
import projetoAcesso from '../assets/projeto-acesso-estacionamento.jpg'
import projetoEstacionamento from '../assets/projeto-estacionamento.jpg'
import projetoCalcadaAcessivel from '../assets/projeto-calcada-acessivel.png'
import pisoTatil from '../assets/piso-tatil-interno.jpg'
import sinalizacaoEstacionamento from '../assets/sinalizacao-estacionamento.jpg'
import passarelaElevador from '../assets/passarela-elevador.webp'
import mapaTatilHumanizado from '../assets/mapa-tatil-humanizado.jpeg'
import mobilidadeRampa from '../assets/mobilidade-rampa-acessivel.jpeg'
import mobilidadeEscada from '../assets/mobilidade-escada-segura.jpeg'

export const whatsappUrl =
  'https://wa.me/5562982760874?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20em%20acessibilidade%20arquitet%C3%B4nica.'

export const solutions = [
  {
    number: '01',
    icon: DraftingCompass,
    title: 'Projetos de acessibilidade',
    description:
      'Soluções arquitetônicas personalizadas para adequar espaços habitacionais, comerciais e institucionais à NBR 9050 e às demais normas técnicas.',
    featured: true,
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Laudos técnicos',
    description:
      'Documentação detalhada das condições de acessibilidade da edificação para apoiar regularizações, licenciamentos e certificações.',
  },
  {
    number: '03',
    icon: Route,
    title: 'Consultoria especializada',
    description:
      'Orientação técnica desde a concepção do projeto para decisões mais seguras, viáveis e com menos retrabalho.',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Treinamentos e palestras',
    description:
      'Capacitação em acessibilidade arquitetônica para arquitetos, engenheiros, equipes técnicas e gestores.',
  },
]

export const methodSteps = [
  {
    icon: SearchCheck,
    title: 'Leitura do espaço',
    text: 'Entendimento do uso, das pessoas e das barreiras existentes ou previstas.',
  },
  {
    icon: MapPinned,
    title: 'Diagnóstico técnico',
    text: 'Análise dos percursos, acessos, ambientes, mobiliários e equipamentos.',
  },
  {
    icon: Layers3,
    title: 'Solução integrada',
    text: 'Definição de recomendações e detalhes compatíveis com a realidade do projeto.',
  },
  {
    icon: BadgeCheck,
    title: 'Plano de ação',
    text: 'Organização das adequações por prioridade para orientar decisões e execução.',
  },
]

export const audiences = [
  { icon: HardHat, title: 'Construtoras e incorporadoras' },
  { icon: DraftingCompass, title: 'Arquitetos e engenheiros' },
  { icon: Building2, title: 'Empresas e indústrias' },
  { icon: Landmark, title: 'Faculdades e instituições' },
  { icon: Hospital, title: 'Clínicas e hospitais' },
  { icon: UsersRound, title: 'Condomínios e administradoras' },
  { icon: Home, title: 'Residências' },
  { icon: BookOpenCheck, title: 'Gestores e equipes técnicas' },
]

export const galleryItems = [
  {
    image: projetoEstacionamento,
    alt: 'Vista superior de projeto arquitetônico de estacionamento com rotas acessíveis',
    label: 'Planejamento de rotas',
    className: 'gallery-card--wide',
  },
  {
    image: projetoCalcadaAcessivel,
    alt: 'Projeto de calçada acessível com rota tátil, travessia sinalizada e rebaixamento de guia',
    label: 'Projeto para Calçada Acessível',
    className: 'gallery-card--wide',
  },
  {
    image: pisoTatil,
    alt: 'Piso tátil direcional e de alerta aplicado em corredor interno',
    label: 'Orientação no percurso',
    className: 'gallery-card--tall',
  },
  {
    image: projetoAcesso,
    alt: 'Projeto tridimensional de circulação acessível em área de estacionamento',
    label: 'Rota segura',
  },
  {
    image: placasTateis,
    alt: 'Placas com informações em relevo e braille',
    label: 'Comunicação tátil',
    className: 'gallery-card--tall',
  },
  {
    image: sinalizacaoEstacionamento,
    alt: 'Sinalização de rota de pedestres em estacionamento',
    label: 'Sinalização integrada',
  },
  {
    image: banheiro,
    alt: 'Banheiro com barras de apoio e adaptações de acessibilidade',
    label: 'Adequação de ambientes residenciais',
  },
  {
    images: [
      {
        src: mobilidadeRampa,
        alt: 'Rampa interna com corrimãos, guarda-corpo e sinalização tátil de alerta',
      },
      {
        src: mobilidadeEscada,
        alt: 'Escada interna com corrimãos, sinalização dos degraus e piso tátil de alerta',
      },
    ],
    label: 'Mobilidade e segurança',
    className: 'gallery-card--wide gallery-card--dual',
  },
  {
    image: passarelaElevador,
    alt: 'Passarela acessível conectada a elevador',
    label: 'Sinalização tátil',
  },
  {
    image: edificioInstitucional,
    alt: 'Edificação institucional com acesso ao nível da calçada',
    label: 'Ambientes institucionais',
  },
  {
    image: mapaTatilHumanizado,
    alt: 'Mapa tátil humanizado do Memorial do Cerrado com ilustrações, legenda e informações em braille',
    label: 'Desenvolvimento e confecção de mapas táteis humanizados',
    className: 'gallery-card--map',
  },
]

export const faqItems = [
  {
    question: 'Em que momento a consultoria deve começar?',
    answer:
      'Preferencialmente desde a concepção do projeto. A análise antecipada ajuda a integrar as soluções à arquitetura e reduz a chance de retrabalho. Também avaliamos edificações existentes que precisam de adequação.',
  },
  {
    question: 'Qual é a diferença entre projeto, laudo e consultoria?',
    answer:
      'O projeto detalha as soluções arquitetônicas; o laudo registra tecnicamente as condições encontradas; e a consultoria orienta decisões, prioridades e caminhos para a adequação.',
  },
  {
    question: 'A Conexão Acessível atende fora de Goiás?',
    answer:
      'Sim. A atuação contempla o Centro-Oeste e projetos em todo o Brasil, conforme o escopo e as necessidades de cada trabalho.',
  },
  {
    question: 'A empresa também fornece produtos e instalações?',
    answer:
      'Sim. A revenda e algumas instalações de produtos de acessibilidade complementam os serviços técnicos quando fazem sentido para a solução definida.',
  },
]

export const complementaryService = {
  icon: PackageCheck,
  title: 'Produtos e algumas instalações',
  text: 'Apoio complementar para que a solução técnica também possa ganhar forma no espaço.',
}
