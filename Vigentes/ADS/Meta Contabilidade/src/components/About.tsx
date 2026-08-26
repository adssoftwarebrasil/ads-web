import { CheckCircle, Award, Laptop, Users, type LucideIcon } from 'lucide-react';
import { WHATSAPP_CONSULTORIA } from '../data';

const FEATURES: { icon: LucideIcon; text: string }[] = [
  { icon: CheckCircle, text: 'Atendimento ágil e personalizado, com consultoria real' },
  { icon: Award, text: 'Pós-graduada em MBA Contabilidade, Compliance e Direito Tributário' },
  { icon: Laptop, text: 'Certificado digital emitido por videoconferência — sem sair de casa' },
  { icon: Users, text: 'Modelo híbrido: visitas presenciais + reuniões online' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative animate-on-scroll-left order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe Meta Contabilidade"
                className="w-full h-80 md:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg leading-snug">Adriana Oliveira Correa</p>
                <p className="text-gray-300 text-sm">
                  Sócia Administradora · CRC MS 013818/O-9
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-5 shadow-xl hidden sm:block">
              <p className="text-white font-extrabold text-3xl leading-none">+6</p>
              <p className="text-white/80 text-xs mt-1">anos de experiência</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-on-scroll-right">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Quem somos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand mb-6 leading-tight">
              Contabilidade digital com <span className="text-primary">toque humano</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              A Meta Contabilidade Digital nasceu em 2019 de uma percepção clara: os empresários
              enfrentam grandes dores com tributação, desinformação e gestão financeira. Nossa
              missão é ser o parceiro estratégico que transforma esses desafios em oportunidades de
              rentabilidade.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Através do nosso modelo híbrido — com visitas presenciais e reuniões online —
              identificamos, em cada consultoria, novos caminhos para ampliar os resultados dos
              nossos clientes com segurança e conformidade legal total.
            </p>
            <ul className="flex flex-col gap-4">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8">
              <a
                href={WHATSAPP_CONSULTORIA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm"
              >
                Agendar Consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
