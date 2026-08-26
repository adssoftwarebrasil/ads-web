import { useState } from 'react';
import { ShoppingBag, ZoomIn, MessageCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { products, type Product } from '../data/products';

const PER_PAGE = 12;

export default function Catalogo() {
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<Product | null>(null);

  const totalPages = Math.ceil(products.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const current = products.slice(start, start + PER_PAGE);
  const firstShown = products.length === 0 ? 0 : start + 1;
  const lastShown = Math.min(page * PER_PAGE, products.length);

  const goTo = (p: number) => {
    setPage(p);
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="catalogo"
      className="py-20 md:py-28 bg-gradient-to-b from-[rgb(223,202,178)]/10 to-[rgb(254,254,252)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(102,78,56)] mb-4 flex items-center justify-center gap-3">
            <ShoppingBag className="w-8 h-8 md:w-10 md:h-10" />
            Nosso Catálogo
          </h2>
          <p className="text-lg md:text-xl text-[rgb(102,78,56)]/70 max-w-2xl mx-auto">
            Explore nossa coleção completa. Selecione o produto que deseja e fale diretamente conosco pelo WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {current.map((product) => (
            <div
              key={product.ref}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group border border-[rgb(223,202,178)]/30"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[rgb(223,202,178)]/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setLightbox(product)}
                    className="bg-white/90 p-3 rounded-full text-[rgb(102,78,56)] hover:bg-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    title="Ampliar Imagem"
                  >
                    <ZoomIn width={24} height={24} />
                  </button>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-[rgb(254,254,252)]/90 backdrop-blur-sm text-[rgb(102,78,56)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[rgb(102,78,56)] mb-2 line-clamp-1" title={product.name}>
                  {product.name}
                </h3>
                <p className="text-sm text-[rgb(102,78,56)]/60 mb-4 line-clamp-2">{product.description}</p>
                <div className="mt-auto">
                  <a
                    href={product.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[rgb(102,78,56)] hover:bg-[#25D366] text-white py-3 px-4 rounded-xl transition-colors duration-300 font-semibold shadow-md"
                  >
                    <MessageCircle width={20} height={20} />
                    Comprar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            disabled={page === 1}
            onClick={() => goTo(page - 1)}
            className={`p-2 rounded-full border border-[rgb(102,78,56)]/20 transition-all ${
              page === 1
                ? 'text-gray-400 cursor-not-allowed opacity-50'
                : 'text-[rgb(102,78,56)] hover:bg-[rgb(102,78,56)] hover:text-white'
            }`}
          >
            <ChevronLeft width={24} height={24} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`w-10 h-10 rounded-full font-semibold transition-all ${
                  p === page
                    ? 'bg-[rgb(102,78,56)] text-white shadow-lg scale-110'
                    : 'bg-white text-[rgb(102,78,56)] hover:bg-[rgb(223,202,178)]/30 border border-[rgb(102,78,56)]/20'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button
            disabled={page === totalPages}
            onClick={() => goTo(page + 1)}
            className={`p-2 rounded-full border border-[rgb(102,78,56)]/20 transition-all ${
              page === totalPages
                ? 'text-gray-400 cursor-not-allowed opacity-50'
                : 'text-[rgb(102,78,56)] hover:bg-[rgb(102,78,56)] hover:text-white'
            }`}
          >
            <ChevronRight width={24} height={24} />
          </button>
        </div>
        <div className="text-center mt-12 text-[rgb(102,78,56)]/60 text-sm">
          Exibindo {firstShown}-{lastShown} de {products.length} produtos
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X width={28} height={28} />
          </button>
          <img
            src={lightbox.image}
            alt={lightbox.name}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
