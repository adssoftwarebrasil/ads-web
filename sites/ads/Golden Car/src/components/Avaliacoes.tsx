import { Star, Quote } from 'lucide-react';

interface Review {
  initials: string;
  name: string;
  meta: string;
  text: string;
}

const reviews: Review[] = [
  {
    initials: 'ES',
    name: 'Edivanio Santos',
    meta: 'Local Guide · 57 avaliações',
    text: '"Ótimo atendimento, fui simples e recebi atendimento digno. Me senti acolhido desde o primeiro momento. Equipe muito profissional!"',
  },
  {
    initials: 'LP',
    name: 'Lucas Pereira Lopes',
    meta: 'Local Guide · 33 avaliações',
    text: '"Não chegamos a fechar negócio, mas o atendimento foi sensacional, muito atenciosos! Recomendo sem hesitar para quem está buscando um carro."',
  },
  {
    initials: 'VT',
    name: 'Valdinei Tavares Leite',
    meta: 'Cliente verificado · 8 avaliações',
    text: '"Muito boa, ótimo atendimento. O vendedor Magno é nota 10! Processo de compra simples, rápido e sem burocracia. Super recomendo!"',
  },
];

export default function Avaliacoes() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'rgb(10, 10, 10)' }}>
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(at 30% 60%, rgb(245, 223, 108) 0%, transparent 60%)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'rgb(245, 223, 108)' }}>
            Avaliações
          </span>
          <h2 className="section-title text-white mt-3">
            O que Nossos Clientes
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, rgb(245, 223, 108) 0%, rgb(218, 158, 12) 100%)' }}
            >
              Dizem Sobre Nós
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="#F5DF6C" color="#F5DF6C" className="lucide lucide-star" />
              ))}
            </div>
            <span className="text-white font-bold text-xl">5.0</span>
            <span className="text-white/50 text-sm">no Google Maps</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.initials}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 card-hover hover:border-golden/30 group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'radial-gradient(at 50% 0%, rgba(245, 223, 108, 0.05) 0%, transparent 70%)' }}
              ></div>
              <Quote size={28} className="lucide lucide-quote opacity-20 mb-4" style={{ color: 'rgb(245, 223, 108)' }} />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="#F5DF6C" color="#F5DF6C" className="lucide lucide-star" />
                ))}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mt-4 mb-6 italic">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-brand-black font-bold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgb(245, 223, 108), rgb(218, 158, 12))' }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-white/40 text-xs">{r.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Golden+Car+RONDON%C3%93POLIS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-golden rounded-xl px-8 py-3 text-sm font-semibold"
          >
            Ver Todas as Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
