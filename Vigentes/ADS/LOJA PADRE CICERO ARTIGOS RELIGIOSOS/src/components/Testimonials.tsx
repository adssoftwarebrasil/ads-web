const STAR_PATH =
  'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z';

const testimonials = [
  {
    initial: 'A',
    name: 'Antonio De Pádua',
    meta: 'Guia Local · 13 avaliações',
    quote:
      '"Melhor opção de Juazeiro do Norte em imagens religiosas e bom atendimento. Recomendo a todos que buscam artigos de qualidade na cidade."',
    when: '2 semanas atrás',
    delay: 'section-reveal-delay-1',
  },
  {
    initial: 'A',
    name: 'Adilson Oliveira',
    meta: 'Guia Local · 91 avaliações',
    quote:
      '"Boa opção para artigos religiosos. Grande variedade de produtos, atendimento simpático e preços justos. Um lugar que vale a visita."',
    when: '1 mês atrás',
    delay: 'section-reveal-delay-2',
  },
  {
    initial: 'C',
    name: 'Cristiano Mendes',
    meta: 'Cliente verificado',
    quote:
      '"Gostei muito! Sou de Imperatriz - MA e amei o atendimento. Muito bom mesmo, atenciosos e com ótimos produtos. Voltaria com certeza."',
    when: '1 ano atrás',
    delay: 'section-reveal-delay-3',
  },
];

function Star({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20">
      <path d={STAR_PATH}></path>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
            Opinião de clientes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <div className="gold-divider-center mb-5"></div>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
              ))}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half2">
                    <stop offset="60%" stopColor="rgb(252,199,35)"></stop>
                    <stop offset="60%" stopColor="rgba(255,255,255,0.15)"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#half2)" d={STAR_PATH}></path>
              </svg>
            </div>
            <span className="text-white/70 text-base font-medium">4.6 / 5 — Google Avaliações</span>
          </div>
        </div>
        <div className="section-reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-brand-dark-3 rounded-2xl p-7 border border-white/8 hover:border-brand-gold/30 transition-all duration-400 hover:shadow-[0_8px_40px_rgba(252,199,35,0.08)] ${t.delay}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-brand-dark text-lg">{t.initial}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.meta}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-brand-gold" />
                ))}
              </div>
              <blockquote className="mt-4 text-white/65 text-sm leading-relaxed">
                {t.quote}
              </blockquote>
              <div className="mt-4 text-white/30 text-xs">{t.when}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
