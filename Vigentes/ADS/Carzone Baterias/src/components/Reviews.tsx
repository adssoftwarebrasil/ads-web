import { Star, Quote } from 'lucide-react';
import { GoogleIcon } from './icons';

const reviews = [
  {
    initials: 'RR',
    avatarClass: 'bg-[#1003AD]',
    name: 'Rafael Ribeiro',
    time: '3 meses atrás',
    text: '"Foi boa, rápida e resolveu meus problemas. O menino que veio fazer a troca é super gente boa!"',
    delay: 0,
  },
  {
    initials: 'HP',
    avatarClass: 'bg-[#000E27]',
    name: 'Handerson Passos',
    time: '1 mês atrás',
    text: '"Ótima empresa de baterias! Trabalham com carro, moto, caminhão e muito mais. Precisei de socorro e me atenderam prontamente, muito rápido. Entendem muito do que fazem e o preço é excelente. Recomendo demais!"',
    delay: 150,
  },
  {
    initials: 'RM',
    avatarClass: 'bg-[#1003AD]',
    name: 'Rafael Moto G85',
    time: '2 semanas atrás',
    text: '"Quero agradecer pela rapidez, ótimo atendimento e preço bom! Superou minhas expectativas."',
    delay: 300,
  },
];

function Stars({ size }: { size: number }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className="lucide lucide-star"
          width={size}
          height={size}
          fill="#F7EE30"
          stroke="#F7EE30"
        />
      ))}
    </>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#F6FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 section-enter">
          <span className="inline-block text-[#1003AD] font-bold text-sm uppercase tracking-widest mb-3">
            Avaliações Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#000E27] mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <Stars size={22} />
            </div>
            <span className="text-4xl font-black text-[#000E27]">5.0</span>
            <span className="text-gray-400 text-sm">no Google</span>
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Avaliação máxima no Google. Cada cliente atendido é uma história de sucesso para nós.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="section-enter bg-white rounded-2xl p-6 md:p-8 border border-gray-100 card-hover relative overflow-hidden"
              style={{ transitionDelay: `${r.delay}ms` }}
            >
              <div className="absolute top-6 right-6 text-gray-100">
                <Quote className="lucide lucide-quote" width={40} height={40} fill="currentColor" />
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl ${r.avatarClass} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-[#000E27] text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mb-4">
                <Stars size={14} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">{r.text}</p>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
                <GoogleIcon className="w-4 h-4" />
                <span className="text-xs text-gray-400">Avaliação verificada no Google</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center section-enter">
          <div className="inline-flex items-center gap-4 bg-[#000E27] text-white px-8 py-5 rounded-2xl">
            <div className="text-center">
              <p className="text-3xl font-black text-[#F7EE30]">5.0</p>
              <div className="flex gap-0.5 mt-1">
                <Stars size={10} />
              </div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div>
              <p className="font-bold">Nota máxima no Google</p>
              <p className="text-white/60 text-sm">Clientes reais, resultados reais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
