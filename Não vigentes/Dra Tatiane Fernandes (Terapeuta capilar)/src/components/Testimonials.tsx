import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: '"Uma profissional excelente, muito atenciosa e com muito profissionalismo no tratamento. Gostei muito e recomendo de olhos fechados!"',
    initials: 'CA',
    name: 'Cecília Andrade',
    role: 'Tratamento de Queda Capilar',
    highlight: false,
  },
  {
    text: '"Excelente profissional. Demonstra amor pelo que faz, e isso reflete diretamente nos resultados. Me sinto completamente diferente!"',
    initials: 'AM',
    name: 'Ana Maria',
    role: 'Alopecia',
    highlight: true,
  },
  {
    text: '"Atendimento diferenciado, com dedicação e atenção a todos os detalhes em cada consulta. Nunca me senti tão bem cuidada."',
    initials: 'RC',
    name: 'Rafaela do Carmo',
    role: 'Terapia Capilar',
    highlight: false,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#F8E5E4]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-[#A6A6A6] text-sm font-medium tracking-widest uppercase">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#404040] mt-3 mb-4">
            O que dizem nossos <span className="italic text-[#737373]">pacientes</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-sm mt-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  width={16}
                  height={16}
                  className="lucide lucide-star fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-[#737373] font-bold text-lg">5.0</span>
            <span className="text-[#A6A6A6] text-sm">no Google</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`animate-on-scroll bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-400 relative overflow-hidden ${
                t.highlight ? 'sm:-translate-y-3' : ''
              }`}
            >
              <div className="absolute top-5 right-5 text-[#F8E5E4]">
                <Quote width={40} height={40} strokeWidth={1} className="lucide lucide-quote " />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={14}
                    height={14}
                    className="lucide lucide-star fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-[#737373] text-sm leading-relaxed mb-6 relative z-10">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#F8E5E4]">
                <div className="w-10 h-10 rounded-full bg-[#F8E5E4] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#737373] text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#404040] text-sm">{t.name}</p>
                  <p className="text-[#A6A6A6] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-on-scroll">
          <a
            href="https://www.google.com/maps/place/Tatiane+terapeuta+Capilar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A6A6A6] hover:text-[#737373] text-sm transition-colors underline underline-offset-4"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
