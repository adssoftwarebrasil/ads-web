interface GalleryItem {
  img: string;
  alt: string;
}

const items: GalleryItem[] = [
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-queijos-frios-e-frutas.webp', alt: 'Mesa de queijos, frios e frutas' },
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-buffet-comida.webp', alt: 'Mesa de buffet com variedades' },
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-bufe-lustres.webp', alt: 'Mesa de buffet elegante com lustres' },
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-queijos-frutas.webp', alt: 'Mesa de queijos e frutas' },
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-frutas-flores.webp', alt: 'Mesa de frutas com decoração floral' },
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-buffet-variada.webp', alt: 'Mesa de buffet variada' },
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/tabua-queijos-frutas.webp', alt: 'Tábua de queijos e frutas' },
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-queijos-frios-alimentos.webp', alt: 'Mesa de queijos e frios sortidos' },
  { img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-bufe-salgados-doces.webp', alt: 'Mesa de salgados e doces' },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-[rgb(32,29,30)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(197,162,3)] font-bold text-sm tracking-wider uppercase">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(254,254,254)] mt-3 mb-6 leading-tight">
            Nossas Criações
          </h2>
          <p className="text-[rgb(254,254,254)]/70 text-lg max-w-2xl mx-auto">
            Cada mesa é uma obra de arte gastronômica, cuidadosamente elaborada para encantar seus
            convidados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(32,29,30)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-[rgb(254,254,254)] font-semibold text-sm">Ver em tela cheia</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/rotadoqueijodf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-[rgb(197,162,3)] text-[rgb(197,162,3)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(197,162,3)] hover:text-[rgb(32,29,30)] transition-all duration-300"
          >
            <span>Ver Mais no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
