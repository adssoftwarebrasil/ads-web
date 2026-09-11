import { useEffect, useRef } from 'react';
import { Package, Layers, Wheat, Zap, Cpu, Wind } from 'lucide-react';

const services = [
  {
    icon: <Layers size={32} />,
    title: 'Pisos e Revestimentos Cerâmicos',
    description:
      'Transporte especializado de pisos, azulejos e revestimentos cerâmicos com total segurança e cuidado no manuseio.',
    highlight: 'Carga Frágil',
  },
  {
    icon: <Package size={32} />,
    title: 'Chapas e Bobinas de Aço',
    description:
      'Movimentação de cargas pesadas com estrutura e equipamentos adequados para chapas e bobinas de aço.',
    highlight: 'Carga Pesada',
  },
  {
    icon: <Wheat size={32} />,
    title: 'Ração e Grãos',
    description:
      'Transporte de ração animal, grãos e produtos agrícolas a granel, preservando a qualidade da carga.',
    highlight: 'Granel',
  },
  {
    icon: <Wind size={32} />,
    title: 'Pluma de Algodão',
    description:
      'Logística especializada para o transporte de pluma de algodão, atendendo os principais polos têxteis do Brasil.',
    highlight: 'Granel',
  },
  {
    icon: <Cpu size={32} />,
    title: 'Equipamentos Industriais',
    description:
      'Transporte de máquinas, equipamentos industriais e elétricos com rigoroso controle de segurança.',
    highlight: 'Especializado',
  },
  {
    icon: <Zap size={32} />,
    title: 'Produtos em Geral',
    description:
      'Frota versátil para transporte de produtos sólidos e a granel, atendendo demandas variadas com agilidade.',
    highlight: 'Geral',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Nossos Serviços
          </span>
          <h2 className="section-title mb-4">
            Soluções Completas em{' '}
            <span className="text-brand-blue">Transporte de Cargas</span>
          </h2>
          <p className="section-subtitle">
            Atendemos com eficiência os mais diversos tipos de cargas, sempre com
            comprometimento e segurança do carregamento à entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-white rounded-2xl p-7 card-hover border border-gray-100 group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/8 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-xs font-semibold text-brand-amber bg-brand-amber/10 px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-5 w-10 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
