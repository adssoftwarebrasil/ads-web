import { useState } from 'react';
import {
  LayoutDashboard,
  RefreshCw,
  Tag,
  Target,
  Cog,
  Package,
  Workflow,
  BarChart3,
  Users,
  GraduationCap,
  Presentation,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface DetailCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
}

interface Tab {
  label: string;
  cards: DetailCard[];
}

const tabs: Tab[] = [
  {
    label: 'Consultoria Financeira',
    cards: [
      {
        icon: LayoutDashboard,
        title: 'Implantação de Controladoria',
        desc: 'Estruturação completa de processos de controladoria com dashboards gerenciais e KPIs para tomada de decisão baseada em dados.',
        features: ['Relatórios personalizados', 'Indicadores de performance', 'Análise de lucratividade', 'Controle de custos'],
      },
      {
        icon: RefreshCw,
        title: 'Reestruturação Financeira',
        desc: 'Reorganização da gestão financeira, incluindo fluxo de caixa, capital de giro, renegociação de dívidas e planejamento tributário.',
        features: ['Fluxo de caixa otimizado', 'Reestruturação de dívidas', 'Planejamento tributário', 'Gestão de capital de giro'],
      },
      {
        icon: Tag,
        title: 'Valuation',
        desc: 'Avaliação precisa do valor econômico da empresa para processos de fusão, aquisição, venda ou captação de investimentos.',
        features: ['Metodologias internacionais', 'Análise de múltiplos', 'Fluxo de caixa descontado', 'Relatório fundamentado'],
      },
      {
        icon: Target,
        title: 'Acompanhamento Estratégico',
        desc: 'Consultoria contínua com reuniões periódicas para análise de resultados, ajustes estratégicos e suporte nas decisões críticas.',
        features: ['Reuniões mensais', 'Análise de tendências', 'Suporte à decisão', 'Orçamento empresarial'],
      },
    ],
  },
  {
    label: 'Consultoria de Operações',
    cards: [
      {
        icon: Cog,
        title: 'Gestão de Operações',
        desc: 'Otimização dos processos operacionais para aumentar a produtividade, reduzir desperdícios e elevar a eficiência da sua empresa.',
        features: ['Redução de custos', 'Aumento de produtividade', 'Padronização de rotinas', 'Indicadores operacionais'],
      },
      {
        icon: Package,
        title: 'Gestão de Estoques',
        desc: 'Controle inteligente de estoques para equilibrar disponibilidade e capital de giro, evitando rupturas e excessos.',
        features: ['Curva ABC', 'Giro de estoque', 'Ponto de reposição', 'Redução de perdas'],
      },
      {
        icon: Workflow,
        title: 'Mapeamento de Processos',
        desc: 'Diagnóstico e redesenho de processos para identificar gargalos, eliminar retrabalho e otimizar a cadeia produtiva.',
        features: ['Fluxogramas detalhados', 'Identificação de gargalos', 'Melhoria contínua', 'Automação de tarefas'],
      },
    ],
  },
  {
    label: 'Treinamentos',
    cards: [
      {
        icon: GraduationCap,
        title: 'Treinamentos In Company',
        desc: 'Capacitação prática e personalizada para a sua equipe, ministrada por professores mestres com vivência de mercado.',
        features: ['Conteúdo personalizado', 'Certificado de participação', 'Presencial ou online', 'Foco em resultados'],
      },
      {
        icon: BarChart3,
        title: 'Gestão Financeira',
        desc: 'Treinamento em fundamentos financeiros para líderes e equipes tomarem decisões com base em números e indicadores.',
        features: ['Fluxo de caixa', 'Análise de custos', 'Precificação', 'Indicadores (KPIs)'],
      },
      {
        icon: Users,
        title: 'Capacitação de Equipes',
        desc: 'Desenvolvimento de competências operacionais e de gestão para elevar a performance do seu time no dia a dia.',
        features: ['Liderança e gestão', 'Rotinas operacionais', 'Trabalho em equipe', 'Aplicação prática'],
      },
    ],
  },
];

export default function ServicesDetailed() {
  const [active, setActive] = useState(0);

  return (
    <section id="services-detailed" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(64,102,215)] font-semibold tracking-wider text-sm uppercase mb-3 block">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Soluções Completas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Navegue por nossas áreas de atuação e descubra como podemos transformar seu negócio.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-200">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={
                  active === i
                    ? 'px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 outline-none focus:ring-2 focus:ring-[rgb(62,215,252)] focus:ring-offset-2 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] text-white shadow-md transform scale-[1.02]'
                    : 'px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 outline-none focus:ring-2 focus:ring-[rgb(62,215,252)] focus:ring-offset-2 text-gray-600 hover:bg-gray-50 hover:text-[rgb(64,102,215)]'
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-wrap justify-center gap-6">
            {tabs[active].cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgb(64,102,215)] to-[rgb(62,215,252)] flex items-center justify-center shadow-lg shadow-blue-500/20 transform rotate-3 group-hover:rotate-6 transition-transform">
                      <Icon width={26} height={26} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm sm:text-base">{card.desc}</p>
                  <div className="space-y-3 pt-6 border-t border-gray-50">
                    {card.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <CheckCircle2 width={16} height={16} className="text-[rgb(62,215,252)] flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <a
              href="http://wa.me/5516991931444?text=Ol%C3%A1!%20Vi%20os%20servi%C3%A7os%20no%20site%20e%20gostaria%20de%20uma%20proposta%20personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-[rgb(64,102,215)] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Solicitar Proposta
              <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <TrendingUp width={16} height={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
