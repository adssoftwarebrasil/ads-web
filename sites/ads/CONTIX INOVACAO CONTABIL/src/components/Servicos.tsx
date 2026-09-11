import { Building2, FileText, TrendingUp } from 'lucide-react';

const servicos = [
  {
    icon: (
      <Building2 className="lucide lucide-building2 text-[#234783]" width={40} height={40} />
    ),
    border: '4px solid rgb(35, 71, 131)',
    title: 'Abertura de Empresa',
    text: 'De 5 a 10 dias úteis. Processo 100% digital, sem burocracia e sem custos escondidos. Você paga apenas as taxas oficiais da Junta Comercial e órgãos competentes.',
  },
  {
    icon: (
      <FileText className="lucide lucide-file-text text-[#3B7AC4]" width={40} height={40} />
    ),
    border: '4px solid rgb(59, 122, 196)',
    title: 'Contabilidade Digital Completa',
    text: 'Escrituração fiscal e contábil, fechamento de balanços, demonstrações financeiras e conformidade com a legislação vigente. Tudo 100% digital e transparente.',
  },
  {
    icon: (
      <TrendingUp className="lucide lucide-trending-up text-[#5BA3E8]" width={40} height={40} />
    ),
    border: '4px solid rgb(91, 163, 232)',
    title: 'Gestão Financeira Estratégica',
    text: 'Reuniões periódicas, análise de relatórios financeiros e orientações personalizadas para decisões baseadas em dados reais do seu negócio. Acompanhamento próximo e suporte contínuo.',
  },
];

export default function Servicos() {
  return (
    <section id="solucoes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600">
            Serviços personalizados para atender às necessidades individuais de
            cada cliente. Controle, rapidez e excelência no atendimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ borderLeft: s.border }}
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
