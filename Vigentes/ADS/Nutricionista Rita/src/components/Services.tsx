import { TrendingDown, Thermometer, Heart, Activity, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = { icon: LucideIcon; title: string; text: string };

const primary: Service[] = [
  {
    icon: TrendingDown,
    title: 'Emagrecimento',
    text: 'Plano personalizado para perda de peso saudável e sustentável, com acompanhamento nutricional completo.',
  },
  {
    icon: Thermometer,
    title: 'Climatério',
    text: 'Tratamento nutricional especializado para aliviar sintomas e melhorar qualidade de vida nesta fase.',
  },
  {
    icon: Heart,
    title: 'Saúde e Bem-Estar',
    text: 'Nutrição voltada para prevenção de doenças e promoção de uma vida mais saudável e equilibrada.',
  },
];

const secondary: Service[] = [
  {
    icon: Activity,
    title: 'Bioimpedância',
    text: 'Avaliação detalhada da composição corporal para monitorar sua evolução com precisão.',
  },
  {
    icon: UserCheck,
    title: 'Acompanhamento',
    text: 'Suporte contínuo e ajustes personalizados para garantir que você alcance seus objetivos.',
  },
];

function ServiceCard({ icon: Icon, title, text }: Service) {
  return (
    <div className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-8 text-center hover:border-[rgb(157,111,88)] hover:shadow-lg transition-all duration-300 group">
      <div className="w-20 h-20 mx-auto mb-6 bg-[rgb(157,111,88)]/10 rounded-full flex items-center justify-center group-hover:bg-[rgb(157,111,88)] transition-colors duration-300 border border-[rgb(157,111,88)]/20">
        <Icon className="w-10 h-10 text-[rgb(157,111,88)] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-normal text-white mb-4">{title}</h3>
      <p className="text-gray-400 font-light leading-relaxed">{text}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            <span className="text-[rgb(157,111,88)] font-normal">Serviços</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-3xl mx-auto">
            Atendimento completo e personalizado para suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primary.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {secondary.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
