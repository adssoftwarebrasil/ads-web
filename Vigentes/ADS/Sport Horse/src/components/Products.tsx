import { ShoppingCart, ExternalLink } from 'lucide-react';
import { products } from '../data';

const storeUrl = 'https://www.sporthorse.com.br/';

export default function Products() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de produtos de hipismo e equitação, todos de alta qualidade com
            opções acessíveis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-emerald-200 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <a
                  href={storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-emerald-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <ShoppingCart size={20} />
                  </button>
                </a>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl -translate-x-10 -translate-y-10"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-emerald-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mb-4 group-hover:w-20 transition-all duration-500"></div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem]">
                    {product.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex-1 relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.02] overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                      <span className="relative flex items-center gap-2">
                        Ver na Loja
                        <ExternalLink
                          size={18}
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                        />
                      </span>
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      Disponível
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Envio rápido 🚀
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/5516991729461"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(0,123,0)] hover:bg-[rgb(0,140,0)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
}
