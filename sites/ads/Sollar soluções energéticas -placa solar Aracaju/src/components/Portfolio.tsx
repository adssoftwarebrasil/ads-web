const images = [
  'https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Fpaineis-solares-telhado.webp',
  'https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Fpaineis-solares-telhado2.webp',
  'https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Fpaineis-solares-telhado5.webp',
  'https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Fpaineis-solares-telhado8.webp',
  'https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Fpainel-solar-telhados9.webp',
  'https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Ftelhado-paineis-solares7.webp',
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(40,68,126)] mb-4">Projetos Realizados</h2>
          <div className="w-20 h-1 bg-[rgb(237,185,47)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de 1.000 projetos que comprovam nossa excelência e compromisso com a qualidade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={src}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(40,68,126)]/90 via-[rgb(40,68,126)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold text-white"></h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
