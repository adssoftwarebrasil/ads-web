import { useState } from 'react';
import { Bed, Users, Dumbbell, Waves, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [imageIndex, setImageIndex] = useState({});

  const services = [
    {
      icon: Bed,
      title: 'Hospedagem Premium',
      description: 'Quartos modernos projetados para seu descanso e produtividade. Ambiente sofisticado com todo conforto que você merece para uma estadia memorável.',
      features: ['Cofre Eletrônico', 'Mesa de Trabalho', 'Decoração Moderna'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/tryp%2Fquartos%2Fquarto-hotel-moderno.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2Fquartos%2Finterior-quarto-moderno-hotel.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2Fquartos%2Fcama-sofa-quarto-hotel.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2Fquartos%2Fmesa-escritorio-hotel.webp'
      ]
    },
    {
      icon: Building2,
      title: 'Recepção & Espaços',
      description: 'Ambientes corporativos elegantes e equipados para reuniões, eventos e seu sucesso profissional em Brasília.',
      features: ['Auditório Moderno', 'Salas de Reunião', 'Espaços Colaborativos'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/tryp%2Frecepcao%2Frecepcao-moderna-hotel.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2FCorredoresEVistasDeDentroDoPredio%2Fcorredor-predio-janela-do-hotel-vista.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2FCorredoresEVistasDeDentroDoPredio%2Fvista-hotel-cidade-janela.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2Frecepcao%2Forquideas-brancas-recepcao-hotel.webp'
      ]
    },
    {
      icon: Dumbbell,
      title: 'Academia Completa',
      description: 'Equipamentos de última geração em ambiente climatizado. Mantenha sua rotina de treinos com toda infraestrutura que você precisa.',
      features: ['Equipamentos Modernos', 'Esteiras Profissionais', 'Ambiente Climatizado'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/tryp%2Facademia%2Facademia-equipamentos-modernos-do-hotel.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2Facademia%2Festeiras-academia-modernas-do-hotel.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2Facademia%2Facademia-equipamentos-coloridos-do-hotel.webp'
      ]
    },
    {
      icon: Waves,
      title: 'Piscina & Lazer',
      description: 'Área de lazer exclusiva com piscina panorâmica e espaço relaxante. O refúgio perfeito após um dia intenso de trabalho.',
      features: ['Piscina Aquecida', 'Espreguiçadeiras', 'Vista Panorâmica'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/tryp%2FareaDeLazerPiscina%2Fpiscina-vista-de-drone-do-hotel.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2FareaDeLazerPiscina%2Fpiscina-cadeiras-espreguicadeiras-do-hotel.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2FareaDeLazerPiscina%2Fpiscina-do-hotel.webp',
        'https://storage.lucasmendes.dev/site-sp/tryp%2FareaDeLazerPiscina%2Fpiscina-espelhada-do-hotel-vista-de-drone.webp'
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4 tracking-wide">
            EXPERIÊNCIA COMPLETA
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Serviços & Comodidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa para uma estadia excepcional em Brasília
          </p>
        </div>

        {/* Services Grid */}
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
                {/* Image Container with Gallery */}
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={service.images[currentImageIndex]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Navigation Arrows */}
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
                      
                      {/* Image Indicators */}
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
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <ServiceIcon className="text-blue-600" size={24} />
                  </div>

                  {/* Active Indicator */}
                  {activeService === index && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      SELECIONADO
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Features */}
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

                {/* Bottom Accent */}
                <div className={`h-1 transition-all duration-500 ${
                  activeService === index ? 'bg-blue-600' : 'bg-gray-200'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Detailed View */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Gallery */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={services[activeService].images[imageIndex[activeService] || 0]}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent lg:block hidden"></div>
            </div>

            {/* Content */}
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

        {/* Call to Action */}
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