import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2Ffachada.webp&version_id=null',
    caption: 'Nossa Fachada',
  },
  {
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2Fdentro-da-clinica.webp&version_id=null',
    caption: 'Ambiente Limpo e Confortável',
  },
  {
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2FAtendimento-Humanizado.webp&version_id=null',
    caption: 'Atendimento Humanizado',
  },
  {
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2FCuidado-Personalizado.webp&version_id=null',
    caption: 'Cuidado Personalizado',
  },
  {
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2FDiagn%C3%B3sticos-Precisos.webp&version_id=null',
    caption: 'Tecnologia Avançada',
  },
  {
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2Fdiagnostico-preciso.jpeg&version_id=null',
    caption: 'Diagnósticos Precisos',
  },
];

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + images.length) % images.length;
      visible.push({ ...images[index], position: i });
    }
    return visible;
  };

  return (
    <section id="sobre" className="bg-gradient-to-b from-[#fefefe] to-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d4a3e] mb-4">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-lg md:text-xl text-[#a6a9a5] max-w-3xl mx-auto">
            Ambiente moderno e acolhedor para o seu conforto
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:flex items-center justify-center gap-8 mb-8">
            {getVisibleImages().map((img, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  img.position === 0
                    ? 'w-[500px] h-[350px] z-20 scale-100'
                    : 'w-[350px] h-[250px] z-10 scale-90 opacity-60'
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-semibold text-center">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden relative rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white font-semibold text-center">
                {images[currentIndex].caption}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="bg-[#f37f1a] text-white p-3 rounded-full hover:bg-[#d97015] transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#f37f1a] w-8'
                      : 'bg-[#a6a9a5] hover:bg-[#f37f1a]'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-[#f37f1a] text-white p-3 rounded-full hover:bg-[#d97015] transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
