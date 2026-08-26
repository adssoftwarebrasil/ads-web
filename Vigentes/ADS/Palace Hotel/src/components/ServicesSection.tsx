import { useState } from 'react';
import { Bed, Coffee, Building2, WashingMachine, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [imageIndex, setImageIndex] = useState({});

  const services = [
    {
      icon: Bed,
      title: 'Acomodações',
      description: 'Apartamentos climatizados, higienizados, com TV a cabo e Wi-Fi. Conforto e qualidade para sua estadia em Altamira, seja a negócios ou turismo.',
      features: ['Central de Ar', 'TV a Cabo', 'Wi-Fi Incluso'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F9.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F1.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F2.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F3.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F4.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F5.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F6.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F7.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F8.jpg'
      ]
    },
    {
      icon: Coffee,
      title: 'Café da Manhã',
      description: 'Inicie o dia com energia com nosso café da manhã completo. Uma refeição caprichada para preparar você para o dia em Altamira.',
      features: ['Buffet Variado', 'Incluso na Diária', 'Todos os Dias'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F1.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F2.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F3.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F4.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F5.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F6.jpg'
      ]
    },
    {
      icon: Building2,
      title: 'Auditório & Eventos',
      description: 'Espaços versáteis para conferências, reuniões de negócios, treinamentos e eventos corporativos. Infraestrutura completa para o seu evento.',
      features: ['Auditório Equipado', 'Sala de Reunião', 'Treinamentos'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FAuditorio%2F1.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FAuditorio%2F2.jpeg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FAuditorio%2F3.jpg'
      ]
    },
    {
      icon: WashingMachine,
      title: 'Recepção & Estrutura',
      description: 'Recepção acolhedora, câmeras de segurança em todas as áreas comuns, garagem exclusiva e privativa. Tudo para sua comodidade e tranquilidade.',
      features: ['Recepção 24h', 'Garagem Privativa', 'Câmeras de Segurança'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FRecepcao%2F1.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FRecepcao%2F2.jpg',
        'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FRecepcao%2F3.jpg'
      ]
    }
  ];

  const nextImage = (serviceIdx, e) => {
    e.stopPropagation();
    setImageIndex(prev => ({
      ...prev,
      [serviceIdx]: ((prev[serviceIdx] || 0) + 1) % services[serviceIdx].images.length
    }));
  };

  const prevImage = (serviceIdx, e) => {
    e.stopPropagation();
    setImageIndex(prev => ({
      ...prev,
      [serviceIdx]: ((prev[serviceIdx] || 0) - 1 + services[serviceIdx].images.length) % services[serviceIdx].images.length
    }));
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4 tracking-wide">
            EXPERIÊNCIA COMPLETA
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Serviços & Comodidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa para uma estadia excepcional em Altamira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const currentImageIndex = imageIndex[index] || 0;
            const ServiceIcon = service.icon;

            return (
              <div
                key={index}
                onClick={() => setActiveService(index)}
                className={`relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  activeService === index
                    ? 'shadow-2xl ring-4 ring-blue-500 ring-opacity-50 scale-105'
                    : 'shadow-lg hover:shadow-xl hover:scale-102'
                }`}
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={service.images[currentImageIndex]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {service.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => prevImage(index, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                      >
                        <ChevronLeft size={20} className="text-gray-800" />
                      </button>
                      <button
                        onClick={(e) => nextImage(index, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                      >
                        <ChevronRight size={20} className="text-gray-800" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {service.images.map((_, imgIdx) => (
                          <div
                            key={imgIdx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              imgIdx === currentImageIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 w-1.5'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <ServiceIcon className="text-blue-600" size={24} />
                  </div>

                  {activeService === index && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      SELECIONADO
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`h-1 transition-all duration-500 ${
                  activeService === index ? 'bg-blue-600' : 'bg-gray-200'
                }`}></div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-96 lg:h-auto">
              <img
                src={services[activeService].images[imageIndex[activeService] || 0]}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent lg:block hidden"></div>
            </div>

            <div className="p-12 flex flex-col justify-center text-white">
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const ActiveIcon = services[activeService].icon;
                  return <ActiveIcon size={40} className="text-blue-300" />;
                })()}
                <h3 className="text-4xl font-bold">{services[activeService].title}</h3>
              </div>

              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                {services[activeService].description}
              </p>

              <div className="space-y-3">
                {services[activeService].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-50">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveService(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeService === idx ? 'bg-white w-12' : 'bg-white/30 w-8 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Reserve Sua Estadia
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
