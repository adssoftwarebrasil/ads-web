import { ChevronLeft, ChevronRight } from 'lucide-react';

const stats = [
  { value: '439+', label: 'Clientes Satisfeitos' },
  { value: '500+', label: 'Trabalhos Realizados' },
  { value: '2.350+', label: 'Orçamentos Gerados' },
  { value: '100%', label: 'Satisfação Garantida' },
];

export default function Testimonials() {
  return (
    <div className="animate-slideUp delay-400">
      <section id="depoimentos" className="py-24 bg-[#00218b] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl opacity-90">Histórias reais de quem confia em nosso trabalho</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20 transition-all duration-500">
              <div className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                <span className="text-6xl opacity-50">"</span>A reforma do meu colchão foi a melhor
                decisão. Uber Espumas trouxe vida nova ao meu sono. Profissionalismo e qualidade
                incomparáveis!<span className="text-6xl opacity-50">"</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                  LG
                </div>
                <div>
                  <div className="font-semibold text-lg">Luiz Gustavo</div>
                  <div className="opacity-80">Uberlândia-MG</div>
                </div>
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white text-[#00218b] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="lucide lucide-chevron-left " width={24} height={24} />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white text-[#00218b] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="lucide lucide-chevron-right " width={24} height={24} />
            </button>
            <div className="flex justify-center gap-2 mt-8">
              <button
                className="w-3 h-3 rounded-full transition-all duration-300 bg-white/40"
                aria-label="Go to testimonial 1"
              ></button>
              <button
                className="w-3 h-3 rounded-full transition-all duration-300 bg-white w-8"
                aria-label="Go to testimonial 2"
              ></button>
              <button
                className="w-3 h-3 rounded-full transition-all duration-300 bg-white/40"
                aria-label="Go to testimonial 3"
              ></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
