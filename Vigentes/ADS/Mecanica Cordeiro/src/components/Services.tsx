import type { ComponentType } from 'react';
import {
  Settings,
  Droplets,
  Disc,
  Cog,
  Car,
  Zap,
  Gauge,
  Truck,
  Tractor,
} from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_BASE, useInView } from '../hooks/useInView';

const S = 'https://storage.lucasmendes.dev/site-sp/mecanica%20cordeiro';

interface Service {
  title: string;
  desc: string;
  img: string;
  icon: ComponentType<{ size?: number | string }>;
}

const services: Service[] = [
  {
    title: 'Revisão Completa',
    desc: 'Diagnóstico detalhado de todos os sistemas do veículo. Identifique problemas antes que virem prejuízo.',
    img: `${S}/img/motor-carro-exposto-sala-reparos-mecanica_1600x900.webp`,
    icon: Settings,
  },
  {
    title: 'Troca de Óleo',
    desc: 'Troca de óleo e filtros com produtos de qualidade. Proteja o motor do seu veículo.',
    img: `${S}/img/motor-aberto-com-pescador-de-oleo-cinza_1200x1600.webp`,
    icon: Droplets,
  },
  {
    title: 'Freios',
    desc: 'Revisão, troca de pastilhas, discos e fluido de freio. Segurança em primeiro lugar.',
    img: `${S}/img/fiat-uno-prata-elevado-no-mecanico_1600x900.webp`,
    icon: Disc,
  },
  {
    title: 'Embreagem',
    desc: 'Diagnóstico e substituição completa do sistema de embreagem com peças de qualidade.',
    img: `${S}/img/cambio-carro-eixo-bateria-chao-oficina_900x1600.webp`,
    icon: Cog,
  },
  {
    title: 'Suspensão',
    desc: 'Alinhamento, balanceamento e revisão completa da suspensão. Mais conforto e segurança.',
    img: `${S}/img/van-branca-elevada-no-elevador-mecanico_900x1600.webp`,
    icon: Car,
  },
  {
    title: 'Injeção Eletrônica',
    desc: 'Limpeza e calibração da injeção eletrônica. Melhor desempenho e economia de combustível.',
    img: `${S}/img/motor-de-carro-com-turbocompressor-instalado_900x1600.webp`,
    icon: Zap,
  },
  {
    title: 'Retífica de Motor',
    desc: 'Retífica completa e reconstrução de motores com precisão e peças de primeira linha.',
    img: `${S}/img/bancada-com-motor-desmontado-e-ferramentas_1600x1200.webp`,
    icon: Gauge,
  },
  {
    title: 'Diesel & Utilitários',
    desc: 'Especialistas em veículos diesel, vans e utilitários. Atendemos frotas e veículos de trabalho.',
    img: `${S}/img/van-branca-motor-exposto-reparacao-mecanica_1600x900.webp`,
    icon: Truck,
  },
  {
    title: 'Linha Leve, Pesada e Agrícola',
    desc: 'Trabalhamos com todas as marcas e modelos de motores, atendendo desde carros de passeio até máquinas agrícolas.',
    img: `${S}/att/linha-leve-e-pesada.webp`,
    icon: Tractor,
  },
];

function serviceHref(title: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Olá! Gostaria de agendar um serviço de ${title}.`
  )}`;
}

export default function Services() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E32626] text-xs font-bold tracking-widest uppercase mb-3">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#30312C] mb-4">
            Serviços Especializados
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Da manutenção preventiva à retífica completa de motor — cuidamos do seu
            veículo do começo ao fim com seriedade e técnica.
          </p>
          <div className="mt-4 w-16 h-1 bg-[#E32626] mx-auto rounded-full"></div>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`transition-all duration-500 group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#E32626]/20 flex flex-col ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#30312C]/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#E32626] rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Icon size={28} />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[#30312C] font-bold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <a
                    href={serviceHref(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-[#E32626] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 group/link"
                  >
                    Solicitar Orçamento
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#30312C] text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-[#E32626] transition-colors duration-300 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
