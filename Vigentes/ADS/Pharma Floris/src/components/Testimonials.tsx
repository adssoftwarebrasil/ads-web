import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    text: '"Desde que comecei a usar os produtos da Pharma Floris, sinto-me muito melhor. A qualidade é excepcional!"',
  },
  {
    name: 'João Pereira',
    text: '"A equipe é sempre gentil e prestativa. Recomendo a farmácia para todos!"',
  },
  {
    name: 'Ana Costa',
    text: '"Adorei a variedade de produtos e a atenção no atendimento."',
  },
  {
    name: 'Ricardo Lima',
    text: '"Medicação personalizada é tudo que eu precisava. Pharma Floris mudou minha vida!"',
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[rgb(88,171,218)]/10 rounded-full mb-6">
            <span className="text-[rgb(88,171,218)] font-semibold text-sm uppercase tracking-wide">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A satisfação dos nossos clientes é a nossa maior conquista.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[rgb(88,171,218)] to-[rgb(130,116,187)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Quote
                    width={24}
                    height={24}
                    className="lucide lucide-quote w-7 h-7 text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {t.name}
                  </h3>
                  <Stars />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg italic">
                {t.text}
              </p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[rgb(88,171,218)] to-[rgb(130,116,187)] rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
