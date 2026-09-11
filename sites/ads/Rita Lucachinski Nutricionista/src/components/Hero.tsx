import { ArrowRight, MessageCircle } from 'lucide-react';
import { scrollToId, openWhatsApp } from '../lib/actions';

const specialties = ['EMAGRECIMENTO', 'CLIMATÉRIO', 'PERFORMANCE', 'BEM-ESTAR', 'QUALIDADE DE VIDA'];

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Fhero-background.png"
          alt="Background Texture"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[rgb(157,111,88)]/40 text-[rgb(157,111,88)] font-normal text-xs tracking-[0.2em] uppercase">
                Nutrição Integrativa
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1]">
                Nutricionista <br />
                <span className="font-normal text-[rgb(157,111,88)]">Rita Lucachinski</span>
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-3 max-w-2xl mx-auto lg:mx-0">
                {specialties.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="block w-2 h-2 rounded-full bg-[rgb(157,111,88)] shrink-0"></span>
                    <span className="text-white font-normal text-lg sm:text-xl lg:text-2xl tracking-wide uppercase">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <button
                onClick={() => scrollToId('contato')}
                className="group flex items-center justify-center gap-3 bg-[rgb(157,111,88)] text-white px-8 py-4 rounded-xl hover:bg-[rgb(137,91,68)] transition-all duration-300 font-normal text-lg tracking-wide shadow-lg hover:shadow-[rgb(157,111,88)]/30 hover:-translate-y-1"
              >
                QUERO AGENDAR
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={openWhatsApp}
                className="group flex items-center justify-center gap-3 border border-[rgb(157,111,88)]/50 text-[rgb(157,111,88)] px-8 py-4 rounded-xl hover:bg-[rgb(157,111,88)]/10 transition-all duration-300 font-normal text-lg tracking-wide"
              >
                <MessageCircle className="w-5 h-5" />
                WHATSAPP
              </button>
            </div>
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400 font-light">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full bg-gray-800 border-2 border-black"></div>
                <div className="w-9 h-9 rounded-full bg-gray-700 border-2 border-black"></div>
                <div className="w-9 h-9 rounded-full bg-gray-600 border-2 border-black"></div>
              </div>
              <p className="tracking-wide">Centenas de pacientes transformados</p>
            </div>
          </div>
          <div className="relative flex justify-center pb-8 lg:pb-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[rgb(177,131,108)]/10 rounded-full blur-3xl -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/80 max-w-[340px] lg:max-w-[460px] w-full transform transition-transform hover:scale-[1.01] duration-500 border border-gray-800/50">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Frita-hero.webp"
                alt="Dra. Rita Lucachinski - Nutricionista"
                className="w-full h-auto object-cover aspect-[3/4]"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:right-4 bg-[#121212] p-5 rounded-xl shadow-2xl animate-fade-in-up hidden sm:block z-20 border border-gray-800">
              <div className="flex items-center gap-4">
                <div className="bg-[rgb(157,111,88)]/20 p-3 rounded-full text-[rgb(157,111,88)]">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-normal uppercase tracking-wider">Especialista em</p>
                  <p className="text-base font-normal text-white">Especialista em Obesidade e&nbsp;Emagrecimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
