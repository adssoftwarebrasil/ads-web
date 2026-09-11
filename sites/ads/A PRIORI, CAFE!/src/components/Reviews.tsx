import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Dennis Penna',
    badge: 'Guia Local · 157 avaliações',
    rating: 5,
    text: 'Ambiente muito aconchegante, atendimento perfeito, e produtos de qualidade superior!',
    highlight: 'Café da manhã · R$ 20–40',
  },
  {
    name: 'Gabriel Marques',
    badge: 'Avaliador do Google',
    rating: 5,
    text: 'As comidas são deliciosas e o ambiente super lindo! Atendimento incrível da funcionária Mariani Keisa — ela me tratou com tanto carinho que transformou o meu dia para melhor. As bebidas geladas e o biscoito são divinos!',
    highlight: 'R$ 1–20',
  },
  {
    name: 'Re',
    badge: '2 avaliações · 4 fotos',
    rating: 5,
    text: 'Ambiente tranquilo e aconchegante, perfeito pra quem aprecia um café de qualidade — com latte art linda pelo barista! Tem bastante opção de alimentos, doces e salgados. O serviço de entrega é rápido e não deixa a desejar!',
    highlight: 'Café & Delivery',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-burgundy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-cream mb-3 block opacity-80">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="font-sans text-white/80 text-sm">4,9 no Google Maps</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(({ name, badge, rating, text, highlight }, i) => (
            <div
              key={name}
              className="animate-on-scroll bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote size={28} className="text-cream/50 mb-4" />
              <p className="font-sans text-white/90 text-base leading-relaxed mb-6 italic">
                "{text}"
              </p>
              <div className="flex items-start justify-between gap-3 pt-4 border-t border-white/20">
                <div>
                  <p className="font-serif font-semibold text-white text-base">{name}</p>
                  <p className="font-sans text-white/60 text-xs mt-0.5">{badge}</p>
                  <p className="font-sans text-cream/70 text-xs mt-1">{highlight}</p>
                </div>
                <Stars count={rating} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <a
            href="https://www.google.com/maps/place/A+Priori+Caf%C3%A9/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-burgundy font-sans font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-cream hover:shadow-xl hover:-translate-y-0.5"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
