interface GalleryItem {
  image: string;
  alt: string;
  wrapperClass: string;
  minHeight: number;
}

const items: GalleryItem[] = [
  {
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Porta WPC em ambiente sofisticado',
    wrapperClass: 'sm:row-span-2',
    minHeight: 400,
  },
  {
    image:
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Porta de alto padrão residencial',
    wrapperClass: '',
    minHeight: 220,
  },
  {
    image:
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interior elegante com porta premium',
    wrapperClass: '',
    minHeight: 220,
  },
  {
    image:
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ambiente moderno com porta WPC',
    wrapperClass: '',
    minHeight: 220,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-[#f8f5f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#DE8F52] font-semibold text-sm uppercase tracking-widest">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#005143] mt-3 mb-4">
            Veja a Beleza em Cada Ambiente
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Portas que transformam espaços em experiências visuais únicas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.alt}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.wrapperClass}`}
              style={{ minHeight: `${item.minHeight}px` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ height: '100%', minHeight: `${item.minHeight}px` }}
              />
              <div className="absolute inset-0 bg-[#005143]/0 group-hover:bg-[#005143]/40 transition-all duration-300 flex items-end">
                <p className="text-white font-medium text-sm px-5 py-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/turenportas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#005143] text-[#005143] hover:bg-[#005143] hover:text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
