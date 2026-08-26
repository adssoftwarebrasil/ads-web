import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[rgb(13,111,69)]/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[rgb(197,46,52)]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>2 Unidades em Rondonópolis – MT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Visão Perfeita, <span className="text-[rgb(197,46,52)]">Estilo Sem Limites</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed animate-slide-up-delay">
            Óculos solares, armações graduadas e lentes de alta tecnologia para quem valoriza saúde visual e moda.
            Atendimento humanizado com quem realmente entende seus olhos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
            <a
              href="http://wa.me/556684469577"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[rgb(13,111,69)] hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale Conosco
            </a>
            <button
              onClick={() => scrollTo('produtos')}
              className="flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
            >
              Ver Produtos
            </button>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 animate-slide-up-delay-2">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">16+</div>
              <div className="text-sm text-gray-300 mt-0.5">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-sm text-gray-300 mt-0.5">Unidades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5.0★</div>
              <div className="text-sm text-gray-300 mt-0.5">Avaliação Google</div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}
