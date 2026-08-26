import { Star, Shield, Clock, ThumbsUp, MapPin, Users, type LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const items: Differential[] = [
  {
    icon: Star,
    iconClass: 'lucide lucide-star',
    title: 'Qualidade Comprovada',
    description:
      'Utilizamos apenas peças e componentes de alta qualidade, garantindo a durabilidade e performance do seu motor.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Serviço com Garantia',
    description:
      'Todos os nossos serviços são executados com responsabilidade técnica e suporte após a entrega do veículo.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Agilidade no Atendimento',
    description:
      'Diagnóstico rápido e prazo cumprido. Respeitamos o seu tempo e entregamos o serviço como combinado.',
  },
  {
    icon: ThumbsUp,
    iconClass: 'lucide lucide-thumbs-up',
    title: 'Honestidade e Transparência',
    description:
      'Orçamento claro, sem cobranças surpresa. Você sabe exatamente o que está sendo feito no seu veículo.',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin',
    title: 'Localização Conveniente',
    description:
      'No coração do Setor Industrial Norte de Sinop, de fácil acesso para empresas e motoristas da região.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Atendimento Especializado',
    description:
      'Nossa equipe técnica é focada em motores, garantindo o diagnóstico e reparo mais preciso possível.',
  },
];

export default function Differentials() {
  return (
    <section className="py-24 bg-brand-gray-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mt-3 mb-5 tracking-tight">
            Por que Escolher
            <br />
            <span className="text-brand-red">a Freza?</span>
          </h2>
          <p className="text-brand-dark/60 text-lg max-w-xl mx-auto leading-relaxed">
            Não é apenas um serviço mecânico. É um compromisso com a qualidade e a confiança do cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="animate-on-scroll group bg-white rounded-2xl p-8 shadow-sm border border-brand-gray/60 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-5 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <Icon className={item.iconClass} width={24} height={24} />
                </div>
                <h3 className="text-brand-dark font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
