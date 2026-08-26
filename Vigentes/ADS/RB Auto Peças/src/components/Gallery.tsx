const IMAGES = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rb_auto_pecas/hero_fachada-loja-auto-pecas-re-vis-o-externa_1440x1920.webp',
    alt: 'Fachada RB Auto Peças - vista externa',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rb_auto_pecas/fachada-loja-auto-pecas-rb-dia_720x1280.webp',
    alt: 'Fachada da loja RB Auto Peças durante o dia',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rb_auto_pecas/anuncio-auto-pecas-chave-vermelho_1080x1080.webp',
    alt: 'Anúncio RB Auto Peças - chave vermelha',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/rb_auto_pecas/fachada-empresa-auto-pecas-rb-azul-laranja_640x1136.webp',
    alt: 'Fachada empresa RB Auto Peças',
    span: 'col-span-1 row-span-1 sm:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            Nossa estrutura
          </span>
          <h2 className="font-['Barlow_Condensed'] font-black text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            CONHEÇA A RB
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Venha nos visitar ou confira nossa estrutura pela galeria abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {IMAGES.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? 'lg:row-span-2' : ''
              } ${index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{ minHeight: index === 0 ? '400px' : '220px' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: 'inherit' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/30 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/rb_auto_pecas?igsh=bmR1bnY4OWN4ODJh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm font-medium transition-colors duration-200 group"
          >
            <span>Siga-nos no Instagram para mais fotos</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
