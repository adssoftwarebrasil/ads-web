interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/climatec%2Fsofa-ar-condicionado-cortina.webp',
    alt: 'Ambiente climatizado com cortina',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/climatec%2Far-condicionado-branco.webp',
    alt: 'Ar condicionado moderno branco',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/climatec%2Fcontrole-remoto-ar-condicionado.webp',
    alt: 'Controle remoto de ar condicionado',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Galeria
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Ambientes Climatizados
          </h2>
          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto scroll-reveal">
          {images.map((image) => (
            <div
              key={image.src}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
