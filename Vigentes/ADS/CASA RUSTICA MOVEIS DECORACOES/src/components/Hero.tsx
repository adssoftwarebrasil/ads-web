import { ArrowDown } from 'lucide-react';
import { WHATSAPP_SEND, WhatsAppIcon, scrollToSection } from '../shared';

const HERO_IMG =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=casarustica%2Fherocasarustica.png&version_id=null';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img src={HERO_IMG} alt="Móveis Casa Rústica" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Sofisticação e Durabilidade
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-[rgb(248,177,1)] via-[rgb(255,197,51)] to-[rgb(248,177,1)] bg-clip-text text-transparent">
              Mobiliário em Madeira de Demolição Peroba Rosa
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Nossos móveis são ecologicamente corretos, produzidos com Madeira de Demolição Peroba
            Rosa, possuem alta durabilidade, são personalizados e feitos sob medida para qualquer
            espaço.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16 px-4">
            <button
              onClick={() => scrollToSection('sobre')}
              className="w-full sm:w-auto px-8 py-4 bg-[rgb(5,86,77)] text-white rounded-lg font-medium hover:bg-[rgb(4,70,63)] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Saiba Mais
            </button>
            <a
              href={WHATSAPP_SEND}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[rgb(248,177,1)] text-white rounded-lg font-medium hover:bg-[rgb(228,157,0)] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale no WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-[rgb(5,86,77)]/30 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-[rgb(248,177,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">100% Sustentável</span>
              <span className="text-white/70 text-xs text-center">Madeira de demolição</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-[rgb(5,86,77)]/30 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-[rgb(248,177,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Sob Medida</span>
              <span className="text-white/70 text-xs text-center">Personalização total</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-[rgb(5,86,77)]/30 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-[rgb(248,177,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Alta Durabilidade</span>
              <span className="text-white/70 text-xs text-center">Madeira nobre Peroba Rosa</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
      >
        <ArrowDown className="w-8 h-8 text-white" />
      </button>
    </section>
  );
}
