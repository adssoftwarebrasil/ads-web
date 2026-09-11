import { MapPin, Building2, CheckCircle } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      title: 'Órion Business & Health Complex',
      subtitle: 'Hospital Einstein Goiânia',
      location: 'Av. Portugal, 1148 - St. Marista, Goiânia - GO',
      description:
        'Complexo médico-empresarial de alto padrão que exigiu terraplanagem de precisão e movimentação de grandes volumes de terra. Projeto executado dentro dos prazos estabelecidos, garantindo base sólida para uma das estruturas mais importantes da saúde em Goiás.',
      highlights: [
        'Terraplanagem de área extensa',
        'Escavações profundas para fundações',
        'Movimentação de mais de 10.000m³ de terra',
        'Prazo cumprido rigorosamente',
      ],
      image: 'https://storage.lucasmendes.dev/site-sp/solo-eng%2Fconstrucao-escavadeira-trator-terra.webp',
    },
    {
      title: 'WTC - World Trade Center',
      subtitle: 'Goiânia',
      location: 'Av. D, Av. 85 - St. Marista, Goiânia - GO',
      description:
        'Empreendimento corporativo de padrão internacional que demandou serviços especializados de engenharia de solos. Nossa equipe foi responsável pela preparação completa do terreno, garantindo estabilidade para este marco arquitetônico da cidade.',
      highlights: [
        'Preparação de terreno complexo',
        'Serviços de aterro compactado',
        'Limpeza e nivelamento de precisão',
        'Suporte técnico especializado',
      ],
      image: 'https://storage.lucasmendes.dev/site-sp/solo-eng%2Fconstrucao-maquinas-obra.webp',
    },
  ];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#cec643]/10 rounded-full">
            <span className="text-[#6c6d71] font-semibold text-sm uppercase tracking-wide">
              Cases de Sucesso
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6c6d71] mb-6 leading-tight">
            Projetos que Transformaram{' '}
            <span className="text-[#cec643]">Goiânia</span>
          </h2>

          <p className="text-lg text-gray-700">
            Temos orgulho de ter participado de alguns dos empreendimentos mais
            importantes da região, entregando excelência em cada etapa.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {cases.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6c6d71]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center mb-4">
                  <Building2 className="text-[#cec643] mr-2" size={28} />
                  <span className="text-[#cec643] font-semibold text-sm uppercase tracking-wide">
                    Projeto Destaque
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#6c6d71] mb-2">
                  {project.title}
                </h3>
                <p className="text-xl text-[#cec643] font-semibold mb-4">
                  {project.subtitle}
                </p>

                <div className="flex items-start mb-6">
                  <MapPin className="text-gray-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-600">{project.location}</p>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle
                        className="text-[#cec643] mr-3 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-[#6c6d71] to-[#6c6d71]/90 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Seu Projeto Pode Ser o Próximo Case de Sucesso
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar seu empreendimento
            em realidade com qualidade e eficiência comprovadas.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#cec643] text-[#6c6d71] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#b8b43a] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Fale com Nossos Especialistas
          </a>
        </div>
      </div>
    </section>
  );
}
