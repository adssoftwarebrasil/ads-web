import { Tractor, FileText, Warehouse, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  gradient: string;
  accent: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

const services: Service[] = [
  {
    icon: Tractor,
    gradient: 'bg-gradient-to-br from-plantae-dark to-plantae-blue',
    accent: 'rgb(168, 201, 74)',
    label: 'GESTÃO EFICIENTE DE FAZENDAS',
    title: 'Gestão de Fazendas',
    description:
      'Sistema completo para gestão administrativa e contábil de propriedades rurais. Controle de custos por hectare, talhão e fazenda, monitoramento de pragas, tratos culturais, máquinas e muito mais.',
    features: ['Controle de Custos', 'Tratos Culturais', 'Monitoramento de Pragas', 'Fluxo de Caixa'],
    delay: 0,
  },
  {
    icon: FileText,
    gradient: 'bg-gradient-to-br from-plantae-blue to-plantae-teal',
    accent: 'rgb(87, 191, 191)',
    label: 'EMISSÃO NF-e / MDF-e',
    title: 'NF-e para Produtor',
    description:
      'Emissão simplificada de Notas Fiscais de produtor rural e MDF-e. Inclui Livro Caixa Digital do Produtor Rural (LCDPR), importação de notas fiscais de compra e conciliação bancária.',
    features: ['NF-e Produtor Rural', 'MDF-e', 'LCDPR', 'Conciliação Bancária'],
    delay: 150,
  },
  {
    icon: Warehouse,
    gradient: 'bg-gradient-to-br from-[#0A7791] to-[#125172]',
    accent: 'rgb(252, 235, 205)',
    label: 'MAIOR CONTROLE EM ARMAZÉNS',
    title: 'Gestão de Armazém',
    description:
      'Segurança e transparência na entrada e saída de grãos. Controle de quantidade estocada, flexibilidade para conexão com balança e gestão completa de produtos de terceiros.',
    features: ['Gestão de Silos', 'Controle de Estoque', 'Conexão por Balança', 'Produtos de Terceiros'],
    delay: 300,
  },
];

function hexToBg(accent: string) {
  const inner = accent.replace('rgb(', '').replace(')', '');
  return {
    backgroundColor: `rgba(${inner}, 0.125)`,
    border: `1px solid rgba(${inner}, 0.25)`,
  };
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-plantae-blue font-black text-sm tracking-widest uppercase mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-plantae-dark leading-tight mb-4">
            SOLUÇÃO COMPLETA E INTUITIVA
            <br />
            <span className="text-plantae-blue">PARA GESTÃO AGRÍCOLA</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Três módulos integrados para cobrir todas as necessidades da sua propriedade rural.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-100 translate-y-0"
                style={{ transitionDelay: `${service.delay}ms` }}
              >
                <div className={`${service.gradient} p-8 h-full flex flex-col`}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                    style={hexToBg(service.accent)}
                  >
                    <Icon width={28} height={28} style={{ color: service.accent }} />
                  </div>
                  <div
                    className="text-xs font-black tracking-widest uppercase mb-2"
                    style={{ color: service.accent }}
                  >
                    {service.label}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.accent }}
                        ></span>
                        <span className="text-white/80 text-xs font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5566992921858"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all duration-200"
                    style={{ color: service.accent }}
                  >
                    Saber mais <ArrowRight width={16} height={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
