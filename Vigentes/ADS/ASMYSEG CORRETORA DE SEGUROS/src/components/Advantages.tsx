const quoteUrl =
  'https://api.whatsapp.com/send?phone=553186610041&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

const advantages = [
  {
    number: '01',
    title: 'Transparência e Confiança',
    description:
      'Atuamos com ética, garantindo total transparência nas informações.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Transpare%CC%82ncia%20e%20Confianc%CC%A7a.webp',
  },
  {
    number: '02',
    title: 'Atendimento Especializado',
    description:
      'Nossa equipe é treinada para entender suas necessidades específicas.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Atendimento%20Especializado.webp',
  },
  {
    number: '03',
    title: 'Flexibilidade nas Coberturas',
    description:
      'Oferecemos opções de seguros personalizadas para cada cliente.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Flexibilidade%20nas%20Coberturas.webp',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-[#256C8F] font-semibold tracking-wide uppercase mb-2">
            Vantagens
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vantagens de Escolher a Asmyseg
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra os benefícios de contar com a Asmyseg para suas
            necessidades de seguro.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="text-6xl font-bold text-white opacity-90">
                    {adv.number}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {adv.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FA0000] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Faça aqui sua cotação
          </a>
        </div>
      </div>
    </section>
  );
}
