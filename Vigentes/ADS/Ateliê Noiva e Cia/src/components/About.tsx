import { Star, Check, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/whatsapp';

const HIGHLIGHTS = [
  'Atendimento personalizado e exclusivo',
  'Peças sofisticadas para momentos únicos',
  'Materiais de alta qualidade e ajuste sob medida',
  'Tradição que atravessa fronteiras',
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFFEF] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <span className="block text-[#721515] font-medium tracking-wider uppercase mb-2 text-sm">Quem somos</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ateliê Noiva e Cia</h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-medium">Excelência reconhecida</p>
              </div>
            </div>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>Nascido do sonho de Katia Sá, o Ateliê Noiva e Cia trouxe para o Vale do São Francisco um conceito inovador em moda nupcial e festa.</p>
              <p>Nossa missão vai além de alugar trajes; é sobre <span className="font-semibold text-[#721515]">materializar sonhos</span>. Com um acervo exclusivo, construímos uma história de confiança.</p>
              <div className="py-4 border-t border-b border-[#721515]/20 my-6">
                <p className="text-lg">Celebrando <span className="font-bold text-[#721515] text-2xl md:text-3xl align-middle mx-1">25 Anos</span> de histórias felizes, do Vaticano à Alemanha.</p>
              </div>
            </div>
            <div className="space-y-3">
              {HIGHLIGHTS.map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#721515]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#721515]" />
                  </div>
                  <p className="text-gray-800 font-medium">{text}</p>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#721515] hover:bg-[#8b1a1a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Agendar minha visita
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative px-4 lg:px-0 mb-8 lg:mb-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-[#d4b9b9]/40 rounded-[2rem] -rotate-3 pointer-events-none z-0"></div>
            <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2FQuem%20somos1.webp"
                  alt="Noiva Ateliê Noiva e Cia"
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:-left-10 z-20 w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2FQuem%20somos2-sobreposto.webp"
                  alt="Detalhes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
