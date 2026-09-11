import { Home, Store, Factory, Tractor, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToId } from '../lib/utils';

const services: {
  icon: LucideIcon;
  iconClass: string;
  iconBox: string;
  tag: string;
  title: string;
  text: string;
  features: string[];
  cta: string;
}[] = [
  {
    icon: Home,
    iconClass: 'lucide-home',
    iconBox: 'bg-blue-50 text-blue-600',
    tag: 'Para sua Casa',
    title: 'Residencial',
    text: 'Transforme seu telhado em uma usina de energia e livre-se da inflação energética.',
    features: [
      'Redução de até 95% na conta',
      'Valorização imediata do imóvel',
      'Monitoramento via App celular',
      'Instalação sem "quebra-quebra"',
    ],
    cta: 'Solicitar orçamento Residencial',
  },
  {
    icon: Store,
    iconClass: 'lucide-store',
    iconBox: 'bg-emerald-50 text-emerald-600',
    tag: 'Para seu Negócio',
    title: 'Comercial',
    text: 'Aumente sua margem de lucro reduzindo um dos maiores custos fixos da sua empresa.',
    features: [
      'Payback (retorno) acelerado',
      'Marketing Verde para a marca',
      'Proteção contra bandeiras tarifárias',
      'Dedução no Imposto de Renda',
    ],
    cta: 'Solicitar orçamento Comercial',
  },
  {
    icon: Factory,
    iconClass: 'lucide-factory',
    iconBox: 'bg-indigo-50 text-indigo-600',
    tag: 'Alta Tensão',
    title: 'Industrial',
    text: 'Projetos de engenharia robustos para grandes demandas energéticas e redução de OPEX.',
    features: [
      'Sistemas de alta performance',
      'Estudo de viabilidade detalhado',
      'Migração para Mercado Livre',
      'Gestão de energia inteligente',
    ],
    cta: 'Solicitar orçamento Industrial',
  },
  {
    icon: Tractor,
    iconClass: 'lucide-tractor',
    iconBox: 'bg-orange-50 text-orange-600',
    tag: 'Agronegócio',
    title: 'Rural',
    text: 'Leve energia para onde a rede não chega ou barateie seus custos de irrigação.',
    features: [
      'Ideal para pivôs de irrigação',
      'Crédito facilitado (Plano Safra)',
      'Autonomia energética no campo',
      'Sistemas Off-grid (com baterias)',
    ],
    cta: 'Solicitar orçamento Rural',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[rgb(26,110,76)]/10 text-[rgb(26,110,76)] font-semibold text-sm uppercase tracking-wider">
            Nossas Soluções
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(27,45,114)] mb-6 tracking-tight">
            Energia Inteligente para Todos os Setores
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Não importa o tamanho da sua necessidade. Nossa engenharia desenvolve o projeto ideal para maximizar sua
            economia e garantir retorno financeiro.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:border-[rgb(235,156,51)] transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 flex flex-col h-full overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:from-[rgb(235,156,51)]/10"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`${s.iconBox} w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`lucide ${s.iconClass}`} width={32} height={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(27,45,114)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{s.text}</p>
                  <div className="space-y-4 mb-8 bg-gray-50/50 p-6 rounded-2xl border border-gray-100 flex-grow">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle2
                          className="lucide lucide-check-circle2 text-[rgb(26,110,76)] flex-shrink-0 mt-0.5"
                          width={18}
                          height={18}
                        />
                        <span className="text-sm font-medium text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToId('contact')}
                    className="w-full mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[rgb(27,45,114)] font-bold group/btn cursor-pointer hover:text-[rgb(235,156,51)] transition-colors"
                  >
                    <span className="group-hover/btn:mr-2 transition-all">{s.cta}</span>
                    <ArrowRight
                      className="lucide lucide-arrow-right opacity-0 group-hover/btn:opacity-100 transition-all -translate-x-2 group-hover/btn:translate-x-0"
                      width={18}
                      height={18}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <button
            onClick={() => scrollToId('contact')}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[rgb(26,110,76)] font-medium transition-colors border-b border-transparent hover:border-[rgb(26,110,76)] pb-0.5"
          >
            Não tem certeza qual o ideal para você? Fale com um consultor
            <ArrowRight className="lucide lucide-arrow-right" width={16} height={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
