import { Star, Quote } from 'lucide-react';

const avatars = ['R', 'C', 'R'];

const reviews = [
  { text: '“Ótimo atendimento, um excelente profissional Venâncio.”', name: 'Renildo Souza', meta: '9 avaliações · 4 fotos', delay: '0ms' },
  { text: '“Tem um excelente atendimento e se preocupa com seus clientes!!!”', name: 'Cristiano Almeida', meta: 'Local Guide · 11 avaliações', delay: '80ms' },
  { text: '“Melhor impossível. Lá você encontra tudo! Atendimento nota 1000!!”', name: 'Rafael Ortins', meta: 'Local Guide · 18 avaliações', delay: '160ms' },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="reveal inline-block px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-wine text-xs font-bold uppercase tracking-[0.2em] mb-5">Depoimentos</span>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.05]">
              Quem compra com a gente <span className="text-gradient-brand">recomenda.</span>
            </h2>
          </div>
          <div className="reveal flex items-center gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
            <div className="flex -space-x-2">
              {avatars.map((a, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-navy text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                  {a}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <Star className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="lucide lucide-star w-4 h-4 fill-amber-400/50 text-amber-400" />
                <span className="ml-2 font-bold text-brand-navy">4.4</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">Avaliação média no Google</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="reveal relative p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-brand-navy/10 transition-all"
              style={{ transitionDelay: r.delay }}
            >
              <Quote className="lucide lucide-quote absolute top-5 right-5 w-10 h-10 text-brand-blue/10" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-6">{r.text}</p>
              <div className="pt-4 border-t border-slate-200/80">
                <p className="font-bold text-brand-navy">{r.name}</p>
                <p className="text-xs text-slate-500 font-medium">{r.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
