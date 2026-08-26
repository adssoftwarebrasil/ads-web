import { useState } from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { products, categories } from '../data/products';

const WA_URL = 'https://api.whatsapp.com/send?phone=5541998468028&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === 'Todos' ? products : products.filter((p) => p.category === activeCategory);
  const displayed = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section id="produtos" className="py-20 md:py-28 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Nosso Catálogo
          </span>
          <h2 className="font-heading font-black text-dark-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Produtos e Acessórios
          </h2>
          <p className="text-dark-400 font-body text-base max-w-xl mx-auto leading-relaxed">
            Linha completa de calhas, ferramentas, selantes, impermeabilizantes e acessórios para sua obra.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-dark-900 shadow-md'
                  : 'bg-white text-dark-500 border border-dark-100 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayed.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-dark-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-dark-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/interior-galpao-fachini-grama-sintetica-pecas_1280x960.webp';
                  }}
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-dark-900/80 text-dark-200 text-xs font-heading font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-dark-900 text-base mb-2 leading-tight">{product.name}</h3>
                <p className="text-dark-400 text-xs font-body leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary font-heading font-semibold text-xs hover:gap-2.5 transition-all duration-200"
                >
                  Solicitar orçamento
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length > 12 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-dark-900 text-white font-heading font-bold px-8 py-4 rounded-xl hover:bg-dark-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              <ShoppingBag size={16} />
              {showAll ? 'Ver menos' : `Ver todos os ${filtered.length} produtos`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
