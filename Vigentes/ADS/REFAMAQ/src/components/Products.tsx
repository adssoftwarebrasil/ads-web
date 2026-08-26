import { useState } from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { products, categories, type ProductCategory } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const INITIAL_VISIBLE = 12;

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('Todos');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const { ref, isVisible } = useScrollAnimation();

  const filtered =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat: ProductCategory) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block text-[#466fc5] font-semibold text-sm uppercase tracking-widest mb-3">
            Catálogo de Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#373536] mb-4">
            Implementos Fabricados com
            <span className="text-[#466fc5]"> Alta Qualidade</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            Mais de 30 produtos fabricados com aço de alta resistência para maximizar a produtividade do seu maquinário.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#466fc5] text-white shadow-md shadow-blue-200'
                  : 'bg-white text-[#6b7280] hover:bg-blue-50 hover:text-[#466fc5] border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.slice(0, visibleCount).map((product, i) => (
            <ProductCard key={`${product.name}-${i}`} product={product} index={i} />
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => v + 8)}
              className="inline-flex items-center gap-2 bg-white border border-[#466fc5] text-[#466fc5] hover:bg-[#466fc5] hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
            >
              Ver mais produtos
              <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${product.name}. Gostaria de solicitar um orçamento.`
  );

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '4/3' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#243b8e]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={`http://wa.me/5566984028763?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={14} />
            Solicitar
          </a>
        </div>
      </div>
      <div className="p-3.5">
        <p className="text-xs font-semibold text-[#373536] leading-snug text-center">
          {product.name}
        </p>
        <p className="text-xs text-[#6b7280] text-center mt-1">{product.category}</p>
      </div>
    </div>
  );
}
