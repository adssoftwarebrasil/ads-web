const services = [
  {
    title: 'Troca de Óleo de Câmbio Automático',
    description: 'Preserva a vida útil do sistema de transmissão e evita problemas de performance.',
    image: 'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2FTroca%20de%20o%CC%81leo%20de%20ca%CC%82mbio%20automa%CC%81tico.webp',
    delay: '0ms',
  },
  {
    title: 'Lavagem Automotiva e Polimento',
    description: 'Prolonga a vida útil do carro, preservando a integridade da pintura, evitando corrosão e desgaste, mantendo o valor de revenda.',
    image: 'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2FLavagem%20automotiva%20e%20polimento.webp',
    delay: '100ms',
  },
  {
    title: 'Revisão Mecânica',
    description: 'Mantém o carro seguro e em bom estado de funcionamento. Evita problemas inesperados e comprometimento da segurança ao dirigir.',
    image: 'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2FRevisa%CC%83o%20meca%CC%82nica.webp',
    delay: '200ms',
  },
  {
    title: 'Restauração de Faróis',
    description: 'Restaura a transparência e o brilho dos faróis, devolvendo-lhes o aspecto original. Devolve o brilho e a proteção de fábrica.',
    image: 'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2FRestaurac%CC%A7o%CC%83es%20de%20Faro%CC%81is.webp',
    delay: '300ms',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-black py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 transition-all duration-800 opacity-100 translate-y-0">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Nossos serviços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Serviços Especializados para o Seu Carro
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Atendemos desde lavagem e polimento à troca de óleo de câmbio com equipamentos modernos
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1A1A1A] border border-gold/30 rounded-2xl p-8 hover:border-gold hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 group opacity-100 translate-y-0"
              style={{ transitionDelay: service.delay }}
            >
              <div className="overflow-hidden rounded-xl mb-6 aspect-video">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/556198423838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-black font-semibold text-lg px-10 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-gold/30"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
