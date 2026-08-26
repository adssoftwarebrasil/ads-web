export const WHATSAPP_URL = 'https://wa.me/556733216604';

export const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#contato', label: 'Contato' },
];

export interface Service {
  image: string;
  alt: string;
  title: string;
  description: string;
  badge?: string;
}

export const services: Service[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/bscomerc%2FCopos%20de%20Alumi%CC%81nio.jpg',
    alt: 'Copos de Alumínio',
    title: 'Copos de Alumínio',
    description: 'Leves e resistentes, perfeitos para qualquer ocasião.',
    badge: 'Mais Vendido',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/bscomerc%2FCopos%20Decorados.jpg',
    alt: 'Copos Decorados',
    title: 'Copos Decorados',
    description: 'Copos que trazem charme e elegância aos eventos.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/bscomerc%2FGarrafas%20Personalizadas.jpg',
    alt: 'Garrafas Personalizadas',
    title: 'Garrafas Personalizadas',
    description: 'Brindes que combinam utilidade e estilo moderno.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/bscomerc%2FBrindes%20Personalizados.jpg',
    alt: 'Brindes Personalizados',
    title: 'Brindes Personalizados',
    description: 'Feitos sob medida para a sua empresa ou evento.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/bscomerc%2FGravac%CC%A7a%CC%83o%20a%20Laser.jpg',
    alt: 'Gravação a Laser',
    title: 'Gravação a Laser',
    description: 'Personalize seus produtos de forma durável e elegante.',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/bscomerc%2FCopos%20Te%CC%81rmicos.jpg',
    alt: 'Copos Térmicos',
    title: 'Copos Térmicos',
    description: 'Ideal para manter suas bebidas na temperatura certa.',
    badge: 'Premium',
  },
];

export interface Testimonial {
  text: string;
  name: string;
}

export const testimonials: Testimonial[] = [
  {
    text: 'Fiz a compra de copos para a festa do meu filho e ficaram incríveis! Atendimento nota 10!',
    name: 'Maria Silva',
  },
  {
    text: 'Trabalhei com a BS Copos em um evento corporativo e superaram minhas expectativas!',
    name: 'João Souza',
  },
  {
    text: 'Os produtos são de ótima qualidade e a personalização ficou maravilhosa. Recomendo!',
    name: 'Patrícia Lima',
  },
  {
    text: 'Excelente atendimento e entrega dentro do prazo. Estou muito satisfeito!',
    name: 'Lucas Mendes',
  },
];

export const footerServices = [
  'Copos de Alumínio',
  'Copos Decorados',
  'Garrafas Personalizadas',
  'Brindes Personalizados',
  'Gravação a Laser',
  'Copos Térmicos',
];

export const footerMenu = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];
