import { Star, Quote } from 'lucide-react';

type Review = {
  initials: string;
  name: string;
  meta: string;
  text: string;
};

const reviews: Review[] = [
  {
    initials: 'TF',
    name: 'Tiago Flach',
    meta: 'Guia Local · 46 avaliações',
    text: 'Loja muito boa. Bastante peças para tratores e implementos. Preço bom e atendimento rápido. Super indico para quem precisa de peças agrícolas em Boa Vista.',
  },
  {
    initials: 'CD',
    name: 'Cristiana Diniz',
    meta: 'Guia Local · 64 avaliações',
    text: 'Excelente atendimento prestado pela vendedora Joelma. Muito atenciosa, conhece bem os produtos e ajudou a encontrar exatamente o que eu precisava.',
  },
  {
    initials: 'AC',
    name: 'Alber Costa',
    meta: 'Guia Local · 163 avaliações',
    text: 'Excelente atendimento e tem uma grande variedade de peças. Fui atendido rapidamente e saí com tudo o que precisava. Voltarei sempre!',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#0131AC] font-semibold text-sm uppercase tracking-widest mb-3">
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Avaliações Reais
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="lucide lucide-star text-[#FCE500] fill-[#FCE500]"
                />
              ))}
            </div>
            <span className="text-3xl font-black text-gray-900">4.7</span>
            <span className="text-gray-400 text-sm font-medium">no Google Maps</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.initials}
              className="card-hover bg-white border border-gray-100 rounded-3xl p-6 shadow-sm relative"
            >
              <div className="absolute top-5 right-5 text-[#E6ECFA]">
                <Quote size={40} className="lucide lucide-quote " />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full blue-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.meta}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="lucide lucide-star text-[#FCE500] fill-[#FCE500]"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Dinapel+Pe%C3%A7as+para+Tratores"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0131AC] text-[#0131AC] hover:bg-[#0131AC] hover:text-white font-bold px-7 py-3 rounded-full transition-all duration-200"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
