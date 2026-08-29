import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { text: 'Os serviços são sempre feitos com muita dedicação. A equipe é altamente qualificada!', name: 'Ricardo Oliveira' },
];

export default function Testimonials() {
  const active = testimonials[0];
  const activeIndex = 1;

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[rgb(16,130,201)] font-semibold text-lg mb-3">Depoimentos</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nossos Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes satisfeitos têm a dizer sobre nossos serviços.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl overflow-hidden">
            <div className="absolute top-8 left-8 text-[rgb(28,85,163)]/10">
              <Quote size={80} />
            </div>
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
                "{active.text}"
              </p>
              <div className="text-center">
                <p className="text-xl font-bold text-[rgb(28,85,163)]">{active.name}</p>
              </div>
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[rgb(28,85,163)] hover:text-white transition-all duration-300 group"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[rgb(28,85,163)] hover:text-white transition-all duration-300 group"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>
          <div className="flex justify-center mt-8 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={
                  i === activeIndex
                    ? 'w-3 h-3 rounded-full transition-all duration-300 bg-[rgb(28,85,163)] w-8'
                    : 'w-3 h-3 rounded-full transition-all duration-300 bg-gray-300 hover:bg-gray-400'
                }
                aria-label={`Ir para depoimento ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/5564999368011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(28,85,163)] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[rgb(16,130,201)] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
