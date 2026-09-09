import bombaChocolate from '../assets/bomba-chocolate.jpeg'
import carolinasChocolate from '../assets/carolinas-chocolate.jpeg'
import cestinhaChocolate from '../assets/cestinha-chocolate.jpeg'
import fachadaPadaria from '../assets/fachada-padaria.jpeg'
import logoAModerna from '../assets/logo-a-moderna.jpeg'
import pudimArtesanal from '../assets/pudim-artesanal.jpeg'
import pudimCalda from '../assets/pudim-calda.jpeg'
import pudimFatia from '../assets/pudim-fatia.jpeg'
import enroladinhosAssados from '../assets/paes-salgados/enroladinhos-assados.jpg'
import enroladinhosTemperados from '../assets/paes-salgados/enroladinhos-temperados.jpg'
import miniSanduiches from '../assets/paes-salgados/mini-sanduiches.jpg'
import paesArtesanais from '../assets/paes-salgados/paes-artesanais.jpg'
import paezinhosDourados from '../assets/paes-salgados/paezinhos-dourados.jpg'
import paoDeQueijoCafe from '../assets/paes-salgados/pao-de-queijo-cafe.jpg'
import paoFrances from '../assets/paes-salgados/pao-frances.jpg'
import paoNaChapaCafe from '../assets/paes-salgados/pao-na-chapa-cafe.jpg'
import salgadosAssadosErvas from '../assets/paes-salgados/salgados-assados-ervas.jpg'
import salgadosGergelim from '../assets/paes-salgados/salgados-gergelim.jpg'
import salgadosVitrine from '../assets/paes-salgados/salgados-vitrine.jpg'
import sanduicheTostado from '../assets/paes-salgados/sanduiche-tostado.jpg'
import torradasTemperadas from '../assets/paes-salgados/torradas-temperadas.jpg'
import rotinaPadaria from '../assets/rotina-padaria-h264.mp4'
import rotinaPadariaPoster from '../assets/rotina-padaria-poster.jpg'
import sonhoCremeChocolate from '../assets/sonho-creme-chocolate.jpeg'
import tortaMorango from '../assets/torta-morango.jpeg'
import tortinhaLimao from '../assets/tortinha-limao.jpeg'
import tortinhaMorango from '../assets/tortinha-morango.jpeg'

const whatsappMessage = encodeURIComponent(
  'Olá! Vim pelo site da Padaria A Moderna e gostaria de saber o que está saindo fresquinho hoje.',
)

export const contact = {
  phoneDisplay: '(16) 99607-7051',
  phoneHref: 'tel:+5516996077051',
  whatsappHref: `https://wa.me/5516996077051?text=${whatsappMessage}`,
  email: 'marielle_barros@hotmail.com',
  address: 'R. Américo Brasiliense, 246',
  addressDetail: 'Centro · SP · 14015-050',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=R.%20Am%C3%A9rico%20Brasiliense%2C%20246%2C%20SP%2C%2014015-050',
  hours: 'De segunda a sexta, das 5h30 às 18h',
  instagramLabel: '@padariaamoderna',
  instagramHref: 'https://www.instagram.com/padariaamoderna/',
  facebookLabel: 'Padaria A Moderna',
}

export const assets = {
  bombaChocolate,
  carolinasChocolate,
  cestinhaChocolate,
  fachadaPadaria,
  logoAModerna,
  paoDeQueijoCafe,
  paoFrances,
  pudimArtesanal,
  pudimCalda,
  pudimFatia,
  rotinaPadaria,
  rotinaPadariaPoster,
  sonhoCremeChocolate,
  tortaMorango,
  tortinhaLimao,
  tortinhaMorango,
}

export const delights = [
  {
    title: 'Pães & roscas',
    description: 'Do pão francês quentinho às roscas de receita própria, tudo começa cedo por aqui.',
    image: paoFrances,
    alt: 'Pães franceses dourados preparados pela Padaria A Moderna',
    tone: 'red',
  },
  {
    title: 'Doces de vitrine',
    description: 'Sonhos, tortinhas e outras delícias preparadas com cuidado em cada acabamento.',
    image: sonhoCremeChocolate,
    alt: 'Sonho artesanal recheado com creme e coberto com chocolate',
    tone: 'yellow',
  },
  {
    title: 'Pudins & bolos',
    description: 'Sabores que lembram a mesa de família, feitos para compartilhar e criar memórias.',
    image: pudimArtesanal,
    alt: 'Pudim artesanal inteiro com calda de caramelo',
    tone: 'cream',
  },
  {
    title: 'Café da manhã',
    description: 'Pão de queijo, pão quente, café e companhia para começar o dia do jeito certo.',
    image: paoDeQueijoCafe,
    alt: 'Cesta de pães de queijo acompanhada por uma xícara de café',
    tone: 'brown',
  },
]

export const breadSavoryGallery = [
  {
    title: 'Pão francês',
    category: 'breads',
    categoryLabel: 'Pães',
    image: paoFrances,
    alt: 'Pães franceses dourados organizados sobre uma bandeja',
    size: 'featured',
  },
  {
    title: 'Pães artesanais',
    category: 'breads',
    categoryLabel: 'Pães',
    image: paesArtesanais,
    alt: 'Pães artesanais redondos com cortes na crosta',
    size: 'tall',
  },
  {
    title: 'Pãezinhos dourados',
    category: 'breads',
    categoryLabel: 'Pães',
    image: paezinhosDourados,
    alt: 'Fornada de pãezinhos redondos e dourados',
    size: 'standard',
  },
  {
    title: 'Pão na chapa & café',
    category: 'breakfast',
    categoryLabel: 'Café da manhã',
    image: paoNaChapaCafe,
    alt: 'Duas fatias de pão na chapa servidas com uma xícara de café',
    size: 'wide',
  },
  {
    title: 'Torradas temperadas',
    category: 'breads',
    categoryLabel: 'Pães',
    image: torradasTemperadas,
    alt: 'Porção de torradas artesanais cobertas com ervas',
    size: 'standard',
  },
  {
    title: 'Pão de queijo & café',
    category: 'breakfast',
    categoryLabel: 'Café da manhã',
    image: paoDeQueijoCafe,
    alt: 'Cesta de pães de queijo acompanhada por uma xícara de café',
    size: 'tall',
  },
  {
    title: 'Sanduíche tostado',
    category: 'breakfast',
    categoryLabel: 'Café da manhã',
    image: sanduicheTostado,
    alt: 'Sanduíche tostado cortado em triângulos e servido no prato',
    size: 'standard',
  },
  {
    title: 'Enroladinhos assados',
    category: 'savories',
    categoryLabel: 'Salgados',
    image: enroladinhosAssados,
    alt: 'Enroladinhos assados dourados servidos em uma travessa',
    size: 'standard',
  },
  {
    title: 'Salgados com ervas',
    category: 'savories',
    categoryLabel: 'Salgados',
    image: salgadosAssadosErvas,
    alt: 'Salgados assados dourados finalizados com ervas e gergelim',
    size: 'wide',
  },
  {
    title: 'Mini sanduíches',
    category: 'savories',
    categoryLabel: 'Salgados',
    image: miniSanduiches,
    alt: 'Travessa de mini sanduíches com frios, tomate e alface',
    size: 'tall',
  },
  {
    title: 'Seleção da vitrine',
    category: 'savories',
    categoryLabel: 'Salgados',
    image: salgadosVitrine,
    alt: 'Salgados e sanduíches dourados expostos na vitrine da padaria',
    size: 'standard',
  },
  {
    title: 'Salgados com gergelim',
    category: 'savories',
    categoryLabel: 'Salgados',
    image: salgadosGergelim,
    alt: 'Salgados assados recheados e cobertos com gergelim',
    size: 'standard',
  },
  {
    title: 'Enroladinhos temperados',
    category: 'savories',
    categoryLabel: 'Salgados',
    image: enroladinhosTemperados,
    alt: 'Enroladinhos assados dourados e cobertos com ervas',
    size: 'wide',
  },
]

export const gallery = [
  {
    src: tortinhaMorango,
    alt: 'Tortinha artesanal coberta com morangos e coco',
    shape: 'portrait',
  },
  {
    src: bombaChocolate,
    alt: 'Bombas artesanais cobertas com chocolate',
    shape: 'portrait',
  },
  {
    src: pudimFatia,
    alt: 'Fatia de pudim artesanal com cobertura vermelha',
    shape: 'portrait',
  },
  {
    src: tortaMorango,
    alt: 'Torta artesanal de morango com coco',
    shape: 'square',
  },
  {
    src: pudimCalda,
    alt: 'Pudim artesanal com bastante calda de caramelo',
    shape: 'portrait',
  },
  {
    src: tortinhaLimao,
    alt: 'Tortinha artesanal de limão com chantili e cereja',
    shape: 'portrait',
  },
]
