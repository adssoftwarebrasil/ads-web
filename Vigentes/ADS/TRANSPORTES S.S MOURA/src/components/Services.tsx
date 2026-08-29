import { Truck, Wrench, AlertTriangle, Route, Shield, Clock, type LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  wrapClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck ',
    wrapClass: 'bg-blue-50 text-brand-blue',
    title: 'Reboque de Veículos',
    description:
      'Transporte seguro de carros, caminhonetes, utilitários e veículos de passeio para qualquer destino da região.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench ',
    wrapClass: 'bg-amber-50 text-amber-600',
    title: 'Pane Mecânica ou Elétrica',
    description:
      'Atendimento imediato para veículos que falharam na estrada ou em vias urbanas. Sem demora e sem burocracia.',
  },
  {
    icon: AlertTriangle,
    iconClass: 'lucide lucide-alert-triangle ',
    wrapClass: 'bg-red-50 text-red-500',
    title: 'Atendimento em Acidentes',
    description:
      'Suporte ágil e cuidadoso para remoção de veículos envolvidos em colisões, preservando ao máximo o automóvel.',
  },
  {
    icon: Route,
    iconClass: 'lucide lucide-route ',
    wrapClass: 'bg-green-50 text-green-600',
    title: 'Remoção em Rodovias',
    description:
      'Guincho especializado em remoções em pistas e rodovias da região — com segurança e agilidade garantidas.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield ',
    wrapClass: 'bg-sky-50 text-sky-600',
    title: 'Transporte de Máquinas',
    description:
      'Plataformas preparadas para o transporte de tratores, escavadeiras e equipamentos agrícolas pesados.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock ',
    wrapClass: 'bg-brand-blue-50 text-brand-blue',
    title: 'Emergências 24 Horas',
    description:
      'Não importa o horário — de madrugada, feriado ou fim de semana, estamos sempre prontos para atender você.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[rgb(253,253,253)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">O que fazemos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Serviços Completos de<span className="gradient-text"> Guincho &amp; Transporte</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Da cidade ao campo, de emergências a transportes programados — cobrimos todas as situações com agilidade,
            segurança e preço justo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm section-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${service.wrapClass}`}>
                  <Icon width={26} height={26} strokeWidth={1.8} className={service.iconClass} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/553799568191?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20servi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base px-9 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar Serviço pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
