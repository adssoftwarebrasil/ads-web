const advantages = [
  {
    number: '01',
    title: 'Profissionais Experientes',
    description: 'Especialistas com mais de 30 anos de atuação',
    image: 'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2FProfissionais%20experientes.webp',
    delay: '0ms',
  },
  {
    number: '02',
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos modernos para serviços de precisão',
    image: 'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2FTecnologia%20de%20ponta.webp',
    delay: '150ms',
  },
  {
    number: '03',
    title: 'Atendimento Ágil',
    description: 'Serviço eficiente para otimizar seu tempo',
    image: 'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2FAtendimento%20a%CC%81gil.webp',
    delay: '300ms',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 transition-all duration-800 opacity-100 translate-y-0">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Vantagens</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Qualidade e Confiança no Atendimento Automotivo
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-gold hover:shadow-xl transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: adv.delay }}
            >
              <div className="absolute top-0 left-8 text-gold text-9xl font-black opacity-10 leading-none select-none">
                {adv.number}
              </div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img src={adv.image} alt={adv.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-gray-900 text-2xl font-semibold mb-4 text-center">{adv.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed text-center">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/556198423838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-black font-semibold text-lg px-10 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
