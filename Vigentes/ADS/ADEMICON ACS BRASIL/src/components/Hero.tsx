export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="inicio" className="relative text-white overflow-hidden h-screen flex items-center">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 bg-[rgb(87,168,45)]">
        <img
          src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg%2Facs_img_vista-traseira-da-familia-abracando-e-admirando-sua-casa.jpg&version_id=null"
          alt="Família realizando sonho da casa própria"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Overlay com gradiente das cores da marca */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(87,168,45)]/95 via-[rgb(87,168,45)]/90 to-[rgb(253,192,20)]/85"></div>
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-4 md:mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-bold shadow-lg border border-white/30">
              ACS BRASIL CONSÓRCIOS
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-2xl px-2">
            Consórcios feitos com segurança,
            <span className="block text-[rgb(253,192,20)] mt-1 md:mt-2">
              pensados em você
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 text-white/95 font-medium max-w-3xl mx-auto drop-shadow-lg px-4">
            Mais segurança. Mais confiança. Mais você.
          </p>
          
          {/* Categorias Clicáveis */}
          <div className="mb-6 md:mb-10">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <button
                onClick={() => scrollToSection('imoveis')}
                className="group flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-white/30 hover:bg-white hover:border-white transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
              >
                <span className="text-xl md:text-3xl">🏠</span>
                <span className="font-bold text-sm md:text-lg group-hover:text-[rgb(87,168,45)] transition-colors whitespace-nowrap">Imóveis</span>
              </button>
              <button
                onClick={() => scrollToSection('veiculos')}
                className="group flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-white/30 hover:bg-white hover:border-white transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
              >
                <span className="text-xl md:text-3xl">🚗</span>
                <span className="font-bold text-sm md:text-lg group-hover:text-[rgb(87,168,45)] transition-colors whitespace-nowrap">Veículos</span>
              </button>
              <button
                onClick={() => scrollToSection('agro')}
                className="group flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-white/30 hover:bg-white hover:border-white transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
              >
                <span className="text-xl md:text-3xl">🚜</span>
                <span className="font-bold text-sm md:text-lg group-hover:text-[rgb(87,168,45)] transition-colors whitespace-nowrap">Agro</span>
              </button>
              <button
                onClick={() => scrollToSection('nautica')}
                className="group flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-white/30 hover:bg-white hover:border-white transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
              >
                <span className="text-xl md:text-3xl">⛵</span>
                <span className="font-bold text-sm md:text-lg group-hover:text-[rgb(87,168,45)] transition-colors whitespace-nowrap">Náutica</span>
              </button>
              <button
                onClick={() => scrollToSection('caminhoes')}
                className="group flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-white/30 hover:bg-white hover:border-white transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
              >
                <span className="text-xl md:text-3xl">🚛</span>
                <span className="font-bold text-sm md:text-lg group-hover:text-[rgb(87,168,45)] transition-colors whitespace-nowrap">Caminhões</span>
              </button>
            </div>
          </div>
          
          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button
              onClick={() => scrollToSection('contato')}
              className="group bg-white text-[rgb(87,168,45)] px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl flex items-center justify-center gap-2"
            >
              <span>Simule Agora</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="bg-transparent border-3 border-white text-white px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-[rgb(87,168,45)] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-xl"
            >
              Saiba Mais
            </button>
          </div>
          
          {/* Indicador de scroll */}
          <div className="mt-8 md:mt-16 hidden sm:block">
            <div className="flex flex-col items-center gap-2 text-white/80">
              <span className="text-xs md:text-sm font-medium">Role para baixo</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradiente inferior para transição suave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}