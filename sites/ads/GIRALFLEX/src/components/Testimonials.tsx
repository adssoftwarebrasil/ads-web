import { Star, Quote } from 'lucide-react';

type Testimonial = {
  text: string;
  initials: string;
  name: string;
  meta: string;
  time: string;
};

const testimonials: Testimonial[] = [
  {
    text: '"Excelente serviço! Bom custo benefício! Super rápido também."',
    initials: 'VM',
    name: 'Vanessa Mendes',
    meta: '7 avaliações - 15 fotos',
    time: '2 meses atrás',
  },
  {
    text: '"Loja muito bonita, vendedores atenciosos, ótimo atendimento, produtos de qualidade."',
    initials: 'LR',
    name: 'Lúcia Rodrigues',
    meta: '1 avaliação',
    time: '4 meses atrás',
  },
  {
    text: '"Atendimento excelente! Produtos correspondem às expectativas! Preço justo! Entrega eficiente!"',
    initials: 'FA',
    name: 'Felipe Araújo',
    meta: 'Local Guide - 10 avaliações - 20 fotos',
    time: '9 meses atrás',
  },
];

function Stars({ size, wrapClass }: { size: number; wrapClass: string }) {
  return (
    <div className={wrapClass}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className="lucide lucide-star fill-brand-yellow text-brand-yellow"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">Depoimentos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
            O que Nossos Clientes <span className="text-brand-blue">Dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <Stars size={20} wrapClass="flex items-center gap-1" />
            <span className="text-2xl font-extrabold text-brand-navy">4.7</span>
            <span className="text-brand-navy/50 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-blue/20 transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: '0ms' }}
            >
              <Quote width={32} height={32} className="lucide lucide-quote text-brand-sky/60 mb-4" />
              <p className="text-brand-navy/70 leading-relaxed mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-brand-navy text-sm">{t.name}</p>
                  <p className="text-xs text-brand-navy/50 truncate">{t.meta}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <Stars size={16} wrapClass="flex gap-0.5" />
                <span className="text-xs text-brand-navy/40">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href="https://www.google.com/maps/place/Giralflex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-blue font-semibold hover:text-brand-blue-light transition-colors"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
}
