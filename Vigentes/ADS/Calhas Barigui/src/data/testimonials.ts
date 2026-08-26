export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Oliveira',
    role: 'Cliente',
    text: 'Super satisfeita com a entrega no prazo e a qualidade dos produtos! A Calhas Barigui superou todas as minhas expectativas.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Pedro Costa',
    role: 'Construtora',
    text: 'Ótima experiência! Atendimento diferenciado e muito atencioso. Com certeza voltarei a comprar.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Lima',
    role: 'Cliente',
    text: 'Os produtos da Calhas Barigui são de extremo bom gosto e durabilidade. Recomendo a todos!',
    rating: 5,
  },
  {
    id: 4,
    name: 'João Silva',
    role: 'Engenheiro Civil',
    text: 'A Calhas Barigui atendeu nossas expectativas com prontidão e excelente qualidade no serviço!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Carlos Mendes',
    role: 'Empreiteiro',
    text: 'Trabalho com a Calhas Barigui há anos e a qualidade dos materiais é sempre impecável. Parceria de confiança.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Fernanda Rocha',
    role: 'Arquiteta',
    text: 'Excelente variedade de produtos e atendimento técnico especializado. Indico para todos os meus clientes.',
    rating: 5,
  },
];
