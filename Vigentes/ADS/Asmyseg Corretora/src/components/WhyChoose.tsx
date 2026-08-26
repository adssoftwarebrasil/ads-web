const reasons = [
  {
    title: 'Experiência Comprovada',
    description:
      'Mais de 10 anos de atuação no mercado de seguros, atendendo com excelência.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Quem%20somos1.webp',
  },
  {
    title: 'Rede de Proteção Ampla',
    description:
      'Oferecemos uma variedade de seguros de renomadas seguradoras do Brasil.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Procuramos%20sempre%20as%20melhores%20ofertas%20.webp',
  },
  {
    title: 'Atendimento Personalizado',
    description:
      'Valorizamos o contato pessoal para compreender suas necessidades de forma completa.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Valorizamos%20o%20contato.webp',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-[#256C8F] font-semibold tracking-wide uppercase mb-2">
            Por que contratar?
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por Que Escolher a Asmyseg?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entenda os motivos para confiar na Asmyseg como sua corretora de
            seguros.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
