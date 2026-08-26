import { useState } from 'react';
import { X } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/casa%20das%20embalagens';

const images = [
  { src: `${BASE}/kits-potes-retangulares-redondos-tamanhos-variados_1290x2293.webp`, alt: 'Kits potes retangulares e redondos em tamanhos variados' },
  { src: `${BASE}/pratos-papel-plastico-isopor-casa-embalagens_1290x2293.webp`, alt: 'Pratos de papel, plástico e isopor' },
  { src: `${BASE}/produtos-cepera-ketchup-maionese-mostarda-barbecue_1290x2293.webp`, alt: 'Produtos Cepera ketchup, maionese, mostarda e barbecue' },
  { src: `${BASE}/rolo-plastico-bolha-60-100-metros_1290x2293.webp`, alt: 'Rolo plástico bolha 60 a 100 metros' },
  { src: `${BASE}/embalagens-rede-tubular-laranja-fitilho-kg_1290x2293.webp`, alt: 'Embalagens rede tubular laranja e fitilho por kg' },
  { src: `${BASE}/produtos-seguranca-fitas-e-bobinas-embalagem_1290x2293.webp`, alt: 'Produtos de segurança, fitas e bobinas para embalagem' },
  { src: `${BASE}/colagem-luvas-vinil-nitrilica-latex-plastica_1290x2293.webp`, alt: 'Luvas de vinil, nitrílica, látex e plástica' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-red/10 text-brand-red font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight">
            Conheça nossos <span className="text-brand-red">produtos</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-lg mx-auto">
            Uma amostra da nossa ampla linha de embalagens e descartáveis.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img) => (
            <button
              key={img.src}
              onClick={() => setLightbox(img.src)}
              className="block w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Produto"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
