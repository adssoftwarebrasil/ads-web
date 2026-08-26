import { Sparkles, Sun, Zap, MessageCircle, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Products() {
  const [currentSlides, setCurrentSlides] = useState({});

  const products = [
    {
      icon: Sparkles,
      title: 'Acessórios para Iluminação',
      description: 'Complementos essenciais e peças de reposição para diversos sistemas de iluminação.',
      images: [
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FAcessorios%2FGroup%20131.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FAcessorios%2FGroup%20132.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FAcessorios%2FGroup%20133.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FAcessorios%2FGroup%20134.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FAcessorios%2FGroup%20135.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FAcessorios%2FGroup%20136.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FAcessorios%2FGroup%20137.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FAcessorios%2FGroup%20138.png'
      ],
      badge: 'Essencial',
      variations: 'Diversos componentes',
      whatsappMessage: 'Olá! Estou interessado(a) nos *Acessórios para Iluminação*. Poderia me apresentar as opções disponíveis?'
    },
    {
      icon: Zap,
      title: 'Fitas LED',
      description: 'Iluminação linear moderna e flexível, ideal para sancas, móveis e decoração de ambientes.',
      images: [
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FFitas-Led%2FGroup%20119.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FFitas-Led%2FGroup%20120.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FFitas-Led%2FGroup%20121.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FFitas-Led%2FGroup%20122.jpg'
      ],
      badge: 'Tendência',
      variations: 'Várias temperaturas de cor',
      whatsappMessage: 'Olá! Estou interessado(a) nas *Fitas LED*. Poderia me apresentar as opções disponíveis?'
    },
    {
      icon: Sun,
      title: 'Lâmpadas Diversas',
      description: 'Uma ampla seleção de lâmpadas de alta qualidade para todas as necessidades residenciais e comerciais.',
      images: [
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20141.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20142.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20143.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20144.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20145.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20146.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20147.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20148.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20149.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLampadas%2FGroup%20150.jpg'
      ],
      badge: 'Variedade',
      variations: 'Diversos modelos e potências',
      whatsappMessage: 'Olá! Estou interessado(a) na variedade de *Lâmpadas*. Poderia me apresentar as opções disponíveis?'
    },
    {
      icon: Sun,
      title: 'Linha Solar',
      description: 'Soluções de iluminação sustentável alimentadas por energia solar. Economia e praticidade para áreas externas.',
      images: [
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLinhaSolar%2FGroup%20139.jpg',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLinhaSolar%2FGroup%20140.jpg'
      ],
      badge: 'Sustentável',
      variations: 'Modelos autônomos',
      whatsappMessage: 'Olá! Estou interessado(a) nos produtos da *Linha Solar*. Poderia me apresentar as opções disponíveis?'
    },
    {
      icon: Zap,
      title: 'Luminárias e Refletores',
      description: 'Equipamentos robustos e eficientes para iluminação geral, de destaque ou grandes áreas internas e externas.',
      images: [
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLumin%C3%A1riasERefletores%2FGroup%20123.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLumin%C3%A1riasERefletores%2FGroup%20124.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLumin%C3%A1riasERefletores%2FGroup%20125.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FLumin%C3%A1riasERefletores%2FGroup%20126.png'
      ],
      badge: 'Alta Potência',
      variations: 'Uso interno e externo',
      whatsappMessage: 'Olá! Estou interessado(a) em *Luminárias e Refletores*. Poderia me apresentar as opções disponíveis?'
    },
    {
      icon: Zap,
      title: 'Reatores',
      description: 'Dispositivos auxiliares essenciais para o funcionamento correto e seguro de tipos específicos de lâmpadas.',
      images: [
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FReatores%2FGroup%20127.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FReatores%2FGroup%20128.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FReatores%2FGroup%20129.png',
        'https://storage.lucasmendes.dev/site-sp/showluz%2FImagensNovasCorrigidas%2FReatores%2FGroup%20130.png'
      ],
      badge: 'Técnico',
      variations: 'Para diferentes aplicações',
      whatsappMessage: 'Olá! Estou interessado(a) em *Reatores*. Poderia me apresentar as opções disponíveis?'
    }
  ];

  const createWhatsAppLink = (message) => {
    const phoneNumber = '5562993950049';
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const nextSlide = (productIndex, totalImages) => {
    setCurrentSlides(prev => ({
      ...prev,
      [productIndex]: ((prev[productIndex] || 0) + 1) % totalImages
    }));
  };

  const prevSlide = (productIndex, totalImages) => {
    setCurrentSlides(prev => ({
      ...prev,
      [productIndex]: ((prev[productIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToSlide = (productIndex, slideIndex) => {
    setCurrentSlides(prev => ({
      ...prev,
      [productIndex]: slideIndex
    }));
  };

  return (
    <section id="produtos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#01A6FF] mb-6">
            Nossos Produtos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de lâmpadas e acessórios para todas as suas necessidades de iluminação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const currentSlide = currentSlides[index] || 0;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-[#FAF35A] relative"
              >
                {/* Badge de Categoria */}
                <div className="absolute top-4 right-4 z-10 bg-[#FAF35A] text-[#01A6FF] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {product.badge}
                </div>

                {/* Slider de Imagens */}
                <div className="aspect-square overflow-hidden bg-gray-100 relative group/slider">
                  {/* Imagens */}
                  <div className="relative w-full h-full">
                    {product.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${product.title} - Imagem ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          imgIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>

                  {/* Setas de Navegação */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevSlide(index, product.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 z-10"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#01A6FF]" />
                      </button>
                      
                      <button
                        onClick={() => nextSlide(index, product.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 z-10"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#01A6FF]" />
                      </button>
                    </>
                  )}

                  {/* Indicadores de Slide */}
                  {product.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {product.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => goToSlide(index, imgIndex)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            imgIndex === currentSlide
                              ? 'bg-[#FAF35A] w-6'
                              : 'bg-white/70 hover:bg-white'
                          }`}
                          aria-label={`Ir para imagem ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 md:p-8">
                  {/* Ícone */}
                  <div className="w-14 h-14 bg-[#01A6FF] rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Badge Em Estoque */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-semibold">
                      <Check className="w-3 h-3" />
                      <span>Em estoque</span>
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Contador de Variações */}
                  <p className="text-sm text-gray-500 mb-4">
                    {product.variations}
                  </p>

                  {/* Separador */}
                  <div className="border-t border-gray-100 my-4"></div>

                  {/* Botão WhatsApp */}
                  <a
                    href={createWhatsAppLink(product.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar sobre ${product.title} via WhatsApp`}
                    className="w-full flex items-center justify-center gap-2 py-3 md:py-4 px-4 md:px-6 bg-[#01A6FF] hover:bg-gradient-to-r hover:from-[#01A6FF] hover:to-[#0C4A6E] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#01A6FF] focus:outline-none group/btn"
                  >
                    <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm md:text-base">Consultar no WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}