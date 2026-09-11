import { useState } from 'react';
import { X, ChevronDown, Image as ImageIcon, Filter } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F1.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F2.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F3.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F4.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F5.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F6.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F7.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F8.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FQuarto%2F9.jpg',
      alt: 'Quarto do Palace Hotel',
      category: 'Acomodações'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FRecepcao%2F1.jpg',
      alt: 'Recepção do Palace Hotel',
      category: 'Recepção'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FRecepcao%2F2.jpg',
      alt: 'Recepção do Palace Hotel',
      category: 'Recepção'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FRecepcao%2F3.jpg',
      alt: 'Recepção do Palace Hotel',
      category: 'Recepção'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FRecepcao%2F4.jpg',
      alt: 'Recepção do Palace Hotel',
      category: 'Recepção'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F1.jpg',
      alt: 'Café da manhã no Palace Hotel',
      category: 'Café da Manhã'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F2.jpg',
      alt: 'Café da manhã no Palace Hotel',
      category: 'Café da Manhã'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F3.jpg',
      alt: 'Café da manhã no Palace Hotel',
      category: 'Café da Manhã'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F4.jpg',
      alt: 'Café da manhã no Palace Hotel',
      category: 'Café da Manhã'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F5.jpg',
      alt: 'Café da manhã no Palace Hotel',
      category: 'Café da Manhã'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FCafe-da-manha%2F6.jpg',
      alt: 'Café da manhã no Palace Hotel',
      category: 'Café da Manhã'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FAuditorio%2F1.jpg',
      alt: 'Auditório do Palace Hotel',
      category: 'Auditório'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FAuditorio%2F2.jpeg',
      alt: 'Auditório do Palace Hotel',
      category: 'Auditório'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FAuditorio%2F3.jpg',
      alt: 'Auditório do Palace Hotel',
      category: 'Auditório'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FAuditorio%2F4.jpg',
      alt: 'Auditório do Palace Hotel',
      category: 'Auditório'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FAuditorio%2F5.jpg',
      alt: 'Auditório do Palace Hotel',
      category: 'Auditório'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FFachada%2FFachada.jpg',
      alt: 'Fachada do Palace Hotel',
      category: 'Estrutura'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/palace-hotel%2FNossaEquipe.jpg',
      alt: 'Nossa Equipe – Palace Hotel',
      category: 'Estrutura'
    }
  ];

  const categories = ['Todos', 'Acomodações', 'Recepção', 'Café da Manhã', 'Auditório', 'Estrutura'];

  const filteredImages = activeFilter === 'Todos'
    ? images
    : images.filter(img => img.category === activeFilter);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredImages.length));
  };

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setVisibleCount(6);
  };

  const remainingImages = filteredImages.length - visibleCount;

  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = cat === 'Todos' ? images.length : images.filter(img => img.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <ImageIcon className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Nossa Galeria
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Conheça Nossos Espaços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore as dependências do Palace Hotel — conforto e qualidade em cada detalhe
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Filtrar por Categoria
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeFilter === category
                      ? 'bg-white/20'
                      : 'bg-gray-100 group-hover:bg-blue-50'
                  }`}>
                    {categoryCounts[category]}
                  </span>
                </span>
                {activeFilter !== category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 text-center">
          <p className="text-sm text-gray-600">
            Exibindo <span className="font-bold text-blue-600">{Math.min(visibleCount, filteredImages.length)}</span> de{' '}
            <span className="font-bold text-gray-900">{filteredImages.length}</span> {filteredImages.length === 1 ? 'imagem' : 'imagens'}
            {activeFilter !== 'Todos' && (
              <span className="ml-1">em <span className="font-semibold">{activeFilter}</span></span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.slice(0, visibleCount).map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-xs font-semibold text-gray-900">{image.category}</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-lg text-gray-500">Nenhuma imagem encontrada nesta categoria</p>
          </div>
        )}

        {visibleCount < filteredImages.length && (
          <div className="mt-16 flex flex-col items-center gap-4">
            <button
              onClick={handleLoadMore}
              className="group relative px-10 py-5 bg-white text-gray-900 font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                <span className="text-lg">Carregar Mais Imagens</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>

            <p className="text-sm text-gray-500 font-medium">
              <span className="text-blue-600">
                +{remainingImages} {remainingImages === 1 ? 'imagem disponível' : 'imagens disponíveis'}
              </span>
            </p>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:rotate-90 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>

          <div className="relative max-w-7xl max-h-full">
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
            Clique fora da imagem para fechar
          </div>
        </div>
      )}
    </section>
  );
}
