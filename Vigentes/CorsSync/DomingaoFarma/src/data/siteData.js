import analgesicos from '../assets/promotions/analgesicos.jpg'
import antiInflamatorios from '../assets/promotions/anti-inflamatorios.jpg'
import colageno from '../assets/promotions/colageno.jpg'
import cuidadosPele from '../assets/promotions/cuidados-com-a-pele.jpg'
import diabetes from '../assets/promotions/medicamentos-diabetes.jpg'
import fraldasGeriatricas from '../assets/promotions/fraldas-geriatricas.jpg'
import fraldasInfantis from '../assets/promotions/fraldas-infantis.jpg'
import genericos from '../assets/promotions/medicamentos-genericos.jpg'
import hidratantes from '../assets/promotions/hidratantes-corporais.jpg'
import imunidade from '../assets/promotions/imunidade.jpg'
import leites from '../assets/promotions/leites-formulas-infantis.jpg'
import medicamentosReferencia from '../assets/promotions/medicamentos-referencia.jpg'
import omega3 from '../assets/promotions/omega-3.jpg'
import polivitaminicos from '../assets/promotions/polivitaminicos.jpg'
import pressao from '../assets/promotions/pressao-arterial.jpg'
import probioticos from '../assets/promotions/probioticos.jpg'
import protetorSolar from '../assets/promotions/protetor-solar.jpg'
import shampoo from '../assets/promotions/shampoo-condicionador.jpg'
import tratamentosCapilares from '../assets/promotions/tratamentos-capilares.jpg'
import vitaminas from '../assets/promotions/vitaminas-suplementos.jpg'
import xaropes from '../assets/promotions/xaropes.jpg'

const whatsappMessage = encodeURIComponent(
  'Olá! Vi o site da Domingão Farma e gostaria de consultar a disponibilidade de um produto.',
)

export const contact = {
  whatsapp: '5564992295317',
  whatsappDisplay: '(64) 99229-5317',
  whatsappUrl: 'https://wa.me/5564992295317?text=' + whatsappMessage,
  phoneUrl: 'tel:+5564992295317',
  email: 'rogerio_franca343@hotmail.com',
  instagramUrl: 'https://www.instagram.com/domingaofarmash?igsh=cTZuNDRxYnI2OWE=',
  instagramLabel: '@domingaofarmash',
  address: 'Rua Prof. Ana Aguiar, Qd. 55, Lt. 01, nº 550 — Bairro Brasil',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Professor+Ana+Aguiar+quadra+55+lote+01+numero+550+Bairro+Brasil',
}

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Visite a loja', href: '#contato' },
]

export const highlights = [
  {
    kicker: 'Desde',
    value: '2009',
    description: 'cuidando de quem mora perto',
  },
  {
    kicker: 'Entrega',
    value: 'sem taxa',
    description: 'mais praticidade no seu dia',
  },
  {
    kicker: 'Aberta',
    value: '7 dias',
    description: 'inclusive aos domingos',
  },
]

export const categoryCards = [
  {
    title: 'Medicamentos',
    description: 'Opções de referência, genéricos e similares para diferentes cuidados.',
    image: genericos,
    filter: 'medicamentos',
    className: 'category-card--wide',
  },
  {
    title: 'Vitaminas & suplementos',
    description: 'Produtos para complementar a rotina de bem-estar de toda a família.',
    image: vitaminas,
    filter: 'bem-estar',
    className: 'category-card--tall',
  },
  {
    title: 'Perfumaria & cuidados',
    description: 'Cuidados para pele, cabelos e higiene no dia a dia.',
    image: cuidadosPele,
    filter: 'beleza',
    className: '',
  },
  {
    title: 'Bebês & família',
    description: 'Fraldas, leites e itens essenciais para cada fase.',
    image: fraldasInfantis,
    filter: 'familia',
    className: '',
  },
]

export const filters = [
  { id: 'todos', label: 'Todos' },
  { id: 'medicamentos', label: 'Medicamentos' },
  { id: 'bem-estar', label: 'Bem-estar' },
  { id: 'beleza', label: 'Beleza & cuidado' },
  { id: 'familia', label: 'Família' },
]

export const promotions = [
  { title: 'Medicamentos genéricos', category: 'medicamentos', image: genericos },
  { title: 'Medicamentos de referência', category: 'medicamentos', image: medicamentosReferencia },
  { title: 'Analgésicos', category: 'medicamentos', image: analgesicos },
  { title: 'Anti-inflamatórios', category: 'medicamentos', image: antiInflamatorios },
  { title: 'Xaropes', category: 'medicamentos', image: xaropes },
  { title: 'Cuidados com a pressão arterial', category: 'medicamentos', image: pressao },
  { title: 'Cuidados com o diabetes', category: 'medicamentos', image: diabetes },
  { title: 'Vitaminas e suplementos', category: 'bem-estar', image: vitaminas },
  { title: 'Ômega 3', category: 'bem-estar', image: omega3 },
  { title: 'Polivitamínicos', category: 'bem-estar', image: polivitaminicos },
  { title: 'Probióticos', category: 'bem-estar', image: probioticos },
  { title: 'Produtos para imunidade', category: 'bem-estar', image: imunidade },
  { title: 'Colágeno', category: 'bem-estar', image: colageno },
  { title: 'Cuidados com a pele', category: 'beleza', image: cuidadosPele },
  { title: 'Hidratantes corporais', category: 'beleza', image: hidratantes },
  { title: 'Protetor solar', category: 'beleza', image: protetorSolar },
  { title: 'Shampoo e condicionador', category: 'beleza', image: shampoo },
  { title: 'Tratamentos capilares', category: 'beleza', image: tratamentosCapilares },
  { title: 'Fraldas infantis', category: 'familia', image: fraldasInfantis },
  { title: 'Fraldas geriátricas', category: 'familia', image: fraldasGeriatricas },
  { title: 'Leites e fórmulas infantis', category: 'familia', image: leites },
]

export const openingHours = [
  { days: 'Segunda a sábado', hours: '7h às 20h' },
  { days: 'Domingo', hours: '7h às 12h' },
]
