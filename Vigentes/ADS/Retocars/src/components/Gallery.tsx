import { MessageCircle, ZoomIn, Award } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fantes-depois1.webp',
      alt: 'Transformação completa de pintura automotiva - Antes e Depois',
      category: 'Pintura'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fantes-depois10.webp',
      alt: 'Reparo de lataria e pintura - Antes e Depois',
      category: 'Lanternagem'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fantes-depois11.webp',
      alt: 'Restauração de veículo danificado - Antes e Depois',
      category: 'Restauração'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fantes-depois12.webp',
      alt: 'Lanternagem profissional - Antes e Depois',
      category: 'Lanternagem'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fantes-depois14.webp',
      alt: 'Recuperação de pintura - Antes e Depois',
      category: 'Pintura'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fantes-depois3.webp',
      alt: 'Serviço de funilaria e pintura - Antes e Depois',
      category: 'Funilaria'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fantes-depois4.webp',
      alt: 'Reparo completo de carroceria - Antes e Depois',
      category: 'Restauração'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fbancos-carro-antes-depois.webp',
      alt: 'Higienização e restauração de bancos - Antes e Depois',
      category: 'Estética'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fantes-depois8.webp',
      alt: 'Transformação automotiva completa - Antes e Depois',
      category: 'Completo'
    }
  ];

  return (
    <section id="galeria" className="relative py-12 md:py-20 overflow-hidden bg-white">
      {/* Background Pattern sutil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fafe05] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fafe05] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fafe05] text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold shadow-lg">
            <Award size={16} className="md:hidden" />
            <Award size={18} className="hidden md:block" />
            <span>Galeria de Transformações</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            Resultados que
            <span 
              className="block text-[#fafe05]" 
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(250, 254, 5, 0.4)'
              }}
            >
              Impressionam
            </span>
          </h2>
          
          <p className="text-sm md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cada veículo conta uma história de transformação. Veja como devolvemos a beleza 
            e a qualidade original dos carros dos nossos clientes.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 md:pt-8">
            <div className="text-center bg-black px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#fafe05]">500+</div>
              <div className="text-xs md:text-sm text-white mt-1">Veículos Restaurados</div>
            </div>
            <div className="text-center bg-black px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#fafe05]">100%</div>
              <div className="text-xs md:text-sm text-white mt-1">Satisfação</div>
            </div>
            <div className="text-center bg-black px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#fafe05]">3+</div>
              <div className="text-xs md:text-sm text-white mt-1">Anos de Excelência</div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl border-2 border-gray-200 hover:border-[#fafe05] transition-all duration-500 bg-white shadow-xl hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-50">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black text-[#fafe05] px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold shadow-lg">
                  {image.category}
                </div>
              </div>

              {/* Badges Antes/Depois */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 flex gap-1.5 md:gap-2 z-10">
                <span className="bg-black text-white px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-bold shadow-xl border-2 border-white/20">
                  Antes
                </span>
                <span className="bg-[#fafe05] text-black px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-bold shadow-xl">
                  Depois
                </span>
              </div>

              {/* Hover Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <button
                  onClick={() => setSelectedImage(image.url)}
                  className="w-full flex items-center justify-center gap-2 bg-[#fafe05] text-black px-3 py-2 md:px-4 md:py-3 rounded-lg font-bold text-sm md:text-base hover:bg-black hover:text-[#fafe05] transition-all duration-300 shadow-lg"
                >
                  <ZoomIn size={16} className="md:hidden" />
                  <ZoomIn size={18} className="hidden md:block" />
                  Ver Detalhes
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#fafe05]/20 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="bg-black border-2 md:border-4 border-[#fafe05] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 md:mb-4">
              Transforme Seu Veículo Hoje
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-8">
              Receba um orçamento personalizado e sem compromisso
            </p>
            
            <a 
              href="https://wa.me/5561982160800?text=Olá! Vi a galeria de trabalhos e gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 bg-[#fafe05] text-black px-8 py-4 md:px-10 md:py-5 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <MessageCircle size={20} className="md:hidden" />
              <MessageCircle size={24} className="hidden md:block" />
              Solicitar Orçamento Grátis
            </a>
            <p className="text-xs md:text-sm text-gray-400 mt-4 md:mt-6">
              ⚡ Resposta rápida • 💯 Sem compromisso • 🔒 Seus dados protegidos
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#fafe05] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}