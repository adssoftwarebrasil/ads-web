import { useState } from 'react';
import { Search, ShoppingCart, ArrowRight } from 'lucide-react';
import { categories, products, productWhatsApp } from '../data';

export default function Products() {
  const [active, setActive] = useState('Todos');
  const [query, setQuery] = useState('');

  const filtered = products.filter((p) => {
    const matchCat = active === 'Todos' || p.category === active;
    const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <section id="produtos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Catálogo Online
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Encontre o que você precisa
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Explore nossa linha completa com mais de 140 itens. Qualidade MM Química direto para sua
            empresa ou residência.
          </p>
        </div>
        <div className="sticky top-20 z-30 bg-gray-50/95 backdrop-blur-sm py-4 mb-10 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative w-full lg:max-w-md">
              <Search
                width={20}
                height={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Buscar por nome do produto..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all shadow-sm bg-white"
              />
            </div>
            <div className="flex overflow-x-auto w-full no-scrollbar gap-2 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                    active === cat
                      ? 'bg-brand-pink border-brand-pink text-white shadow-md'
                      : 'bg-white border-gray-200 text-brand-gray hover:border-brand-pink hover:text-brand-pink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-brand-gray px-2 py-1 rounded-md uppercase">
                  {p.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-brand-dark mb-4 line-clamp-2 h-10">
                  {p.name}
                </h3>
                <a
                  href={productWhatsApp(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-brand-pink/5 hover:bg-brand-pink text-brand-pink hover:text-white py-2.5 rounded-xl font-bold text-xs transition-all duration-200 group-hover:shadow-md"
                >
                  <ShoppingCart width={16} height={16} />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-pink transition-all shadow-lg active:scale-95">
            Carregar mais produtos
            <ArrowRight width={20} height={20} />
          </button>
          <p className="mt-4 text-sm text-gray-400">Mostrando 12 de 146 itens</p>
        </div>
      </div>
    </section>
  );
}
