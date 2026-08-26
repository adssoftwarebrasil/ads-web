import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-eletrico-azul.webp',
      title: 'Motor Elétrico Industrial'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fbobina-motor-eletrico.webp',
      title: 'Rebobinagem de Motor'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-azul-industrial.webp',
      title: 'Motor Industrial'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fbobina-fio-cobre.webp',
      title: 'Bobina de Fio de Cobre'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-eletrico-componentes.webp',
      title: 'Componentes de Motor'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fbomba-azul-industrial.webp',
      title: 'Bomba Industrial'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-bobina-cobre.webp',
      title: 'Motor com Bobina de Cobre'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-eletrico-desmontado.webp',
      title: 'Manutenção de Motor'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fbobina-motor-azul.webp',
      title: 'Bobina de Motor Azul'
    }
  ];

  return (
    <>
      <section id="galeria" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Trabalhos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#01904B] to-[#0379CB] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos serviços realizados com excelência e profissionalismo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
