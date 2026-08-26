import { Star, Quote } from 'lucide-react';

interface Review {
  text: string;
  initials: string;
  name: string;
  meta: string;
  delay: string;
}

const reviews: Review[] = [
  {
    text: '"Procuramos pela cidade inteira um adaptador E14 de lâmpadas pequena pra grande, só aqui encontramos. Parabéns pela qualidade."',
    initials: 'FC',
    name: 'Frederico Camargo',
    meta: 'Guia Local · 134 avaliações',
    delay: '0s',
  },
  {
    text: '"Preço bom e ótimo atendimento. Pessoal muito prestativo."',
    initials: 'PC',
    name: 'Paulo César',
    meta: 'Guia Local · 24 avaliações',
    delay: '0.1s',
  },
  {
    text: '"Ótimo atendimento e qualidade nos produtos."',
    initials: 'TM',
    name: 'Tour 360 Marketing Digital',
    meta: 'Guia Local · 73 avaliações',
    delay: '0.2s',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-[#F9AA0C]/15 text-[#d4900a] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#F9AA0C]/30">
            <Star className="lucide lucide-star fill-[#d4900a]" width={14} height={14} />
            Avaliações
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-[#010101] leading-tight mb-4">
            O que nossos clientes <span className="text-[#239110]">falam</span>
          </h2>
          <p className="animate-on-scroll text-gray-500 text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o melhor reflexo do nosso trabalho.
          </p>
        </div>
        <div className="animate-on-scroll flex justify-center mb-12">
          <div className="bg-[#010101] rounded-2xl px-10 py-8 text-center max-w-sm w-full">
            <div className="flex justify-center mb-3">
              {[0, 1, 2, 3].map((i) => (
                <Star
                  key={i}
                  className="lucide lucide-star fill-[#F9AA0C] text-[#F9AA0C]"
                  width={28}
                  height={28}
                />
              ))}
              <Star
                className="lucide lucide-star fill-[#F9AA0C]/50 text-[#F9AA0C]/50"
                width={28}
                height={28}
              />
            </div>
            <p className="text-6xl font-black text-white mb-1">4.6</p>
            <p className="text-gray-400 text-sm font-medium">Avaliação no Google</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                alt="Google"
                className="h-5 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="animate-on-scroll bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#239110]/20 hover:shadow-xl transition-all duration-400"
              style={{ transitionDelay: review.delay }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="lucide lucide-star fill-[#F9AA0C] text-[#F9AA0C]"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <Quote
                  className="lucide lucide-quote text-[#239110]/30"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#239110]/10 flex items-center justify-center text-[#239110] font-bold text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#010101] text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
