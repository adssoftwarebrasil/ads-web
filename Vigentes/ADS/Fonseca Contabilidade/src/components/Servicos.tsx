import { Building2, FileText, Users, Calculator, Rocket, BarChart3, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function Servicos() {
  const servicos = [
    {
      titulo: 'Contabilidade Empresarial',
      icone: Building2,
      gradient: 'from-blue-500 to-cyan-500',
      itens: [
        'Escrituração contábil',
        'Balanços e demonstrativos',
        'Gestão de custos',
        'Relatórios gerenciais',
      ],
    },
    {
      titulo: 'Gestão Fiscal e Tributária',
      icone: FileText,
      gradient: 'from-indigo-500 to-blue-500',
      itens: [
        'Escrituração fiscal',
        'Planejamento tributário',
        'Assessoria em impostos',
        'Redução de carga tributária',
      ],
    },
    {
      titulo: 'Departamento Pessoal',
      icone: Users,
      gradient: 'from-purple-500 to-indigo-500',
      itens: [
        'Folha de pagamento empresarial',
        'Folha doméstica',
        'Admissões e rescisões',
        'Obrigações trabalhistas',
      ],
    },
    {
      titulo: 'Imposto de Renda PF',
      icone: Calculator,
      gradient: 'from-pink-500 to-purple-500',
      itens: [
        'IRPF completo',
        'Restituição máxima',
        'Declarações retificadoras',
        'Consultoria tributária',
      ],
    },
    {
      titulo: 'Abertura e Legalização',
      icone: Rocket,
      gradient: 'from-orange-500 to-pink-500',
      itens: [
        'Abertura de empresas',
        'Alterações contratuais',
        'Licenças e alvarás',
        'Processo ágil',
      ],
    },
    {
      titulo: 'Controladoria e Auditoria',
      icone: BarChart3,
      gradient: 'from-cyan-500 to-teal-500',
      itens: [
        'Controladoria estratégica',
        'Auditoria interna',
        'Indicadores de performance',
        'Gestão patrimonial',
      ],
    },
  ];

  return (
    <section id="servicos" className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#164972 1px, transparent 1px), linear-gradient(90deg, #164972 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#164972]/10 to-cyan-500/10 backdrop-blur-sm border border-[#164972]/20 text-[#164972] px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            SOLUÇÕES COMPLETAS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#164972] mb-3 md:mb-4 px-4 animate-fade-in-up">
            Serviços de Contabilidade{' '}
            <span className="bg-gradient-to-r from-[#164972] to-cyan-600 bg-clip-text text-transparent">
              Sob Medida
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Do planejamento estratégico à execução, cuidamos de toda a contabilidade do seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {servicos.map((servico, index) => {
            const IconComponent = servico.icone;
            return (
              <div
                key={servico.titulo}
                className="group relative bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl md:rounded-t-3xl bg-gradient-to-r ${servico.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Subtle hover background effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon container with gradient */}
                  <div className="relative mb-5 md:mb-6">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${servico.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${servico.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg md:text-xl font-bold text-[#164972] mb-4 md:mb-5 transition-all duration-300`}>
                    {servico.titulo}
                  </h3>

                  {/* Items list */}
                  <ul className="space-y-2.5 md:space-y-3">
                    {servico.itens.map((item, itemIndex) => (
                      <li 
                        key={item} 
                        className="flex items-start gap-2.5 md:gap-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 text-[#164972] transition-all duration-300" />
                        <span className="text-sm md:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover arrow indicator */}
                  <div className="mt-5 md:mt-6 pt-4 md:pt-5 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${servico.gradient} bg-clip-text text-transparent`}>
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-[#164972] to-[#1a5280] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
              Não encontrou o serviço que procura?
            </h3>
            <p className="text-sm md:text-base text-white/90 mb-5 md:mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua empresa
            </p>
            <a
              href="https://wa.me/5562999732807?text=Olá! Gostaria de conhecer mais sobre os serviços da Fonseca Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#164972] px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-fade-in-up {
            animation-duration: 0.5s;
          }
        }
      `}</style>
    </section>
  );
}