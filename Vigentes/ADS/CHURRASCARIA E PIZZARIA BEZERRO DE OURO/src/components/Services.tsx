import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Reservas Online',
    description: 'Reserve sua mesa facilmente pelo WhatsApp',
    image:
      'https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FReservas%20Online.jpg',
    buttonLabel: 'Reservar',
    href: 'https://wa.me/556733265463?text=Olá! Gostaria de fazer uma reserva.',
  },
  {
    title: 'Eventos e Festas',
    description: 'Realizamos eventos personalizados',
    image:
      'https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FEventos%20e%20Festas.jpg',
    buttonLabel: 'Solicitar Orçamento',
    href: 'https://wa.me/556733265463?text=Olá! Gostaria de solicitar um orçamento para evento.',
  },
  {
    title: 'Ambiente Rústico',
    description: 'Espaço acolhedor com estrutura amadeirada',
    image:
      'https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FAmbiente%20R%C3%BAstico.jpg',
    buttonLabel: 'Conhecer',
    href: 'https://wa.me/556733265463',
  },
  {
    title: 'Atendimento Personalizado',
    description: 'Equipe pronta para atender suas necessidades',
    image:
      'https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FAtendimento%20Personalizado.webp',
    buttonLabel: 'Falar Conosco',
    href: 'https://wa.me/556733265463',
  },
  {
    title: 'Pratos Quentes',
    description: 'Servidos à mesa, quentes e saborosos',
    image:
      'https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FPratos%20Quentes.jpg',
    buttonLabel: 'Ver Menu',
    href: 'https://wa.me/556733265463?text=Olá! Gostaria de conhecer o menu.',
  },
  {
    title: 'Buffet de Saladas',
    description: 'Mais de 20 variedades de saladas frescas',
    image:
      'https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FBuffet%20de%20Saladas.jpg',
    buttonLabel: 'Conferir',
    href: 'https://wa.me/556733265463',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(31,29,30)] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossos serviços e produtos. Oferecemos um rodízio de churrasco
            com as melhores carnes e um buffet de saladas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 opacity-100 translate-y-0">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[rgb(31,29,30)] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[rgb(180,137,27)] text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300"
                >
                  <span>{service.buttonLabel}</span>
                  <ArrowRight
                    width={18}
                    height={18}
                    className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
