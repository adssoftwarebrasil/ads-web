import { Star, Quote } from 'lucide-react';

interface Testimonial {
  initials: string;
  avatarClass: string;
  name: string;
  fullStars: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'VA',
    avatarClass: 'bg-primary',
    name: 'Valeria Alves Ferreira',
    fullStars: 5,
    text: '"Local bom e barato. Sempre atendimento de qualidade e entrega rápida. Super recomendo!"',
  },
  {
    initials: 'AV',
    avatarClass: 'bg-primary-dark',
    name: 'Arthur Victor',
    fullStars: 5,
    text: '"Melhor atendimento da cidade. Entrega rápida e qualidade no serviço. Estou sempre satisfeito!"',
  },
  {
    initials: 'RS',
    avatarClass: 'bg-primary',
    name: 'Rose Souza',
    fullStars: 4,
    text: '"Super recomendo, é muito bom o atendimento deles. Estão de parabéns pela dedicação e cuidado!"',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-accent/20 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Avaliações dos Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
            O que nossos clientes <span className="text-accent">dizem</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o nosso maior prêmio.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-center text-white max-w-xs w-full shadow-xl">
            <div className="text-7xl font-black text-accent leading-none mb-2">4.5</div>
            <div className="flex justify-center gap-1 mb-3">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} size={22} className="lucide lucide-star text-accent fill-accent" />
              ))}
              <Star size={22} className="lucide lucide-star text-accent/40 fill-accent/20" />
            </div>
            <p className="text-white/70 text-sm">Nota média no Google</p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-white font-semibold text-sm">Avaliado por nossos clientes</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-3xl p-8 card-hover border border-primary-light/30 relative"
            >
              <div className="absolute top-6 right-6 text-primary-light/40">
                <Quote size={40} className="lucide lucide-quote " />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 ${t.avatarClass} rounded-2xl flex items-center justify-center text-accent font-black text-lg shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{t.name}</p>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) =>
                      i < t.fullStars ? (
                        <Star key={i} size={16} className="lucide lucide-star text-accent fill-accent" />
                      ) : (
                        <Star key={i} size={16} className="lucide lucide-star text-gray-300 fill-gray-200" />
                      )
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/Central+G%C3%A1s+Primavera+do+Leste"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm border-b-2 border-accent pb-0.5"
          >
            Ver todas as avaliações no Google
            <Star size={14} className="lucide lucide-star text-accent fill-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}
