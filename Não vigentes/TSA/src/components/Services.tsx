import { ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    title: 'Veículos Pesados',
    description:
      'Especialista em manutenção de turbinas e sistema de direção para linha diesel pesada e máquinas.',
    image:
      'https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fatualizadas%2Fveiculos-pesados.webp',
    alt: 'Veículos Pesados',
  },
  {
    title: 'Diagnóstico Completo',
    description:
      'Diagnóstico de Sistemas de Direção com Certificação Bosch. Tecnologia de ponta e precisão técnica garantida pelo padrão de qualidade da indústria Bosch.',
    image:
      'https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fatualizadas%2Fdiagnostico-completo.webp',
    alt: 'Diagnóstico Completo',
  },
  {
    title: 'Venda de Turbos Novos',
    description:
      'Catálogo completo de turbocompressores novos com garantia e diversas aplicações veiculares.',
    image:
      'https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fatualizadas%2Fvenda-de-turbos-novos.webp',
    alt: 'Venda de Turbos Novos',
  },
  {
    title: 'Mão de Obra Qualificada',
    description:
      'Equipe técnica certificada para realizar manutenções preventivas e corretivas de alto padrão.',
    image:
      'https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fatualizadas%2Fmao-de-obra-qualificada.webp',
    alt: 'Mão de Obra Qualificada',
  },
  {
    title: 'Recuperação de Turbinas',
    description:
      'Restauração completa de turbinas utilizando peças originais para garantir performance de nova.',
    image:
      'https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fatualizadas%2Frecuperacao-de-turbina.webp',
    alt: 'Recuperação de Turbinas',
  },
  {
    title: 'Peças Bosch',
    description:
      'Distribuidor autorizado de peças originais Bosch para sistemas de direção hidráulica.',
    image:
      'https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fatualizadas%2Fpecas-bosh.webp',
    alt: 'Peças Bosch',
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[rgb(163,24,23)]/10 rounded-full mb-4">
            <p className="text-[rgb(163,24,23)] font-semibold text-sm">O QUE FAZEMOS</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(4,26,58)] mb-6">
            Soluções Automotivas Completas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combinamos tecnologia de ponta e peças originais para entregar o melhor
            serviço para seu veículo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
            >
              <div className="relative h-80 md:h-[400px] overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[rgb(4,26,58)] mb-3 group-hover:text-[rgb(163,24,23)] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg flex-grow">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-[rgb(163,24,23)] font-semibold group-hover:gap-4 transition-all duration-200 mt-auto">
                  Saiba Mais
                  <ArrowRight
                    width={20}
                    height={20}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button
            onClick={() => scrollToSection('location')}
            className="bg-[rgb(163,24,23)] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[rgb(143,20,20)] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
          >
            Solicitar Orçamento Personalizado
            <ArrowRight width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
