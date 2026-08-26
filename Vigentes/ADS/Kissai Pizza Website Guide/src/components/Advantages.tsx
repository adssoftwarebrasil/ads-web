import { Heart, TrendingUp, Clock, LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  text: string;
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Heart,
    title: 'Compromisso com a Satisfação',
    text: 'Buscamos a excelência em cada pizza servida.',
  },
  {
    icon: TrendingUp,
    title: 'Foco na Qualidade',
    text: 'Qualidade é nosso maior diferencial em tudo que fazemos.',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    text: 'Garantimos que sua pizza chegue quentinha e no prazo.',
  },
];

export default function Advantages() {
  return (
    <section
      id="vantagens"
      className="py-20 bg-[rgb(150,1,0)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[rgb(235,185,3)]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[rgb(235,185,3)]"></div>
      </div>
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Nossas Vantagens
          </h2>
          <p className="text-[rgb(235,185,3)] text-lg">
            Saiba por que escolher a Kissai Pizza é a melhor opção para sua
            refeição.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="animate-on-scroll bg-[rgba(255,255,255,0.1)] border-2 border-[rgb(235,185,3)] rounded-2xl p-10 backdrop-blur-lg hover:bg-white hover:text-[rgb(150,1,0)] transition-all duration-400 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon
                  size={45}
                  className="text-[rgb(235,185,3)] group-hover:text-[rgb(150,1,0)] mb-6 transition-colors duration-400"
                />
                <h3 className="text-white group-hover:text-[rgb(150,1,0)] text-xl font-semibold mb-4 transition-colors duration-400">
                  {adv.title}
                </h3>
                <p className="text-white group-hover:text-gray-700 leading-relaxed transition-colors duration-400">
                  {adv.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
