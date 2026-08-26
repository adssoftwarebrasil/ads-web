import { Award, Target, Lightbulb, TrendingUp, Users, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Eficiência Técnica e Agronômica',
      description: 'Soluções comprovadas em campo com resultados mensuráveis',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Consultoria dedicada e adaptada à realidade de cada produtor',
    },
    {
      icon: Lightbulb,
      title: 'Programas Exclusivos',
      description: 'PTA e Plante Conosco para máxima produtividade',
    },
    {
      icon: Award,
      title: 'Parcerias Estratégicas',
      description: 'Relacionamento sólido com produtores e fornecedores',
    },
    {
      icon: TrendingUp,
      title: 'Foco em Rentabilidade',
      description: 'Cada decisão pensada para aumentar seu resultado líquido',
    },
    {
      icon: Shield,
      title: 'Sustentabilidade',
      description: 'Práticas responsáveis para crescimento de longo prazo',
    },
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#fdaf2a] font-bold text-sm uppercase tracking-wider bg-[#fdaf2a]/10 px-4 py-2 rounded-full">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12441f] leading-tight">
              Comprometidos com Tecnologia e Sustentabilidade
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fundada em 2023, a Agrocolméia nasceu com o propósito de levar soluções inteligentes, sustentáveis e altamente rentáveis para o campo. Atuamos na distribuição de sementes de alto desempenho, especialidades técnicas e serviços agronômicos que impulsionam a produtividade e reduzem riscos operacionais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com uma equipe altamente capacitada e uma atuação estratégica em toda a região da Grande Dourados (MS), nosso compromisso é unir tecnologia de ponta, conhecimento técnico especializado e relacionamento próximo para transformar a experiência do produtor rural.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FFachadaComCarros.png"
                alt="Fachada Agrocolméia"
                className="w-full sm:w-[48%] rounded-xl shadow-lg object-cover h-48"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FFuncionariosNaFachada.jpg"
                alt="Equipe Agrocolméia"
                className="w-full sm:w-[48%] rounded-xl shadow-lg object-cover h-48"
              />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FDonoDaAgroColmeia.png"
                  alt="Cássio Gustavo"
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#fdaf2a]"
                />
                <div>
                  <h3 className="text-2xl font-bold text-[#12441f]">Cássio Gustavo</h3>
                  <p className="text-[#fdaf2a] font-semibold">Fundador & CEO</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "Nossa missão é estar lado a lado com o produtor rural, oferecendo não apenas insumos, mas conhecimento, tecnologia e suporte contínuo para que cada safra seja um sucesso. A Agrocolméia foi criada para construir parcerias duradouras e gerar valor real no campo."
              </p>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#12441f]">400+</div>
                    <div className="text-sm text-gray-600 mt-1">Agricultores</div>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div>
                    <div className="text-3xl font-bold text-[#12441f]">2023</div>
                    <div className="text-sm text-gray-600 mt-1">Fundação</div>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div>
                    <div className="text-3xl font-bold text-[#12441f]">MS</div>
                    <div className="text-sm text-gray-600 mt-1">Dourados</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#fdaf2a] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-[#12441f] rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-[#fdaf2a]"
            >
              <div className="w-14 h-14 bg-[#12441f]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-[#12441f]" />
              </div>
              <h3 className="text-xl font-bold text-[#12441f] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
