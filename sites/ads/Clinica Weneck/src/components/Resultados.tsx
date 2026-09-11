import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Resultados() {
  const images = [
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F6.jpeg&version_id=null',
    'https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Fimgi_17_Antes-e-depois-Clinica-Werneck5.jpg',
    'https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Fimgi_18_Antes-e-depois-Clinica-Werneck.jpg',
    'https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Fimgi_19_Antes-e-depois-Clinica-Werneck2.jpg',
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F7.jpeg&version_id=null',
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F8.jpeg&version_id=null',
    'https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Fdentes-antes-e-depois-paciente.jpg',
    'https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Fpaciente-dentes-antes-e-depois.jpg',
    'https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Ftratamento-antes-e-depois.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleTransition = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    handleTransition(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    handleTransition(newIndex);
  };

  return (
    <section id="resultados" className="py-20 md:py-28 bg-gradient-to-br from-[#003870] via-[#004a8f] to-[#003870] relative overflow-hidden">
      {/* Padrão de fundo decorativo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white text-white" />
              ))}
            </div>
            <span className="text-white/90 font-semibold text-sm">Resultados Comprovados</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Transformações Reais
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Veja os sorrisos que transformamos com excelência e dedicação
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Container principal */}
          <div className="relative">
            {/* Wrapper da imagem com fundo branco */}
            <div className="overflow-hidden rounded-3xl bg-white relative shadow-2xl">
              {/* Loading overlay */}
              <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-300 z-20 ${
                isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}>
                <div className="w-10 h-10 border-4 border-[#f1f5f8] border-t-[#003870] rounded-full animate-spin"></div>
              </div>

              {/* Imagem */}
              <div className="relative w-full h-[300px] md:h-[420px] bg-[#f7f7f7]">
                <img
                  src={images[currentIndex]}
                  alt={`Transformação dental - Antes e depois ${currentIndex + 1}`}
                  className={`w-full h-full object-contain transition-all duration-500 ${
                    isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Badge contador */}
              <div className="absolute top-6 right-6 bg-[#003870] text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                {currentIndex + 1} <span className="text-white/70 font-normal">de</span> {images.length}
              </div>
            </div>

            {/* Botões de navegação externos */}
            <button
              onClick={goToPrevious}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-[#f1f5f8] text-[#003870] p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} className="md:w-6 md:h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-[#f1f5f8] text-[#003870] p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} className="md:w-6 md:h-6" />
            </button>
          </div>

          {/* Indicadores minimalistas */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTransition(index)}
                className="group relative"
                aria-label={`Ir para imagem ${index + 1}`}
              >
                <div className={`transition-all duration-500 rounded-full ${
                  index === currentIndex 
                    ? 'w-10 h-2.5 bg-white shadow-lg shadow-white/30' 
                    : 'w-2.5 h-2.5 bg-white/30 group-hover:bg-white/50 group-hover:w-4'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Seção de confiança */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white text-3xl md:text-4xl font-bold mb-2">30+</div>
              <div className="text-white/80 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white text-3xl md:text-4xl font-bold mb-2">10mil+</div>
              <div className="text-white/80 text-sm">Sorrisos Transformados</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-white/80 text-sm">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}