import { Trophy, Settings, Clock, Star, LucideIcon } from 'lucide-react';
import { useInView } from '../lib/utils';

interface Advantage {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    Icon: Trophy,
    iconClass: 'lucide lucide-trophy w-12 h-12 text-[#f08736] mb-4',
    title: 'Compromisso Comprovado',
    text: 'Duas décadas entregando qualidade e confiança',
  },
  {
    Icon: Settings,
    iconClass: 'lucide lucide-settings w-12 h-12 text-[#f08736] mb-4',
    title: 'Tecnologia Avançada',
    text: 'Equipamentos de ponta para melhor serviço',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock w-12 h-12 text-[#f08736] mb-4',
    title: 'Agilidade nas Entregas',
    text: 'Rapidez e eficiência comprovadas na região',
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star w-12 h-12 text-[#f08736] mb-4',
    title: 'Qualidade Superior',
    text: 'Trabalhamos apenas com as melhores marcas do mercado',
  },
];

export default function Advantages() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="vantagens" className="py-24 lg:py-28" style={{ background: 'rgb(232, 213, 242)' }}>
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Por Que Escolher a Portal Tintas?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((a, index) => (
            <div
              key={a.title}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                inView ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a.Icon className={a.iconClass} width={24} height={24} />
              <h3 className="text-xl font-bold text-black mb-3">{a.title}</h3>
              <p className="text-gray-600">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
