import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const dots = [0, 1, 2, 3];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Voz dos Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            O que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              nossos clientes
            </span>{' '}
            dizem
          </h2>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            className="absolute left-0 p-2 bg-white/70 hover:bg-white border border-gray-200 text-blue-600 rounded-full shadow-lg transition-all duration-300 z-20 hidden sm:block transform hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft
              className="lucide lucide-chevron-left w-5 h-5"
              width={24}
              height={24}
            />
          </button>
          <div className="w-full mx-auto max-w-2xl bg-white rounded-xl shadow-xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100">
            <Quote
              className="lucide lucide-quote w-8 h-8 text-blue-500 mb-4"
              width={24}
              height={24}
            />
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic mb-6">
              "O atendimento da Inspirar foi excepcional. Profissionais
              qualificados e equipamentos de primeira linha. Minha qualidade de
              vida melhorou significativamente."
            </p>
            <div className="flex items-center gap-4 border-t pt-4 border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                J
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-md">
                  João da Silva
                </div>
                <div className="text-gray-500 text-sm">
                  Paciente de Oxigenoterapia
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute right-0 p-2 bg-white/70 hover:bg-white border border-gray-200 text-blue-600 rounded-full shadow-lg transition-all duration-300 z-20 hidden sm:block transform hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight
              className="lucide lucide-chevron-right w-5 h-5"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {dots.map((i) => (
            <button
              key={i}
              aria-label={`Ir para o depoimento ${i + 1}`}
              className={
                i === 0
                  ? 'h-2 rounded-full transition-all duration-300 bg-blue-600 w-6'
                  : 'h-2 rounded-full transition-all duration-300 bg-gray-300 w-2 hover:bg-gray-400'
              }
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
