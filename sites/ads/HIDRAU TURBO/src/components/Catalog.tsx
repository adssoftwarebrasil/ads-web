import { Filter, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  img: string;
  alt: string;
  brand: string;
  title: string;
}

const base = 'https://storage.lucasmendes.dev/site-sp/hidrau%20turbo%2Fprodutos%2F';

const brands = [
  'Todos',
  'Agrale',
  'Bosch',
  'Ford',
  'Iveco',
  'Mercedes-Benz',
  'Mitsubishi',
  'Renault',
  'Scania',
  'Toyota',
  'Volkswagen',
  'Volvo',
];

const products: Product[] = [
  { img: base + 'bomba-de-oleo-fn4-agrale-909.webp', alt: 'Bomba de Óleo FN4 Agrale 909', brand: 'Agrale', title: 'Bomba de Óleo FN4 Agrale' },
  { img: base + 'arruela-812.webp', alt: 'Arruela 812', brand: 'Bosch', title: 'Arruela' },
  { img: base + 'arruela-de-ajuste-601-2-30mm.webp', alt: 'Arruela de Ajuste 601 2.30mm', brand: 'Bosch', title: 'Arruela de Ajuste 601 2.30mm' },
  { img: base + 'eixo-sem-fim-947.webp', alt: 'Eixo Sem Fim 947', brand: 'Bosch', title: 'Eixo Sem Fim' },
  { img: base + 'eixo-setor-900.webp', alt: 'Eixo Setor 900', brand: 'Bosch', title: 'Eixo Setor' },
  { img: base + 'filtro-112.webp', alt: 'Filtro 112', brand: 'Bosch', title: 'Filtro' },
  { img: base + 'filtro-de-aceite-e70h.webp', alt: 'Filtro de Aceite E70H', brand: 'Bosch', title: 'Filtro de Aceite E70H' },
  { img: base + 'gaiola-de-agulhas-104.webp', alt: 'Gaiola de Agulhas 104', brand: 'Bosch', title: 'Gaiola de Agulhas' },
  { img: base + 'gaiola-de-agulhas-201.webp', alt: 'Gaiola de Agulhas 201', brand: 'Bosch', title: 'Gaiola de Agulhas' },
  { img: base + 'parafuso-regulagem-automatica-107.webp', alt: 'Parafuso Regulagem Automática 107', brand: 'Bosch', title: 'Parafuso Regulagem Automática' },
  { img: base + 'parafuso-regulagem-automatica-108.webp', alt: 'Parafuso Regulagem Automática 108', brand: 'Bosch', title: 'Parafuso Regulagem Automática' },
  { img: base + 'parafusos-de-regulagem-automatica-109.webp', alt: 'Parafusos de Regulagem Automática 109', brand: 'Bosch', title: 'Parafusos de Regulagem Automática' },
];

export default function Catalog() {
  return (
    <section id="catalogo" className="bg-gray-50 py-20 sm:py-28 px-4 sm:px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-md bg-accent-red/10 text-accent-red text-sm font-bold uppercase tracking-wider mb-4">
            Catálogo Online
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 leading-tight mb-4">
            Peças Originais Bosch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Selecione a marca abaixo para filtrar ou navegue pelo catálogo completo.
          </p>
        </div>
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          <div className="flex items-center gap-2 mr-4 text-gray-400">
            <Filter size={18} className="lucide lucide-filter " />
            <span className="text-sm font-medium">Filtrar:</span>
          </div>
          {brands.map((b, i) => (
            <button
              key={b}
              className={
                i === 0
                  ? 'whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border bg-primary-blue text-white border-primary-blue shadow-md transform scale-105'
                  : 'whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border bg-white text-gray-600 border-gray-200 hover:border-primary-blue hover:text-primary-blue'
              }
            >
              {b}
            </button>
          ))}
        </div>
        <div id="catalogo-grid" className="min-h-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-300 opacity-100">
            {products.map((p) => (
              <div
                key={p.alt}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-square bg-gray-50 flex items-center justify-center p-4 border-b border-gray-100">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-gray-800 text-[10px] font-bold px-2 py-1 rounded border border-gray-200 uppercase tracking-wide shadow-sm">
                    {p.brand}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-4 line-clamp-2 min-h-[54px]">
                    {p.title}
                  </h3>
                  <div className="mt-auto">
                    <button className="w-full group/btn bg-gray-50 text-gray-900 border border-gray-200 text-sm font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-red hover:text-white hover:border-accent-red transition-all duration-300">
                      Consultar Preço
                      <ExternalLink
                        size={18}
                        className="lucide lucide-external-link group-hover/btn:rotate-45 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            disabled
            className="p-2 rounded-lg border border-gray-200 hover:bg-white hover:border-primary-blue hover:text-primary-blue disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-white text-gray-600"
            aria-label="Página anterior"
          >
            <ChevronLeft size={20} className="lucide lucide-chevron-left " />
          </button>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <span>Página</span>
            <span className="text-primary-blue font-bold">1</span>
            <span>de</span>
            <span>5</span>
          </div>
          <button
            className="p-2 rounded-lg border border-gray-200 hover:bg-white hover:border-primary-blue hover:text-primary-blue disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-white text-gray-600"
            aria-label="Próxima página"
          >
            <ChevronRight size={20} className="lucide lucide-chevron-right " />
          </button>
        </div>
      </div>
    </section>
  );
}
