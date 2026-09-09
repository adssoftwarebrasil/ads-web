import quartoFloral from '../assets/quarto-floral.png'
import quartoClassico from '../assets/quarto-classico.png'
import quartoPetrus from '../assets/quarto-petrus.png'
import quartoOrtopedico from '../assets/quarto-ortopedico.png'
import quartoNature from '../assets/quarto-nature.png'
import quartoCinza from '../assets/quarto-cinza.png'
import conjuntoSmartflex from '../assets/conjunto-smartflex-ambiente.jpeg'
import conjuntoCafe from '../assets/conjunto-cafe-ambiente.png'
import cabeceiraBegeAmbiente from '../assets/cabeceira-bege-ambiente.jpeg'
import cabeceiraAzulAmbiente from '../assets/cabeceira-azul-ambiente.jpeg'
import cabeceiraBege from '../assets/cabeceira-bege.jpeg'
import cabeceiraCinza from '../assets/cabeceira-cinza.jpeg'
import sofaModular from '../assets/sofa-modular.jpeg'
import sofaRetratil from '../assets/sofa-retratil.jpeg'
import poltronaGaia from '../assets/poltrona-gaia-ambiente.jpeg'
import poltronaBelize from '../assets/poltrona-belize.jpeg'
import lojaPetrus from '../assets/loja-petrus.jpeg'
import colchaoAirtech from '../assets/colchao-airtech.jpeg'
import colchaoFreedom from '../assets/colchao-freedom.jpeg'
import colchaoBerco from '../assets/colchao-berco.jpeg'

export const contact = {
  phoneDisplay: '(62) 98129-4292',
  phoneRaw: '5562981294292',
  email: 'duartecolchoesgyn@gmail.com',
  instagram: 'https://www.instagram.com/duartecolchoesgoiania/',
  facebook: 'https://www.facebook.com/duarte.duarte.colchoes',
}

export function createWhatsAppLink(message = 'Olá! Vim pelo site da Duarte Colchões e quero ajuda para escolher o produto ideal.') {
  return `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(message)}`
}

export const productExperiences = [
  {
    id: 'colchoes',
    eyebrow: 'Para noites mais confortáveis',
    title: 'Colchões para diferentes preferências de descanso',
    description:
      'Compare opções com orientação de quem conhece o setor e encontre uma escolha coerente com sua rotina.',
    image: quartoFloral,
    alt: 'Colchão floral em um quarto moderno e acolhedor',
    detail: 'Colchões',
  },
  {
    id: 'box',
    eyebrow: 'Estrutura e praticidade',
    title: 'Box e box baú para completar o quarto',
    description:
      'Bases que organizam a composição do ambiente, com opções para quem também quer aproveitar melhor o espaço.',
    image: conjuntoSmartflex,
    alt: 'Conjunto de colchão e box preto em quarto contemporâneo',
    detail: 'Box e box baú',
  },
  {
    id: 'sofas',
    eyebrow: 'Conforto além do quarto',
    title: 'Sofás e poltronas para desacelerar',
    description:
      'Peças para criar uma sala mais convidativa, um canto de leitura ou uma pausa confortável no dia.',
    image: sofaModular,
    alt: 'Sofá modular azul-petróleo com chaise',
    detail: 'Sofás e poltronas',
  },
  {
    id: 'cabeceiras',
    eyebrow: 'Um quarto com personalidade',
    title: 'Cabeceiras que acolhem e transformam o ambiente',
    description:
      'Modelos estofados que ajudam a compor o quarto com conforto visual, textura e acabamento.',
    image: cabeceiraBegeAmbiente,
    alt: 'Quarto claro com cabeceira estofada bege',
    detail: 'Cabeceiras',
  },
]

export const showcaseProducts = [
  {
    title: 'Colchões',
    description: 'Opções para comparar conforto, suporte e preferência de descanso.',
    image: quartoClassico,
    alt: 'Colchão floral em quarto iluminado',
    tag: 'Descanso',
  },
  {
    title: 'Conjuntos box',
    description: 'Uma composição completa para renovar o quarto com praticidade.',
    image: quartoNature,
    alt: 'Conjunto box em tom bege em quarto moderno',
    tag: 'Quarto completo',
  },
  {
    title: 'Box e box baú',
    description: 'Bases para diferentes projetos de quarto e necessidades de espaço.',
    image: conjuntoCafe,
    alt: 'Conjunto de colchão e box em tom café',
    tag: 'Praticidade',
  },
  {
    title: 'Sofás',
    description: 'Modelos que unem presença, versatilidade e conforto para a sala.',
    image: sofaRetratil,
    fit: 'contain',
    alt: 'Sofá retrátil bege com laterais em tom caramelo',
    tag: 'Sala',
  },
  {
    title: 'Poltronas',
    description: 'Peças de apoio para criar um canto acolhedor e cheio de personalidade.',
    image: poltronaGaia,
    fit: 'contain',
    alt: 'Poltrona cinza com apoio para os pés em ambiente claro',
    tag: 'Pausa',
  },
  {
    title: 'Cabeceiras',
    description: 'Acabamento estofado para trazer aconchego e unidade ao quarto.',
    image: cabeceiraAzulAmbiente,
    alt: 'Quarto moderno com cabeceira e roupa de cama azul',
    tag: 'Composição',
  },
]

export const galleryImages = [
  {
    src: quartoPetrus,
    category: 'Quartos',
    alt: 'Conjunto de colchão claro com cabeceira escura em quarto iluminado',
    label: 'Conforto em camadas',
  },
  {
    src: poltronaBelize,
    category: 'Sala',
    fit: 'contain',
    alt: 'Poltrona verde estofada com pés de madeira',
    label: 'Um canto só seu',
  },
  {
    src: cabeceiraBege,
    category: 'Produtos',
    fit: 'contain',
    alt: 'Cabeceira estofada bege com canais verticais',
    label: 'Textura que acolhe',
  },
  {
    src: quartoCinza,
    category: 'Quartos',
    alt: 'Colchão cinza em quarto de tons quentes',
    label: 'Seu quarto, seu ritmo',
  },
  {
    src: colchaoAirtech,
    category: 'Produtos',
    fit: 'contain',
    alt: 'Colchão Airtech Springpocket em fundo branco',
    label: 'Opções para comparar',
  },
  {
    src: lojaPetrus,
    category: 'Produtos',
    alt: 'Colchão Petrus Premium exposto na loja Duarte Colchões',
    label: 'Atendimento de perto',
  },
  {
    src: quartoOrtopedico,
    category: 'Quartos',
    alt: 'Colchão escuro em um quarto moderno com madeira e luz natural',
    label: 'Presença e aconchego',
  },
  {
    src: cabeceiraCinza,
    category: 'Produtos',
    fit: 'contain',
    alt: 'Cabeceira estofada cinza com canais verticais',
    label: 'Acabamento versátil',
  },
  {
    src: colchaoFreedom,
    category: 'Produtos',
    fit: 'contain',
    alt: 'Colchão Freedom em fundo branco',
    label: 'Mais escolhas para você',
  },
  {
    src: colchaoBerco,
    category: 'Produtos',
    fit: 'contain',
    alt: 'Colchão branco para berço em fundo branco',
    label: 'Conforto para cada fase',
  },
  {
    src: sofaModular,
    category: 'Sala',
    fit: 'contain',
    alt: 'Sofá modular azul com assentos extensíveis',
    label: 'Sala pronta para relaxar',
  },
  {
    src: poltronaGaia,
    category: 'Sala',
    alt: 'Poltrona Gaia com puff em ambiente iluminado',
    label: 'Pausa com personalidade',
  },
]

export const storyImages = {
  store: lojaPetrus,
  bedroom: quartoClassico,
}
