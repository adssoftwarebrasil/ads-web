import cheese from '../assets/client/lanche-queijo.webp';
import sachets from '../assets/client/saches-acompanhamentos.webp';
import drink from '../assets/client/bebida-cremosa.webp';
import logo from '../assets/client/logo-sr-burgone.webp';
import openSandwich from '../assets/client/lanche-aberto.webp';
import burger from '../assets/client/hamburguer-da-casa.webp';
import doubleBurger from '../assets/client/hamburguer-duplo.webp';
import sandwich from '../assets/client/lanche-no-prato.webp';
import jamArtwork from '../assets/client/arte-geleia.webp';
import brandArtwork from '../assets/client/arte-sr-burgone.webp';
import playArea from '../assets/client/espaco-infantil.webp';
import atmosphere from '../assets/client/ambiente-da-casa.webp';

export const clientImages = {
  cheese: {
    src: cheese,
    width: 1400,
    height: 1275,
    alt: 'Lanche da Sr Burgone com queijo derretido servido no prato',
  },
  sachets: {
    src: sachets,
    width: 1013,
    height: 1800,
    alt: 'Sachês de ketchup e maionese Heinz na Sr Burgone',
  },
  drink: {
    src: drink,
    width: 1350,
    height: 1800,
    alt: 'Bebida cremosa rosada da Sr Burgone ao lado de uma cobertura Fini',
  },
  logo: {
    src: logo,
    width: 640,
    height: 640,
    alt: 'Logotipo da Sr Burgone, amarelo sobre fundo preto, com hambúrguer e coroa',
  },
  openSandwich: {
    src: openSandwich,
    width: 1350,
    height: 1800,
    alt: 'Lanche aberto da Sr Burgone com salada e recheio à mostra',
  },
  burger: {
    src: burger,
    width: 1350,
    height: 1800,
    alt: 'Hambúrguer da Sr Burgone com queijo, bacon e salada',
  },
  doubleBurger: {
    src: doubleBurger,
    width: 1400,
    height: 1531,
    alt: 'Hambúrguer da Sr Burgone com duas carnes, queijo e cebola',
  },
  sandwich: {
    src: sandwich,
    width: 1350,
    height: 1800,
    alt: 'Lanche da Sr Burgone cortado ao meio e servido em um prato branco',
  },
  jamArtwork: {
    src: jamArtwork,
    width: 1254,
    height: 1254,
    alt: 'Arte promocional da geleia da Sr Burgone com abacaxi e pimenta',
  },
  brandArtwork: {
    src: brandArtwork,
    width: 1024,
    height: 1536,
    alt: 'Ilustração promocional da Sr Burgone com um cozinheiro preparando lanches',
  },
  playArea: {
    src: playArea,
    width: 1013,
    height: 1800,
    alt: 'Espaço infantil da Sr Burgone com escorregador e piscina de bolinhas',
  },
  atmosphere: {
    src: atmosphere,
    width: 1350,
    height: 1800,
    alt: 'Clientes reunidos nas mesas da Sr Burgone durante a noite',
  },
};

export const galleryImages = [
  {
    id: 'queijo',
    ...clientImages.cheese,
    title: 'Capricho em cada camada',
    label: 'NOSSOS LANCHES',
    position: '50% 55%',
  },
  {
    id: 'lanche-aberto',
    ...clientImages.openSandwich,
    title: 'Sabor por todos os lados',
    label: 'NOSSOS LANCHES',
    position: '50% 61%',
  },
  {
    id: 'lanche-prato',
    ...clientImages.sandwich,
    title: 'Mais jeitos de matar a fome',
    label: 'NOSSOS LANCHES',
    position: '50% 70%',
  },
  {
    id: 'acompanhamentos',
    ...clientImages.sachets,
    title: 'Detalhes que acompanham',
    label: 'ACOMPANHAMENTOS',
    position: '50% 60%',
    note: 'Sachês de ketchup e maionese industrializados, distintos dos nossos molhos caseiros.',
  },
  {
    id: 'espaco-infantil',
    ...clientImages.playArea,
    title: 'Um cantinho para os pequenos',
    label: 'NOSSA CASA',
    position: '50% 52%',
  },
  {
    id: 'arte-da-casa',
    ...clientImages.brandArtwork,
    title: 'A cara da Sr Burgone',
    label: 'ARTE DA MARCA',
    position: '50% 30%',
    note: 'Arte ilustrada da marca. A fundação da Sr Burgone foi em 5 de setembro de 2024; a referência a 2023 nesta arte é divergente.',
  },
];
