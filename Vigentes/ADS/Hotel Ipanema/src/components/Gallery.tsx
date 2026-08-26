import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FFachada.png', alt: 'Fachada do Hotel' },
  { src: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FRecep%C3%A7%C3%A3o-Mais-Bonita.jpg', alt: 'Recepção' },
  { src: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FQuarto-Mais-Bonito.jpg', alt: 'Casal com solteiro' },
  { src: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FLugar-Do-Caf%C3%A9.jpg', alt: 'Área do Café' },
  { src: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FQuarto4.jpg', alt: 'Acomodação' },
  { src: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FGarangem.jpg', alt: 'Garagem' },
  { src: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FRecepcao.jpg', alt: 'Recepção Clássica' },
  { src: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2Finbound8601492672725612722.jpg', alt: 'Ambiente do Hotel' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : 0));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % images.length : 0));

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f68033] text-sm font-bold tracking-widest uppercase mb-3">
            Galeria
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Conheça Nossos <span className="text-[#fff808]">Espaços</span>
          </h2>
          <p className="text-[#bdbec2] text-lg max-w-xl mx-auto">
            Uma prévia do que espera por você no Hotel Ipanema.
          </p>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
              onClick={() => setLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 text-center">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#f68033] transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#f68033] transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#f68033] transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#bdbec2] text-sm">
            {images[lightbox].alt} — {lightbox + 1}/{images.length}
          </p>
        </div>
      )}
    </section>
  );
}
