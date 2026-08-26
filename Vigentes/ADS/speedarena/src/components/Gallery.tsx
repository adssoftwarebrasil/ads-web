import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Gallery() {
  // Estado para controlar quantas imagens mostrar. Começamos com 6.
  const [visibleCount, setVisibleCount] = useState(6); 
  
  const images = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4026_1_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4036_2_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4070_3_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4132_4_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4137_5_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4156_6_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4188_7_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4201_8_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4256_9_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4268_10_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4269_11_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4273_12_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4306_13_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4319_14_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4332_29_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4337_30_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4340_31_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4355_32_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4358_33_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4370_34_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4373_35_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4375_36_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4394_37_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4421_38_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4422_39_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4424_40_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4452_28_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4509_41_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4516_42_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4568_43_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4587_44_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4601_45_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4634_46_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4669_47_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4692_48_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4698_49_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4713_50_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4726_51_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4753_52_11zon.jpg',
    alt: ''
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/speedarena%2Fgaleria%2FIMG_4769_53_11zon.jpg',
    alt: ''
  }
  ];

  // Exibe apenas as imagens até o `visibleCount`
  const displayedImages = images.slice(0, visibleCount);
  
  // Verifica se ainda há imagens para carregar
  const hasMoreImages = visibleCount < images.length;
  
  // Função para carregar mais 6 imagens
  const loadMoreImages = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };
  
  // Função para carregar todas as imagens
  const loadAllImages = () => {
    setVisibleCount(images.length);
  };

  // Função para redefinir para 6 imagens (Ver Menos)
  const showLessImages = () => {
    setVisibleCount(6);
  };

  // Determina se o botão "Ver Menos" deve ser exibido (se mais de 6 imagens estiverem visíveis)
  const showLessButton = visibleCount > 6;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Nossa Arena
          </h2>
          <p className="text-xl text-gray-600 mt-2">
            Conheça nossos espaços e ambiente
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
              <img
                src={image.url}
                alt={image.alt || `Imagem da Galeria ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          {/* Botão "Ver Mais Fotos" (carrega mais 6) */}
          {hasMoreImages && (
            <button
              onClick={loadMoreImages}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
            >
              Ver Mais Fotos
              <ChevronDown className="w-5 h-5" />
            </button>
          )}

          {/* Botão "Ver Todas" (opcional, carrega todas de uma vez) */}
          {/*
          {hasMoreImages && (
            <button
              onClick={loadAllImages}
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary-light transition-all shadow-lg"
            >
              Ver Todas
              <ChevronDown className="w-5 h-5" />
            </button>
          )}
          */}
          
          {/* Botão "Ver Menos" (volta para 6) */}
          {showLessButton && (
            <button
              onClick={showLessImages}
              className="inline-flex items-center gap-2 border border-gray-400 text-gray-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Ver Menos
              <ChevronUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}