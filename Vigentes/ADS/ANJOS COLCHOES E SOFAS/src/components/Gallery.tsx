import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
}

const BASE = 'https://storage.lucasmendes.dev/site-sp/anjoscolchao%2F';

const slides: GalleryItem[][] = [
  [
    { src: `${BASE}sofa1.jpg`, alt: 'Sofás Reclináveis', category: 'SOFÁS', title: 'Sofás Reclináveis' },
    { src: `${BASE}sofa2.jpg`, alt: 'Sofás Modulares', category: 'SOFÁS', title: 'Sofás Modulares' },
    { src: `${BASE}sofa3.jpg`, alt: 'Sofás Retráteis', category: 'SOFÁS', title: 'Sofás Retráteis' },
  ],
  [
    { src: `${BASE}sofa4.jpg`, alt: 'Sofás de Canto', category: 'SOFÁS', title: 'Sofás de Canto' },
    { src: `${BASE}sofa5.jpg`, alt: 'Sofás Elegantes', category: 'SOFÁS', title: 'Sofás Elegantes' },
    { src: `${BASE}sofa6.jpg`, alt: 'Sofás Premium', category: 'SOFÁS', title: 'Sofás Premium' },
  ],
  [
    { src: `${BASE}cama.jpg`, alt: 'Quartos Completos', category: 'QUARTOS', title: 'Quartos Completos' },
    { src: `${BASE}cama1.jpg`, alt: 'Camas Box', category: 'CAMAS', title: 'Camas Box' },
    { src: `${BASE}cama2.jpg`, alt: 'Camas Casal', category: 'CAMAS', title: 'Camas Casal' },
  ],
  [
    { src: `${BASE}cama7.jpg`, alt: 'Quartos Planejados', category: 'QUARTOS', title: 'Quartos Planejados' },
    { src: `${BASE}sodacama.jpg`, alt: 'Sofás-Cama', category: 'SOFÁS-CAMA', title: 'Sofás-Cama' },
    { src: `${BASE}poltrona.jpg`, alt: 'Poltronas', category: 'POLTRONAS', title: 'Poltronas' },
  ],
  [
    { src: `${BASE}img%2Fcadeira-almofada-moderna.webp`, alt: 'Cadeira Almofada Moderna', category: 'DECORAÇÃO', title: 'Cadeira Almofada Moderna' },
    { src: `${BASE}img%2Fcadeira-pufe-madeira.webp`, alt: 'Cadeira Pufe Madeira', category: 'DECORAÇÃO', title: 'Cadeira Pufe Madeira' },
    { src: `${BASE}img%2Fmulher-sentada-sofa.webp`, alt: '', category: 'SOFÁS', title: '' },
  ],
  [
    { src: `${BASE}img%2Fpoltronas-brancas-mesa.webp`, alt: 'Poltronas Brancas Mesa', category: 'POLTRONAS', title: 'Poltronas Brancas Mesa' },
    { src: `${BASE}img%2Fquadros-abstratos-coloridos.webp`, alt: 'Quadros Abstratos Coloridos', category: 'DECORAÇÃO', title: 'Quadros Abstratos Coloridos' },
    { src: `${BASE}img%2Fsala-estar-moderna.webp`, alt: 'Sala Estar Moderna', category: 'AMBIENTES', title: 'Sala Estar Moderna' },
  ],
];

export default function Gallery() {
  const [current, setCurrent] = useState(1);

  const goTo = (index: number) => setCurrent((index + slides.length) % slides.length);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="gallery"
      className="relative py-16 md:py-24 bg-gradient-to-br from-[#004A69] via-[#003D5C] to-[#004A69] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#D1AD6E] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#D1AD6E] rounded-full opacity-10 blur-3xl"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D1AD6E] to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wider px-4">
            Anjos em todos os momentos
          </h2>
          <p className="text-lg md:text-xl text-[#D1AD6E] font-light px-4">
            Ambientes que inspiram conforto e bem-estar
          </p>
        </div>
        <div className="relative px-0 md:px-12 lg:px-16">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-800 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {slide.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="group relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${itemIndex * 0.1}s backwards`,
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#004A69]/95 via-[#004A69]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                          <span className="inline-block text-xs font-semibold text-[#D1AD6E] tracking-widest mb-2 uppercase">
                            {item.category}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border-2 border-[#D1AD6E]/30 rounded-full items-center justify-center hover:bg-[#D1AD6E]/20 hover:border-[#D1AD6E] hover:scale-110 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7 text-[#D1AD6E]" strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border-2 border-[#D1AD6E]/30 rounded-full items-center justify-center hover:bg-[#D1AD6E]/20 hover:border-[#D1AD6E] hover:scale-110 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7 text-[#D1AD6E]" strokeWidth={2.5} />
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`transition-all duration-300 rounded-full border-2 ${
                index === current
                  ? 'w-12 h-3 bg-[#D1AD6E] border-[#D1AD6E] shadow-lg shadow-[#D1AD6E]/50'
                  : 'w-3 h-3 bg-white/30 border-white/30 hover:bg-[#D1AD6E]/60 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
