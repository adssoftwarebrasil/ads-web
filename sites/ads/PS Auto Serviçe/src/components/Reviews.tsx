import { Star, Quote } from 'lucide-react';
import { GoogleIcon } from './icons';

type Review = {
  text: string;
  initials: string;
  name: string;
  when: string;
  avatarClass: string;
};

const REVIEWS: Review[] = [
  {
    text: '"Ótimos técnicos, bem treinados e especializados. Ótimo local e atendimento. Recomendo de olhos fechados para quem precisa de um serviço de qualidade para caminhão."',
    initials: 'WS',
    name: 'Wallison Silva',
    when: '3 semanas atrás',
    avatarClass: 'bg-brand-blue',
  },
  {
    text: '"Ótimo nível de profissionais, os técnicos dominam muito bem os serviços. Fui atendido com agilidade e saí satisfeito com o resultado. Nota 10 para toda a equipe."',
    initials: 'AI',
    name: 'A.ivyson 2002',
    when: '3 semanas atrás',
    avatarClass: 'bg-brand-red',
  },
  {
    text: '"Serviço rápido, transparente e com preço justo. Equipe altamente capacitada que sabe o que faz. Melhor oficina para caminhão em Recife, sem dúvida."',
    initials: 'SA',
    name: 'Sidiney Andrade',
    when: '2 semanas atrás',
    avatarClass: 'bg-brand-dark',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-brand-blue py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-dark/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-on-scroll text-center mb-16">
          <span className="inline-block bg-white/10 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 border border-white/20">
            O Que Dizem Nossos Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Avaliações Reais, <span className="text-yellow-400">Resultados Reais</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="lucide lucide-star text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-black text-2xl ml-2">5.0</span>
              <span className="text-white/70 text-sm ml-1">no Google</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className="animate-on-scroll bg-white rounded-2xl p-8 shadow-xl card-hover relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="lucide lucide-quote text-brand-dark" />
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="lucide lucide-star text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mt-4 mb-6 leading-relaxed text-sm relative z-10">{r.text}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className={`w-11 h-11 rounded-full ${r.avatarClass} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.when}</p>
                </div>
                <div className="ml-auto">
                  <GoogleIcon className="w-6 h-6" ariaLabel="Google" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm mb-4">Satisfeito com nosso serviço? Deixe sua avaliação no Google!</p>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-dark font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <GoogleIcon className="w-4 h-4" />
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  );
}
