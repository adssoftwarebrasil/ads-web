import { ArrowRight } from 'lucide-react';

const services = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/nossos-servicos-venda-de-baterias.webp',
    title: 'Venda de Baterias',
    text: 'Oferecemos baterias das melhores marcas do mercado com garantia e qualidade superior.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/nossos-servicos-testes-de-baterias.webp',
    title: 'Teste de Baterias',
    text: 'Testamos a saúde da sua bateria com equipamentos de precisão para diagnóstico completo.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/nossos-servicos-recarga-de-baterias.webp',
    title: 'Recarga de Baterias',
    text: 'Realizamos recargas eficientes de baterias automotivas com tecnologia avançada.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/nossos-servicos-revis%C3%A3o-eletrica.webp',
    title: 'Revisão Elétrica',
    text: 'Revisões completas em sistemas elétricos de veículos para máxima segurança.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/nossos-servicos-vendas-de-alternadores.webp',
    title: 'Venda de Alternadores',
    text: 'Vendemos alternadores de alta qualidade para manter seu carro sempre funcionando.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/nossos-servicos-venda-de-lubrificantes.webp',
    title: 'Venda de Lubrificantes',
    text: 'Oferecemos lubrificantes premium para todas as necessidades do seu veículo.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[rgb(233,155,29)] font-bold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-2 mb-4">
            Descubra nossos serviços
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços para atender suas necessidades
            automotivas, desde a venda de baterias até serviços de manutenção
            elétrica.
          </p>
          <div className="w-20 h-1 bg-[rgb(233,155,29)] rounded-full mx-auto mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.text}
                </p>
                <a
                  href="http://wa.me/556384458064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[rgb(233,155,29)] font-semibold hover:text-[rgb(213,135,9)] transition-colors duration-300 group/link"
                >
                  Fale Conosco
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/556384458064"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(233,155,29)] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
