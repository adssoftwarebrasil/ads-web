import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const TOTAL = 4;

const stats = [
  { value: '8.8', label: 'Avaliação Geral', sub: 'Booking.com' },
  { value: '5.0', label: 'Nota Google', sub: 'Reviews verificadas' },
  { value: '100%', label: 'Recomendação', sub: 'Hóspedes satisfeitos' },
];

export default function Reviews() {
  const [index, setIndex] = useState(1);
  const prev = () => setIndex((i) => (i - 1 + TOTAL) % TOTAL);
  const next = () => setIndex((i) => (i + 1) % TOTAL);

  return (
    <section className="py-16 md:py-24 bg-[#435A4A] ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#C8AF82] font-semibold text-sm md:text-base uppercase tracking-widest mb-3 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
              Avaliações Reais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              O Que Dizem Nossos <span className="text-[#C8AF82]">Hóspedes</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={24} height={24} fill="#D4AF37" strokeWidth={0} className="text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-2xl md:text-3xl font-bold text-white">5.0</span>
              <span className="text-white/70 text-base md:text-lg">· Excelente</span>
            </div>
          </div>
          <div className="max-w-5xl mx-auto relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8AF82]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              <Quote
                width={60}
                height={60}
                strokeWidth={1.5}
                className="text-[#C8AF82] opacity-30 absolute top-8 left-8 md:top-12 md:left-12"
              />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} width={20} height={20} fill="#D4AF37" strokeWidth={0} className="text-[#D4AF37]" />
                    ))}
                  </div>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-white text-center mb-8 md:mb-10 leading-relaxed min-h-[140px] md:min-h-[160px] flex items-center justify-center px-4 md:px-8">
                  <span className="italic">
                    "Lugar excelente, sempre que hospedo aqui sou muito bem atendido. Quartos
                    aconchegantes e café da manhã top. Recomendo sempre!"
                  </span>
                </p>
                <div className="text-center space-y-2">
                  <p className="text-[#C8AF82] font-bold text-lg md:text-xl">Jaaziel Gomes</p>
                  <p className="text-white/80 text-sm md:text-base">Google Reviews</p>
                  <p className="text-white/60 text-xs md:text-sm">Há 4 meses</p>
                </div>
              </div>
              <button
                onClick={prev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 md:p-3 rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="Avaliação anterior"
              >
                <ChevronLeft width={24} height={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 md:p-3 rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="Próxima avaliação"
              >
                <ChevronRight width={24} height={24} />
              </button>
            </div>
            <div className="flex justify-center mt-8 gap-3">
              {Array.from({ length: TOTAL }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index ? 'bg-[#C8AF82] w-10 h-3' : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                  }`}
                  aria-label={`Ver avaliação ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 md:mt-16 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#C8AF82] mb-2">{s.value}</div>
                <p className="text-white/90 font-medium">{s.label}</p>
                <p className="text-white/60 text-sm mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <a
              href="https://www.google.com/travel/search?q=Royal%20Hotel&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72559352%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C72959983%2C73064764%2C73107089%2C73157405&hl=pt-PT&gl=pt&cs=1&ssta=1&ts=CAEaRwopEicyJTB4OTQ4OWE5ZDljMDY2N2MzMToweGNhODMwNjExOTAxNDkyNGQSGhIUCgcI6Q8QCxgHEgcI6Q8QCxgIGAEyAhAA&qs=CAEyFENnc0l6YVRTZ0puQ3djSEtBUkFCOAJCCQlNkhSQEQaDyg&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjo56nQ796QAxUAAAAAHQAAAAAQBA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-[#C8AF82] text-[#435A4A] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl group"
            >
              Ver Mais Avaliações
              <ExternalLink
                width={20}
                height={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
          <div className="text-center mt-8 text-white/80 text-sm md:text-base">
            <p>✓ Avaliações verificadas de hóspedes reais</p>
          </div>
        </div>
      </div>
    </section>
  );
}
