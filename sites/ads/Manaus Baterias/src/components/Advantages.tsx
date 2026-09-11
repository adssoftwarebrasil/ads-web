import { Clock, Award, Tag, LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconBg: string;
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Clock,
    title: 'Atendimento 24/7',
    description: 'Estamos sempre prontos para te atender, a qualquer hora do dia',
    bgColor: 'from-[#1E3A8A] to-[#1e40af]',
    iconBg: 'bg-blue-100 text-[#1E3A8A]',
  },
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Trabalhamos exclusivamente com marcas renomadas e certificadas',
    bgColor: 'from-[#FF6B00] to-[#ea580c]',
    iconBg: 'bg-orange-100 text-[#FF6B00]',
  },
  {
    icon: Tag,
    title: 'Melhor Custo-Benefício',
    description: 'Qualidade premium com os preços mais competitivos da região',
    bgColor: 'from-[#059669] to-[#047857]',
    iconBg: 'bg-green-100 text-[#059669]',
  },
];

interface AdvantageCardProps {
  advantage: Advantage;
  index: number;
}

function AdvantageCard({ advantage, index }: AdvantageCardProps) {
  const Icon = advantage.icon;
  
  return (
    <div
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${advantage.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        {/* Icon container */}
        <div className={`${advantage.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" strokeWidth={2} />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">
          {advantage.title}
        </h3>
        <p className="text-[#64748B] text-base leading-relaxed">
          {advantage.description}
        </p>
      </div>
      
      {/* Decorative element */}
      <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${advantage.bgColor} opacity-5 rounded-full blur-2xl`} />
    </div>
  );
}

export function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-[#FF6B00] font-semibold tracking-wide uppercase text-sm mb-4 px-4 py-1.5 bg-orange-50 rounded-full">
            Nossas Vantagens
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6 leading-tight">
            Por Que Somos a Melhor Escolha
          </h2>
          
          <p className="text-[#64748B] text-lg leading-relaxed">
            Conheça os diferenciais que nos tornam referência em baterias e radiadores na região
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ADVANTAGES.map((advantage, index) => (
            <AdvantageCard 
              key={index} 
              advantage={advantage} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-[#1E3A8A] via-[#FF6B00] to-[#059669] rounded-full" />
        </div>
      </div>
    </section>
  );
}