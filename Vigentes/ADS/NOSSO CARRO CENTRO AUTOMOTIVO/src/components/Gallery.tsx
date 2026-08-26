const base = 'https://storage.lucasmendes.dev/site-sp/nosso%20carro%20centro%20automotivo/img/';

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  span: string;
}

const items: GalleryItem[] = [
  {
    src: base + 'carro-preto-polido-luzes-hexagonais-garagem_382x510.webp',
    alt: 'Carro preto polido com efeito espelhado',
    label: 'Polimento Cristalizado',
    span: 'col-span-1 row-span-2',
  },
  {
    src: base + 'fachada-azul-oferecendo-servicos-de-seguradoras_382x510.webp',
    alt: 'Fachada Nosso Carro - Seguradoras',
    label: 'Oficina Referenciada',
    span: 'col-span-1 row-span-1',
  },
  {
    src: base + 'loja-de-tintas-automotivas-lazzumix-sherwin-williams_680x510.webp',
    alt: 'Loja de tintas automotivas Lazzumix Sherwin-Williams',
    label: 'Laboratório de Tinta',
    span: 'col-span-1 row-span-1',
  },
  {
    src: base + 'fachada-azul-oficina-mecanica-dia_243x244.webp',
    alt: 'Fachada da oficina durante o dia',
    label: 'Nossas Instalações',
    span: 'col-span-1 row-span-1',
  },
  {
    src: base + 'interior-clinica-automotiva-mesa-de-vidro-tv_382x510.webp',
    alt: 'Interior da clínica automotiva',
    label: 'Sala de Espera Premium',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#04152D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#174C7E]/30 border border-[#6D94BE]/20 text-[#6D94BE] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Nosso trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Estrutura e Resultados
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Conheça nossas instalações e veja de perto o padrão de qualidade que entregamos a cada
            veículo.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className={`relative group overflow-hidden rounded-2xl ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04152D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2.5 py-1 bg-[#174C7E]/60 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/nossocarroo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#6D94BE] hover:text-white font-medium transition-colors text-sm"
          >
            <span>Ver mais no Instagram</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
