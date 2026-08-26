import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carla Lobo',
    role: 'Cliente',
    rating: 5,
    text: 'Excelente atendimento, faço vários seguros com eles e sempre com ótimos valores em comparação às demais empresas. Recomendo pela rapidez em prestação de serviço e quando precisei do resgate do seguro foram atenciosos e agiram com rapidez para solucionar o meu problema.',
    avatar: 'CL',
  },
  {
    name: 'Maria Conceição',
    role: 'Cliente há muitos anos',
    rating: 5,
    text: 'Sempre bem atendida. Equipe de confiança. Sou cliente há muitos anos.',
    avatar: 'MC',
  },
  {
    name: 'Luzelma Zeni',
    role: 'Cliente há mais de 10 anos',
    rating: 5,
    text: 'Eu e minha família somos clientes a mais de 10 anos. Atendimento excelente, corretor muito prestativo. Super indico o serviço dessa equipe!',
    avatar: 'LZ',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

const avatarColors = [
  'from-[rgb(61,119,189)] to-[rgb(43,85,126)]',
  'from-[rgb(77,175,215)] to-[rgb(61,119,189)]',
  'from-[rgb(43,85,126)] to-[rgb(52,82,108)]',
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-[rgb(252,255,254)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[rgb(61,119,189)] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-[rgb(61,119,189)]" />
            Depoimentos
            <span className="w-8 h-0.5 bg-[rgb(61,119,189)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(2,2,2)] mb-4">
            O que nossos clientes dizem{' '}
            <span className="text-[rgb(61,119,189)]">sobre nós</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[rgb(2,2,2)]">4.8</span>
            <span className="text-[rgb(52,82,108)]/60">/ 5.0 no Google</span>
          </div>
          <p className="text-[rgb(52,82,108)]/80 max-w-xl mx-auto">
            Avaliação média de mais de 5.000 clientes que confiam na Marguia para proteger
            o que têm de mais valioso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, rating, text, avatar }, index) => (
            <div
              key={name}
              className="bg-white border border-[rgb(61,119,189)]/10 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-5">
                <Quote size={32} className="text-[rgb(77,175,215)]/30" />
              </div>
              <p className="text-[rgb(52,82,108)] leading-relaxed flex-1 mb-6 text-sm sm:text-base">
                "{text}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[rgb(61,119,189)]/10">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {avatar}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[rgb(2,2,2)] text-sm">{name}</div>
                  <div className="text-[rgb(52,82,108)]/60 text-xs mb-1">{role}</div>
                  <StarRating count={rating} />
                </div>
                <div className="ml-auto shrink-0">
                  <div className="bg-[rgb(77,175,215)]/10 rounded-lg px-3 py-1.5 text-center">
                    <div className="text-[rgb(61,119,189)] font-bold text-lg">{rating}.0</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/Seguros+e+Cons%C3%B3rcios+Marguia+Corretora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgb(61,119,189)] font-semibold hover:text-[rgb(77,175,215)] transition-colors"
          >
            Ver todas as avaliações no Google
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
