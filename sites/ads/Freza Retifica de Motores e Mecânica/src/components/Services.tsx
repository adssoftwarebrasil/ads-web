import { Settings, Wrench, Search, Droplets, Gauge, Zap, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Mecânica Geral',
    description:
      'Manutenção preventiva e corretiva completa: freios, suspensão, direção, embreagem e muito mais para seu veículo.',
  },
  {
    icon: Search,
    iconClass: 'lucide lucide-search',
    title: 'Diagnóstico Eletrônico',
    description:
      'Leitura de falhas e diagnóstico preciso com equipamentos modernos para identificar problemas antes que se agravem.',
  },
  {
    icon: Droplets,
    iconClass: 'lucide lucide-droplets',
    title: 'Troca de Óleo',
    description:
      'Lubrificação correta com óleos certificados e filtros de qualidade para garantir a vida útil do seu motor.',
  },
  {
    icon: Gauge,
    iconClass: 'lucide lucide-gauge',
    title: 'Usinagem de Precisão',
    description:
      'Retifica de cabeçote, bloco, polimento de virabrequim e fresagem com equipamentos de alta tecnologia.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Sistema de Arrefecimento',
    description:
      "Revisão e reparo completo do sistema de resfriamento: radiador, bomba d'água, termostato e mangueiras.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">O que oferecemos</span>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mt-3 mb-5 tracking-tight">
            Nossos <span className="text-brand-red">Serviços</span>
          </h2>
          <p className="text-brand-dark/60 text-lg max-w-xl mx-auto leading-relaxed">
            Da retifica completa à revisão preventiva, cuidamos do seu motor com a atenção que ele merece.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card principal */}
          <div
            className="animate-on-scroll group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 cursor-default bg-brand-dark text-white"
            style={{ transitionDelay: '0ms' }}
          >
            <div className="absolute top-4 right-4">
              <span className="bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                Principal
              </span>
            </div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors bg-brand-red text-white">
              <Settings className="lucide lucide-settings" width={28} height={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Retifica de Motor</h3>
            <p className="text-sm leading-relaxed text-white/70">
              Recondicionamento completo do motor com usinagem de precisão, substituição de peças desgastadas e testes
              rigorosos de qualidade.
            </p>
          </div>

          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="animate-on-scroll group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 cursor-default bg-brand-gray-light border border-brand-gray hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-red/5"
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors bg-brand-dark/10 text-brand-dark group-hover:bg-brand-red group-hover:text-white">
                  <Icon className={service.iconClass} width={28} height={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{service.title}</h3>
                <p className="text-sm leading-relaxed text-brand-dark/60">{service.description}</p>
                <div className="mt-6 h-0.5 w-0 bg-brand-red transition-all duration-300 group-hover:w-12"></div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-14 animate-on-scroll">
          <a
            href="http://wa.me/5566996524291?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20um%20servi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-10 py-4 rounded-full text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-0.5"
          >
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}
