interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Treinamentos e Capacitações',
    description:
      'Programas especializados para profissionais da saúde em terapia ventilatória.',
    image:
      'https://storage.lucasmendes.dev/site-sp/inspirar%2FTreinamentos%20e%20Capacitac%CC%A7o%CC%83es.png',
  },
  {
    title: 'Engenharia Clínica',
    description:
      'Manutenção preventiva e corretiva de equipamentos hospitalares.',
    image:
      'https://storage.lucasmendes.dev/site-sp/inspirar%2FEngenharia%20Cli%CC%81nica.jpg',
  },
  {
    title: 'Concentradores de Oxigênio',
    description: 'Equipamentos de alta qualidade para oxigenoterapia.',
    image:
      'https://storage.lucasmendes.dev/site-sp/inspirar%2FVenda%20de%20Concentradores%20de%20Oxige%CC%82nio.png',
  },
  {
    title: 'Fisioterapia Cardiorrespiratória',
    description: 'Tratamento especializado para reabilitação respiratória.',
    image:
      'https://storage.lucasmendes.dev/site-sp/inspirar%2FFisioterapia%20Cardiorrespirato%CC%81ria.png',
  },
  {
    title: 'Polissonografia',
    description: 'Exame completo para diagnóstico de distúrbios do sono.',
    image:
      'https://storage.lucasmendes.dev/site-sp/inspirar%2FPolissonografia.jpg',
  },
  {
    title: 'Máscaras de CPAP',
    description: 'Máscaras confortáveis para tratamento de apneia do sono.',
    image:
      'https://storage.lucasmendes.dev/site-sp/inspirar%2FVenda%20de%20Ma%CC%81scaras%20de%20CPAP.png',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 bg-blue-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-50 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Soluções{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              completas
            </span>{' '}
            em saúde respiratória
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do diagnóstico ao tratamento, oferecemos tudo que você precisa
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold group/link"
                >
                  <span>Saiba Mais</span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
