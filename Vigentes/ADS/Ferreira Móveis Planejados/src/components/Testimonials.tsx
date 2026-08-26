import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  meta: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Ótimo profissional! Com paciência para mudanças quando precisei. Fiquei muito satisfeita com o resultado final do meu closet. Recomendo muito!"',
    initial: 'J',
    name: 'Juliana Sanches',
    meta: '2 avaliações',
  },
  {
    text: '"Super indico! Qualidade, entrega e montagem dos móveis dentro do prazo combinado e com preço justo. O atendimento foi excelente do início ao fim."',
    initial: 'R',
    name: 'Renata Campagnolo',
    meta: '3 avaliações',
  },
  {
    text: '"Profissional educado e prestativo, com ótima qualidade do serviço e modalidades de pagamento. Recomendo a todos que buscam qualidade e seriedade!"',
    initial: 'D',
    name: 'Dalton Pereira',
    meta: 'Guia Local · 63 avaliações',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#e4e6e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-[#5b5c57] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212121] leading-tight mb-5">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-[#5b5c57] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A satisfação de cada cliente é a nossa maior conquista. Confira os depoimentos reais no Google.
          </p>
          <div className="inline-flex items-center gap-3 mt-6 bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="lucide lucide-star text-yellow-400 fill-yellow-400"
                  width={16}
                  height={16}
                />
              ))}
            </div>
            <span className="text-[#212121] font-bold text-sm">5.0</span>
            <span className="text-[#5b5c57] text-sm">no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-500 relative opacity-100 translate-y-0"
              style={{ transition: '700ms ease-out' }}
            >
              <Quote className="lucide lucide-quote text-[#e4e6e7] mb-4" width={30} height={30} />
              <p className="text-[#5b5c57] text-sm sm:text-base leading-relaxed mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#e4e6e7]">
                <div className="w-11 h-11 rounded-full bg-[#212121] flex items-center justify-center text-white font-bold text-base shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[#212121] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#5b5c57] text-xs">{t.meta}</div>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="lucide lucide-star text-yellow-400 fill-yellow-400"
                        width={11}
                        height={11}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Ferreira+M%C3%B3veis+Planejados"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#212121] text-[#212121] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#212121] hover:text-[#e4e6e7] transition-all duration-300"
          >
            Ver Todas as Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
