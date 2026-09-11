import { Phone, MapPin } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=costelaco%2FWhatsApp%20Image%202026-03-05%20at%2011.17.46.jpeg&version_id=null")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Churrasco de <span className="text-[#F7BC33]">Excelência</span>
          <br />
          desde 2014
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Mais de 1000m² de puro sabor, com churrasqueira automática de 20 metros
          e o melhor da carne da região norte do Mato Grosso
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/5566996360441?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-[#F7BC33] text-[#25262A] rounded-full font-bold text-lg hover:bg-[#f8c850] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Phone
              size={24}
              className="group-hover:rotate-12 transition-transform"
            />
            Fazer Reserva
          </a>
          <button
            onClick={() => scrollToSection('services')}
            className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
          >
            Ver Cardápio
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-[#F7BC33]" />
            <span className="text-sm sm:text-base">
              Av. dos Ipês, 356 - Jardim Imperial, Sinop - MT
            </span>
          </div>
          <div className="hidden sm:block text-white/30">|</div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-[#F7BC33]" />
            <span className="text-sm sm:text-base">(66) 99996-0441</span>
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
