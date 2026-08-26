import { ChevronRight } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fimg%2Flogo.webp';
const HERO_BG = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fimg2%2Fhero-background.webp';
const WHATSAPP = 'http://wa.me/556696681932';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-6 animate-fade-in">
          <img
            src={LOGO}
            alt="Logo Sensuallizy"
            className="h-32 md:h-48 lg:h-56 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            Lingeries, camisolas e pijamas de alta qualidade.<br className="hidden md:block" />
            Atendimento personalizado e marcas exclusivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E24244] text-white px-8 py-4 rounded-full hover:bg-[#d13d3f] transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-[#E24244]/50 hover:scale-105 w-full sm:w-auto"
            >
              <span>Fale com Nossa Equipe</span>
              <ChevronRight className="lucide lucide-chevron-right w-5 h-5" />
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold text-lg border-2 border-white/30 w-full sm:w-auto"
            >
              <span>Ver Coleção</span>
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-8 justify-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#E24244] flex items-center justify-center text-xl font-bold shadow-lg">9+</div>
              <div className="text-left">
                <p className="text-sm opacity-80">Anos de</p>
                <p className="font-semibold">Experiência</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#E24244] flex items-center justify-center text-xl font-bold shadow-lg">5★</div>
              <div className="text-left">
                <p className="text-sm opacity-80">Avaliação</p>
                <p className="font-semibold">Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
