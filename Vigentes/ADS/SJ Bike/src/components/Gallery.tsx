const galleryImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sj0bike%2Fbicicledas.jpg',
    alt: 'Produto 1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sj0bike%2Fimgi_14_556867959_18528550306027657_629889377969542009_n.jpg',
    alt: 'Produto 2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sj0bike%2Fimgi_20_544059081_18524047816027657_7349235867555782953_n.jpg',
    alt: 'Produto 3',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sj0bike%2Fimgi_21_538273559_17940028251054892_1655446924876418174_n.jpg',
    alt: 'Produto 4',
  },
];

export default function Gallery() {
  return (
    <div id="produtos" className="bg-white font-sans">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[rgb(253,88,34)]/10 text-[rgb(253,88,34)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MIX DE PRODUTOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Galeria Completa
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-xl h-96"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-700 scale-100"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://wa.me/5571982803566?text=Olá!%20Vi%20essa%20bike%20na%20galeria..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(253,88,34)] text-white px-8 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-lg hover:scale-105"
                  >
                    Eu Quero Essa
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
