import { useState } from 'react';
import {
  Wrench,
  Gauge,
  Zap,
  Droplets,
  Wind,
  Battery,
  ShieldCheck,
  Settings2,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Wrench,
    title: 'Mecânica Geral',
    description:
      'Diagnóstico completo e manutenção corretiva e preventiva em todos os sistemas do seu veículo. Motores flex e a gasolina.',
    tag: 'Mais Buscado',
  },
  {
    icon: Gauge,
    title: 'Alinhamento e Balanceamento',
    description:
      'Garanta a estabilidade do seu veículo e a vida útil dos seus pneus com nosso serviço de precisão.',
    tag: null,
  },
  {
    icon: Zap,
    title: 'Injeção Eletrônica',
    description:
      'Diagnóstico eletrônico avançado, limpeza e calibração da injeção eletrônica para máximo desempenho e economia de combustível.',
    tag: null,
  },
  {
    icon: Droplets,
    title: 'Troca de Óleo',
    description:
      'Troca de óleo do motor e do câmbio automático com produtos de alta qualidade. Proteção total para o coração do seu carro.',
    tag: null,
  },
  {
    icon: Wind,
    title: 'Ar-Condicionado Automotivo',
    description:
      'Recarga, higienização e manutenção completa do sistema de ar-condicionado. Conforto em qualquer temperatura.',
    tag: null,
  },
  {
    icon: Battery,
    title: 'Motor de Partida e Alternador',
    description:
      'Diagnóstico, reparo e substituição de motor de partida e alternador. Seu carro sempre pronto para ligar.',
    tag: null,
  },
  {
    icon: ShieldCheck,
    title: 'Freios',
    description:
      'Revisão e substituição de pastilhas, discos, tambores e fluido de freio. Segurança em primeiro lugar.',
    tag: 'Segurança',
  },
  {
    icon: Settings2,
    title: 'Suspensão',
    description:
      'Reparo e substituição de amortecedores, molas, buchas e demais componentes da suspensão para um passeio suave e seguro.',
    tag: null,
  },
];

const WHATSAPP_BASE = 'http://wa.me/556692327182?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%3A%20';

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-brand-softgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-yellow/20 text-brand-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4 leading-tight">
            Serviços Completos para
            <span className="text-brand-midgray"> seu Veículo</span>
          </h2>
          <p className="text-brand-midgray text-lg max-w-2xl mx-auto">
            Do motor à suspensão, cuidamos de tudo com qualidade, dedicação e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hovered === index;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 group ${
                  isHovered
                    ? 'shadow-2xl shadow-brand-dark/10 -translate-y-2 border-brand-yellow'
                    : 'shadow-sm hover:shadow-md border-transparent'
                } border-2`}
              >
                {service.tag && (
                  <span className="absolute -top-3 right-4 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isHovered ? 'bg-brand-yellow' : 'bg-brand-dark/5'
                  }`}
                >
                  <Icon
                    size={24}
                    className={`transition-colors duration-300 ${
                      isHovered ? 'text-brand-dark' : 'text-brand-dark'
                    }`}
                  />
                </div>

                <h3 className="font-bold text-brand-dark text-base mb-2">{service.title}</h3>
                <p className="text-brand-midgray text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-xs font-semibold transition-all duration-200 ${
                    isHovered ? 'text-brand-dark' : 'text-brand-midgray'
                  }`}
                >
                  <span className={`transition-all duration-300 ${isHovered ? 'mr-2' : 'mr-1'}`}>
                    Solicitar orçamento
                  </span>
                  <span
                    className={`transition-all duration-300 ${
                      isHovered ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'
                    }`}
                  >
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
