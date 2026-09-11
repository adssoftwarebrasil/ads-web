import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const menuPages = [
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=a%20priori%20cafe%2Fcardapio%2Fpage1.jpg&version_id=null',
    alt: 'Cardápio A Priori Café — Página 1',
    label: 'Página 1',
  },
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=a%20priori%20cafe%2Fcardapio%2Fpage2.jpg&version_id=null',
    alt: 'Cardápio A Priori Café — Página 2',
    label: 'Página 2',
  },
];

export default function Menu() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="cardapio" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-burgundy mb-3 block">
            Cardápio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Descubra Nossos Sabores
          </h2>
          <p className="font-sans text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Cafés especiais, bebidas geladas, salgados, tortas, doces artesanais e muito mais.
            Clique nas imagens para ampliar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {menuPages.map((page) => (
            <div
              key={page.src}
              className="animate-on-scroll group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-cream hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setLightbox(page.src)}
            >
              <img
                src={page.src}
                alt={page.alt}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <ZoomIn size={22} className="text-burgundy" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-5">
                <p className="font-sans text-white text-sm font-medium">{page.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <p className="font-sans text-gray-500 text-sm mb-5">
            Quer saber mais sobre nossos produtos ou fazer um pedido especial?
          </p>
          <a
            href="http://wa.me/5519996561976?text=Olá! Gostaria de saber mais sobre o cardápio da A Priori Café."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-burgundy text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-burgundy-dark hover:shadow-lg hover:-translate-y-0.5"
          >
            Peça pelo WhatsApp
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-200"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Cardápio ampliado"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
