const images = [
  'https://storage.lucasmendes.dev/site-sp/force%2Fbridge-construction-site.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Fcrane-on-barge-in-water.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Fconstruction-site-works.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Fcrane-assembling-site.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Fcrane-lifting-heavy-load.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Fcrane-transport-vehicle.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Fcrane-transportation.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2FImagem%20do%20WhatsApp%20de%202025-10-22%20a%CC%80%28s%29%2013.14.26_4224309d.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2FIMG-20251022-WA0017.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2FIMG-20251022-WA0018.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2FIMG-20251022-WA0020.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2FIMG-20251022-WA0021.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Flarge-vehicle-transport.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Ftruck-on-deck.jpg',
  'https://storage.lucasmendes.dev/site-sp/force%2Fconstruction-site-crane.jpg',
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-force-blue text-center mb-4">
          Nossa Frota em Ação
        </h2>
        <p className="text-xl text-center text-force-gray mb-12">
          Confira nossos equipamentos operando em projetos reais em Belém e região
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={src}
                alt="Equipamento Force Locações em operação"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-force-blue opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
