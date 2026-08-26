interface GalleryImage {
  src: string;
  alt: string;
  wrapClass: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/galeria/exposicao-de-queijos-salames-e-doces-em-mercado_1280x960.webp',
    alt: 'Exposição de produtos coloniais em nossa loja',
    wrapClass: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/galeria/lingui-as-pequenas-frescas-embaladas-prontas-para-venda_720x1280.webp',
    alt: 'Linguiças frescas embaladas',
    wrapClass: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/galeria/salame-serrano-fatiado-bandeja-mercearia-orange_960x1280.webp',
    alt: 'Salame Serrano fatiado na bandeja',
    wrapClass: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/galeria/tabelas-de-frios-queijo-salame-e-geleia_960x1280.webp',
    alt: 'Tábua de frios com queijo, salame e geleia',
    wrapClass: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/galeria/tabua-frios-queijo-salame-supermercado_960x1280.webp',
    alt: 'Tábua de frios montada no supermercado',
    wrapClass: 'col-span-1',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#FF6601] text-xs font-bold uppercase tracking-widest">
            Nossa Loja
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Conheça Nosso Espaço
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Um ambiente aconchegante, preparado com carinho para receber você e oferecer a melhor
            experiência na escolha dos seus produtos artesanais.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative group overflow-hidden rounded-2xl bg-[#1A1A1A] ${img.wrapClass}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
