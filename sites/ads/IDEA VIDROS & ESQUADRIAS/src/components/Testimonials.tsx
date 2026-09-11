import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  initial: string;
  reviews: string;
  badge?: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Amei o atendimento, trabalho deles material tudo de primeira. Super indico! Profissionais dedicados e comprometidos com a qualidade."',
    name: 'Rita Bossi',
    initial: 'R',
    reviews: '2 avaliações',
  },
  {
    text: '"Atendimento é maravilhoso, são muito atenciosos, e o pós-vendas é incrível. Nota 1000! Ficou exatamente como eu sonhava."',
    name: 'Pamela Lima',
    initial: 'P',
    reviews: '1 avaliações',
  },
  {
    text: '"Ótimo atendimento! Empresa séria, com profissionais qualificados. Recomendo para todos que precisam de vidros e esquadrias na região."',
    name: 'Thiago Manibeze',
    initial: 'T',
    reviews: '190 avaliações',
    badge: 'Guia Local',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={14} height={14} className="fill-[#EACD68] text-[#EACD68]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#F60301] text-xs font-bold uppercase tracking-widest mb-3">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#020202] mb-4">
            O Que Nossos <span className="text-[#234E72]">Clientes Dizem</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            A satisfação de quem confia no nosso trabalho é a nossa maior conquista.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Quote width={28} height={28} className="text-[#234E72]/20 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5 italic">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#234E72] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#020202] font-semibold text-sm">{t.name}</span>
                    {t.badge && (
                      <span className="text-[9px] bg-[#234E72]/10 text-[#234E72] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide">
                        {t.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Stars />
                    <span className="text-gray-400 text-xs">{t.reviews}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-[#020202]">4.5</div>
              <Stars />
              <div className="text-xs text-gray-400 mt-1">no Google</div>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden sm:block"></div>
            <div>
              <div className="text-[#020202] font-bold text-base">IDEA Vidros &amp; Esquadrias</div>
              <div className="text-gray-500 text-sm mt-1">Referência em Sorriso/MT há 14 anos</div>
              <div className="flex gap-1 mt-2">
                <div className="h-2 rounded-full bg-[#EACD68]" style={{ width: '20%' }}></div>
                <div className="h-2 rounded-full bg-[#EACD68]" style={{ width: '40%' }}></div>
                <div className="h-2 rounded-full bg-[#EACD68]" style={{ width: '60%' }}></div>
                <div className="h-2 rounded-full bg-[#EACD68]" style={{ width: '80%' }}></div>
                <div className="h-2 rounded-full bg-[#EACD68]" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
          <a
            href="http://wa.me/556699856445?text=Olá!%20Vi%20os%20depoimentos%20e%20gostaria%20de%20fazer%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#F60301] hover:bg-red-700 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:scale-105"
          >
            Fazer Meu Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
