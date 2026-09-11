import { Scissors, Palette, ShieldCheck, Star, Truck, MessageSquare, type LucideIcon } from 'lucide-react';

interface Differential {
  Icon: LucideIcon;
  iconWrap: string;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    Icon: Scissors,
    iconWrap: 'bg-brand-red/10 text-brand-red',
    title: 'Confecção Própria',
    description: 'Fabricamos cada peça internamente, garantindo total controle de qualidade e acabamento personalizado.',
  },
  {
    Icon: Palette,
    iconWrap: 'bg-brand-blue/10 text-brand-blue',
    title: 'Bordados e Sublimação',
    description: 'Personalizamos com bordados e sublimação de alta definição, preservando cores vibrantes e durabilidade.',
  },
  {
    Icon: ShieldCheck,
    iconWrap: 'bg-brand-gold/20 text-yellow-700',
    title: 'Qualidade Garantida',
    description: 'Cada peça passa por rigoroso controle de qualidade antes de ser entregue ao cliente.',
  },
  {
    Icon: Star,
    iconWrap: 'bg-brand-red/10 text-brand-red',
    title: '30 Anos de Experiência',
    description: 'Décadas de mercado nos tornaram referência em uniformes escolares e empresariais em Sorriso-MT.',
  },
  {
    Icon: Truck,
    iconWrap: 'bg-brand-blue/10 text-brand-blue',
    title: 'Atendimento Personalizado',
    description: 'Nossos consultores orientam na escolha dos tecidos, cores e modelos ideais para seu negócio.',
  },
  {
    Icon: MessageSquare,
    iconWrap: 'bg-brand-gold/20 text-yellow-700',
    title: 'Suporte Direto',
    description: 'Atendemos diretamente pelo WhatsApp com agilidade e atenção para cada pedido e orçamento.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(2, 146, 207) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">Por Que Escolher a Rolim</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4">Nossos Diferenciais</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Mais do que uniformes — entregamos identidade, qualidade e a história de uma empresa que se dedicou a cada
            cliente por mais de três décadas.
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentials.map(({ Icon, iconWrap, title, description }) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconWrap} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5566992236989?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+uniformes!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red text-white font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-red-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg shadow-brand-red/30"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
