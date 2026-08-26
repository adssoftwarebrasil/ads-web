import { Mountain, Truck, Hammer, Settings, Trash2, TreePine, ArrowRight, CheckCircle2, MoveHorizontal } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Mountain,
      title: 'Terraplanagem',
      description:
        'Nivelamento e preparação de terrenos com precisão, utilizando equipamentos de última geração para garantir base sólida para sua obra.',
      features: ['Precisão topográfica', 'Equipamentos modernos', 'Análise de solo']
    },
    {
      icon: Hammer,
      title: 'Escavações',
      description:
        'Escavações profundas e de superfície com máxima segurança e eficiência, respeitando prazos e especificações técnicas do projeto.',
      features: ['Todos os tipos', 'Alta segurança', 'Cumprimento de prazos']
    },
    {
      icon: Truck,
      title: 'Transporte e Destinação',
      description:
        'Transporte e destinação final de material de obra com frota própria, garantindo agilidade e conformidade com normas ambientais.',
      features: ['Frota própria', 'Logística eficiente', 'Destinação correta']
    },
    {
      icon: Mountain,
      title: 'Aterros',
      description:
        'Aterros compactados e nivelados seguindo rigorosos padrões técnicos, assegurando estabilidade e durabilidade para sua construção.',
      features: ['Compactação controlada', 'Padrões técnicos', 'Garantia de estabilidade']
    },
    {
      icon: MoveHorizontal,
      title: 'Movimentação de Terras',
      description:
        'Movimentação eficiente de grandes volumes de terra, com planejamento logístico para otimizar tempo e recursos do seu projeto.',
      features: ['Grandes volumes', 'Otimização de recursos', 'Planejamento preciso']
    },
    {
      icon: Hammer,
      title: 'Demolição',
      description:
        'Demolição com uso de maquinário pesado, executada com segurança e eficiência, atendendo todas as normas e regulamentações.',
      features: ['Planejamento detalhado', 'Máxima segurança', 'Conformidade legal']
    },
    {
      icon: Settings,
      title: 'Locação de Máquinas',
      description:
        'Locação de máquinas pesadas de grande, médio e pequeno porte, todas em perfeito estado de conservação e prontas para uso.',
      features: ['Todos os portes', 'Manutenção em dia', 'Flexibilidade']
    },
    {
      icon: TreePine,
      title: 'Limpeza de Terrenos',
      description:
        'Limpeza completa de terrenos, remoção de vegetação e entulhos, preparando o espaço para início imediato da construção.',
      features: ['Limpeza total', 'Remoção de vegetação', 'Descarte adequado']
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#cec643] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6c6d71] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#cec643]/10 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#cec643] rounded-full animate-pulse"></span>
            <span className="text-[#6c6d71] font-semibold text-sm uppercase tracking-wide">
              Nossos Serviços
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6c6d71] mb-6 leading-tight">
            Soluções Completas em{' '}
            <span className="text-[#cec643]">Engenharia de Solos</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Desde 1978 oferecendo qualidade, maquinário moderno e profissionais qualificados 
            para transformar seu projeto em realidade.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#cec643]/30 relative overflow-hidden flex flex-col"
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#cec643]/0 via-[#cec643]/5 to-[#cec643]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#cec643] to-[#b8b43a] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Icon className="text-white" size={28} strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#6c6d71] mb-3 group-hover:text-[#cec643] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-1">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100 mb-5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-[#cec643] flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#6c6d71] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#cec643] hover:text-[#6c6d71] transition-all duration-300 group/btn mt-auto"
                  >
                    Solicitar Serviço
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA destacado */}
        <div className="bg-gradient-to-r from-[#6c6d71] to-[#5a5b5e] rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Padrão de fundo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Pronto para iniciar seu projeto?
              </h3>
              <p className="text-gray-200 text-lg mb-6 lg:mb-0">
                Entre em contato agora e receba um orçamento personalizado sem compromisso. 
                Nossa equipe está pronta para transformar seu projeto em realidade com a qualidade 
                e experiência de quem está no mercado desde 1978.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#cec643] text-[#6c6d71] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#b8b43a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </a>
              
              <a
                href="mailto:contato@soloeng.com.br"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#6c6d71] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                contato@soloeng.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}