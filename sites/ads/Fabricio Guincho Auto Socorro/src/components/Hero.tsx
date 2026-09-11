import { Phone, Clock, MapPin, ChevronDown } from 'lucide-react';
import { WhatsAppGlyph, LightningGlyph, WHATSAPP_URL } from './icons';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/gabricioguincho%2Fhero.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(211,66%,20%)]/95 via-[hsl(211,66%,25%)]/85 to-[hsl(211,66%,35%)]/75"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F97316] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(211,66%,50%)] rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 mb-8 animate-fade-in-down">
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-[#10B981] rounded-full absolute"></div>
            <span className="text-white text-sm md:text-base font-semibold ml-2">Disponível Agora</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in">
            Serviços de Reboque<span className="block text-[#F97316] mt-2">Especializados</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            Assistência Automotiva Rápida e Segura em Franca e Região
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-400">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto bg-gradient-to-r from-[#F97316] to-[#ea580c] text-white px-8 md:px-10 py-4 md:py-5 rounded-full hover:shadow-2xl hover:shadow-[#F97316]/50 transition-all duration-300 hover:scale-105 font-bold text-base md:text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <WhatsAppGlyph className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Solicitar Guincho Agora
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="tel:+5516991837044"
              className="group w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 font-bold text-base md:text-lg border-2 border-white/30 hover:border-white/50 hover:scale-105"
            >
              <Phone
                width={24}
                height={24}
                className="lucide lucide-phone w-6 h-6 group-hover:animate-bounce"
              />
              (16) 99183-7044
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-in animation-delay-600">
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="bg-[#F97316]/20 p-2 rounded-lg group-hover:bg-[#F97316]/30 transition-colors">
                  <Clock width={24} height={24} className="lucide lucide-clock w-6 h-6 text-[#F97316]" />
                </div>
              </div>
              <p className="text-white font-semibold text-sm md:text-base">7h até 23h30</p>
              <p className="text-gray-300 text-xs md:text-sm">Todos os dias</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="bg-[#10B981]/20 p-2 rounded-lg group-hover:bg-[#10B981]/30 transition-colors">
                  <LightningGlyph className="w-6 h-6 text-[#10B981]" />
                </div>
              </div>
              <p className="text-white font-semibold text-sm md:text-base">Resposta Rápida</p>
              <p className="text-gray-300 text-xs md:text-sm">Chegamos em minutos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="bg-[hsl(211,66%,50%)]/20 p-2 rounded-lg group-hover:bg-[hsl(211,66%,50%)]/30 transition-colors">
                  <MapPin width={24} height={24} className="lucide lucide-map-pin w-6 h-6 text-[hsl(211,66%,60%)]" />
                </div>
              </div>
              <p className="text-white font-semibold text-sm md:text-base">Franca e Região</p>
              <p className="text-gray-300 text-xs md:text-sm">Cobertura completa</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown width={24} height={24} className="lucide lucide-chevron-down w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
