import { MessageCircle } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

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
            'url("https://storage.lucasmendes.dev/site-sp/petshowe%2Fhero.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Cuidados e Beleza para Seu Pet
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Estética Animal de Qualidade em Cascavel
          </p>
          <button
            onClick={() => scrollToSection('contato')}
            className="inline-flex items-center gap-3 bg-[#09b588] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#09b588] transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <MessageCircle size={24} />
            Enviar WhatsApp
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
