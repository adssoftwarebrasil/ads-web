interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  featured?: boolean;
}

const items: GalleryItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/galeria/fachada-farmacia-inside-pharmacy-manipulacao_4608x3456.webp',
    alt: 'Fachada da Inside Pharmacy',
    label: 'Nossa Fachada',
    featured: true,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/galeria/interior-farmacia-estantes-produtos-parede-madeira_4608x3456.webp',
    alt: 'Interior da farmácia com estantes',
    label: 'Loja Principal',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/galeria/recepcao-escritorio-cadeiras-pretas-balcao-marrom_4608x3456.webp',
    alt: 'Recepção da Inside Pharmacy',
    label: 'Recepção',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/galeria/estante-preta-com-produtos-diversos_4608x3456.webp',
    alt: 'Estante com produtos variados',
    label: 'Produtos Variados',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/galeria/display-de-oleos-essenciais-th-r-pi-em-loja_4608x3456.webp',
    alt: 'Display de óleos essenciais',
    label: 'Óleos Essenciais',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/galeria/estante-preta-produtos-beleza-cosmeticos-variados_4608x3456.webp',
    alt: 'Estante de produtos de beleza',
    label: 'Beleza & Cosméticos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/galeria/estante-produtos-beleza-cosmeticos-organizados-escuros_4608x3456.webp',
    alt: 'Cosméticos organizados',
    label: 'Organização Impecável',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-brand-gray-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-red"></span>
            <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">Nossa Estrutura</span>
            <span className="h-px w-8 bg-brand-red"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-black mb-5">
            Um Ambiente Projetado para <span className="text-brand-red">Você</span>
          </h2>
          <p className="text-brand-gray-dark text-lg max-w-2xl mx-auto leading-relaxed">
            Conheça nossa estrutura física — projetada com rigor técnico, ambientação acolhedora e organização
            impecável para receber você e sua família.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-3 sm:gap-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer aspect-square ${
                item.featured ? 'lg:col-span-2 lg:row-span-2' : ' '
              } opacity-100 scale-100 transition-all duration-500`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-white font-semibold text-sm bg-brand-red px-3 py-1.5 rounded-full">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
