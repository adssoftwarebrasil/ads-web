import type { LucideIcon } from 'lucide-react';
import {
  Droplets,
  Archive,
  Building2,
  TreePine,
  Armchair,
  Container,
  Layers,
  GitBranch,
} from 'lucide-react';

interface Produto {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
  badge?: string;
  href: string;
  delay: string;
}

const produtos: Produto[] = [
  {
    icon: Droplets,
    iconClass: 'lucide lucide-droplets',
    title: 'Manilhas para Drenagem',
    desc: 'Manilhas de concreto para sistemas de drenagem urbana e rural, disponíveis em todos os diâmetros.',
    badge: 'Mais Vendido',
    href: 'http://wa.me/5566996428111?text=Olá!%20Tenho%20interesse%20em%20Manilhas%20para%20Drenagem.%20Gostaria%20de%20mais%20informações.',
    delay: 'animate-on-scroll-delay-1',
  },
  {
    icon: Archive,
    iconClass: 'lucide lucide-archive',
    title: 'Manilhas para Fossa (Sumidouro)',
    desc: 'Manilhas reforçadas para fossas e sumidouros residenciais e comerciais, em todos os tamanhos.',
    href: 'http://wa.me/5566996428111?text=Olá!%20Tenho%20interesse%20em%20Manilhas%20para%20Fossa%20(Sumidouro).%20Gostaria%20de%20mais%20informações.',
    delay: 'animate-on-scroll-delay-2',
  },
  {
    icon: Building2,
    iconClass: 'lucide lucide-building2',
    title: 'Postes para Barracão',
    desc: 'Postes pré-moldados de alta resistência para estruturas de barracões, galpões e cercamentos.',
    href: 'http://wa.me/5566996428111?text=Olá!%20Tenho%20interesse%20em%20Postes%20para%20Barrac%C3%A3o.%20Gostaria%20de%20mais%20informações.',
    delay: 'animate-on-scroll-delay-3',
  },
  {
    icon: TreePine,
    iconClass: 'lucide lucide-tree-pine',
    title: 'Palanques',
    desc: 'Palanques em todos os tamanhos e espessuras para cercas rurais, pastos e divisões de terreno.',
    badge: 'Estoque Amplo',
    href: 'http://wa.me/5566996428111?text=Olá!%20Tenho%20interesse%20em%20Palanques.%20Gostaria%20de%20mais%20informações.',
    delay: 'animate-on-scroll-delay-4',
  },
  {
    icon: Armchair,
    iconClass: 'lucide lucide-armchair',
    title: 'Bancos de Concreto',
    desc: 'Bancos decorativos e funcionais em vários modelos para praças, jardins, condomínios e espaços públicos.',
    href: 'http://wa.me/5566996428111?text=Olá!%20Tenho%20interesse%20em%20Bancos%20de%20Concreto.%20Gostaria%20de%20mais%20informações.',
    delay: 'animate-on-scroll-delay-1',
  },
  {
    icon: Container,
    iconClass: 'lucide lucide-container',
    title: 'Tanques de Concreto',
    desc: 'Tanques pré-moldados de vários tamanhos para armazenamento de água, irrigação e uso agropecuário.',
    href: 'http://wa.me/5566996428111?text=Olá!%20Tenho%20interesse%20em%20Tanques%20de%20Concreto.%20Gostaria%20de%20mais%20informações.',
    delay: 'animate-on-scroll-delay-2',
  },
  {
    icon: Layers,
    iconClass: 'lucide lucide-layers',
    title: 'Blocos e Canaletas',
    desc: 'Blocos de vedação e canaletas estruturais para construção civil, com alta durabilidade e precisão dimensional.',
    href: 'http://wa.me/5566996428111?text=Olá!%20Tenho%20interesse%20em%20Blocos%20e%20Canaletas.%20Gostaria%20de%20mais%20informações.',
    delay: 'animate-on-scroll-delay-3',
  },
  {
    icon: GitBranch,
    iconClass: 'lucide lucide-git-branch',
    title: 'Caixas Sépticas e de Passagem',
    desc: 'Caixas de inspeção, passagem e sépticas para sistemas de esgoto residencial e comercial.',
    href: 'http://wa.me/5566996428111?text=Olá!%20Tenho%20interesse%20em%20Caixas%20S%C3%A9pticas%20e%20de%20Passagem.%20Gostaria%20de%20mais%20informações.',
    delay: 'animate-on-scroll-delay-4',
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
            style={{
              borderColor: 'rgb(120, 53, 35)',
              color: 'rgb(120, 53, 35)',
              backgroundColor: 'rgba(120, 53, 35, 0.06)',
            }}
          >
            Catálogo Completo
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-5">
            Nossos Produtos em Concreto
          </h2>
          <div className="animate-on-scroll section-divider mx-auto mb-5"></div>
          <p className="animate-on-scroll text-brand-gray2 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Fabricamos e comercializamos peças de concreto de alta qualidade para construção civil,
            saneamento e agropecuária. Estoque disponível para entrega imediata.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {produtos.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`animate-on-scroll ${p.delay} group relative bg-white border border-brand-light rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: 'rgb(120, 53, 35)' }}
                ></div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(120, 53, 35, 0.1)' }}
                >
                  <Icon
                    width={22}
                    height={22}
                    className={p.iconClass}
                    style={{ color: 'rgb(120, 53, 35)' }}
                  />
                </div>
                {p.badge && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: 'rgb(120, 53, 35)' }}
                  >
                    {p.badge}
                  </span>
                )}
                <h3 className="text-base font-bold text-brand-dark mb-2 leading-tight">{p.title}</h3>
                <p className="text-sm text-brand-gray1 leading-relaxed">{p.desc}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-xs font-semibold transition-all duration-200 hover:gap-2"
                  style={{ color: 'rgb(120, 53, 35)' }}
                >
                  Consultar preço →
                </a>
              </div>
            );
          })}
        </div>
        <div className="animate-on-scroll mt-12 text-center">
          <a
            href="http://wa.me/5566996428111?text=Olá!%20Gostaria%20de%20conhecer%20todos%20os%20produtos%20disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95"
            style={{ backgroundColor: 'rgb(120, 53, 35)' }}
          >
            Solicitar Orçamento Completo
          </a>
        </div>
      </div>
    </section>
  );
}
