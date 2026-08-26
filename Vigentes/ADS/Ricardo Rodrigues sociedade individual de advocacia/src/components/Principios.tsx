import { Target, Compass, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Principio {
  icon: LucideIcon;
  title: string;
  text: string;
}

const principios: Principio[] = [
  {
    icon: Target,
    title: 'Visão',
    text: 'Sustentar a referência nos segmentos advocatícios em que atua, mediante o reconhecimento social, a inovação e eficácia nas soluções jurídicas.',
  },
  {
    icon: Compass,
    title: 'Missão',
    text: 'Prestar serviços jurídicos com excelência, com fulcro em assessorar os clientes na busca dos seus objetivos de forma inovadora e eficiente, através de advogados e colaboradores qualificados, valorizados e pré-dispostos a preservar a credibilidade construída no cenário jurídico brasileiro.',
  },
  {
    icon: Heart,
    title: 'Valores',
    text: 'Acreditar na justiça, como ferramenta de busca harmoniosa dos conflitos sociais. Compromisso com a confiança depositada pelos jurisdicionados e por toda sociedade. Agir segundo a boa-fé no trato com as estratégias jurídicas desenhadas. Lealdade, entusiasmo, inovação, sobretudo, incentivo à qualidade técnica e à conduta ética.',
  },
];

export default function Principios() {
  return (
    <section className="py-24 bg-[rgb(47,44,34)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principios.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <Icon
                  size={48}
                  className="text-[#d9b33c] mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-gray-300 leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
