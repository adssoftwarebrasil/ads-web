import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Withiner Almeida Taques',
    role: 'Pai de aluno · Local Guide',
    rating: 5,
    text: 'A escola se destaca por ter um corpo docente altamente profissional, composto por professores que demonstram uma conduta exemplar e um compromisso com a educação dos atletas dentro e fora de campo. É importante ressaltar o ponto super positivo da escola, que se reflete na qualidade do ensino oferecido e no ambiente inspirador. Estamos orgulhosos de contar com uma equipe dedicada que faz a diferença todos os dias.',
    avatar: 'W',
  },
  {
    name: 'Elias Barreto',
    role: 'Local Guide',
    rating: 5,
    text: 'Ótimo local, 100%! Estrutura completa, atendimento excelente e ambiente ideal para a prática do futebol. Recomendo para todos que buscam qualidade e profissionalismo.',
    avatar: 'E',
  },
  {
    name: 'Rafael Amorim',
    role: 'Cliente',
    rating: 5,
    text: 'Lugar tranquilo para jogar um bom futebol com a família e amigos. Gramado de qualidade, espaço bem cuidado e ótima localização. Com certeza voltarei mais vezes!',
    avatar: 'R',
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'text-yellow-400 fill-yellow-400' : 'text-[#C8CAC9]'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#236E45]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#236E45] rounded-full" />
            <span className="text-[#236E45] text-sm font-semibold tracking-wide uppercase">Avaliações</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#363434] leading-tight">
            O que nossos{' '}
            <span className="text-[#236E45]">clientes</span> dizem
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="text-5xl font-black text-[#363434]">4.6</div>
            <div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-[#C8CAC9]'}
                  />
                ))}
              </div>
              <div className="text-[#363434]/60 text-sm mt-1">Avaliação média no Google</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative bg-[#363434]/4 border border-[#C8CAC9]/40 rounded-2xl p-6 hover:shadow-xl hover:border-[#236E45]/30 transition-all duration-300"
            >
              <Quote className="text-[#236E45]/20 absolute top-4 right-4" size={48} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-[#236E45] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#363434] text-sm">{t.name}</div>
                  <div className="text-[#363434]/50 text-xs">{t.role}</div>
                </div>
              </div>
              <StarRow count={t.rating} />
              <p className="text-[#363434]/70 text-sm leading-relaxed mt-4 relative z-10">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="http://wa.me/556581172880?text=Olá!%20Vi%20as%20avaliações%20e%20quero%20saber%20mais%20sobre%20a%20Casa%20do%20Futebol."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#236E45] hover:bg-[#2C4D39] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Quero fazer parte disso
          </a>
        </div>
      </div>
    </section>
  );
}
