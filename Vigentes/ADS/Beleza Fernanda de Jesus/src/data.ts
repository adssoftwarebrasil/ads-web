export const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=558588055759&text=Ol%C3%A1,%20eu%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!';

export const ACCENT = 'rgb(198, 171, 150)';
export const SOFT_BG = 'rgb(250, 247, 250)';

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export interface Service {
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    title: 'Vendas de Produtos',
    description: 'Produtos de beleza disponíveis para compra.',
    image: 'https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2FVendas%20de%20Produtos.webp',
  },
  {
    title: 'Tratamentos Capilares',
    description: 'Cuidados e tratamentos específicos para cabelos.',
    image: 'https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2FTratamentos%20Capilares.webp',
  },
  {
    title: 'Maquiagem',
    description: 'Maquiagem para todas as ocasiões.',
    image: 'https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2FMaquiagem.webp',
  },
  {
    title: 'Depilação',
    description: 'Depilação com técnica e produtos de qualidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2FDepilac%CC%A7a%CC%83o.webp',
  },
  {
    title: 'Sobrancelhas',
    description: 'Design e repaginação para realçar o olhar.',
    image: 'https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2FSobrancelhas.webp',
  },
  {
    title: 'Unhas',
    description: 'Manicure e pedicure com nail art.',
    image: 'https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2FUnhas.webp',
  },
];

export interface Testimonial {
  text: string;
  name: string;
}

const baseTestimonials: Testimonial[] = [
  {
    text: '"Ambiente agradável e profissionais super competentes. Voltarei com certeza!"',
    name: 'Ana Clara',
  },
  {
    text: '"Minhas unhas nunca estiveram tão bonitas! Melhor salão da cidade!"',
    name: 'Juliana Pereira',
  },
  {
    text: '"Fui muito bem atendida e adorei o design das minhas sobrancelhas. Super satisfeita!"',
    name: 'Sofia Almeida',
  },
  {
    text: '"Adorei o atendimento e meus cabelos ficaram incríveis! Recomendo!"',
    name: 'Maria da Silva',
  },
];

// Original DOM repeats the 4 testimonials 3 times (12 cards) in the marquee row.
export const testimonials: Testimonial[] = [
  ...baseTestimonials,
  ...baseTestimonials,
  ...baseTestimonials,
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '5+', label: 'anos' },
  { value: '10+', label: 'serviços' },
  { value: '100+', label: 'clientes satisfeitos' },
  { value: '20+', label: 'profissionais' },
];

export const footerServices = [
  'Vendas de Produtos',
  'Tratamentos Capilares',
  'Maquiagem',
  'Depilação',
  'Sobrancelhas',
  'Unhas',
];
