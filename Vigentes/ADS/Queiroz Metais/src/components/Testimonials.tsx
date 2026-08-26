import { Quote } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const testimonials = [
  {
    text: '"A Queiroz Metais sempre me atendeu de forma excelente, com rapidez e qualidade nos produtos!"',
    initial: 'J',
    name: 'José Silva',
    role: 'Cliente Satisfeito',
  },
  {
    text: '"Fiquei muito satisfeita com a variedade e os preços justos, sempre conto com eles para meus projetos."',
    initial: 'M',
    name: 'Maria Oliveira',
    role: 'Cliente Satisfeito',
  },
  {
    text: '"Atendimento excepcional e entrega rápida, recomendo a Queiroz Metais para todos!"',
    initial: 'F',
    name: 'Francisco Pereira',
    role: 'Cliente Satisfeito',
  },
  {
    text: '"Produtos de alta qualidade e um ótimo suporte, a Queiroz Metais é a melhor escolha."',
    initial: 'A',
    name: 'Ana Clara',
    role: 'Cliente Satisfeito',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira os depoimentos de quem já confia no nosso trabalho
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={48} />
              </div>
              <div className="relative">
                <p className="text-gray-700 text-lg mb-6 italic">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-600 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Seja Nosso Próximo Cliente
          </a>
        </div>
      </div>
    </section>
  );
}
