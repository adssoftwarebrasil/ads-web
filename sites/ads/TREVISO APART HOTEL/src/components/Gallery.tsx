import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const images = [
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F1.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F2.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F3.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F4.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F5.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F6.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F7.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F8.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F9.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FQuartos%2F10.jpg', label: 'Acomodação' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F4.jpeg', label: 'Café da Manhã' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F5.jpeg', label: 'Café da Manhã' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F6.jpeg', label: 'Café da Manhã' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F7.jpeg', label: 'Café da Manhã' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F8.jpeg', label: 'Café da Manhã' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FEstacionamento.jpg', label: 'Estacionamento' },
  { url: 'https://storage.lucasmendes.dev/site-sp/treviso%2FFachada.jpg', label: 'Fachada' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  return (
    <section id="gallery" className="bg-[#212042] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#b82626] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Conheça o hotel
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fef5e6] leading-tight">
            Nossas Acomodações
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#b82626] rounded-full" />
          </div>
          <p className="mt-5 text-[#a08f95] max-w-xl mx-auto text-base leading-relaxed">
            Apartamentos espaçosos e cuidadosamente decorados para proporcionar
            o máximo de conforto na sua estadia em Linhares.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-lg aspect-square bg-[#212042]/50 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#212042]/0 group-hover:bg-[#212042]/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#212042]/80 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#fef5e6] text-xs font-medium">{img.label}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/552733734333?text=Olá!%20Gostaria%20de%20ver%20mais%20fotos%20e%20fazer%20uma%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b82626] hover:bg-[#9b1f1f] text-white font-bold px-8 py-4 rounded tracking-wide transition-all duration-200 shadow-lg"
          >
            Ver disponibilidade e reservar
          </a>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-white/10 rounded-full"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={images[lightbox].url}
            alt={images[lightbox].label}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-white/10 rounded-full"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {images.length} — {images[lightbox].label}
          </div>
        </div>
      )}
    </section>
  );
}
