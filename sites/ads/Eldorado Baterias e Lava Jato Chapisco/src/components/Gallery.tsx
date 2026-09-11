const images = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/Eldorado%20Baterias/fachada-loja-baterias-moura-chapisco_1600x1204.webp',
    alt: 'Fachada da Eldorado Baterias – Chapisco',
    span: 'lg:col-span-2',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/Eldorado%20Baterias/fachada-eldorado-baterias-carro-prata-poste-fios_1204x1600.webp',
    alt: 'Frente da loja Eldorado Baterias com carro',
    span: 'lg:col-span-1',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/Eldorado%20Baterias/anuncio-eldorado-baterias-moura-tudor-chapisco_1024x1536.webp',
    alt: 'Anúncio Eldorado Baterias – Moura e Tudor',
    span: 'lg:col-span-1',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-brand-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-brand-yellow font-barlow font-700 uppercase tracking-widest text-sm mb-3">
            Nossa Loja
          </p>
          <h2 className="font-condensed font-900 uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-none mb-2">
            Venha nos Visitar
          </h2>
          <div className="w-16 h-1 bg-brand-yellow rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} overflow-hidden rounded-2xl group`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-64 md:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
