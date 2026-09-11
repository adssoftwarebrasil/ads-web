import { useState } from 'react';
import { X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fbateria-nova-posicionada.jpg',
    'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fcolocando-radiador-no-lugar.jpg',
    'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-conectando-bateria-nova.jpg',
    'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-radiador-novo.jpg',
    'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-testando-bateria.jpg',
    'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-bateria.jpg',
    'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-bateria-moura.webp',
    'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-radiador.jpg',
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Veja Nosso Trabalho
            </h2>
            <p className="text-[#334155] text-lg">
              Qualidade e profissionalismo em cada serviço
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Trabalho ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-[#1E3A8A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FF6B00] transition-colors z-10 bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Visualização ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
