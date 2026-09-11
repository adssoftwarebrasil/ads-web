import { Search, Leaf, BadgeDollarSign, ShieldCheck, Truck, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Item {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const items: Item[] = [
  {
    Icon: Search,
    iconClass: 'lucide lucide-search',
    title: 'Rastreabilidade Total',
    text: 'Cada peça vendida tem origem identificada e documentada, garantindo segurança e confiança na sua compra.',
  },
  {
    Icon: Leaf,
    iconClass: 'lucide lucide-leaf',
    title: 'Economia Circular',
    text: 'Contribuímos para o meio ambiente ao dar destinação correta às peças, reduzindo a emissão de carbono e o descarte irregular.',
  },
  {
    Icon: BadgeDollarSign,
    iconClass: 'lucide lucide-badge-dollar-sign',
    title: 'Preço Acessível',
    text: 'Peças usadas com procedência a um custo muito inferior ao de peças novas, sem abrir mão da qualidade.',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    title: 'Segurança Garantida',
    text: 'Atendemos todas as normas vigentes do país, garantindo um processo legal, seguro e transparente.',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck',
    title: 'Atendimento Nacional',
    text: 'Enviamos peças para todo o Brasil. Seu veículo recebe a peça certa onde quer que você esteja.',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award',
    title: '20 Anos de Mercado',
    text: 'Duas décadas de experiência no setor de desmontagem e comercialização de peças automotivas usadas.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-brand-red"></div>
            <span className="text-brand-red font-semibold text-sm tracking-widest uppercase">Por que nos escolher</span>
            <div className="h-px w-10 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-black mb-4">
            Nossos <span className="text-brand-blue">Diferenciais</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Mais do que vender peças — entregamos responsabilidade, confiança e economia em cada transação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ Icon, iconClass, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                <Icon
                  className={`${iconClass} w-7 h-7 text-brand-blue group-hover:text-white transition-colors duration-300`}
                />
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
