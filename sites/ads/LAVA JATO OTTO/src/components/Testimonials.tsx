import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 transition-all duration-800 opacity-0 translate-y-8">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">Nossos Clientes</h2>
        </div>
        <div className="relative">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg">
            <Quote size={64} className="lucide lucide-quote absolute top-8 left-8 text-gold/20" />
            <div className="relative z-10">
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white text-3xl font-bold">
                  A
                </div>
                <div className="text-center">
                  <h3 className="text-gray-900 text-2xl font-semibold">Ana Paula</h3>
                  <p className="text-gold">Gestora de Frotas</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                "Atendemos nossa frota empresarial no Box 40 há anos. Sempre pontual, eficiente e com preços justos. A equipe é muito experiente."
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="bg-gold/20 hover:bg-gold text-gray-900 hover:text-white p-3 rounded-full transition-colors duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="lucide lucide-chevron-left " />
            </button>
            <div className="flex gap-2">
              <button className="w-3 h-3 rounded-full transition-all duration-300 bg-gold/30" aria-label="Ir para depoimento 1"></button>
              <button className="w-3 h-3 rounded-full transition-all duration-300 bg-gold w-8" aria-label="Ir para depoimento 2"></button>
              <button className="w-3 h-3 rounded-full transition-all duration-300 bg-gold/30" aria-label="Ir para depoimento 3"></button>
            </div>
            <button
              className="bg-gold/20 hover:bg-gold text-gray-900 hover:text-white p-3 rounded-full transition-colors duration-300"
              aria-label="Próximo"
            >
              <ChevronRight size={24} className="lucide lucide-chevron-right " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
