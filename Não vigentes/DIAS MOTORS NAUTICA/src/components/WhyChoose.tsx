import { Award, Users, MapPin, Star, LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: number;
}

const REASONS: Reason[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Revenda Autorizada',
    description: 'Produtos originais Yamaha com garantia de fábrica',
    delay: 0,
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Atendimento Especializado',
    description: 'Equipe técnica qualificada para orientar sua compra',
    delay: 150,
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin',
    title: 'Localização Estratégica',
    description: 'Fácil acesso no Setor Aeroporto em Goiânia',
    delay: 300,
  },
  {
    icon: Star,
    iconClass: 'lucide lucide-star',
    title: 'Experiência Náutica',
    description: 'Tradição e conhecimento no mercado náutico',
    delay: 450,
  },
];

export default function WhyChoose() {
  return (
    <section
      className="py-16 lg:py-24 text-white overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(30, 43, 75) 0%, rgb(19, 161, 209) 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-20 transition-all duration-700 opacity-0 translate-y-8">
          Por Que Escolher a Dias Motors?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group text-center transition-all duration-700 hover:scale-105 opacity-0 scale-90"
                style={{ transitionDelay: `${reason.delay}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 shadow-lg">
                    <Icon
                      className={`${reason.iconClass} text-white group-hover:scale-110 transition-transform duration-300`}
                      size={40}
                    />
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">
                  {reason.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm lg:text-base px-2">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
