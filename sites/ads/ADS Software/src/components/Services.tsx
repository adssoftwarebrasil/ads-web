import { Sparkles, Search, TrendingUp, Code, CheckCircle2, ArrowRight, type LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
  barGradient: string;
  hoverBg: string;
  iconGradient: string;
  btnGradient: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    Icon: Search,
    title: 'Impulsionamento no Google',
    desc: 'Google Ads gerenciado por especialistas certificados. Posicionamento estratégico que coloca sua empresa no topo das pesquisas.',
    features: ['Campanhas otimizadas', 'ROI comprovado', 'Análise contínua', 'Relatórios detalhados'],
    barGradient: 'from-[#4286f5] to-[#1264C6]',
    hoverBg: 'from-blue-50 to-blue-100/50',
    iconGradient: 'from-[#4286f5] to-[#1264C6]',
    btnGradient: 'from-[#4286f5] to-[#1264C6]',
    popular: true,
  },
  {
    Icon: TrendingUp,
    title: 'Marketing Digital',
    desc: 'Estratégias personalizadas para cada negócio. Gestão profissional de campanhas em Meta Ads com foco em resultados.',
    features: ['Segmentação precisa', 'Conversões otimizadas', 'Acompanhamento 24/7'],
    barGradient: 'from-[#ea4235] to-[#f9bb04]',
    hoverBg: 'from-red-50 to-orange-100/50',
    iconGradient: 'from-[#ea4235] to-[#f9bb04]',
    btnGradient: 'from-[#ea4235] to-[#f9bb04]',
  },
  {
    Icon: Code,
    title: 'Desenvolvimento de Software',
    desc: 'Soluções tecnológicas personalizadas para seu negócio. Desenvolvimento com as melhores práticas e tecnologias do mercado.',
    features: ['Soluções sob medida', 'Tecnologia de ponta', 'Integração completa', 'Suporte especializado'],
    barGradient: 'from-[#33a753] to-[#1264C6]',
    hoverBg: 'from-green-50 to-blue-100/50',
    iconGradient: 'from-[#33a753] to-[#1264C6]',
    btnGradient: 'from-[#33a753] to-[#1264C6]',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#EBFFF4]/30 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Soluções Completas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#19355E] mb-6 leading-tight">
            Serviços que Transformam
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4286f5] to-[#33a753] mt-3 pb-2">
              Seu Negócio Digital
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções completas e integradas para fazer sua empresa crescer, se destacar no mercado e conquistar mais clientes
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Popular
                  </span>
                </div>
              )}
              <div className={`h-2 bg-gradient-to-r ${service.barGradient}`}></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="relative p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.iconGradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <service.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#19355E] mb-4 group-hover:text-[#1264C6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#33a753] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r ${service.btnGradient} text-white font-semibold hover:shadow-lg transition-all duration-300 group/btn`}
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#19355E] to-[#1264C6] text-white px-8 py-6 rounded-2xl shadow-2xl">
            <div className="text-left">
              <p className="font-semibold text-lg mb-1">Não encontrou o que procura?</p>
              <p className="text-blue-100 text-sm">Criamos soluções personalizadas para cada negócio</p>
            </div>
            <button className="bg-white text-[#1264C6] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl">
              Fale com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
