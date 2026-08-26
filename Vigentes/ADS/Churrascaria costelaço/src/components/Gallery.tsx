interface GalleryItem {
  src: string;
  alt: string;
}

const items: GalleryItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/costelaco%2Fcarne-grelhada.webp',
    alt: 'Carne grelhada no ponto perfeito',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/costelaco%2Fchurrasco-batata-frita.webp',
    alt: 'Churrasco com batata frita',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/costelaco%2Fchurrasco-fogo-lenha.webp',
    alt: 'Churrasco no fogo a lenha',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/costelaco%2Fmesa-posta-restaurante.webp',
    alt: 'Mesa posta no restaurante',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/costelaco%2Fcoquetel-morango-gelo.webp',
    alt: 'Coquetel de morango',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/costelaco%2Fespaco-infantil-colorido.webp',
    alt: 'Espaço infantil colorido',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#25262A] tracking-tight">
              Nossa <span className="text-[#F7BC33]">Galeria</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Capturamos a essência de nossos pratos e o ambiente que preparamos
              para você. Clique em uma foto para ampliar.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
              6 Momentos Registrados
            </span>
          </div>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item) => (
            <div
              key={item.alt}
              className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl bg-gray-200 transition-all duration-500 hover:shadow-2xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
