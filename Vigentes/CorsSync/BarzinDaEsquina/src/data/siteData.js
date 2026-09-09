import foodBolinhos from '../assets/images/petisco-bolinhos.jpg'
import figado from '../assets/images/figado-acebolado.jpg'
import quibe from '../assets/images/quibe.jpg'
import linguica from '../assets/images/linguica-caipira.jpg'
import bolinhosDourados from '../assets/images/bolinhos-dourados.jpg'
import folhados from '../assets/images/folhados.jpg'
import medalhoes from '../assets/images/medalhoes.jpg'
import bolinhoBacalhau from '../assets/images/bolinho-bacalhau.jpg'
import petiscoCamarao from '../assets/images/petisco-camarao.jpg'
import almoco from '../assets/images/almoco-executivo.jpg'
import chopp from '../assets/images/chopp-colarinho.jpg'
import ambienteMesas from '../assets/images/ambiente-mesas-vermelhas.jpg'
import ambienteClientes from '../assets/images/ambiente-clientes.jpg'
import vinilWaldir from '../assets/images/vinil-waldir-azevedo.jpg'
import vinilGermano from '../assets/images/vinil-germano.jpg'
import chopeira from '../assets/images/chopeira-brahma.jpg'
import cerveja from '../assets/images/cerveja-brahma.jpg'
import jornal from '../assets/images/jornal-futebol.jpg'
import brinde from '../assets/images/brinde-canecas.jpg'
import fachada from '../assets/images/fachada-barzin.jpg'
import tirandoChopp from '../assets/images/tirando-chopp.jpg'
import areaInterna from '../assets/images/area-interna.jpg'
import paredeFutebol from '../assets/images/parede-futebol.jpg'
import salao from '../assets/images/salao-barzin.jpg'
import atendimento from '../assets/images/atendimento-bar.jpg'

export const contact = {
  whatsappLabel: '+55 62 99318-0876',
  whatsappUrl:
    'https://wa.me/5562993180876?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20card%C3%A1pio%20do%20Barzin%20de%20Esquina.',
  instagramLabel: '@barzindeesquina',
  instagramUrl: 'https://www.instagram.com/barzindeesquina',
  email: 'Trabalhobutequimdeesquina@gmail.com',
  address: 'Esquina com a Av. Manoel Monteiro — R. Rocha Lima, Qd. 5, Lt. 516, Trindade - GO, 75388-430',
  mapsUrl: 'https://maps.app.goo.gl/bscTEmsZg3J3yhWN6',
  hours: '11h às 00h',
}

export const menuGroups = [
  {
    id: 'petiscos',
    label: 'Petiscos',
    eyebrow: 'Pra abrir a mesa',
    title: 'Petiscos de boteco, do jeito que a resenha pede.',
    description:
      'Fígado acebolado com jiló, almôndega bovina com mandioca, lambari frito, linguiça caipira, panceta, bolinhos, croquetas e porções para compartilhar.',
    image: figado,
    alt: 'Porção preparada e servida no Barzin de Esquina',
  },
  {
    id: 'brasa',
    label: 'Brasa & chapa',
    eyebrow: 'Sabor que chega chiando',
    title: 'Carne bem feita e mesa bem servida.',
    description:
      'Picanha, cupim e contra filé preparados na brasa e na chapa, com aquele sabor que combina com cerveja gelada e conversa sem pressa.',
    image: linguica,
    alt: 'Porção de linguiça caipira servida no Barzin de Esquina',
  },
  {
    id: 'almoco',
    label: 'Almoço',
    eyebrow: 'No meio do dia',
    title: 'Almoço executivo com gosto de comida de verdade.',
    description:
      'Pratos executivos servidos no dia a dia para quem quer comer bem, fazer uma pausa gostosa e seguir a tarde satisfeito.',
    image: almoco,
    alt: 'Pratos de almoço executivo sendo servidos',
  },
  {
    id: 'chopp',
    label: 'Chopp',
    eyebrow: 'Caneca gelada',
    title: 'Chopp Brahma tirado no capricho.',
    description:
      'Gelado, com colarinho e pronto para acompanhar o almoço, o petisco, o jogo ou aquele encontro que não tem hora para acabar.',
    image: chopp,
    alt: 'Caneca de chopp Brahma sendo servida',
  },
]

export const foodGallery = [
  { image: foodBolinhos, label: 'Bolinhos para dividir', alt: 'Porção de bolinhos com molho' },
  { image: quibe, label: 'Clássicos de boteco', alt: 'Porção de quibes servida em prato esmaltado' },
  { image: bolinhosDourados, label: 'Petiscos crocantes', alt: 'Porção de bolinhos dourados' },
  { image: folhados, label: 'Porções da casa', alt: 'Porção de petiscos servida em prato de barro' },
  { image: medalhoes, label: 'Da chapa para a mesa', alt: 'Petiscos grelhados servidos com molho' },
  { image: bolinhoBacalhau, label: 'Bolinhos & croquetas', alt: 'Porção de bolinhos com molho verde' },
  { image: petiscoCamarao, label: 'Petiscos especiais', alt: 'Porção de petiscos empanados com molho' },
]

export const galleryPhotos = [
  { image: ambienteMesas, caption: 'Mesa pronta para a resenha', alt: 'Mesas e cadeiras vermelhas na área interna' },
  { image: ambienteClientes, caption: 'Gente reunida, como tem que ser', alt: 'Clientes reunidos nas mesas do Barzin' },
  { image: vinilWaldir, caption: 'Música brasileira na parede', alt: 'Disco de Waldir Azevedo na decoração' },
  { image: vinilGermano, caption: 'Memória de boteco', alt: 'Capa de disco na decoração do salão' },
  { image: chopeira, caption: 'Brahma do jeito certo', alt: 'Chopeira Brahma do Barzin' },
  { image: cerveja, caption: 'Sempre bem gelada', alt: 'Garrafa e copo de cerveja Brahma na mesa' },
  { image: jornal, caption: 'Futebol também é assunto da casa', alt: 'Recorte de jornal sobre futebol na decoração' },
  { image: brinde, caption: 'Um brinde à esquina', alt: 'Canecas geladas brindando no Barzin' },
  { image: fachada, caption: 'Achou a esquina', alt: 'Fachada vermelha do Barzin de Esquina' },
  { image: tirandoChopp, caption: 'Caneca trincando', alt: 'Caneca gelada sendo preenchida na torneira' },
  { image: areaInterna, caption: 'Área interna', alt: 'Área interna com mesas e cadeiras vermelhas' },
  { image: paredeFutebol, caption: 'Paixão pelo futebol', alt: 'Camisas históricas de futebol na parede' },
  { image: salao, caption: 'Espaço para chegar e ficar', alt: 'Vista ampla do salão do Barzin' },
  { image: atendimento, caption: 'Atendimento de perto', alt: 'Atendimento no balcão do Barzin' },
]
