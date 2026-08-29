const services = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/servicos/Florais%20de%20Bach.webp',
    title: 'Florais de Bach',
    text: 'Equilíbrio emocional através da natureza.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/servicos/Dermatologia.webp',
    title: 'Dermatologia',
    text: 'Tratamentos personalizados para sua pele.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/servicos/Suplementos%20Naturais.webp',
    title: 'Suplementos Naturais',
    text: 'Complementos para sua saúde e bem-estar.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/servicos/Fitotera%CC%81picos.webp',
    title: 'Fitoterápicos',
    text: 'Tratamentos com ervas e plantas medicinais.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/servicos/Produtos%20Cosme%CC%81ticos.webp',
    title: 'Produtos Cosméticos',
    text: 'Fórmulas para cuidados com a pele.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/servicos/Medicamentos%20Alopa%CC%81ticos.webp',
    title: 'Medicamentos Alopáticos',
    text: 'Fórmulas sob medida para cada paciente.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[rgb(130,116,187)]/10 rounded-full mb-6">
            <span className="text-[rgb(130,116,187)] font-semibold text-sm uppercase tracking-wide">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Descubra Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Na Pharma Floris, oferecemos uma ampla gama de serviços de
            manipulação para atender suas necessidades específicas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(88,171,218)] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.text}</p>
              </div>
              <div className="px-6 pb-6">
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[rgb(88,171,218)] to-[rgb(130,116,187)] transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
