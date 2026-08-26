import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: '"A MotoSilva sempre me atendeu bem, as entregas são rápidas e as peças de qualidade!"',
    author: 'José da Silva',
  },
  {
    quote: '"Comprei diversas peças com eles, o atendimento foi excepcional!"',
    author: 'Mariana Oliveira',
  },
  {
    quote: '"A MotoSilva é minha parceira de negócios. As condições são sempre vantajosas."',
    author: 'Carlos Alberto',
  },
  {
    quote: '"Recomendo a todos! Entregas confiáveis e atendimento impecável."',
    author: 'Cláudia Ribeiro',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Depoimentos</h2>
          <div className="w-24 h-1 bg-[#FFE600] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600">Nossos clientes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFE600] rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4 italic">{t.quote}</p>
                  <p className="text-black font-bold">{t.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
