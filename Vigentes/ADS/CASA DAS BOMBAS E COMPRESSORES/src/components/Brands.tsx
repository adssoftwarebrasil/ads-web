const brandCardClass = `
    group relative
    w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(23%)]
    bg-slate-900 rounded-xl border-2 border-[rgb(255,163,1)]
    p-6 flex items-center justify-center
    h-32 md:h-40
    transition-all duration-300
    hover:-translate-y-2
    overflow-hidden
`;

const brands = [
  { src: 'https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Fmarcas1.webp', alt: 'Marca 1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Fmarcas2.webp', alt: 'Marca 2' },
  { src: 'https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Fmarcas3.webp', alt: 'Marca 3' },
  { src: 'https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Fmarcas4.webp', alt: 'Marca 4' },
  { src: 'https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Fmarcas5.webp', alt: 'Marca 5' },
  { src: 'https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Fmarcas6.webp', alt: 'Marca 6' },
  { src: 'https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Fmarcas7.webp', alt: 'Marca 7' },
];

export default function Brands() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Marcas que <span className="text-[rgb(255,163,1)]">Representamos</span>
          </h2>
          <div className="w-24 h-1 bg-[#C41D1D] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Trabalhamos apenas com fabricantes líderes mundiais para garantir a durabilidade e eficiência da sua
            operação.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((b) => (
            <div key={b.alt} className={brandCardClass}>
              <img
                src={b.src}
                alt={b.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
            Peças Genuínas &amp; Garantia de Fábrica
          </p>
        </div>
      </div>
    </section>
  );
}
