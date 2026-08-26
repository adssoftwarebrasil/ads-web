import { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/img/hero-01.webp",
    "/assets/img/hero02.webp",
    "/assets/img/hero03.webp",
    "/assets/img/hero04.webp",
    "/assets/img/hero05.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Vim através do site da AgroPG e gostaria de mais informações."
    );
    window.open(`https://wa.me/554233230147?text=${message}`, "_blank");
  };

  return (
    <section className="relative bg-[rgb(19,46,78)] overflow-hidden min-h-[65vh] md:min-h-[85vh]">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Banner AgroPG ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(19,46,78)]/90 via-[rgb(19,46,78)]/70 to-[rgb(19,46,78)]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-[rgb(45,156,219)] rounded-full opacity-20 blur-[100px] animate-pulse z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[rgb(242,169,0)] rounded-full opacity-10 blur-[120px] animate-pulse delay-1000 z-0" />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex items-center justify-center min-h-[65vh] md:min-h-[85vh]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-lg">
              <div className="w-2 h-2 bg-[rgb(45,156,219)] rounded-full animate-pulse" />
              <span className="text-white font-semibold text-xs md:text-sm uppercase tracking-wider">
                Mais de 3 anos no mercado
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-2xl">
                Distribuidora de
                <span className="block text-[rgb(45,156,219)] mt-2 drop-shadow-lg">
                  Peças Agrícolas
                </span>
              </h1>
            </div>
            <p className="text-gray-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
              Especialistas em peças para o agronegócio. Oferecemos soluções completas com
              <span className="text-[rgb(78,189,251)] font-bold">
                {" "}
                atendimento especializado
              </span>
              ,
              <span className="text-[rgb(255,191,41)] font-bold">
                {" "}
                estoque robusto{" "}
              </span>
              e entrega ágil em todo o Brasil.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                <svg
                  className="w-5 h-5 text-[rgb(45,156,219)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white text-sm font-bold shadow-black drop-shadow-sm">
                  +12.000 itens
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                <svg
                  className="w-5 h-5 text-[rgb(45,156,219)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white text-sm font-bold shadow-black drop-shadow-sm">
                  Entrega rápida
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                <svg
                  className="w-5 h-5 text-[rgb(45,156,219)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white text-sm font-bold shadow-black drop-shadow-sm">
                  +200 marcas
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center px-4">
              <button
                onClick={handleWhatsApp}
                className="group relative bg-[rgb(45,156,219)] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-lg hover:bg-[rgb(31,78,132)] transition-all duration-300 shadow-xl hover:shadow-[rgb(45,156,219)]/50 hover:scale-105 overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  FALAR NO WHATSAPP
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("produtos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              >
                VER PRODUTOS
              </button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10 max-w-md mx-auto">
              <div>
                <div className="text-[rgb(45,156,219)] text-2xl md:text-3xl font-bold">
                  2.500+
                </div>
                <div className="text-gray-400 text-xs md:text-sm">Clientes atendidos</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-[rgb(242,169,0)] text-2xl md:text-3xl font-bold">
                  12.000+
                </div>
                <div className="text-gray-400 text-xs md:text-sm">Peças em estoque</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden md:block">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
