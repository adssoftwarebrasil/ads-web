import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection } from '../lib/site';

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
            'url("https://storage.lucasmendes.dev/site-sp/expressocarse/hero.png")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start justify-center">
        <div className="max-w-2xl">
          <span className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Referência em Aracaju
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Serviços de <span className="text-red-500">Funilaria</span> e{' '}
            <span className="text-red-500">Pintura</span> Automotiva
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
            Excelência em Estética Automotiva com mais de 10 anos de experiência. Seu veículo
            tratado com dedicação e resultados que impressionam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-red-600/40 hover:scale-105"
            >
              <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
              Enviar WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('servicos')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105"
            >
              Ver Serviços
              <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
