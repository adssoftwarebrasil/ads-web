import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  brand: string;
  name: string;
  code: string;
  image: string;
}

const BASE = 'https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fprodutos%2F';

const products: Product[] = [
  { brand: 'Bosch', name: 'Arruela 812', code: '812', image: BASE + 'arruela-812.webp' },
  {
    brand: 'Bosch',
    name: 'Arruela de Ajuste 601 2.30mm',
    code: '601',
    image: BASE + 'arruela-de-ajuste-601-2-30mm.webp',
  },
  {
    brand: 'Ford',
    name: 'Bomba de Óleo FN1/2 Ford 959',
    code: '959',
    image: BASE + 'bomba-de-oleo-fn1_2-ford-959.webp',
  },
  {
    brand: 'Mercedes-Benz',
    name: 'Bomba de Óleo FN1/2 Mercedes-Benz 908',
    code: '908',
    image: BASE + 'bomba-de-oleo-fn1_2-mercedes-benz-908.webp',
  },
  {
    brand: 'Volkswagen',
    name: 'Bomba de Óleo FN1/2 Volkswagen 654',
    code: '654',
    image: BASE + 'bomba-de-oleo-fn1_2-volkswagen-654.webp',
  },
  {
    brand: 'Volkswagen',
    name: 'Bomba de Óleo FN1/2 Volkswagen 667',
    code: '667',
    image: BASE + 'bomba-de-oleo-fn1_2-volkswagen-667.webp',
  },
  {
    brand: 'Volkswagen',
    name: 'Bomba de Óleo FN1/2 Volkswagen 685',
    code: '685',
    image: BASE + 'bomba-de-oleo-fn1_2-volkswagen-685.webp',
  },
  {
    brand: 'Volkswagen',
    name: 'Bomba de Óleo FN1/2 Volkswagen 839',
    code: '839',
    image: BASE + 'bomba-de-oleo-fn1_2-volkswagen-839.webp',
  },
  {
    brand: 'Volkswagen',
    name: 'Bomba de Óleo FN1/2 Volkswagen 842',
    code: '842',
    image: BASE + 'bomba-de-oleo-fn1_2-volkswagen-842.webp',
  },
  {
    brand: 'Volvo',
    name: 'Bomba de Óleo FN1/2 Volvo 647',
    code: '647',
    image: BASE + 'bomba-de-oleo-fn1_2-volvo-647.webp',
  },
  {
    brand: 'Mercedes-Benz',
    name: 'Bomba de Óleo FN3/1 Mercedes-Benz 666',
    code: '666',
    image: BASE + 'bomba-de-oleo-fn3_1-mercedes-benz-666.webp',
  },
  {
    brand: 'Scania',
    name: 'Bomba de Óleo FN3/1 Scania 787',
    code: '787',
    image: BASE + 'bomba-de-oleo-fn3_1-scania-787.webp',
  },
];

const categories = [
  'Arruelas',
  'Bombas Tandem',
  'Bombas de Óleo',
  'Componentes',
  'Direção Hidráulica',
  'Filtros',
  'Reparos',
  'Todas',
];

const brands = [
  'Agrale',
  'Bosch',
  'Ford',
  'Iveco',
  'Mercedes-Benz',
  'Mitsubishi',
  'Renault',
  'Scania',
  'Todas',
  'Toyota',
  'Volkswagen',
  'Volvo',
];

const pages = [1, 2, 3, 4, 5];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[rgb(163,24,23)]/10 rounded-full mb-4">
            <p className="text-[rgb(163,24,23)] font-semibold text-sm">NOSSOS PRODUTOS</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(4,26,58)] mb-6">
            Peças Originais Bosch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Catálogo completo de peças originais para direção.
          </p>
        </div>
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                width={20}
                height={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Buscar por nome ou código..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[rgb(163,24,23)] focus:outline-none transition-colors"
                defaultValue=""
              />
            </div>
            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              <div className="flex-1 lg:w-56">
                <div className="relative">
                  <Filter
                    width={20}
                    height={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <select className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[rgb(163,24,23)] focus:outline-none transition-colors appearance-none bg-white cursor-pointer">
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex-1 lg:w-56">
                <div className="relative">
                  <Filter
                    width={20}
                    height={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <select className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[rgb(163,24,23)] focus:outline-none transition-colors appearance-none bg-white cursor-pointer">
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600">Mostrando 12 de 58 produtos</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col h-full bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:border-[rgb(163,24,23)]/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 bg-gray-50 overflow-hidden shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-[rgb(163,24,23)] bg-[rgb(163,24,23)]/10 px-2 py-1 rounded">
                    {product.brand}
                  </span>
                </div>
                <h3 className="font-bold text-[rgb(4,26,58)] mb-1 text-sm line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">Cód: {product.code}</p>
                <button className="mt-auto w-full bg-[rgb(163,24,23)] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-[rgb(143,20,20)] transition-all duration-200 shadow-md hover:shadow-lg">
                  Consultar Preço
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            disabled
            className="p-2 rounded-lg border-2 border-gray-200 hover:border-[rgb(163,24,23)] hover:bg-[rgb(163,24,23)]/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft width={20} height={20} />
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={
                page === 1
                  ? 'px-4 py-2 rounded-lg font-semibold transition-all bg-[rgb(163,24,23)] text-white shadow-lg'
                  : 'px-4 py-2 rounded-lg font-semibold transition-all border-2 border-gray-200 hover:border-[rgb(163,24,23)] hover:bg-[rgb(163,24,23)]/10'
              }
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-lg border-2 border-gray-200 hover:border-[rgb(163,24,23)] hover:bg-[rgb(163,24,23)]/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            <ChevronRight width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
