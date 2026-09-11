export const contact = {
  phone: '+55 62 99161-4949',
  email: 'pizzadogauchotrindade@gmail.com',
  address: 'Rua Lázaro Carvelo Borges, Qd. 05, Lt. 06, Setor Cristina II, Trindade-GO',
  hours: 'De terça a domingo, das 18h00 às 23h30',
  instagram: '@pizza_do_gaucho',
  facebook: 'Pizza do Gaúcho',
}

const whatsappMessage = encodeURIComponent(
  'Olá! Quero fazer um pedido na Pizza do Gaúcho.',
)

export const links = {
  whatsapp: `https://wa.me/5562991614949?text=${whatsappMessage}`,
  phone: 'tel:+5562991614949',
  email: 'mailto:pizzadogauchotrindade@gmail.com',
  instagram: 'https://www.instagram.com/pizza_do_gaucho/',
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
}

export const navItems = [
  { label: 'Especialidade', href: '#especialidade' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Visite', href: '#visite' },
]

