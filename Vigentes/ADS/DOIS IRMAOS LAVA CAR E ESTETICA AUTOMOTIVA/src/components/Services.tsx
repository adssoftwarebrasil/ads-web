import type { ComponentType } from 'react';
import { Car, Truck, Tractor, Wind, Droplets, Sparkles } from 'lucide-react';

const WHATSAPP_ORCAMENTO =
  'https://wa.me/5566996156031?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20lavagem.';
const WHATSAPP_SERVICOS =
  'https://wa.me/5566996156031?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços.';

interface Service {
  icon: ComponentType<{ width?: number; height?: number; className?: string }>;
  iconClass: string;
  title: string;
  description: string;
  featured?: boolean;
  delay: number;
}

const services: Service[] = [
  {
    icon: Car,
    iconClass: 'lucide lucide-car text-brand-blue',
    title: 'Lavagem Completa',
    description:
      'Limpeza externa e interna com atenção aos mínimos detalhes. Seu carro brilhando como novo.',
    delay: 0,
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck text-brand-blue',
    title: 'Lavagem de Caminhão',
    description:
      'Serviço especializado para caminhões de qualquer porte. Ideal para frotas e transportadoras.',
    featured: true,
    delay: 80,
  },
  {
    icon: Tractor,
    iconClass: 'lucide lucide-tractor text-brand-blue',
    title: 'Máquinas Pesadas',
    description:
      'Limpeza profissional de tratores, colheitadeiras e equipamentos agrícolas do agronegócio.',
    delay: 160,
  },
  {
    icon: Wind,
    iconClass: 'lucide lucide-wind text-brand-blue',
    title: 'Lavagem a Seco',
    description:
      'Técnica moderna que preserva a pintura e economiza água. Resultado impecável sem molhar.',
    delay: 240,
  },
  {
    icon: Droplets,
    iconClass: 'lucide lucide-droplets text-brand-blue',
    title: 'Lavagem Americana',
    description:
      'Limpeza detalhada com espuma ativa e produtos de primeira linha para um acabamento premium.',
    delay: 320,
  },
  {
    icon: Sparkles,
    iconClass: 'lucide lucide-sparkles text-brand-blue',
    title: 'Estética Automotiva',
    description:
      'Polimento, revitalização de pintura, aplicação de cera e muito mais para valorizar seu veículo.',
    delay: 400,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-black relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgb(169, 199, 209), transparent)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            O que oferecemos
          </span>
          <h2 className="section-title mb-4">
            Serviços Completos para
            <br />
            <span style={{ color: 'rgb(169, 199, 209)' }}>Qualquer Veículo</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            De carros de passeio a caminhões e máquinas agrícolas — cuidamos de tudo com a mesma
            dedicação e qualidade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="transition-all duration-600 opacity-100 translate-y-0"
                style={{ transitionDelay: `${service.delay}ms` }}
              >
                <div
                  className={`relative h-full rounded-2xl p-6 border transition-all duration-300 group cursor-default hover:scale-[1.02] hover:-translate-y-1 ${
                    service.featured
                      ? 'bg-gradient-to-br from-brand-blue/20 to-brand-light-blue/10 border-brand-blue/40 shadow-lg shadow-brand-blue/10'
                      : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-brand-blue/30'
                  }`}
                >
                  {service.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-brand-blue text-brand-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Mais Procurado
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                      service.featured
                        ? 'bg-brand-blue/30 group-hover:bg-brand-blue/50'
                        : 'bg-brand-blue/15 group-hover:bg-brand-blue/25'
                    }`}
                  >
                    <Icon width={24} height={24} className={service.iconClass} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a
                      href={WHATSAPP_ORCAMENTO}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue text-sm font-medium hover:text-brand-light-blue transition-colors duration-200 flex items-center gap-1 group/link"
                    >
                      Solicitar orçamento
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href={WHATSAPP_SERVICOS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-base shadow-lg shadow-brand-blue/20"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
