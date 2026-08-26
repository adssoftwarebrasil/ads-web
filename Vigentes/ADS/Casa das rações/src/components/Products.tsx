import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { whatsappLink } from '../lib/tracking';

const ITEMS_PER_PAGE = 12;

const categories = ['Todos', 'Cachorro', 'Gato'];
const subcategories = ['Todos', 'Filhote', 'Adulto', 'Sênior', 'Castrado'];
const brands = ['Todas', 'Monello', 'Birbo', 'Quatree', 'Select', 'Premium'];

export default function Products() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('Todos');
  const [subcategory, setSubcategory] = useState('Todos');
  const [brand, setBrand] = useState('Todas');

  const filtered = products.filter((p) => {
    if (category !== 'Todos' && p.category !== category) return false;
    if (subcategory !== 'Todos' && p.subcategory !== subcategory) return false;
    if (brand !== 'Todas' && p.brand !== brand) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const current = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handleFilter = (setter: (v: string) => void, value: string) => {
    setter(value);
    setPage(1);
  };

  const askLink = (name: string) =>
    whatsappLink(
      'produto_card',
      `Olá! Tenho interesse no produto: *${name}*. Poderia me dar mais informações?`
    );

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Rações de alta qualidade
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            As melhores marcas para garantir a nutrição completa do seu pet em todas as fases da vida.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => handleFilter(setCategory, c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === c
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="w-px bg-gray-200 hidden sm:block" />
          <div className="flex flex-wrap gap-2 justify-center">
            {subcategories.map((s) => (
              <button
                key={s}
                onClick={() => handleFilter(setSubcategory, s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  subcategory === s
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => handleFilter(setBrand, b)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                brand === b
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {current.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-medium">Nenhum produto encontrado com esses filtros.</p>
            <button
              onClick={() => { setCategory('Todos'); setSubcategory('Todos'); setBrand('Todas'); setPage(1); }}
              className="mt-4 text-green-600 hover:underline text-sm"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {current.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        product.category === 'Cachorro'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-green-600 mb-0.5">{product.brand}</p>
                    <h3 className="text-gray-800 text-xs font-semibold leading-tight line-clamp-2 mb-1.5" title={product.name}>
                      {product.name}
                    </h3>
                    <span className="inline-block text-xs text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded mb-2">
                      {product.subcategory}
                    </span>
                    <a
                      {...askLink(product.name)}
                      className="w-full flex items-center justify-center gap-1 text-green-600 hover:text-white hover:bg-green-600 border border-green-200 hover:border-green-600 text-xs font-semibold py-1.5 rounded-lg transition-all"
                    >
                      <MessageCircle size={11} />
                      Consultar
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <p className="text-sm text-gray-500">
                Mostrando <span className="font-semibold">{start + 1}–{Math.min(start + ITEMS_PER_PAGE, filtered.length)}</span> de{' '}
                <span className="font-semibold">{filtered.length}</span> produtos
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                      page === n
                        ? 'bg-green-600 text-white shadow-sm'
                        : 'border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600'
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
