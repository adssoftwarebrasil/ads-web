import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { VerifiedCheckGlyph, PinGlyph } from './icons';

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-16 md:py-24 bg-gradient-to-br from-[hsl(211,66%,95%)] via-white to-[hsl(211,66%,98%)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(211,66%,41%)] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F97316] rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[hsl(211,66%,41%)] font-semibold text-sm md:text-base tracking-wider uppercase bg-white px-6 py-2 rounded-full shadow-sm">
              Depoimentos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(211,66%,25%)] mb-4 leading-tight">
            O Que Dizem{' '}
            <span className="text-[hsl(211,66%,41%)] relative">
              Nossos Clientes
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path
                  d="M0 4C50 4 50 4 100 4C150 4 150 4 200 4"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes falam sobre nossos serviços
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 opacity-100 scale-100">
              <div className="bg-gradient-to-r from-[hsl(211,66%,41%)] to-[hsl(211,66%,35%)] px-8 md:px-12 py-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -top-4 -left-4 text-white/10">
                  <Quote
                    width={120}
                    height={120}
                    fill="currentColor"
                    className="lucide lucide-quote "
                  />
                </div>
                <div className="flex justify-center gap-2 mb-3 relative z-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      width={24}
                      height={24}
                      className="lucide lucide-star text-[#F97316] fill-[#F97316] drop-shadow-lg"
                    />
                  ))}
                </div>
                <div className="flex justify-center relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    <VerifiedCheckGlyph className="w-5 h-5 text-[#10B981]" />
                    <span className="text-white text-sm font-semibold">Cliente Verificado</span>
                  </div>
                </div>
              </div>
              <div className="px-8 md:px-12 py-10 md:py-12">
                <div className="relative mb-8">
                  <Quote
                    width={24}
                    height={24}
                    className="lucide lucide-quote absolute -top-4 -left-2 text-[hsl(211,66%,90%)] w-12 h-12 md:w-16 md:h-16"
                  />
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center italic relative z-10 px-8">
                    Profissionais competentes e preços justos. Estou muito satisfeito.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[hsl(211,66%,41%)] to-[hsl(211,66%,55%)] flex items-center justify-center text-white font-bold text-xl md:text-2xl mb-4 shadow-lg ring-4 ring-white">
                    MS
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[hsl(211,66%,25%)] mb-1">Maria Souza</h4>
                  <p className="text-sm md:text-base text-gray-500 mb-1">Cliente</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <PinGlyph className="w-4 h-4" />
                    Franca - SP
                  </div>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-[hsl(211,66%,41%)] via-[#F97316] to-[hsl(211,66%,41%)]"></div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                className="group bg-white hover:bg-[hsl(211,66%,41%)] text-[hsl(211,66%,41%)] hover:text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft width={24} height={24} className="lucide lucide-chevron-left w-6 h-6" />
              </button>
              <div className="flex gap-3">
                <button
                  className="transition-all duration-300 rounded-full bg-gray-300 hover:bg-gray-400 w-3 h-3 hover:scale-125"
                  aria-label="Ir para depoimento 1"
                ></button>
                <button
                  className="transition-all duration-300 rounded-full bg-[hsl(211,66%,41%)] w-12 h-3"
                  aria-label="Ir para depoimento 2"
                ></button>
                <button
                  className="transition-all duration-300 rounded-full bg-gray-300 hover:bg-gray-400 w-3 h-3 hover:scale-125"
                  aria-label="Ir para depoimento 3"
                ></button>
                <button
                  className="transition-all duration-300 rounded-full bg-gray-300 hover:bg-gray-400 w-3 h-3 hover:scale-125"
                  aria-label="Ir para depoimento 4"
                ></button>
              </div>
              <button
                className="group bg-white hover:bg-[hsl(211,66%,41%)] text-[hsl(211,66%,41%)] hover:text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Próximo depoimento"
              >
                <ChevronRight width={24} height={24} className="lucide lucide-chevron-right w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <span className="text-gray-500 text-sm md:text-base font-medium">2 / 4</span>
          </div>
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[hsl(211,66%,41%)] mb-2">100%</div>
                <p className="text-gray-600 text-sm md:text-base">Satisfação dos Clientes</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2">500+</div>
                <p className="text-gray-600 text-sm md:text-base">Clientes Atendidos</p>
              </div>
              <div>
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      width={28}
                      height={28}
                      className="lucide lucide-star text-[#F97316] fill-[#F97316]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-base">Avaliação Média</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
