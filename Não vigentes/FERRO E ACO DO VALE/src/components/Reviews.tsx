import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: '"Material de qualidade, ótimos preços e entrega rápida. Tudo em um só lugar. Recomendo demais!!!"',
    initial: 'A',
    name: 'Andressa Mouzinho',
    meta: '19 fotos',
  },
  {
    text: '"Ótimos preços, atendimento de primeira, Eduardo sempre prestativo. Parabéns, super indico!"',
    initial: 'M',
    name: 'Marc Unk',
    meta: 'Local Guide · 25 avaliações',
  },
  {
    text: '"Ótimo atendimento, produto de qualidade, super indico, estão de parabéns!"',
    initial: 'G',
    name: 'Gutieres Ricardo De Morais',
    meta: '1 avaliação',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="lucide lucide-star w-4 h-4 fill-brand-orange text-brand-orange" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
            Avaliações
          </span>
          <h2 className="section-title text-white mb-4">O Que Nossos Clientes Dizem</h2>
          <div className="inline-flex flex-col items-center gap-2 mt-4">
            <div className="flex items-end gap-3">
              <span className="text-6xl font-black text-white leading-none">5,0</span>
              <div className="flex flex-col items-start gap-1 pb-1">
                <Stars />
                <span className="text-gray-500 text-xs">Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="animate-on-scroll card-hover relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-brand-orange/30"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="lucide lucide-quote absolute top-5 right-5 w-8 h-8 text-brand-orange/20 fill-brand-orange/10" />
              <Stars />
              <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-6 italic">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{r.initial}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{r.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{r.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 animate-on-scroll">
          <p className="text-gray-500 text-sm">
            Veja todas as avaliações no{' '}
            <a
              href="https://maps.google.com/?q=FERRO+E+ACO+DO+VALE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline font-medium"
            >
              Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
