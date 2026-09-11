import {
  Search,
  Settings,
  Gauge,
  Droplets,
  Cpu,
  RotateCcw,
  Wrench,
  Filter,
  type LucideIcon,
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

type Service = {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  popular?: boolean;
};

const services: Service[] = [
  {
    icon: Search,
    iconClass: 'lucide-search',
    title: 'Diagnóstico Eletrônico Completo',
    description:
      'Análise precisa de sistemas Diesel e Common Rail com equipamentos de última geração para identificação rápida de falhas.',
    popular: true,
  },
  {
    icon: Settings,
    iconClass: 'lucide-settings',
    title: 'Reparo de Bombas Injetoras',
    description:
      'Manutenção especializada e reparo completo de bombas injetoras diesel, garantindo desempenho máximo do motor.',
  },
  {
    icon: Gauge,
    iconClass: 'lucide-gauge',
    title: 'Bombas de Alta Pressão',
    description:
      'Reparação e calibração de bombas de alta pressão com precisão técnica para sistemas Common Rail e convencionais.',
  },
  {
    icon: Droplets,
    iconClass: 'lucide-droplets',
    title: 'Bicos Injetores',
    description:
      'Teste, limpeza, regulagem e manutenção completa de bicos injetores para restaurar a eficiência de combustão.',
  },
  {
    icon: Cpu,
    iconClass: 'lucide-cpu',
    title: 'Falhas Eletrônicas',
    description:
      'Análise e correção de falhas nos módulos eletrônicos de controle de injeção diesel com software especializado.',
  },
  {
    icon: RotateCcw,
    iconClass: 'lucide-rotate-ccw',
    title: 'Revisão do Sistema de Alimentação',
    description:
      'Revisão completa do sistema de alimentação diesel: tanques, linhas, filtros e componentes de alimentação.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide-wrench',
    title: 'Manutenção Preventiva e Corretiva',
    description:
      'Serviços programados para prevenir falhas e aumentar a vida útil dos componentes do seu motor diesel.',
  },
  {
    icon: Filter,
    iconClass: 'lucide-filter',
    title: 'Troca de Filtros e Componentes',
    description:
      'Substituição de filtros de combustível e componentes do sistema diesel com peças de qualidade comprovada.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Atendemos caminhões, máquinas agrícolas, ônibus, vans e utilitários diesel com tecnologia de
            ponta e equipe técnica certificada.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden opacity-100 translate-y-0 ${
                  service.popular ? 'ring-2 ring-brand-red' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-dark/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors duration-300">
                    <Icon className={`lucide ${service.iconClass} text-white`} width={22} height={22} />
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2 leading-tight">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red font-semibold text-sm hover:text-red-700 transition-colors flex items-center gap-1 group/link"
                    >
                      Solicitar este serviço
                      <span className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark hover:bg-brand-darkDeep text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-brand-dark/30 hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar Diagnóstico Agora
          </a>
        </div>
      </div>
    </section>
  );
}
