import logo from '../assets/photos/logo-restaurante.jpeg'
import heroFood from '../assets/photos/buffet-acompanhamentos.jpeg'
import heroSalad from '../assets/photos/buffet-saladas.jpeg'
import riceAndBeans from '../assets/photos/buffet-arroz-feijao.jpeg'
import feijoada from '../assets/photos/buffet-feijoada.jpeg'
import meats from '../assets/photos/buffet-carnes.jpeg'
import serviceArea from '../assets/photos/buffet-e-atendimento.jpeg'
import diningRoomEntrance from '../assets/photos/salao-amplo-entrada.jpeg'
import diningRoomTables from '../assets/photos/salao-amplo-mesas.jpeg'
import facade from '../assets/photos/fachada-restaurante.jpg'

const whatsappMessage = encodeURIComponent(
  'Olá! Encontrei o Restaurante Rodoviária pelo site e gostaria de mais informações.',
)

export const site = {
  name: 'Restaurante Rodoviária',
  city: 'Caldas Novas',
  phoneDisplay: '(64) 99248-5632',
  phoneLink: 'tel:+5564992485632',
  email: 'pricilamartins018@gmail.com',
  instagram: '@restaurante_rodoviariaa',
  address: 'Rua B8, Qd. 14, Lt. 19 — Itanhangá I, Caldas Novas',
  hours: '11h às 14h',
  whatsapp: `https://wa.me/5564992485632?text=${whatsappMessage}`,
  instagramLink: 'https://www.instagram.com/restaurante_rodoviariaa/',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Rua+B8+Qd+14+Lt+19+Itanhanga+1+Caldas+Novas+GO',
}

export const images = {
  logo,
  heroFood,
  heroSalad,
  serviceArea,
  facade,
}

export const foodGallery = [
  {
    src: heroFood,
    alt: 'Buffet com acompanhamentos variados e preparações caseiras',
    label: 'Variedade no almoço',
    className: 'food-card--feature',
  },
  {
    src: riceAndBeans,
    alt: 'Arroz, feijão e preparações quentes no buffet',
    label: 'Comida bem servida',
  },
  {
    src: heroSalad,
    alt: 'Buffet de saladas frescas e coloridas',
    label: 'Saladas fresquinhas',
  },
  {
    src: feijoada,
    alt: 'Feijoada preparada e servida no buffet',
    label: 'Sabor brasileiro',
  },
  {
    src: meats,
    alt: 'Seleção de carnes preparadas no buffet',
    label: 'Sabores que satisfazem',
  },
]

export const venueGallery = [
  {
    src: diningRoomEntrance,
    alt: 'Vista do salão amplo do Restaurante Rodoviária',
    title: 'Espaço para almoçar com tranquilidade',
  },
  {
    src: diningRoomTables,
    alt: 'Mesas organizadas no salão do Restaurante Rodoviária',
    title: 'Salão amplo e acolhedor',
  },
]
