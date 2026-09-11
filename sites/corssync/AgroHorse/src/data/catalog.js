import bonesDestaque from '../assets/bones-destaque.jpeg'
import bonesParede from '../assets/bones-parede.jpeg'
import botaDurango from '../assets/bota-durango.jpeg'
import botaFemininaVerde from '../assets/bota-feminina-verde.jpeg'
import botaMarrom from '../assets/bota-marrom.jpeg'
import botasInfantis from '../assets/botas-infantis.jpeg'
import bolsaWestern from '../assets/bolsa-western.jpeg'
import calcaMasculina from '../assets/calca-masculina.jpeg'
import calcaWestDustFeminina from '../assets/calca-west-dust-feminina.jpeg'
import calcasFemininas from '../assets/calcas-femininas.jpeg'
import calcasKingFarm from '../assets/calcas-king-farm.jpeg'
import calcasWestDust from '../assets/calcas-west-dust.jpeg'
import camisaJeans from '../assets/camisa-jeans.jpeg'
import camisaXtr from '../assets/camisa-xtr.jpeg'
import camisasFemininas from '../assets/camisas-femininas.jpeg'
import camisetaFeminina from '../assets/camiseta-feminina.jpeg'
import camisetasBasicas from '../assets/camisetas-basicas.jpeg'
import canivetes from '../assets/canivetes.jpeg'
import chapeusExpositor from '../assets/chapeus-expositor.jpeg'
import chapeusSibu from '../assets/chapeus-sibu.jpeg'
import cintoPyramid from '../assets/cinto-pyramid.jpeg'
import cintosDetalhe from '../assets/cintos-detalhe.jpeg'
import cintosExpositor from '../assets/cintos-expositor.jpeg'
import fivelas from '../assets/fivelas.jpeg'
import lojaBotas from '../assets/loja-botas.jpeg'
import lojaLinhaInfantil from '../assets/loja-linha-infantil.jpeg'
import lojaRoupasBotinas from '../assets/loja-roupas-botinas.jpeg'
import lookFeminino from '../assets/look-feminino.jpeg'
import lookMasculino from '../assets/look-masculino.jpeg'

export const contact = {
  whatsapp: '5564992019726',
  phoneDisplay: '(64) 9 9201-9726',
  instagram: 'https://www.instagram.com/agrohorsewestern/',
  facebook: 'https://www.facebook.com/agrohorse.western.9',
  emailPrimary: 'silvaniokiko@hotmail.com',
  emailSecondary: 'isabellalima2010@icloud.com',
  address: 'Rua 1, Qd. 2, Lt. 15, salas 3 e 4 — Jardim Anhanguera',
  maps:
    'https://www.google.com/maps/search/?api=1&query=Rua%201%20Qd.%202%20Lt.%2015%20sala%203%20e%204%20Jardim%20Anhanguera%20Caldas%20Novas',
}

export const whatsappLink = (message) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`

export const heroImages = {
  main: lojaRoupasBotinas,
  detail: chapeusExpositor,
  badge: botaDurango,
}

export const storyImages = {
  main: lojaBotas,
  detail: fivelas,
}

export const visitImage = bonesParede

export const categories = [
  {
    title: 'Botas & botinas',
    eyebrow: 'Para cada passo',
    description: 'Modelos femininos, masculinos e infantis para a lida e para sair.',
    image: lojaBotas,
    position: 'center 62%',
  },
  {
    title: 'Chapéus & bonés',
    eyebrow: 'Da aba ao detalhe',
    description: 'Clássicos do universo country em diferentes formatos, cores e estilos.',
    image: chapeusExpositor,
    position: 'center 38%',
  },
  {
    title: 'Jeans & camisaria',
    eyebrow: 'Feminino e masculino',
    description: 'Calças, camisas e camisetas para compor o visual completo.',
    image: lookFeminino,
    position: 'center 22%',
  },
  {
    title: 'Cintos & acessórios',
    eyebrow: 'Personalidade no acabamento',
    description: 'Cintos, fivelas, colares, bolsas, facas e canivetes.',
    image: cintosDetalhe,
    position: 'center 54%',
  },
]

export const galleryItems = [
  { title: 'Bonés western', category: 'chapeus', image: bonesDestaque, alt: 'Bonés western em tons preto e cinza' },
  { title: 'Botas femininas', category: 'botas', image: botaFemininaVerde, alt: 'Bota feminina western verde de cano alto' },
  { title: 'Cintos e fivelas', category: 'acessorios', image: cintosExpositor, alt: 'Expositor com grande variedade de cintos western' },
  { title: 'Camisa jeans', category: 'moda', image: camisaJeans, alt: 'Detalhe de camisa jeans western masculina' },
  { title: 'Linha infantil', category: 'infantil', image: botasInfantis, alt: 'Botinhas country infantis em diversas cores' },
  { title: 'Fivelas trabalhadas', category: 'acessorios', image: fivelas, alt: 'Coleção de fivelas western trabalhadas' },
  { title: 'Chapéus Sibu', category: 'chapeus', image: chapeusSibu, alt: 'Chapéus Sibu empilhados em diferentes cores' },
  { title: 'Jeans feminino', category: 'moda', image: calcaWestDustFeminina, alt: 'Detalhe bordado de calça jeans feminina' },
  { title: 'Camiseta feminina', category: 'moda', image: camisetaFeminina, alt: 'Camiseta feminina branca com estampa delicada' },
  { title: 'Botina em couro', category: 'botas', image: botaMarrom, alt: 'Par de botas western marrons em couro' },
  { title: 'Bolsas western', category: 'acessorios', image: bolsaWestern, alt: 'Bolsa western marrom com aplicação geométrica' },
  { title: 'Camisas femininas', category: 'moda', image: camisasFemininas, alt: 'Camisas femininas western em verde, preto e rosa' },
  { title: 'Jeans masculino', category: 'moda', image: calcaMasculina, alt: 'Calça jeans masculina com bandeira ao fundo' },
  { title: 'Calças femininas', category: 'moda', image: calcasFemininas, alt: 'Modelos de calças jeans femininas com bordados' },
  { title: 'Look masculino', category: 'moda', image: lookMasculino, alt: 'Composição de camisa masculina e calça jeans' },
  { title: 'Cintos artesanais', category: 'acessorios', image: cintoPyramid, alt: 'Cinto country com trabalho em contas e couro' },
  { title: 'Calças King Farm', category: 'moda', image: calcasKingFarm, alt: 'Calças jeans King Farm em lavagem azul' },
  { title: 'Camisetas básicas', category: 'moda', image: camisetasBasicas, alt: 'Camisetas country em diversas cores' },
  { title: 'Camisa XTR', category: 'moda', image: camisaXtr, alt: 'Camisa masculina xadrez de manga curta' },
  { title: 'Calças West Dust', category: 'moda', image: calcasWestDust, alt: 'Calças jeans básicas em três lavagens' },
  { title: 'Canivetes e facas', category: 'acessorios', image: canivetes, alt: 'Canivetes metálicos King Farm' },
  { title: 'Bota Durango', category: 'botas', image: botaDurango, alt: 'Par de botas Durango com estampa da bandeira americana' },
  { title: 'Moda feminina', category: 'moda', image: lookFeminino, alt: 'Mulher usando conjunto western marrom e chapéu claro' },
  { title: 'Variedade infantil', category: 'infantil', image: lojaLinhaInfantil, alt: 'Expositor da loja com botinhas e roupas infantis' },
]

export const serviceAreas = [
  'Caldas Novas',
  'Ipameri',
  'Marzagão',
  'Morrinhos',
  'Pires do Rio',
  'Corumbaíba',
  'Água Limpa',
  'Piracanjuba',
  'Catalão',
  'Itumbiara',
  'Goiânia',
  'Brasília',
  'Uberlândia',
  'São Paulo',
]

export const productNames = [
  'Botas',
  'Chapéus',
  'Jeans',
  'Camisas',
  'Cintos',
  'Fivelas',
  'Botinas',
  'Bonés',
  'Acessórios',
]

export const editorialImages = {
  belts: cintosDetalhe,
  shop: lojaRoupasBotinas,
}
