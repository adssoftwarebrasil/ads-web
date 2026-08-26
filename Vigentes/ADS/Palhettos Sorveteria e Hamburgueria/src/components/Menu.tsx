import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556299822672';
const CARDAPIO = 'https://storage.lucasmendes.dev/site-sp/palhetos%20sorveteria%20e%20hamburgueria%20%2Fcardapio%2F';

const pages = [
  { src: `${CARDAPIO}cardapio-pagina-01.webp`, alt: 'Cardápio Palhettos - Página 1' },
  { src: `${CARDAPIO}cardapio-pagina-02.webp`, alt: 'Cardápio Palhettos - Página 2' },
];

export default function Menu() {
  const [page, setPage] = useState(0);
  const total = pages.length;

  const prev = () => setPage((p) => (p - 1 + total) % total);
  const next = () => setPage((p) => (p + 1) % total);

  return (
    <section id="menu" className="py-24 bg-[rgb(35,31,32)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(255,204,26)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(255,204,26)] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(255,204,26)]/10 border border-[rgb(255,204,26)] px-4 py-2 rounded-full mb-6">
            <span className="text-[rgb(255,204,26)] font-semibold text-sm">CARDÁPIO COMPLETO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Nosso
            <span className="text-[rgb(255,204,26)] block mt-2">Cardápio Digital</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Confira todos os nossos produtos, preços e opções. Navegue pelo cardápio e escolha seus favoritos para pedir agora mesmo!
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              <img src={pages[page].src} alt={pages[page].alt} className="w-full h-auto" />
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[rgb(35,31,32)]/80 hover:bg-[rgb(35,31,32)] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                aria-label="Página anterior"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[rgb(35,31,32)]/80 hover:bg-[rgb(35,31,32)] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                aria-label="Próxima página"
              >
                <ChevronRight size={28} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === page ? 'bg-[rgb(255,204,26)] w-8' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Ir para página ${i + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgb(35,31,32)] to-[rgb(35,31,32)]/90 p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-white text-center sm:text-left">
                  <p className="text-lg font-semibold mb-1">Página {page + 1} de {total}</p>
                  <p className="text-gray-400 text-sm">Use as setas para navegar pelo cardápio</p>
                </div>
                <div className="flex gap-4">
                  <a
                    href={pages[page].src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-white/20"
                  >
                    <ExternalLink size={20} />
                    Ver Ampliado
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(255,204,26)] hover:bg-yellow-300 text-[rgb(35,31,32)] px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Fazer Pedido
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-[rgb(255,204,26)] mb-2">50+</div>
              <p className="text-white font-semibold">Sabores Únicos</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-[rgb(255,204,26)] mb-2">100%</div>
              <p className="text-white font-semibold">Artesanal</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-[rgb(255,204,26)] mb-2">12</div>
              <p className="text-white font-semibold">Anos de Tradição</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
