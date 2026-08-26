import type { ComponentType } from 'react';
import { DollarSign, Star, Zap, CheckCircle } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

interface Differential {
  Icon: ComponentType<IconProps>;
  iconClass: string;
  title: string;
  description: string;
  items: string[];
}

const differentials: Differential[] = [
  {
    Icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign',
    title: 'PREÇO COMPETITIVO',
    description:
      'Oferecemos as melhores condições comerciais do mercado sem comprometer a qualidade. Nosso volume de compras e parcerias estratégicas nos permitem repassar preços justos e competitivos para você.',
    items: ['Condições especiais para grandes volumes', 'Parcelamento facilitado', 'Orçamento sem compromisso'],
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star',
    title: 'ATENDIMENTO DE EXCELÊNCIA',
    description:
      'Nossa equipe é formada por profissionais experientes que entendem do negócio. Oferecemos consultoria técnica, tiramos dúvidas e ajudamos você a fazer a melhor escolha para seu projeto.',
    items: ['Consultoria técnica especializada', 'Atendimento personalizado', 'Suporte pós-venda'],
  },
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'ENTREGA RÁPIDA',
    description:
      'Entendemos que tempo é dinheiro na construção civil. Por isso, mantemos estoque robusto e logística eficiente para garantir que seu material chegue quando você precisa.',
    items: ['Entrega programada', 'Frota própria', 'Cobertura em toda região'],
  },
];

const NOISE_BG =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=";

export default function Differentials() {
  return (
    <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] py-16 md:py-24 lg:py-32 px-[5%] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url('${NOISE_BG}')` }}></div>
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#F48221] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F48221] rounded-full blur-[150px] opacity-10"></div>
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-xs md:text-sm font-medium text-[#F48221] tracking-[2px] mb-3 md:mb-4 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            NOSSOS DIFERENCIAIS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Por Que Escolher a <br className="hidden sm:block" />
            <span className="text-[#F48221]">Guerreiro Ferro e Aço?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Três pilares que nos tornam referência na região e a escolha certa para seu projeto
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {differentials.map(({ Icon, iconClass, title, description, items }) => (
            <div
              key={title}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 hover:bg-white/10 hover:border-[#F48221]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(244,130,33,0.2)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F48221] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#F48221] to-[#E67318] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Icon className={`${iconClass} w-8 h-8 md:w-10 md:h-10 text-white`} size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {title}
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 text-center">{description}</p>
              <ul className="space-y-3 text-white/80">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 group/item">
                    <CheckCircle className="lucide lucide-check-circle w-5 h-5 text-[#F48221] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" size={24} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
