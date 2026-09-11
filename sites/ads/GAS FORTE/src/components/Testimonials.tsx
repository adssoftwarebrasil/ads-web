import { Star, Quote } from 'lucide-react';

interface Testimonial {
  initial: string;
  avatarClass: string;
  name: string;
  meta: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    initial: 'A',
    avatarClass: 'from-orange-500 to-red-600',
    name: 'Antonio Costa',
    meta: '2 avaliações no Google',
    quote: '"Excelente atendimento, entrega rápida e preço bom."',
  },
  {
    initial: 'L',
    avatarClass: 'from-amber-500 to-orange-600',
    name: 'Laidyson Alves Dos Santos',
    meta: '2 avaliações · 11 fotos',
    quote: '"Excelente atendimento e entrega rápida."',
  },
  {
    initial: 'A',
    avatarClass: 'from-red-500 to-brand-red',
    name: 'Ariale Calçados',
    meta: '1 avaliação · 1 foto',
    quote: '"Sempre peço é chega muito rápido, gosto da agilidade."',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'rgb(249, 77, 1)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Avaliações Reais</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            Quem usa, <span className="text-gradient">recomenda</span>
          </h2>
          <div className="inline-flex flex-col items-center mt-2 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-black text-white">5.0</span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      width={20}
                      height={20}
                      className="lucide lucide-star text-brand-amber fill-brand-amber"
                    />
                  ))}
                </div>
                <span className="text-brand-light/50 text-xs">Nota máxima no Google</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-brand-dark/70 border border-white/5 hover:border-brand-orange/20 rounded-2xl p-6 relative card-hover"
            >
              <Quote
                width={32}
                height={32}
                className="lucide lucide-quote absolute top-5 right-5 text-brand-orange/15"
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarClass} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-brand-light/40 text-xs">{t.meta}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={14}
                    height={14}
                    className="lucide lucide-star text-brand-amber fill-brand-amber"
                  />
                ))}
              </div>
              <p className="text-brand-light/70 text-sm leading-relaxed mt-3 italic">{t.quote}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-brand-light/40 text-sm">
            Avaliações verificadas pelo Google · Gás Forte – distribuidora de gás GLP
          </p>
        </div>
      </div>
    </section>
  );
}
