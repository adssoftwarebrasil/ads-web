import { Battery, Wrench, Settings, Activity, Bike, Star } from 'lucide-react';

export function Services() {
  const services = [
    {
      image: 'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-conectando-bateria-nova.jpg',
      icon: Battery,
      title: 'Troca de Baterias Automotivas',
      description: 'Instalação rápida de baterias Moura, Heliar, Pioneiro e Bosch',
      brands: ['Moura', 'Heliar', 'Pioneiro', 'Bosch'],
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fcolocando-radiador-no-lugar.jpg',
      icon: Settings,
      title: 'Instalação de Radiadores Novos',
      description: 'Troca e instalação de radiadores originais ou compatíveis',
      brands: [],
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-radiador.jpg',
      icon: Wrench,
      title: 'Manutenção de Radiadores',
      description: 'Reparo e revisão para evitar superaquecimento do motor',
      brands: [],
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-testando-bateria.jpg',
      icon: Activity,
      title: 'Carga e Teste de Baterias',
      description: 'Verificação e recarga para prolongar a vida útil da bateria',
      brands: [],
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-bateria.jpg',
      icon: Bike,
      title: 'Baterias para Moto',
      description: 'Baterias duráveis e eficientes para motos',
      brands: [],
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-bateria-moura.webp',
      icon: Star,
      title: 'Baterias para Diversos Veículos',
      description: 'Carros, motos, geradores e muito mais',
      brands: [],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-[#FF6B00] font-bold tracking-wide uppercase text-sm mb-4">
            NOSSOS SERVIÇOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
            Conheça Nossos Serviços de Qualidade
          </h2>
          <p className="text-[#334155] text-lg max-w-3xl mx-auto">
            Oferecemos uma ampla gama de baterias e serviços especializados para atender suas
            necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-t-4 hover:border-[#FF6B00] transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <service.icon className="w-6 h-6 text-[#FF6B00]" />
                  <h3 className="text-xl font-bold text-[#1E3A8A]">{service.title}</h3>
                </div>
                <p className="text-[#334155] mb-4">{service.description}</p>
                {service.brands.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.brands.map((brand, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F3F4F6] text-[#1E3A8A] px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href="https://wa.me/5592981059681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#FF6B00] text-white text-center py-3 rounded-lg hover:bg-[#1E3A8A] transition-all font-semibold"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
