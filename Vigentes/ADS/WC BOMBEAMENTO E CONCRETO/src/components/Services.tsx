import type { LucideIcon } from 'lucide-react';
import { Layers, Zap, HardHat, Truck, CheckCircle, ArrowRight } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: Layers,
    title: 'Concreto Usinado',
    description:
      'Fornecemos concreto usinado com traço certificado, dosado em central para garantir resistência e homogeneidade em toda a sua obra.',
    features: ['Traço calculado por engenheiro', 'Controle de slump (abatimento)', 'Diversas resistências (fck)'],
    featured: true,
  },
  {
    icon: Zap,
    title: 'Bombeamento de Concreto',
    description:
      'Serviço de bombeamento para obras de difícil acesso ou lançamento em altura. Agilidade e precisão no preenchimento de formas e lajes.',
    features: ['Lançamento em altura e distância', 'Equipe especializada', 'Equipamento moderno'],
  },
  {
    icon: HardHat,
    title: 'Concreto para Piso',
    description:
      'Concreto especialmente formulado para pisos industriais, residenciais e comerciais, com alta resistência à abrasão e durabilidade prolongada.',
    features: ['Alta resistência ao desgaste', 'Acabamento uniforme', 'Piso industrial e residencial'],
  },
  {
    icon: Truck,
    title: 'Concreto Sarrafeado',
    description:
      'Serviço completo de concreto com sarrafeamento para bases, calçadas e contrapisos, garantindo planicidade e acabamento de qualidade.',
    features: ['Nivelamento preciso', 'Acabamento profissional', 'Calçadas e contrapisos'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-brand-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-18">
          <span className="inline-block px-4 py-1.5 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-white">
            Soluções completas em <span className="text-brand-orange">concreto usinado</span>
          </h2>
          <p className="mt-4 text-brand-gray max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Da central de concreto até a sua laje — entregamos qualidade, pontualidade e suporte técnico em
            cada etapa da sua obra.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`relative flex flex-col gap-5 p-6 lg:p-7 rounded-2xl border transition-all duration-500 group hover:-translate-y-1 opacity-100 translate-y-0 ${
                  service.featured
                    ? 'bg-brand-orange/8 border-brand-orange/40 hover:border-brand-orange/70'
                    : 'bg-brand-surface border-white/6 hover:border-white/20'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {service.featured && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-brand-orange text-brand-dark text-xs font-bold rounded-full">
                    Mais Solicitado
                  </span>
                )}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    service.featured ? 'bg-brand-orange/20' : 'bg-white/6'
                  }`}
                >
                  <Icon size={22} className={service.featured ? 'text-brand-orange' : 'text-brand-gray-light'} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-white mb-2">{service.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{service.description}</p>
                </div>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-brand-gray-light">
                      <CheckCircle size={13} className="text-brand-green flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/553199292900?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20concreto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-orange text-brand-dark font-bold rounded-xl hover:bg-amber-400 transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5"
          >
            Falar com especialista
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
