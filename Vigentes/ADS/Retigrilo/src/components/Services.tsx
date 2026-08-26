import { Settings, Truck, Gauge, Disc, Wrench, Droplets, type LucideIcon } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  specialty?: boolean;
}

const services: Service[] = [
  {
    icon: Settings,
    iconClass: 'lucide lucide-settings text-secondary',
    title: 'Retífica de Motores',
    description:
      'Retífica completa de motores a gasolina, diesel e flex para veículos leves e pesados, com precisão técnica e equipamentos modernos.',
    specialty: true,
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck text-secondary',
    title: 'Montagem de Motores',
    description:
      'Montagem de motores linha leve e pesada com mais de 17 anos de experiência, garantindo performance e durabilidade.',
    specialty: true,
  },
  {
    icon: Gauge,
    iconClass: 'lucide lucide-gauge text-secondary',
    title: 'Suspensão e Balanceamento',
    description:
      'Diagnóstico e reparo completo do sistema de suspensão e alinhamento para maior segurança e conforto na direção.',
  },
  {
    icon: Disc,
    iconClass: 'lucide lucide-disc text-secondary',
    title: 'Sistema de Freios',
    description:
      'Manutenção preventiva e corretiva do sistema de freios: pastilhas, discos, tambores e fluido de freio.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench text-secondary',
    title: 'Troca de Pneus',
    description:
      'Troca de pneus para veículos leves com montagem, balanceamento e verificação da calibragem correta.',
  },
  {
    icon: Droplets,
    iconClass: 'lucide lucide-droplets text-secondary',
    title: 'Troca de Óleo',
    description:
      'Troca de óleo e filtros com produtos de qualidade para garantir a lubrificação ideal e a vida útil do motor.',
  },
];

const WA_SERVICE = 'https://wa.me/5566999585577?text=Olá! Gostaria de um orçamento para o serviço de ';

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16 visible">
          <span className="inline-block bg-primary/15 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-5">
            Soluções Completas para
            <span className="block" style={{ color: 'rgb(76, 181, 73)' }}>
              Seu Veículo
            </span>
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto leading-relaxed">
            Da retífica ao balanceamento, oferecemos serviços especializados com profissionais experientes e
            equipamentos modernos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="animate-on-scroll group relative bg-brand-white rounded-2xl p-7 border border-gray-100 hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden visible"
              >
                {service.specialty && (
                  <div className="absolute top-0 right-0 bg-primary text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-xl">
                    Especialidade
                  </div>
                )}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(145, 200, 68, 0.15), rgba(76, 181, 73, 0.15))',
                  }}
                >
                  <Icon className={service.iconClass} width={26} height={26} />
                </div>
                <h3 className="text-brand-dark text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <a
                    href={WA_SERVICE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary font-semibold text-sm transition-colors duration-200 flex items-center gap-1.5 group/link"
                  >
                    Solicitar orçamento
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center animate-on-scroll">
          <a
            href="https://wa.me/5566999585577?text=Olá! Vim pelo site e gostaria de saber mais sobre os serviços disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark hover:bg-brand-dark/80 text-brand-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <WhatsappIcon className="w-5 h-5 fill-current text-primary" />
            Fale conosco agora
          </a>
        </div>
      </div>
    </section>
  );
}
