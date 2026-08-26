import { Star, Quote } from 'lucide-react';

interface Review {
  initial: string;
  name: string;
  meta: string;
  text: string;
  footer: string;
  delay: number;
}

const reviews: Review[] = [
  {
    initial: 'M',
    name: 'Milene Cantor',
    meta: 'Local Guide · 52 avaliações',
    text: 'É um dos melhores locais que já comi em Sinop. Além da comida maravilhosa, o ambiente é bonito, fresco, espaçoso e confortável. O serviço simplesmente perfeito, muito além do básico, a equipe é genuinamente simpática e prestativa.',
    footer: 'Sábado, ~20h — Comida e drinks saíram bem rápido',
    delay: 0,
  },
  {
    initial: 'L',
    name: 'Larissa Garcia Andrade',
    meta: 'Local Guide · 444 avaliações',
    text: 'Sensacional, um achado em Sinop! Cardápio amplo em opções, ambiente super bonito e familiar, atendimento super atencioso, servem entradinhas antes do prato chegar, tudo o que provamos estava maravilhoso.',
    footer: 'Jantar · R$ 40–60 — Preço justo pela qualidade',
    delay: 100,
  },
  {
    initial: 'J',
    name: 'Jéssica Béda',
    meta: 'Local Guide · 16 avaliações',
    text: 'Excelente atendimento, espetos bem servidos, comida deliciosa. Estávamos em 7 pessoas, pedimos o combo família que servia cerca de 4-5 pessoas e nos serviu muito bem.',
    footer: 'Jantar em grupo · R$ 40–60',
    delay: 200,
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading animate-reveal">Avaliações</p>
          <h2 className="section-heading mt-3 animate-reveal">
            O Que Nossos Clientes <span className="text-gradient">Dizem</span>
          </h2>
          <div className="divider mx-auto mt-6 animate-reveal"></div>
          <div className="mt-8 flex items-center justify-center gap-6 animate-reveal">
            <div className="text-center">
              <div className="font-display text-5xl font-bold text-gradient">4.4</div>
              <div className="flex justify-center mt-2">
                <div className="flex gap-0.5">
                  <Star className="lucide lucide-star fill-brand text-brand" width={14} height={14} />
                  <Star className="lucide lucide-star fill-brand text-brand" width={14} height={14} />
                  <Star className="lucide lucide-star fill-brand text-brand" width={14} height={14} />
                  <Star className="lucide lucide-star fill-brand text-brand" width={14} height={14} />
                  <Star className="lucide lucide-star fill-white/20 text-white/20" width={14} height={14} />
                </div>
              </div>
              <div className="text-white/40 text-xs mt-1">Avaliação no Google</div>
            </div>
            <div className="w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="font-display text-5xl font-bold text-white">100+</div>
              <div className="text-white/40 text-xs mt-3">Avaliações verificadas</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/10"></div>
            <div className="hidden sm:block text-center">
              <div className="font-display text-5xl font-bold text-white">99%</div>
              <div className="text-white/40 text-xs mt-3">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="animate-reveal card-dark p-6 hover:border-brand/30 transition-all duration-300 hover:-translate-y-1 relative"
              style={{ transitionDelay: `${review.delay}ms` }}
            >
              <Quote
                className="lucide lucide-quote text-brand/30 absolute top-5 right-5"
                width={32}
                height={32}
              />
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-brand/20 flex items-center justify-center font-bold text-brand text-lg flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs">{review.meta}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="lucide lucide-star fill-brand text-brand"
                        width={14}
                        height={14}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{review.text}</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-white/30 text-xs">{review.footer}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center animate-reveal">
          <a
            href="https://www.google.com/maps/place/In+Brasa+Chopp+%26+Grill"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
