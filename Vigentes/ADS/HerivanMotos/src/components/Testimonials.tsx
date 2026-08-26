import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Kauane Oliveira',
    rating: 5,
    text: 'Comprei minha moto nessa loja e fui muito bem atendida. Motos em ótimo estado e total transparência em toda a negociação. Super indico!',
    initials: 'KO',
  },
  {
    name: 'Wesley Santos',
    rating: 5,
    text: 'Atendimento top, moto do jeito que eu queria! Saí satisfeito e com a certeza de que fiz um ótimo negócio. Equipe prestativa e honesta.',
    initials: 'WS',
  },
  {
    name: 'Cliente Herivan Motos',
    rating: 5,
    text: 'Referência em Sinop quando o assunto é moto seminova. Processo transparente do início ao fim, sem pegadinhas. Recomendo a todos!',
    initials: 'CH',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-[rgb(219,55,51)] text-[rgb(219,55,51)]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[rgb(219,55,51)] text-xs font-bold uppercase tracking-widest">
            Avaliações
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black mt-3 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-[rgb(93,92,97)] text-base max-w-xl mx-auto">
            A melhor propaganda é a satisfação de quem já comprou conosco. Confira os depoimentos reais de
            quem escolheu a Herivan Motos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[rgb(187,189,191)]/8 border border-[rgb(187,189,191)]/25 rounded-2xl p-8 flex flex-col gap-5 hover:border-[rgb(219,55,51)]/40 hover:shadow-lg transition-all duration-300"
            >
              <Quote size={32} className="text-[rgb(219,55,51)] opacity-50" />
              <p className="text-[rgb(93,92,97)] text-base leading-relaxed flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-[rgb(187,189,191)]/25 pt-5">
                <div className="w-11 h-11 rounded-full bg-[rgb(219,55,51)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold text-black text-sm">{review.name}</div>
                  <StarRating count={review.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-black mb-2">
              Faça parte dessa história.
            </h3>
            <p className="text-[rgb(187,189,191)] text-base">
              Mais de 10 anos ajudando pessoas a realizarem o sonho da moto própria.
            </p>
          </div>
          <a
            href="https://wa.me/556699951333?text=Ol%C3%A1!%20Vi%20o%20site%20e%20tenho%20interesse%20em%20uma%20moto."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[rgb(219,55,51)] text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors duration-200 whitespace-nowrap"
          >
            Quero minha moto agora
          </a>
        </div>
      </div>
    </section>
  );
}
