import { Sparkles, Users, Calculator, PieChart, Lightbulb, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface Solucao {
  imgOrder: string;
  textOrder: string;
  imgBg: string;
  icon: ReactNode;
  overlayGrad: string;
  blurGrad: string;
  iconGrad: string;
  tagGrad: string;
  ctaGrad: string;
  dividerGrad: string;
  hasDivider: boolean;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  text: string;
  tags: string[];
  waText: string;
}

const solucoes: Solucao[] = [
  {
    imgOrder: 'lg:order-1',
    textOrder: 'lg:order-2',
    imgBg: 'bg-blue-50/50',
    icon: <Users className="lucide lucide-users " width={40} height={40} />,
    overlayGrad: 'from-[#234783] to-[#3B7AC4]',
    blurGrad: 'from-[#234783] to-[#3B7AC4]',
    iconGrad: 'from-[#234783] to-[#3B7AC4]',
    tagGrad: 'from-[#234783] to-[#3B7AC4]',
    ctaGrad: 'from-[#234783] to-[#3B7AC4]',
    dividerGrad: 'from-[#234783] to-[#3B7AC4]',
    hasDivider: true,
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FDepartamento%20Pessoal.png',
    alt: 'Departamento Pessoal',
    title: 'Departamento Pessoal',
    subtitle: 'Cuidamos da Sua Equipe do Início ao Fim',
    text: 'Nosso Escritório de Contabilidade oferece uma gestão completa para o departamento pessoal da sua empresa, assegurando que todos os processos de recursos humanos sejam realizados com precisão e eficiência absoluta. Cuidamos do fechamento de folha de pagamento, controle de benefícios, cálculo de encargos trabalhistas, obrigações acessórias (eSocial, DCTF, CAGED) e muito mais, garantindo que sua empresa esteja sempre em conformidade com a legislação trabalhista vigente.',
    tags: ['Folha de Pagamento', 'Benefícios', 'eSocial e CAGED'],
    waText: 'Olá! Gostaria de saber mais sobre Departamento Pessoal.',
  },
  {
    imgOrder: 'lg:order-2',
    textOrder: 'lg:order-1',
    imgBg: 'bg-blue-50/50',
    icon: <Calculator className="lucide lucide-calculator " width={40} height={40} />,
    overlayGrad: 'from-[#3B7AC4] to-[#5BA3E8]',
    blurGrad: 'from-[#3B7AC4] to-[#5BA3E8]',
    iconGrad: 'from-[#3B7AC4] to-[#5BA3E8]',
    tagGrad: 'from-[#3B7AC4] to-[#5BA3E8]',
    ctaGrad: 'from-[#3B7AC4] to-[#5BA3E8]',
    dividerGrad: 'from-[#3B7AC4] to-[#5BA3E8]',
    hasDivider: true,
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FContabilidade.png',
    alt: 'Contabilidade',
    title: 'Contabilidade',
    subtitle: 'Contabilidade Precisa e Transparente',
    text: 'Nosso Escritório de Contabilidade oferece serviços contábeis completos e personalizados, desde a escrituração fiscal e contábil até o fechamento de balanços patrimoniais e demonstrações financeiras (DRE, DFC, DMPL). Trabalhamos em estreita parceria com o seu time interno ou assumimos toda a responsabilidade contábil para garantir conformidade, precisão nos registros e máxima eficiência nos processos. Com nossa expertise de mais de 8 anos no mercado, ajudamos a manter a contabilidade da sua empresa sempre em dia.',
    tags: ['Escrituração Fiscal', 'Balanços', 'Demonstrações Financeiras'],
    waText: 'Olá! Gostaria de saber mais sobre Contabilidade.',
  },
  {
    imgOrder: 'lg:order-1',
    textOrder: 'lg:order-2',
    imgBg: 'bg-blue-50/50',
    icon: <PieChart className="lucide lucide-pie-chart " width={40} height={40} />,
    overlayGrad: 'from-[#5BA3E8] to-[#234783]',
    blurGrad: 'from-[#5BA3E8] to-[#234783]',
    iconGrad: 'from-[#5BA3E8] to-[#234783]',
    tagGrad: 'from-[#5BA3E8] to-[#234783]',
    ctaGrad: 'from-[#5BA3E8] to-[#234783]',
    dividerGrad: 'from-[#5BA3E8] to-[#234783]',
    hasDivider: true,
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FGesta%CC%83o%20Financeira.png',
    alt: 'Gestão Financeira',
    title: 'Gestão Financeira',
    subtitle: 'Gestão Financeira que Impulsiona Resultados',
    text: 'Oferecemos um suporte abrangente e consultivo em gestão financeira, com foco total em auxiliar nossos clientes a analisar, compreender e otimizar suas finanças de forma inteligente. Realizamos reuniões detalhadas e periódicas para entender as necessidades específicas de cada empresa e fornecer orientações personalizadas que abrangem desde a análise crítica de relatórios financeiros (fluxo de caixa, DRE gerencial, balanço patrimonial) até a avaliação completa da movimentação financeira, identificação de gargalos e oportunidades de redução de custos.',
    tags: ['Fluxo de Caixa', 'Relatórios Gerenciais', 'Otimização de Custos'],
    waText: 'Olá! Gostaria de saber mais sobre Gestão Financeira.',
  },
  {
    imgOrder: 'lg:order-2',
    textOrder: 'lg:order-1',
    imgBg: 'bg-slate-50/50',
    icon: <Lightbulb className="lucide lucide-lightbulb " width={40} height={40} />,
    overlayGrad: 'from-[#1a3461] to-[#234783]',
    blurGrad: 'from-[#1a3461] to-[#234783]',
    iconGrad: 'from-[#1a3461] to-[#234783]',
    tagGrad: 'from-[#1a3461] to-[#234783]',
    ctaGrad: 'from-[#1a3461] to-[#234783]',
    dividerGrad: 'from-[#1a3461] to-[#234783]',
    hasDivider: false,
    img: 'https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FConsultoria.png',
    alt: 'Consultoria',
    title: 'Consultoria',
    subtitle: 'Consultoria Estratégica para Decisões Assertivas',
    text: 'Oferecemos uma consultoria financeira e contábil altamente personalizada e estratégica, ideal para empresas que buscam um entendimento profundo e completo de seus números. Nossa equipe de especialistas realiza uma análise detalhada dos demonstrativos contábeis, relatórios de gestão financeira, indicadores-chave de performance (KPIs), análise de rentabilidade por produto/serviço e fluxo de caixa projetado. Com nosso suporte consultivo próximo e contínuo, você terá total clareza e segurança para tomar decisões mais assertivas.',
    tags: ['Análise de KPIs', 'Rentabilidade', 'Planejamento Estratégico'],
    waText: 'Olá! Gostaria de saber mais sobre Consultoria.',
  },
];

export default function Solucoes() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#234783]/5 rounded-full blur-3xl top-20 -left-48"></div>
        <div className="absolute w-96 h-96 bg-[#5BA3E8]/5 rounded-full blur-3xl bottom-20 -right-48"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#234783]/10 to-[#5BA3E8]/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="lucide lucide-sparkles text-[#234783]" width={18} height={18} />
            <span className="text-sm font-semibold text-[#234783]">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções Completas para o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#234783] to-[#5BA3E8]">
              Seu Negócio
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Serviços especializados com foco em resultados e crescimento
            sustentável
          </p>
        </div>
        <div className="space-y-20 md:space-y-32">
          {solucoes.map((s) => (
            <div key={s.title} className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={`${s.imgOrder} relative group`}>
                  <div className={`relative ${s.imgBg} rounded-3xl p-4 md:p-6`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={s.img}
                        alt={s.alt}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${s.overlayGrad} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>
                    </div>
                    <div
                      className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${s.blurGrad} rounded-full opacity-20 blur-2xl -z-10 group-hover:opacity-30 transition-opacity`}
                    ></div>
                  </div>
                </div>
                <div className={`${s.textOrder} space-y-6`}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${s.iconGrad} rounded-2xl shadow-lg`}
                  >
                    <div className="text-white">{s.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#234783] to-[#5BA3E8]">
                      {s.subtitle}
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {s.text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${s.tagGrad} text-white shadow-md`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/556733052146?text=${s.waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${s.ctaGrad} hover:opacity-90 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                    >
                      Falar com Consultor
                      <ArrowRight
                        className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                        width={20}
                        height={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
              {s.hasDivider && (
                <div className="mt-20 md:mt-32">
                  <div
                    className={`h-1 max-w-xl mx-auto bg-gradient-to-r ${s.dividerGrad} opacity-20 rounded-full`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
