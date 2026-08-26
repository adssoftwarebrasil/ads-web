import { ShieldCheck, Wrench, Cpu, Droplets, Disc, Package, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    title: 'Manutenção Preventiva',
    description:
      'Revisão completa para evitar surpresas. Troca de filtros, fluidos, correias e inspeção geral do veículo.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Manutenção Corretiva',
    description:
      'Diagnóstico e reparo de problemas mecânicos e elétricos com rapidez, devolvendo seu veículo em perfeito estado.',
  },
  {
    icon: Cpu,
    iconClass: 'lucide lucide-cpu',
    title: 'Diagnóstico Eletrônico',
    description:
      'Scanner automotivo de última geração para identificar falhas com precisão e agilizar o reparo.',
  },
  {
    icon: Droplets,
    iconClass: 'lucide lucide-droplets',
    title: 'Troca de Óleo',
    description:
      'Óleo lubrificante e filtro das melhores marcas do mercado, garantindo o desempenho ideal do motor.',
  },
  {
    icon: Disc,
    iconClass: 'lucide lucide-disc',
    title: 'Suspensão e Freios',
    description:
      'Amortecedores, pastilhas, discos e componentes de suspensão. Sua segurança é prioridade.',
  },
  {
    icon: Package,
    iconClass: 'lucide lucide-package',
    title: 'Peças Automotivas',
    description:
      'Peças originais e de qualidade comprovada, com procedência garantida para seu veículo.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
              <span className="text-speedcar-red text-xs font-bold tracking-[0.2em] uppercase">
                O que fazemos
              </span>
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-speedcar-black leading-tight">
              Nossos Serviços
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Soluções completas em manutenção automotiva para manter seu veículo sempre em perfeitas
              condições de funcionamento e segurança.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 80}>
                <div className="group p-8 rounded-xl border border-gray-100 hover:border-speedcar-red/20 bg-white hover:bg-speedcar-gray/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 h-full">
                  <div className="w-14 h-14 rounded-lg bg-speedcar-red/10 flex items-center justify-center mb-6 group-hover:bg-speedcar-red group-hover:scale-110 transition-all duration-300">
                    <Icon
                      className={`${service.iconClass} w-7 h-7 text-speedcar-red group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-speedcar-black mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
