import { MessageCircle, Sparkles, Eye, X } from 'lucide-react';
import { useState } from 'react';

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const galleryItems = [
    {
      image: 'https://storage.lucasmendes.dev/site-sp/showluz%2FLED.png',
      title: 'LED',
      category: 'Tecnologia',
      whatsappMessage: 'Olá! Gostaria de conhecer mais sobre as *Lâmpadas LED*. Poderia me apresentar os modelos disponíveis?'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/showluz%2FFOCO%20CIR%C3%9ARGICO.png',
      title: 'Foco Cirúrgico',
      category: 'Hospitalar',
      whatsappMessage: 'Olá! Tenho interesse em *Lâmpadas para Foco Cirúrgico*. Poderia me apresentar as opções disponíveis?'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/showluz%2FFITA%20LED.png',
      title: 'Fita LED',
      category: 'Decoração',
      whatsappMessage: 'Olá! Estou interessado(a) em *Fita LED*. Poderia me apresentar as opções disponíveis?'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/showluz%2FUV.png',
      title: 'UV',
      category: 'Especializada',
      whatsappMessage: 'Olá! Preciso de *Lâmpadas UV*. Poderia me apresentar as opções disponíveis?'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/showluz%2FVELA%20CHAMA.png',
      title: 'Vela Chama',
      category: 'Decorativa',
      whatsappMessage: 'Olá! Estou interessado(a) em *Lâmpadas Vela Chama*. Poderia me apresentar as opções disponíveis?'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/showluz%2FCARBONO.png',
      title: 'Carbono',
      category: 'Vintage',
      whatsappMessage: 'Olá! Gostaria de conhecer as *Lâmpadas de Carbono*. Poderia me apresentar as opções disponíveis?'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/showluz%2FCIRCULAR.png',
      title: 'Circular',
      category: 'Comercial',
      whatsappMessage: 'Olá! Tenho interesse em *Lâmpadas Circulares*. Poderia me apresentar as opções disponíveis?'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/showluz%2FGELADEIRA.png',
      title: 'Geladeira',
      category: 'Utilidade',
      whatsappMessage: 'Olá! Preciso de *Lâmpadas para Geladeira*. Poderia me apresentar as opções disponíveis?'
    }
  ];

  const createWhatsAppLink = (message) => {
    const phoneNumber = '5562993950049';
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Efeito de Background Decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FAF35A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#01A6FF] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da Seção */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#01A6FF]/10 backdrop-blur-sm border border-[#01A6FF]/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#FAF35A]" />
            <span className="text-[#01A6FF] text-sm font-semibold">Catálogo Completo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Variedade de Produtos
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore nossa ampla seleção de lâmpadas para todas as aplicações. Cada produto com garantia de qualidade.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-[#01A6FF]/50 transition-all duration-500 shadow-lg hover:shadow-[#01A6FF]/20 hover:shadow-2xl"
            >
              {/* Badge de Categoria */}
              <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-[#FAF35A] text-xs font-semibold">{item.category}</span>
              </div>

              {/* Imagem do Produto */}
              <img
                src={item.image}
                alt={`${item.title} - Show Luz Goiânia`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              {/* Overlay com Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 transform transition-all duration-300">
                {/* Título */}
                <h3 className="text-white font-bold text-base md:text-xl mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Botões de Ação */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {/* Botão WhatsApp */}
                  <a
                    href={createWhatsAppLink(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar ${item.title} via WhatsApp`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs md:text-sm font-semibold py-2 md:py-2.5 px-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#25D366]/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Consultar</span>
                    <span className="sm:hidden">Chat</span>
                  </a>

                  {/* Botão Ver Detalhes */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(item);
                    }}
                    className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-2.5 rounded-lg transition-all duration-300 hover:scale-105 border border-white/20"
                    aria-label={`Ver detalhes de ${item.title}`}
                  >
                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>

              {/* Indicador de Hover */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-[#FAF35A] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-[#FAF35A]/70 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#01A6FF]/10 rounded-full mb-4">
              <MessageCircle className="w-7 h-7 text-[#01A6FF]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Nossa equipe está pronta para ajudar você a encontrar a lâmpada ideal para sua necessidade específica.
            </p>
            <a
              href={createWhatsAppLink('Olá! Estou procurando um produto específico. Poderia me ajudar?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FAF35A] to-[#f0e94a] text-[#01A6FF] px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#FAF35A]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>

      {/* Modal de Visualização */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/10"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Conteúdo do Modal */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagem */}
              <div className="relative aspect-square md:aspect-auto bg-gray-900/50 flex items-center justify-center p-8">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-contain max-h-[500px]"
                />
                {/* Badge de Categoria no Modal */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-[#FAF35A] text-sm font-semibold">{selectedProduct.category}</span>
                </div>
              </div>

              {/* Informações */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {selectedProduct.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-semibold">Disponível em estoque</span>
                  </div>

                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                    Lâmpada especializada da categoria <span className="text-[#FAF35A] font-semibold">{selectedProduct.category}</span>. 
                    Consulte nossa equipe para mais informações sobre modelos, especificações técnicas e disponibilidade.
                  </p>

                  {/* Diferenciais */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-[#01A6FF]/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#01A6FF] rounded-full"></div>
                      </div>
                      <span className="text-sm md:text-base">Garantia de qualidade Show Luz</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-[#01A6FF]/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#01A6FF] rounded-full"></div>
                      </div>
                      <span className="text-sm md:text-base">30 anos de experiência no mercado</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-[#01A6FF]/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#01A6FF] rounded-full"></div>
                      </div>
                      <span className="text-sm md:text-base">Atendimento especializado</span>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação no Modal */}
                <div className="space-y-3">
                  <a
                    href={createWhatsAppLink(selectedProduct.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#25D366]/50"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar via WhatsApp
                  </a>
                  
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 border border-white/20"
                  >
                    Continuar Navegando
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}