import { Star, Quote } from 'lucide-react';

interface Testimonial {
  initials: string;
  name: string;
  meta: string;
  text: string;
  highlight: boolean;
}

const testimonials: Testimonial[] = [
  {
    initials: 'AF',
    name: 'Agricultura Familiar e CIA',
    meta: 'Local Guide · 120 avaliações',
    text:
      '"Ótima experiência! Comprei um carro na agência por telefone e tive todo o suporte necessário desde o primeiro contato até a entrega do veículo. O atendimento foi exemplar, tive toda a comodidade quando cheguei em Cuiabá com o translado e auxílio na documentação. Super recomendo!"',
    highlight: false,
  },
  {
    initials: 'AS',
    name: 'André Souza',
    meta: '7 avaliações',
    text:
      '"Ótimo atendimento, ambiente incrível. Me senti à vontade desde o primeiro momento. Equipe muito profissional e atenciosa. Com certeza voltarei para a próxima compra."',
    highlight: true,
  },
  {
    initials: 'DG',
    name: 'Daniel Garça',
    meta: '7 avaliações',
    text:
      '"Excelente! Ótimo atendimento, carros classificados em excelente estado de conservação, ambiente agradável com pessoas incríveis. Comprei dois veículos com eles, super indico a garagem! Fácil acesso."',
    highlight: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#f8c102]"></div>
            <span className="text-[#f8c102] text-sm font-semibold tracking-widest uppercase">Depoimentos</span>
            <div className="h-px w-8 bg-[#f8c102]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#fefefe] mb-4">O que nossos clientes dizem</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="lucide lucide-star text-[#f8c102] fill-[#f8c102]" width={20} height={20} />
              ))}
              <Star className="lucide lucide-star text-[#f8c102]/40" width={20} height={20} />
            </div>
            <span className="text-[#fefefe] font-bold text-xl">4.5</span>
            <span className="text-[#fefefe]/40 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 relative ${
                t.highlight ? 'bg-[#f8c102] border-transparent' : 'bg-[#1a1a1a] border-white/5 hover:border-[#f8c102]/20'
              }`}
            >
              <Quote
                className={`lucide lucide-quote absolute top-6 right-6 ${
                  t.highlight ? 'text-[#0c0c0c]/10' : 'text-[#f8c102]/10'
                }`}
                width={36}
                height={36}
              />
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    t.highlight ? 'bg-[#0c0c0c]/20 text-[#0c0c0c]' : 'bg-[#f8c102] text-[#0c0c0c]'
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className={`font-bold text-sm ${t.highlight ? 'text-[#0c0c0c]' : 'text-[#fefefe]'}`}>{t.name}</div>
                  <div className={`text-xs ${t.highlight ? 'text-[#0c0c0c]/60' : 'text-[#fefefe]/40'}`}>{t.meta}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="lucide lucide-star text-[#f8c102] fill-[#f8c102]" width={14} height={14} />
                ))}
              </div>
              <p className={`mt-4 text-sm leading-relaxed ${t.highlight ? 'text-[#0c0c0c]/80' : 'text-[#fefefe]/60'}`}>
                {t.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=XC+MOTORS+V%C3%A1rzea+Grande"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#fefefe]/40 hover:text-[#f8c102] text-sm transition-colors"
          >
            <Star className="lucide lucide-star" width={14} height={14} />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
