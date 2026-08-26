import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/8SkNx9f6JxM?autoplay=1&mute=1&loop=1&playlist=8SkNx9f6JxM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="João Braz para Artefacto João Pessoa"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-[100vw] min-h-[100vh] md:w-[177.77vh] md:h-[56.25vw] md:min-w-[177.77vh] md:min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            border: 'none',
          }}
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-white uppercase tracking-wider">13 Anos de Excelência</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Transforme Seus Ambientes<br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Com Elegância e Qualidade
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Referência em pisos e revestimentos de alto padrão em Recife.
          As melhores marcas do mercado em um só lugar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('catalogos')}
            className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Ver Catálogos
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <a
            href="https://wa.me/5581992928284?text=Olá,%20gostaria%20de%20mais%20informações"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
