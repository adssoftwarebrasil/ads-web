interface GalleryItem {
  src: string;
  alt: string;
  tall?: boolean;
}

const items: GalleryItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/retigrilo/img/motor-vermelho-e-dourado-pendurado-em-guindaste_899x1599.webp',
    alt: 'Motor vermelho e dourado em guindaste',
    tall: true,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/retigrilo/img/motor-cinza-pendurado-corrente-oficina-mecanica_1600x1200.webp',
    alt: 'Motor cinza pendurado em corrente na oficina',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/retigrilo/img/motor-vermelho-em-reparacao-na-oficina_899x1599.webp',
    alt: 'Motor vermelho em reparação na oficina',
    tall: true,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/retigrilo/img/trator-vermelho-manutencao-oficina-massey-ferguson_899x1599.webp',
    alt: 'Trator Massey Ferguson em manutenção',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-14 visible">
          <span className="inline-block bg-primary/20 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Nosso Trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white mb-5">
            Excelência em
            <span className="block" style={{ color: 'rgb(145, 200, 68)' }}>
              Cada Detalhe
            </span>
          </h2>
          <p className="text-brand-slate text-lg max-w-xl mx-auto">
            Cada motor que sai da nossa oficina passa por um rigoroso processo de qualidade e precisão técnica.
          </p>
        </div>
        <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 visible">
          {items.map((item) => (
            <div
              key={item.src}
              className={`overflow-hidden rounded-2xl group cursor-pointer ${item.tall ? 'row-span-2' : ''}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full min-h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
