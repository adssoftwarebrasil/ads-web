import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/guiautos/hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00335F]/95 via-[#00335F]/85 to-[#D7282A]/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Guiauto - Serviços para seu Veículo
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#2BA2CC] font-light max-w-3xl mx-auto">
            Oficina Especializada em Sobral
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Mais de 44 anos de tradição e excelência em serviços automotivos. Mecânica, funilaria, pintura e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#D7282A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b82228] transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#servicos"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
