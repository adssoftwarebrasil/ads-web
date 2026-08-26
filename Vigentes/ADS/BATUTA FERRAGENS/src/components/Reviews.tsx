import Star from './Star';
import { useReveal } from '../hooks/useReveal';

interface Review {
  quote: string;
  initials: string;
  name: string;
  meta: string;
  avatarBg: string;
  delay: number;
}

const reviews: Review[] = [
  {
    quote: '"Referência em ferragens e artigos para o agro. Preços e qualidade top, grandes marcas. Recomendo."',
    initials: 'MB',
    name: 'Marcelo Bueno',
    meta: 'Guia Local · 10 avaliações',
    avatarBg: 'bg-blue-600',
    delay: 0,
  },
  {
    quote: '"Atendimento, preço e qualidade é com o pessoal da Batuta! Sempre encontro o que preciso."',
    initials: 'VM',
    name: 'Vinicius Machado',
    meta: 'Cliente verificado',
    avatarBg: 'bg-emerald-600',
    delay: 120,
  },
  {
    quote: '"Excelente! Ótimo atendimento e qualidade nos produtos! Super recomendo a Batuta Agroshop."',
    initials: 'GB',
    name: 'Gabriela Biazotti',
    meta: 'Cliente verificada',
    avatarBg: 'bg-rose-600',
    delay: 240,
  },
];

export default function Reviews() {
  const heading = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  const link = useReveal<HTMLDivElement>();

  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-3 block">Avaliações</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
            O que nossos clientes <span className="text-brand">dizem sobre nós</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-navy rounded-2xl px-6 py-3 mt-2">
            <span className="text-4xl font-black text-brand">4.9</span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={16} height={16} />
                ))}
              </div>
              <p className="text-cream/60 text-xs mt-1">Média no Google</p>
            </div>
          </div>
        </div>
        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className={`bg-white rounded-2xl p-6 shadow-md border border-navy/5 card-hover transition-all duration-700 ${
                grid.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${r.delay}ms` }}
            >
              <svg className="text-brand/20 mb-4" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
              </svg>
              <p className="text-navy/75 leading-relaxed mb-6 text-[15px]">{r.quote}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`${r.avatarBg} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{r.name}</p>
                    <p className="text-navy/50 text-xs">{r.meta}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} width={16} height={16} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={link.ref}
          className={`mt-10 text-center transition-all duration-700 delay-500 ${
            link.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="https://maps.google.com/?q=Batuta+Agroshop+Maringá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy/50 hover:text-brand text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-brand">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
            </svg>
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
