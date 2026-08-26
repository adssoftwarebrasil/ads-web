import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Análise de Solo',
      description:
        'Diagnóstico preciso e completo que identifica as necessidades nutricionais e físicas do solo, garantindo decisões assertivas de manejo e maximizando o potencial produtivo de cada área.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FDoisFazendeirosAnalizandoSolo.jpg',
      icon: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FIconeSolo.png',
    },
    {
      title: 'Nutrição e Manejo de Culturas',
      description:
        'Recomendações técnicas personalizadas para adubação balanceada, manejo fitossanitário eficiente e controle estratégico de pragas, sempre com foco em performance e sustentabilidade.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FPessoaEstudandoPlantaComTablet.jpg',
      icon: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FIconePlantaDentroDeUmaGotaDeAgua.png',
    },
    {
      title: 'Análise Biológica',
      description:
        'Avaliação detalhada da microbiota do solo para promover equilíbrio biológico natural, maior absorção de nutrientes e produtividade sustentável a longo prazo.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FAmbienteControladoDePlantioEEstudoDePlantas.jpg',
      icon: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FIconeSolo.png',
    },
    {
      title: 'Distribuição de Sementes e Insumos',
      description:
        'Sementes premium de soja, milho, sorgo e brachiaria, além de biológicos avançados, inoculantes de alta eficiência e adjuvantes de desempenho superior para cada fase do cultivo.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2Fsoja-milho-graos-das-duas-culturas-em-close-na-palma-da-mao.webp',
      icon: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FIconeMilho.png',
    },
    {
      title: 'Análise Foliar',
      description:
        'Exame laboratorial especializado que identifica com precisão os níveis de nutrientes presentes nas folhas, permitindo ajustes rápidos e eficazes no manejo nutricional.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FEstudandoPlantaComLupa.webp',
      icon: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FIconePlantaDentroDeUmaGotaDeAgua.png',
    },
    {
      title: 'Consultoria e Suporte Técnico',
      description:
        'Equipe especializada e altamente qualificada dedicada a oferecer suporte contínuo, fortalecendo o relacionamento estratégico entre produtor, fornecedor e campo.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FTecnologiaTabletNoMeioDaPlantacao.jpg',
      icon: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FIconeSolo.png',
    },
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-[#fdaf2a] font-bold text-sm uppercase tracking-wider bg-[#fdaf2a]/10 px-4 py-2 rounded-full inline-block mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12441f] mb-6 leading-tight">
            Soluções Completas para o Campo
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Maximize produtividade, sustentabilidade e rentabilidade com nosso portfólio integrado de serviços técnicos e agronômicos de alta performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12441f] via-[#12441f]/50 to-transparent opacity-60"></div>
                
                {/* Ícone com fundo verde escuro para contraste */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-[#0d3317] to-[#12441f] rounded-xl p-3 shadow-xl border-2 border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.icon} 
                    alt="" 
                    className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" 
                  />
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-[#12441f] mb-3 group-hover:text-[#fdaf2a] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <a
                  href="https://wa.me/5567999564186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#12441f] font-semibold hover:text-[#fdaf2a] transition-colors duration-300 group/link"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <a
            href="https://wa.me/5567999564186"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#12441f] to-[#0d3317] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(18,68,31,0.4)] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>Solicite um Orçamento</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}