import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/starkbarbearia/fachada-barbearia-stark-Hero.webp"
          alt="Fachada Stark Barbearia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60 mb-6 font-medium">
          Sinop — MT
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
          STARK
          <br />
          BARBEARIA
        </h1>
        <p className="text-sm sm:text-base text-white/60 mb-12 font-normal">
          Eleita Melhor Barbearia de Sinop
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
