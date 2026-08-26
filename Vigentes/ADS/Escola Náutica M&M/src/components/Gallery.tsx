import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fbarco-vermelho-estacionamento.webp',
      alt: 'Barco vermelho no estacionamento',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fcarro-quadriciclo-jetski.webp',
      alt: 'Veículos e equipamentos',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fjet-ski-reboque.webp',
      alt: 'Jet ski no reboque',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Flancha-vermelha-branca.webp',
      alt: 'Lancha vermelha e branca',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fveiculo-barco-trailer.webp',
      alt: 'Veículo com barco no trailer',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fveiculo-quadriciclo-jetski.webp',
      alt: 'Veículo, quadriciclo e jet ski',
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-[#f5f7fa] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#26367e] mb-4">
            Nossa Frota e Estrutura
          </h2>
          <p className="text-lg text-[#6b7280]">
            Equipamentos modernos e embarcações de qualidade para seu aprendizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#26367e] bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#0caff0] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
