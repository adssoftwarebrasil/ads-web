import {
  TrendingDown,
  Building,
  Calculator,
  ShoppingCart,
  Users,
  FileCheck,
  FileText,
  Flame,
  LucideIcon,
} from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  title: string;
  text: string;
  items: string[];
}

const services: Service[] = [
  {
    Icon: TrendingDown,
    title: 'Planejamento Tributário',
    text: 'Estratégias personalizadas para reduzir legalmente sua carga tributária e maximizar lucros.',
    items: ['Análise fiscal completa', 'Redução de até 40% em impostos', 'Consultoria contínua'],
  },
  {
    Icon: Building,
    title: 'Abertura e Encerramento de Empresas',
    text: 'Suporte completo para abrir, alterar ou encerrar sua empresa com agilidade e segurança.',
    items: ['MEI, ME, EPP e demais', 'Processos simplificados', 'Documentação completa'],
  },
  {
    Icon: Calculator,
    title: 'Especialista em Lucro Real',
    text: 'Domínio completo em gestão tributária para empresas de médio e grande porte.',
    items: ['Comércio varejista e atacadista', 'Indústrias', 'Prestação de serviços'],
  },
  {
    Icon: ShoppingCart,
    title: 'Especialização em Varejo',
    text: 'Expertise focada em supermercados, açougues e estabelecimentos comerciais.',
    items: ['Gestão de estoque fiscal', 'Otimização de créditos', 'Compliance tributário'],
  },
  {
    Icon: Users,
    title: 'Recursos Humanos e Folha',
    text: 'Gestão completa de RH com especialização em legislação trabalhista.',
    items: ['Folha de pagamento', 'Admissão e demissão', 'Consultoria trabalhista'],
  },
  {
    Icon: FileCheck,
    title: 'Assessoria Tributária Completa',
    text: 'Apoio especializado nas áreas de ICMS, IPI, PIS, COFINS, Simples Nacional e ISS.',
    items: ['Escrituração fiscal', 'Livros legais', 'Apuração de tributos'],
  },
  {
    Icon: FileText,
    title: 'Gestão Contábil para Decisões',
    text: 'Transforme dados contábeis em informações estratégicas para sua empresa.',
    items: ['Relatórios gerenciais', 'Análise de indicadores', 'Suporte à decisão'],
  },
  {
    Icon: Flame,
    title: 'Projeto de Incêndio e Pânico (PTS)',
    text: 'Elaboração completa de projetos técnicos de segurança para seu estabelecimento.',
    items: ['Conformidade legal', 'Laudos técnicos', 'Renovações'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[rgb(245,134,52)]/10 rounded-full">
              <span className="text-[rgb(245,134,52)] font-semibold text-sm">
                NOSSOS SERVIÇOS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(47,55,56)] mb-6">
              Soluções Completas em Contabilidade e Gestão Tributária
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços especializados para empresas que buscam
              crescimento sustentável e redução de custos tributários.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, text, items }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[rgb(245,134,52)]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgb(245,134,52)]/10 rounded-xl mb-6">
                  <Icon size={32} className="text-[rgb(245,134,52)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(47,55,56)] mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{text}</p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[rgb(245,134,52)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[rgb(245,134,52)] to-[rgb(225,114,32)] rounded-2xl p-12 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Atendemos Todos os Regimes Tributários
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Lucro Real, Lucro Presumido e Simples Nacional. Escolha o regime
                ideal com nossa consultoria especializada.
              </p>
              <a
                href="https://wa.me/556699790844?text=Olá! Gostaria de uma consultoria sobre qual regime tributário é melhor para minha empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[rgb(245,134,52)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Fale com um Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
