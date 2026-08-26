import { ChevronDown, ShoppingBag, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/central-da-limpeza/fachada-hero-loja-central-limpeza-utilidades-colorida_1024x1536.webp)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-start justify-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue/20 border border-brand-blue/40 rounded-full text-brand-blue text-xs md:text-sm font-semibold backdrop-blur-sm">
              <MapPin size={12} />
              Pinhais, PR — Desde 2016
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6">
            Tudo para{' '}
            <span className="text-brand-blue">Limpeza</span>{' '}
            e{' '}
            <span className="text-brand-green">Piscinas</span>
          </h1>

          <p className="text-base md:text-xl text-gray-200 leading-relaxed mb-8 md:mb-10 max-w-xl">
            Produtos de limpeza doméstica, empresarial e tratamento de piscinas.
            Atendimento de excelência, loja física e entregas em Pinhais e região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5541999150216?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white font-bold text-base md:text-lg rounded-full hover:bg-brand-green-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              <ShoppingBag size={20} />
              Fale no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold text-base md:text-lg rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Nossos Produtos
            </a>
          </div>

          <div className="mt-10 md:mt-14 flex items-center gap-6 md:gap-8">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-white">+9</span>
              <span className="block text-xs md:text-sm text-gray-300 font-medium">Anos de mercado</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-white">+10</span>
              <span className="block text-xs md:text-sm text-gray-300 font-medium">Marcas parceiras</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-white">100%</span>
              <span className="block text-xs md:text-sm text-gray-300 font-medium">Foco no cliente</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
