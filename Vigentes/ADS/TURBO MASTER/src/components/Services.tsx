import {
  Wind,
  Cog,
  Zap,
  Activity,
  Settings,
  Gauge,
  Wrench,
  FlaskConical,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Part {
  Icon: LucideIcon;
  iconName: string;
  label: string;
}

const parts: Part[] = [
  { Icon: Wind, iconName: 'wind', label: 'Turbina / Turbo' },
  { Icon: Cog, iconName: 'cog', label: 'Bomba Injetora' },
  { Icon: Zap, iconName: 'zap', label: 'Bico Injetor' },
  { Icon: Activity, iconName: 'activity', label: 'Bomba de Alta Pressão' },
  { Icon: Settings, iconName: 'settings', label: 'Conjunto Central do Turbo' },
  { Icon: Gauge, iconName: 'gauge', label: 'Radiador' },
  { Icon: Wrench, iconName: 'wrench', label: 'Intercooler' },
  { Icon: Settings, iconName: 'settings', label: 'Válvula Wastegate' },
  { Icon: Cog, iconName: 'cog', label: 'Atuador do Turbo' },
  { Icon: Zap, iconName: 'zap', label: 'Porta Injetor' },
  { Icon: Activity, iconName: 'activity', label: 'Unidade Injetora' },
  { Icon: Gauge, iconName: 'gauge', label: 'Bomba Alimentadora' },
  { Icon: Wrench, iconName: 'wrench', label: 'Bomba de Transferência' },
];

interface Service {
  Icon: LucideIcon;
  iconName: string;
  image: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: Wind,
    iconName: 'wind',
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/turbocompressores-novos-embalados-em-bancada-escura_382x510.webp',
    title: 'Recondicionamento de Turbo',
    description:
      'Restauração completa do turbocompressor com peças originais e garantia de funcionamento.',
  },
  {
    Icon: FlaskConical,
    iconName: 'flask-conical',
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/equipamento-teste-inje-o-fila-tubos-graduados_1200x1600.webp',
    title: 'Regulagem de Bicos Injetores',
    description:
      'Ajuste preciso dos bicos injetores para otimizar o desempenho e consumo do motor diesel.',
  },
  {
    Icon: Settings,
    iconName: 'settings',
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/maquina-teste-bomba-injetora-diesel-mecanica_1200x1600.webp',
    title: 'Regulagem de Bomba Injetora',
    description:
      'Calibração da bomba injetora para garantir eficiência e longevidade do sistema de injeção.',
  },
  {
    Icon: Activity,
    iconName: 'activity',
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/ferramentas-diagnostico-automotivo-com-cabos-e-maleta_1200x1600.webp',
    title: 'Diagnóstico Eletrônico',
    description:
      'Diagnóstico completo do sistema eletrônico com equipamentos de última geração.',
  },
  {
    Icon: Gauge,
    iconName: 'gauge',
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/maquina-teste-bicos-common-rail-computador_1600x1200.webp',
    title: 'Teste de Bicos Common Rail',
    description: 'Testes precisos em bancada para bicos injetores de sistemas Common Rail.',
  },
  {
    Icon: Zap,
    iconName: 'zap',
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/bancada-ferramentas-vermelha-computador-oficina_1200x1600.webp',
    title: 'Regeneração do Catalisador',
    description:
      'Processo especializado de regeneração do catalisador para manter o sistema de emissões correto.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-primary-500 text-xs font-bold tracking-widest uppercase">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Serviços &amp; Peças Especializados
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções completas para o sistema diesel do seu veículo leve ou pesado, com diagnóstico
            preciso e atendimento técnico de alto nível.
          </p>
        </div>
        <div className="mb-16">
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary-600"></span>Peças &amp; Componentes
          </h3>
          <div className="flex flex-wrap gap-3">
            {parts.map((part, i) => {
              const { Icon } = part;
              return (
                <div
                  key={`${part.label}-${i}`}
                  className="flex items-center gap-2 bg-gray-800 border border-gray-700 hover:border-primary-600/40 rounded-full px-4 py-2 transition-all duration-200 group cursor-default"
                >
                  <Icon
                    className={`lucide lucide-${part.iconName} text-primary-500 group-hover:text-primary-400 transition-colors flex-shrink-0`}
                    width={14}
                    height={14}
                  />
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors whitespace-nowrap">
                    {part.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary-600"></span>Serviços Especializados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const { Icon } = service;
              return (
                <div
                  key={service.title}
                  className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-primary-600/40 hover:shadow-xl hover:shadow-primary-950/30 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
                      <Icon
                        className={`lucide lucide-${service.iconName} text-white`}
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-white font-bold text-base mb-2">{service.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    <a
                      href="https://wa.me/5565992174220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300 text-sm font-semibold mt-4 transition-colors"
                    >
                      Solicitar orçamento <span className="text-base">→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
