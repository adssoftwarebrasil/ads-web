import { ChevronDown, ArrowRight } from 'lucide-react';

const WA_NUMBER = '5564999743169';

export default function Hero() {
  const scrollToServices = () => {
    const el = document.querySelector('#servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/rb_auto_pecas/hero_fachada-loja-auto-pecas-re-vis-o-externa_1440x1920.webp)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Acreúna · Goiás · Desde 2021
          </div>

          <h1 className="font-['Barlow_Condensed'] font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
            PEÇAS &amp;{' '}
            <span className="text-red-500">SERVIÇOS</span>
            <br />
            PARA TODA
            <br />
            <span className="text-white/90">LINHA</span>{' '}
            <span className="text-red-500">DIESEL</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
            Carro, caminhão, camionete e ônibus. Atendimento com experiência desde os anos 90.
            Qualidade, confiança e o melhor preço da região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Olá! Vim pelo site e gostaria de mais informações.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-red-600/40 hover:scale-105 group"
            >
              Falar no WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              Ver Serviços
            </button>
          </div>

          <div className="mt-14 flex items-center gap-8">
            <div className="text-center">
              <span className="block font-['Barlow_Condensed'] font-black text-3xl text-white">+30</span>
              <span className="block text-gray-400 text-xs tracking-wide uppercase mt-0.5">Anos de Exp.</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <span className="block font-['Barlow_Condensed'] font-black text-3xl text-white">2021</span>
              <span className="block text-gray-400 text-xs tracking-wide uppercase mt-0.5">Fundação RB</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <span className="block font-['Barlow_Condensed'] font-black text-3xl text-white">10+</span>
              <span className="block text-gray-400 text-xs tracking-wide uppercase mt-0.5">Cidades</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
