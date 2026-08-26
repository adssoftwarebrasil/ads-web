const steps = [
  {
    number: '1',
    icon: 'https://storage.lucasmendes.dev/site-sp/agroplantec%2FProduc%CC%A7a%CC%83o.svg',
    title: 'Produção',
    text: 'Contamos com fatores como abundância de água, tecnologia avançada nas lavouras, desenvolvimento de variedades mais produtivas, diversidade de matérias-primas, incentivos fiscais e localização estratégica para escoamento da produção.',
    delay: 0,
  },
  {
    number: '2',
    icon: 'https://storage.lucasmendes.dev/site-sp/agroplantec%2FLogi%CC%81stica.svg',
    title: 'Logística',
    text: 'Contamos com uma frota própria de veículos, devidamente equipados para garantir a entrega dos pedidos com qualidade e pontualidade. Oferecemos um atendimento exclusivo, sempre buscando superar as necessidades dos nossos clientes.',
    delay: 150,
  },
  {
    number: '3',
    icon: 'https://storage.lucasmendes.dev/site-sp/agroplantec%2FBeneficiamento.svg',
    title: 'Beneficiamento',
    text: 'Os produtos Agro Plantec passam por um rigoroso processo de seleção, iniciando-se desde a colheita nos campos. Com um packing-house altamente equipado, realizamos a seleção por cor e tamanho, embalando os produtos em caixas de papelão.',
    delay: 300,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[rgb(138,154,39)]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[rgb(138,154,39)]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[rgb(138,154,39)]/10 text-[rgb(138,154,39)] text-sm font-bold uppercase tracking-wider rounded-full">
              Como Trabalhamos
            </span>
          </div>
          <h2 className="text-[rgb(29,29,27)] text-4xl lg:text-6xl font-bold mb-6">Nosso Processo</h2>
          <p className="text-gray-600 text-xl lg:text-2xl max-w-3xl mx-auto">
            Do Campo à Mesa com Compromisso, Qualidade e Eficiência
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-white p-10 rounded-3xl shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 opacity-0 translate-y-10"
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[rgb(138,154,39)] to-[rgb(118,134,29)] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-[rgb(138,154,39)]/10 rounded-2xl group-hover:bg-[rgb(138,154,39)]/20 transition-colors">
                    <img src={step.icon} alt={step.title} className="w-16 h-16" />
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[rgb(138,154,39)] to-[rgb(118,134,29)] rounded-full">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-[rgb(29,29,27)] text-2xl lg:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
