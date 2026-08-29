import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/solo-eng%2Fescavadeira-amarela-terreno.webp',
      alt: 'Escavadeira amarela em terreno',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/solo-eng%2Fescavadeira-caminhao-construcao.webp',
      alt: 'Escavadeira e caminhão em construção',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/solo-eng%2Fescavadeira-terreno-vermelho.webp',
      alt: 'Escavadeira em terreno vermelho',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/solo-eng%2Fescavadeiras-amarelas-construcao.webp',
      alt: 'Escavadeiras amarelas em construção',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/solo-eng%2Fconstrucao-escavadeira-trator-terra.webp',
      alt: 'Construção com escavadeira, trator e terra',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/solo-eng%2Fconstrucao-maquinas-obra.webp',
      alt: 'Construção com máquinas de obra',
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#cec643]/10 rounded-full">
            <span className="text-[#6c6d71] font-semibold text-sm uppercase tracking-wide">
              Galeria
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6c6d71] mb-6 leading-tight">
            Nosso Trabalho em{' '}
            <span className="text-[#cec643]">Ação</span>
          </h2>

          <p className="text-lg text-gray-700">
            Veja nossos equipamentos de última geração e a qualidade da execução
            dos nossos projetos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6c6d71]/80 via-[#6c6d71]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Ver Imagem</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/soloengengenhariadesolos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#6c6d71] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#5a5b5f] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Mais no Instagram
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#cec643] transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
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
