import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#010510]">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=showluz%2FNovas%20Imagens%2FFoto%20da%20capa%2Fajax.png&version_id=null')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            30 Anos Iluminando Goiás
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#fff457] leading-relaxed">
            Especialistas em Lâmpadas Especiais para Hospitais, Odontologia e LED
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Qualidade comprovada desde 1996. Referência em soluções de iluminação para o estado de Goiás.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <button
              onClick={scrollToProducts}
              className="bg-[#fff457] text-[#010510] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffe621] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Ver Catálogo
            </button>
            
              <a href="https://wa.me/5562993950049"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#00a6ff] text-[#00a6ff] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00a6ff] hover:text-white transition-all duration-300 hover:scale-105 text-center"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-[#00a6ff] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#00a6ff] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}