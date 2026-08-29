import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  // MÍDIAS ORIGINAIS
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/bandeja-doces-copo-mousse-merengue-chocolate_1599x1017.webp',
    alt: 'Bandeja de doces com mousse, merengue e chocolate',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/doces-copo-vitrine-cafe-parede-lil-s-planta_1600x1086.webp',
    alt: 'Doces em copo na vitrine com planta decorativa',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/doces-variados-copos-plasticos-bandeja-branca_1599x1017.webp',
    alt: 'Doces variados em copos plásticos em bandeja branca',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/frase-a-priori-cafe-vermelha-na-parede_1600x1059.webp',
    alt: 'Frase A Priori Café escrita em vermelho na parede',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/sobremesas-copo-plastico-balcao-marrom_1600x1059.webp',
    alt: 'Sobremesas em copo plástico no balcão',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/mesa-cadeiras-cafe-mensagem-na-parede_1059x1600.webp',
    alt: 'Mesa e cadeiras do café com mensagem na parede',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/placa-oval-branca-a-priori-cafe_1600x991.webp',
    alt: 'Placa oval branca A Priori Café',
  },
  // NOVAS MÍDIAS
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F1.jpg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F2.jpg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F5.jpg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F6.jpg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F7.jpg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F8.jpg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F9.jpg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F10.png',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F11.mp4',
    alt: 'Vídeo A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F12.jpeg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F13.jpeg',
    alt: 'A Priori Café',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe%2Falteracoes%2F14.jpeg',
    alt: 'A Priori Café',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Verifica se o arquivo aberto no lightbox é um vídeo
  const isLightboxVideo = lightbox?.endsWith('.mp4');

  return (
    <section id="galeria" className="py-20 md:py-28 bg-cream-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-burgundy mb-3 block">
            Galeria
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Um Ambiente para Chamar de Seu
          </h2>
          <p className="font-sans text-gray-500 mt-4 max-w-xl mx-auto text-base">
            Conheça nosso espaço e os produtos que preparamos com carinho todos os dias.
          </p>
        </div>

        {/* Grid atualizado para padronização e suporte a vídeos */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-4">
          {images.map((img, i) => {
            const isVideo = img.src.endsWith('.mp4');

            return (
              <div
                key={img.src}
                className="animate-on-scroll relative overflow-hidden rounded-xl cursor-pointer group"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setLightbox(img.src)}
              >
                {isVideo ? (
                  <video
                    src={img.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
                    <p className="font-sans text-xs leading-snug">{img.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <a
            href="https://www.instagram.com/aprioricafecps/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-burgundy text-burgundy font-sans font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-burgundy hover:text-white hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver mais no Instagram @aprioricafe
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-200 z-10"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          
          {isLightboxVideo ? (
            <video
              src={lightbox}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox}
              alt="Mídia ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
}