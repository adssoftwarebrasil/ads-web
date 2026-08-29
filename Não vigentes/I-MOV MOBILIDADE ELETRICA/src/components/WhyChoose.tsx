import { Settings, Wrench, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Card {
  icon: LucideIcon;
  title: string;
  back: string;
  highlight?: boolean;
  sizeClass: string;
  frontFront: string;
  frontBack: string;
  titleSize: string;
  backText: string;
}

const cards: Card[] = [
  {
    icon: Settings,
    title: 'PEÇAS DE REPOSIÇÃO',
    back: 'Estoque completo de peças originais sempre disponíveis',
    sizeClass: 'w-full md:w-[calc(50%-1rem)] lg:w-[280px] h-64',
    frontFront: 'border bg-gradient-to-br from-white to-gray-50 border-gray-100',
    frontBack: 'bg-gradient-to-br from-[#035772] to-[#024557]',
    titleSize: 'text-xl',
    backText: 'text-base',
  },
  {
    icon: Wrench,
    title: 'OFICINA PRÓPRIA',
    back: 'Manutenção e consertos com equipe especializada',
    highlight: true,
    sizeClass: 'w-full md:w-[calc(50%-1rem)] lg:w-[340px] h-80',
    frontFront: 'border bg-gradient-to-br from-[#e0fd2c] to-[#c9e625] border-[#035772] shadow-2xl',
    frontBack: 'bg-gradient-to-br from-[#024557] to-[#013344]',
    titleSize: 'text-2xl',
    backText: 'text-lg',
  },
  {
    icon: Heart,
    title: 'PÓS-VENDA',
    back: 'Atendimento dedicado e suporte contínuo',
    sizeClass: 'w-full md:w-[calc(50%-1rem)] lg:w-[280px] h-64',
    frontFront: 'border bg-gradient-to-br from-white to-gray-50 border-gray-100',
    frontBack: 'bg-gradient-to-br from-[#035772] to-[#024557]',
    titleSize: 'text-xl',
    backText: 'text-base',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#035772] mb-4">
            POR QUE ESCOLHER A I-MOV?
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map(({ icon: Icon, ...card }, i) => (
            <div
              key={card.title}
              className={`relative perspective-1000 animate-fade-in-up ${card.sizeClass}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d ">
                <div
                  className={`absolute w-full h-full backface-hidden rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center ${card.frontFront}`}
                >
                  <div
                    className={`mb-4 transform transition-transform hover:scale-110 ${
                      card.highlight ? 'text-[#035772]' : 'text-[#e0fd2c]'
                    }`}
                  >
                    <Icon width={48} height={48} />
                  </div>
                  <h3 className={`font-bold mb-2 ${card.titleSize} text-[#035772]`}>{card.title}</h3>
                  {card.highlight && (
                    <span className="inline-block mt-2 px-4 py-1 bg-[#035772] text-white text-sm font-semibold rounded-full">
                      DESTAQUE
                    </span>
                  )}
                </div>
                <div
                  className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center ${card.frontBack}`}
                >
                  <div className="text-[#e0fd2c] mb-4">
                    <Icon width={48} height={48} />
                  </div>
                  <p className={`text-white leading-relaxed ${card.backText}`}>{card.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
