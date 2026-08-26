import { Scissors, Truck, Headphones } from 'lucide-react';

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Scissors,
      title: 'Corte e Dobra',
      description: 'Corte sob medida conforme projeto estrutural. Perda zero de material, agilidade e precisão milimétrica.'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Frota própria atendendo 24 cidades da região metropolitana. Pontualidade garantida.'
    },
    {
      icon: Headphones,
      title: 'Assessoria Técnica',
      description: 'Equipe especializada para calcular quantidades e orientar na escolha ideal de produtos.'
    }
  ];

  return (
    <section className="py-20 bg-[rgb(63,63,152)] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Serviços Especializados
          </h2>
          <p className="text-xl text-white/90">
            Muito mais que fornecimento de materiais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-full">
                    <Icon size={40} className="text-[rgb(63,63,152)]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('contato')}
            className="bg-white text-[rgb(63,63,152)] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Fale com Nossa Equipe
          </button>
        </div>
      </div>
    </section>
  );
}
