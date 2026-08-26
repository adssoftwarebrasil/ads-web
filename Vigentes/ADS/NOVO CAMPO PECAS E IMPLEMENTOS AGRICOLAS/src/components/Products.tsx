import { useState } from 'react';
import { Sparkles, Package } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { products, categories } from '../data/products';

export default function Products() {
  const [active, setActive] = useState('Todos');

  const filtered =
    active === 'Todos'
      ? products
      : products.filter((p) => p.cat === active);

  return (
    <section
      id="produtos"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F8D617]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#001F7A]/3 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles
              width={24}
              height={24}
              className="lucide lucide-sparkles text-[#F8D617]"
            />
            <span className="text-[#4CAF50] font-bold text-sm md:text-base uppercase tracking-wider bg-[#4CAF50]/10 px-6 py-2 rounded-full">
              Nossos Produtos
            </span>
            <Sparkles
              width={24}
              height={24}
              className="lucide lucide-sparkles text-[#F8D617]"
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A385C] mb-6">
            Catálogo Completo
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4CAF50] via-[#F8D617] to-[#001F7A] mx-auto mb-6"></div>
          <p className="text-[#424242] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Peças e implementos agrícolas de{' '}
            <strong className="text-[#4CAF50]">alta qualidade</strong> para
            máximas performance e durabilidade
          </p>
        </div>
        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((c) => {
              const isActive = active === c.label;
              return (
                <button
                  key={c.label}
                  onClick={() => setActive(c.label)}
                  className={
                    isActive
                      ? 'group relative px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white shadow-xl shadow-[#4CAF50]/30 scale-105'
                      : 'group relative px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 bg-white text-[#424242] border-2 border-gray-200 hover:border-[#4CAF50] hover:shadow-lg hover:scale-105'
                  }
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg md:text-xl">{c.emoji}</span>
                    <span>{c.label}</span>
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mb-8 flex items-center justify-center gap-3 text-[#424242]">
          <Package
            width={24}
            height={24}
            className="lucide lucide-package text-[#4CAF50]"
          />
          <span className="text-lg md:text-xl font-bold">
            <span className="text-[#4CAF50]">{filtered.length}</span> produtos
            disponíveis
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#4CAF50]/50 hover:-translate-y-3"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F8D617] to-[#e6c615] text-[#1A385C] px-4 py-2 rounded-full text-xs font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  {p.cat}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#1A385C] font-bold text-lg mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-[#4CAF50] transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-[#424242] text-sm leading-relaxed line-clamp-2 mb-5">
                  {p.desc}
                </p>
                <button className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white py-3.5 rounded-xl font-bold hover:shadow-xl hover:shadow-[#4CAF50]/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn">
                  <span>Consultar Preço</span>
                  <svg
                    className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-[#4CAF50]/10 via-[#F8D617]/10 to-[#001F7A]/10 rounded-3xl p-8 md:p-12 border-2 border-[#4CAF50]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A385C] mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-[#424242] text-lg mb-6 max-w-2xl mx-auto">
              Entre em contato conosco! Temos muito mais produtos disponíveis e
              nossa equipe está pronta para ajudar.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#1fb855] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105">
              <WhatsAppIcon className="w-6 h-6" />
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
