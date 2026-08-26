import { BookOpen, Calculator, Users, FileText, Building2, TrendingUp, Sprout, ClipboardList } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: BookOpen,
    iconClass: 'lucide lucide-book-open text-brand-blue',
    title: 'Contabilidade Geral',
    description:
      'Assessoria contábil completa para empresas do Simples Nacional, Lucro Presumido e Lucro Real, com rigor técnico e foco nos seus resultados.',
  },
  {
    Icon: Calculator,
    iconClass: 'lucide lucide-calculator text-brand-blue',
    title: 'Planejamento Tributário',
    description:
      'Estratégias legais para reduzir a carga tributária da sua empresa, enquadrando-a no melhor regime fiscal e evitando riscos com o Fisco.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users text-brand-blue',
    title: 'Departamento Pessoal',
    description:
      'Gestão completa da folha de pagamento, admissões, demissões, férias, encargos sociais e toda a parte trabalhista da sua empresa.',
  },
  {
    Icon: FileText,
    iconClass: 'lucide lucide-file-text text-brand-blue',
    title: 'Imposto de Renda',
    description:
      'Declaração de IRPF e IRPJ elaborada com precisão, reduzindo restituições e garantindo conformidade total com a Receita Federal.',
  },
  {
    Icon: Building2,
    iconClass: 'lucide lucide-building2 text-brand-blue',
    title: 'Abertura de Empresas',
    description:
      'Abertura, alteração e regularização de empresas (MEI, ME, Ltda, SA) com agilidade e segurança jurídica em todas as etapas.',
  },
  {
    Icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up text-brand-blue',
    title: 'Assessoria Fiscal',
    description:
      'Acompanhamento fiscal preventivo, apuração de impostos, obrigações acessórias e conformidade tributária para evitar autuações.',
  },
  {
    Icon: Sprout,
    iconClass: 'lucide lucide-sprout text-brand-blue',
    title: 'Contabilidade Rural',
    description:
      'Especialização em contabilidade para produtores rurais, fazendas e agronegócio, com domínio das particularidades do setor agrícola.',
  },
  {
    Icon: ClipboardList,
    iconClass: 'lucide lucide-clipboard-list text-brand-blue',
    title: 'Consultoria Contábil',
    description:
      'Orientação estratégica para tomada de decisões, análise de viabilidade, relatórios gerenciais e suporte para profissionais autônomos.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-burgundy mb-5">
            Serviços Contábeis Completos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções contábeis sob medida para empresas de todos os portes, produtores rurais e profissionais
            autônomos, com mais de 30 anos de expertise.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const { Icon } = service;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 group-hover:bg-brand-blue/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className={service.iconClass} width={22} height={22} strokeWidth={2} />
                </div>
                <h3 className="text-brand-burgundy font-bold text-base mb-3 leading-snug">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5566999538963?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Assistec%20Contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-burgundy hover:bg-brand-burgundy-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Solicitar uma consultoria gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
