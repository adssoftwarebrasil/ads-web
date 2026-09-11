import { clientImages } from './clientImages';
import dessertImage from '../assets/images/sobremesa.webp';

export const business = {
  name: 'Sr Burgone',
  phone: '5562991573853',
  formattedPhone: '(62) 99157-3853',
  email: 'Trabalhojackson.impactovisual@gmail.com',
  instagram: 'https://www.instagram.com/srburgone/',
  address: 'Rua 9, Qd. 15, Lt. 29 — Residencial Triunfo 1',
  serviceArea: 'Goianira e região noroeste de Goiânia',
  hours: '18h30 à meia-noite',
  maps:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Sr Burgone, Rua 9, Quadra 15, Lote 29, Residencial Triunfo 1, Goianira, Goiás',
    ),
};

export function whatsappUrl(
  message = 'Olá, Sr Burgone! Quero conhecer o cardápio e fazer um pedido.',
) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { href: '#sabores', label: 'Nossos sabores' },
  { href: '#nosso-toque', label: 'Nosso toque' },
  { href: '#historia', label: 'A nossa história' },
  { href: '#contato', label: 'Onde estamos' },
];

export const categories = [
  { id: 'todos', label: 'De tudo um pouco' },
  { id: 'lanches', label: 'Hambúrgueres & x-saladas' },
  { id: 'bebidas', label: 'Sucos & cremes' },
  { id: 'doces', label: 'Sobremesas' },
];

export const products = [
  {
    id: 'hamburgueres',
    title: 'Hambúrgueres',
    category: 'lanches',
    eyebrow: 'PRA MATAR A FOME',
    description: 'Aquela vontade de um hambúrguer caprichado tem endereço certo.',
    image: clientImages.doubleBurger.src,
    width: clientImages.doubleBurger.width,
    height: clientImages.doubleBurger.height,
    position: '50% 65%',
    alt: clientImages.doubleBurger.alt,
    message: 'Olá, Sr Burgone! Quais são as opções e os preços dos hambúrgueres?',
  },
  {
    id: 'x-saladas',
    title: 'X-saladas',
    category: 'lanches',
    eyebrow: 'O CLÁSSICO TEM SEU LUGAR',
    description: 'O bom e velho x-salada com o toque de sabor da nossa casa.',
    image: clientImages.burger.src,
    width: clientImages.burger.width,
    height: clientImages.burger.height,
    position: '50% 65%',
    alt: clientImages.burger.alt,
    message: 'Olá, Sr Burgone! Quero conhecer as opções e os preços dos x-saladas.',
  },
  {
    id: 'sucos-cremes',
    title: 'Sucos & cremes',
    category: 'bebidas',
    eyebrow: 'UMA BOA COMPANHIA',
    description: 'Escolha seu sabor e deixe a hora do lanche ainda mais gostosa.',
    image: clientImages.drink.src,
    width: clientImages.drink.width,
    height: clientImages.drink.height,
    position: '65% 58%',
    alt: clientImages.drink.alt,
    message:
      'Olá, Sr Burgone! Quais sabores de sucos e cremes estão disponíveis e quais são os preços?',
  },
  {
    id: 'sobremesas',
    title: 'Sobremesas',
    category: 'doces',
    eyebrow: 'SEMPRE CABE UM DOCE',
    description: 'Porque uma noite gostosa merece um final à altura.',
    image: dessertImage,
    width: 800,
    height: 1422,
    illustrative: true,
    alt: 'Taça de sobremesa com chocolate, em foto ilustrativa',
    message: 'Olá, Sr Burgone! Quais são as sobremesas disponíveis e os preços?',
  },
];

export const questions = [
  {
    question: 'Como faço meu pedido?',
    answer:
      'É só chamar a Sr Burgone pelo WhatsApp (62) 99157-3853. Por lá, você consulta o cardápio, os preços, a disponibilidade e combina os detalhes do seu pedido.',
  },
  {
    question: 'Vocês atendem a minha região?',
    answer:
      'Nossa área de atendimento inclui Goianira e a região noroeste de Goiânia. Envie seu endereço pelo WhatsApp para confirmar a disponibilidade de entrega, a taxa e o prazo para sua localização.',
  },
  {
    question: 'Qual é o horário de funcionamento?',
    answer:
      'Nosso horário é das 18h30 à meia-noite. Consulte pelo WhatsApp os dias de abertura e o atendimento em feriados.',
  },
  {
    question: 'Onde encontro o cardápio e os preços?',
    answer:
      'Nosso atendimento pelo WhatsApp informa as opções, os sabores, os ingredientes e os preços atualizados. Se você tem alguma restrição alimentar, converse com a gente antes de fazer seu pedido.',
  },
];
