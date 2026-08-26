import { MapPin, Clock, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/hero-fachada-azul-loja-auto-pecas-silverado_960x1280.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/85 via-brand-black/70 to-brand-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-transparent"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 bg-brand-red"></div>
          <span className="text-brand-red font-semibold text-sm tracking-widest uppercase">
            20 Anos de Experiência
          </span>
          <div className="h-px w-12 bg-brand-red"></div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-shadow-lg mb-6">
          Peças Usadas com <span className="text-brand-red">Qualidade</span>
          <br />e <span className="text-brand-blue-light">Rastreabilidade</span>
        </h1>
        <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-shadow">
          Especialistas em desmontagem e comercialização de peças automotivas usadas. Economia, segurança e
          responsabilidade ambiental em cada peça.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/556634261853"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 shadow-2xl"
          >
            Solicitar Peça via WhatsApp
          </a>
          <button
            onClick={() => scrollTo('produtos')}
            className="border-2 border-white/60 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
          >
            Ver Produtos
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="lucide lucide-map-pin w-4 h-4 text-brand-red flex-shrink-0" />
            <span>Av. Goiânia, 1088 — Rondonópolis/MT</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <Clock className="lucide lucide-clock w-4 h-4 text-brand-red flex-shrink-0" />
            <span>Seg–Sex: 08h às 18h</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down w-8 h-8" />
      </button>
    </section>
  );
}
