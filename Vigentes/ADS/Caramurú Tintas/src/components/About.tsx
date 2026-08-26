import { Users, Zap, Package, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '30+', label: 'Anos de Mercado' },
  { value: '1000+', label: 'Produtos Disponíveis' },
  { value: '5000+', label: 'Clientes Satisfeitos' },
  { value: '100%', label: 'Atendimento de Qualidade' },
];

const features = [
  {
    icon: Users,
    title: 'Atendimento Especializado',
    text: 'Nossa equipe possui profundo conhecimento técnico em tintas e pinturas para orientar você na melhor escolha.',
  },
  {
    icon: Zap,
    title: 'Entrega Rápida',
    text: 'Logística eficiente para garantir que seus produtos cheguem rapidamente quando você mais precisa.',
  },
  {
    icon: Package,
    title: 'Maior Variedade',
    text: 'O mais completo portfólio de tintas, materiais e equipamentos para pintura da região.',
  },
];

const reasons = [
  {
    title: 'Tintas Imobiliárias de Qualidade',
    text: 'Para uso interno e externo, garantindo durabilidade e beleza aos seus ambientes.',
  },
  {
    title: 'Especialistas em Tintas Automotivas',
    text: 'Esmalte sintético, laca, poliuretano e poliéster para resultados profissionais.',
  },
  {
    title: 'Soluções Industriais Completas',
    text: 'Tintas epóxi e poliuretano para aplicações industriais exigentes.',
  },
  {
    title: 'Tudo para Seu Projeto',
    text: 'Massa corrida, seladores, rolos, pincéis, lixas, diluentes e muito mais.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-4">
            Sobre Nós
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Qualidade e Tradição que <span className="text-blue-600">Você Pode Confiar</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fundada em 1998, a Caramurú Tintas nasceu da tradição de uma empresa pioneira no segmento
            de tintas em Salgueiro-PE. Com quase 30 anos de experiência, nos consolidamos como
            referência em qualidade, variedade e atendimento especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Por que escolher a Caramurú Tintas?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">{reason.title}</h4>
                    <p className="text-blue-100 text-sm">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
