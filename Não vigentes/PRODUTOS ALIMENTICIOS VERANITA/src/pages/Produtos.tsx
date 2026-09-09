import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function Produtos() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          activeCategory === 'Todos' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [activeCategory, search]
  );

  const filters = ['Todos', ...categories];

  return (
    <>
      <section className="bg-brand-gold text-brand-brown relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-red text-white text-xs font-bold tracking-[0.25em] uppercase mb-6">
            Catálogo Veranita
          </span>
          <h1 className="font-heavy text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Sabor que <span className="text-brand-red">transforma</span> refeições.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-book text-brand-brown/85 leading-relaxed">
            Conheça nossa linha completa de especiarias, temperos, molhos, farofas e pipocas.
            Tradição em cada embalagem.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveCategory(filter)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === filter
                      ? 'bg-brand-red text-white shadow-soft'
                      : 'bg-white text-brand-brown hover:bg-brand-gold'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="relative max-w-sm w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-brown/60" />
              <input
                type="text"
                placeholder="Buscar produto..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white text-brand-brown text-sm font-medium placeholder:text-brand-brown/50 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-brand-brown/70 font-book py-20"
            >
              Nenhum produto encontrado para sua busca.
            </motion.p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <SectionTitle
            eyebrow="Atendimento Personalizado"
            title={<>Não encontrou o que procurava?</>}
            description="Nossa equipe está pronta para preparar uma proposta sob medida para o seu negócio. Entre em contato e descubra todas as possibilidades do mix Veranita."
          />
          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/5516997516375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold text-brand-brown font-bold text-sm uppercase tracking-wider hover:bg-brand-red hover:text-white transition-colors duration-300"
            >
              Falar com Atendimento
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
