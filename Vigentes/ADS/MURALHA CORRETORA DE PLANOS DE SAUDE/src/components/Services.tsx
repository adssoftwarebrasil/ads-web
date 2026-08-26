import { Shield, Users, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Seguros Personalizados',
      description:
        'Oferecemos uma ampla gama de opções de seguros, desde seguros de vida e saúde até seguros patrimoniais e automotivos. Nossos consultores especializados estão preparados para entender suas necessidades e oferecer as melhores soluções para proteger o que é mais valioso para você.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Nossos%20Servic%CC%A7os.jpeg',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description:
        'Nosso compromisso vai além de oferecer seguros. Estamos aqui para proporcionar um atendimento personalizado, estabelecendo uma relação de confiança e transparência com nossos clientes, garantindo que suas necessidades sejam atendidas de forma eficiente e satisfatória.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/hero2-slider-animation-zoom.jpeg',
    },
    {
      icon: Headphones,
      title: 'Consultoria Especializada',
      description:
        'Além de oferecer seguros, nossos consultores estão preparados para fornecer orientação e suporte na escolha das melhores opções de proteção, esclarecendo dúvidas e auxiliando na tomada de decisão.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/hero3-slider-animation-zoom.jpeg',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Descubra os melhores planos e seguros em um só lugar
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
