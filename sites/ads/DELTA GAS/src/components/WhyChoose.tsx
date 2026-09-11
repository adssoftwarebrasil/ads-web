import { Zap, Clock, MapPin, ThumbsUp, ShieldCheck, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Entrega Ultra-Rápida',
    description:
      'Pediu, chegou. Nossa equipe está sempre pronta para levar o gás ou água até você no menor tempo possível.',
    delay: 0,
  },
  {
    icon: Clock,
    title: 'Aberto Todos os Dias',
    description:
      'Das 7h às 22h, sete dias por semana. Feriado, fim de semana — estamos aqui quando você precisar.',
    delay: 80,
  },
  {
    icon: MapPin,
    title: 'Cobertura em Sinop',
    description:
      'Atendemos toda a cidade de Sinop-MT. Residências, comércios, condomínios e empresas.',
    delay: 160,
  },
  {
    icon: ThumbsUp,
    title: 'Preços Justos',
    description:
      'Sem surpresas na hora de pagar. Praticamos preços competitivos e transparentes em todos os produtos.',
    delay: 240,
  },
  {
    icon: ShieldCheck,
    title: 'Produtos de Qualidade',
    description:
      'Trabalhamos apenas com produtos certificados e de procedência garantida para sua segurança.',
    delay: 320,
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    description:
      'Equipe treinada e cordial, pronta para tirar dúvidas e resolver qualquer situação com atenção.',
    delay: 400,
  },
];

const stats = [
  { value: '6+', label: 'Anos de mercado' },
  { value: '7/7', label: 'Dias de atendimento' },
  { value: '100%', label: 'Clientes satisfeitos' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-14 section-observe">
          <p className="text-brand-light font-semibold text-sm uppercase tracking-widest mb-3">
            Por que escolher a Delta Gás?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Diferenciais que fazem
            <br />
            <span className="text-brand-light">a diferença no seu dia</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Cada detalhe do nosso serviço foi pensado para oferecer a melhor experiência possível.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="section-observe bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-brand-light/30 transition-all duration-300 group"
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className="bg-brand-light/15 text-brand-light w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 grid sm:grid-cols-3 gap-6 section-observe">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center border border-white/10 rounded-2xl py-8 px-4">
              <p className="text-brand-light font-extrabold text-4xl md:text-5xl mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
