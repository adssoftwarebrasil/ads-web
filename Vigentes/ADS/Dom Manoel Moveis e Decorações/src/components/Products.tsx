import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { categories, products } from '../data/products';

export default function Products() {
  const [active, setActive] = useState('Todos');

  const filtered =
    active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="py-24 bg-[rgb(103,66,42)]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
            <span className="text-[rgb(183,149,108)] text-sm font-semibold uppercase tracking-widest">
              Catálogo Completo
            </span>
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[rgb(103,66,42)] font-bold mb-4">
            Nossas <span className="text-[rgb(183,149,108)]">Peças</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-[rgb(103,66,42)] text-white shadow-lg'
                  : 'bg-white text-[rgb(103,66,42)] border border-[rgb(183,149,108)]/30 hover:border-[rgb(103,66,42)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
          {filtered.map((product, i) => (
            <div
              key={product.image}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.category}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] text-[rgb(183,149,108)] font-bold uppercase mb-3">
                  {product.category}
                </p>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-[rgb(103,66,42)] hover:text-[rgb(183,149,108)] transition-colors"
                >
                  CONSULTAR <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-8 py-3 border-2 border-[rgb(103,66,42)] text-[rgb(103,66,42)] font-bold rounded-full hover:bg-[rgb(103,66,42)] hover:text-white transition-all duration-300 group">
            <Plus size={20} className="group-hover:rotate-90 transition-transform" />
            CARREGAR MAIS PEÇAS
          </button>
        </div>
        <div className="mt-20 p-8 bg-[rgb(103,66,42)] rounded-3xl text-center text-white">
          <h3 className="font-serif text-2xl mb-4">Procurando algo específico?</h3>
          <p className="mb-6 opacity-90">Fazemos projetos sob medida para o seu ambiente.</p>
          <a
            href="http://wa.me/556696455950"
            className="inline-flex items-center gap-3 bg-[rgb(183,149,108)] px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[rgb(103,66,42)] transition-all"
          >
            Falar com Atendente <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
