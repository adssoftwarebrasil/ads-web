import { StarIcon } from './icons';

interface Review {
  initials: string;
  name: string;
  time: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    initials: 'IS',
    name: 'Ione Souza dos Santos Macena',
    time: '2 meses atrás',
    text: '"Trabalho de qualidade, ótimo atendimento, ambiente muito agradável, equipe super simpáticos. 10/10"',
  },
  {
    initials: 'SM',
    name: 'Suzan Marques',
    time: '2 meses atrás',
    text: '"Ótimo atendimento, serviço de qualidade e confiança. Super recomendo a todos!"',
  },
  {
    initials: 'RL',
    name: 'Rayane Lima',
    time: '2 meses atrás',
    text: '"Ótimo atendimento, qualidade, compromisso. Tudo em um só lugar, o melhor da cidade. Aprovado!"',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-zinc-950 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[rgb(255,198,45)] text-xs font-bold uppercase tracking-widest mb-3">Avaliações</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            O que Nossos<span className="text-[rgb(255,198,45)]"> Clientes Dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={22} height={22} />
              ))}
            </div>
            <span className="text-white font-black text-3xl">5.0</span>
            <span className="text-white/40 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[rgb(255,198,45)]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-full bg-[rgb(255,198,45)] flex items-center justify-center text-black font-black text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{review.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={16} height={16} />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mt-3">{review.text}</p>
              <div className="mt-4 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
                <span className="text-white/25 text-xs">Avaliação verificada — Google</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Avaliação média de <strong className="text-[rgb(255,198,45)]">5.0 estrelas</strong> com base em avaliações reais do Google
          </p>
        </div>
      </div>
    </section>
  );
}
