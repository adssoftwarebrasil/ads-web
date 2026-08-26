import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_102752049.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_103226117_HDR.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_103347878.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_103801065.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_110739458.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_114727546.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_114902397.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_115301082.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_115519736.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_115813123_HDR.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_120838392_HDR.webp',
    'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg3%2Fciafibra_img2_IMG_20250828_155538027.webp',
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#D7B46A] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#012E60] opacity-5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D7B46A] to-[#c19e56] rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E60] mb-4">
            Nossos Trabalhos Realizados
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja a qualidade e o capricho que colocamos em cada uniforme que produzimos
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-100"
            >
              <img
                src={image}
                alt={`Trabalho Kaly Agon ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="800"
              />

              <div className="absolute top-3 right-3 bg-[#D7B46A] text-white px-3 py-1 rounded-full text-xs font-bold">
                Ver mais
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-300 z-50"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-300 z-50"
            aria-label="Anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-300 z-50"
            aria-label="Próximo"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-6xl max-h-[90vh] w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage]}
              alt={`Trabalho Kaly Agon ${selectedImage + 1}`}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-white text-sm">
                {selectedImage + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
