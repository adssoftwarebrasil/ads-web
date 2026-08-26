import { Quote, Star } from 'lucide-react';

interface Review {
  initial: string;
  avatarClass: string;
  name: string;
  meta: string;
  text: string;
  time: string;
  delay: number;
}

const reviews: Review[] = [
  {
    initial: 'A',
    avatarClass: 'bg-brand-navy',
    name: 'Alex',
    meta: 'Local Guide · 138 avaliações',
    text: '“Sou sempre bem atendido pelo vendedor Felipe no WhatsApp, os preços das peças são excelentes e o estoque também.”',
    time: '• há 1 mês',
    delay: 0,
  },
  {
    initial: 'M',
    avatarClass: 'bg-brand-red',
    name: 'Marcos Alessandro',
    meta: 'Local Guide · 13 avaliações',
    text: '“Top top estão parabéns pela equipe, pelas peças de primeira linha. Recomendo a todos que precisam de peças automotivas de qualidade!”',
    time: '• há 1 mês',
    delay: 150,
  },
  {
    initial: 'S',
    avatarClass: 'bg-amber-600',
    name: 'Senhor Chaveiro',
    meta: 'Local Guide · 52 avaliações',
    text: '“Excelente, compras on-line e presencial nota 10! Peças de boa qualidade. Recomendo sem dúvidas para quem busca qualidade e confiança.”',
    time: '• há 2 meses',
    delay: 300,
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 bg-brand-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">Avaliações</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">O que nossos clientes dizem</h2>
          <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
            Mais de 30 anos construindo relacionamentos baseados em confiança, qualidade e atendimento excepcional.
          </p>
          <div className="section-divider mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${r.delay}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${r.avatarClass} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{r.name}</div>
                    <div className="text-white/50 text-xs">{r.meta}</div>
                  </div>
                </div>
                <Quote size={20} className="text-brand-red flex-shrink-0 mt-1" />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mt-4 mb-4">{r.text}</p>
              <div className="flex items-center gap-2">
                <img
                  src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png"
                  alt="Google"
                  className="h-4 opacity-70"
                />
                <span className="text-white/40 text-xs">{r.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Tavares+Auto+pe%C3%A7as"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300"
          >
            <Star size={16} className="text-amber-400 fill-amber-400" />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
