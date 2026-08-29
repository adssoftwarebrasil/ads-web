import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

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
            'url("https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=belezaporfernanda%2Fimg%2FWhatsApp%20Image%202025-12-17%20at%2009.53.34.jpeg&version_id=null")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Cuidando da sua
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-pink-400">
              autoestima!
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            Unhas | Cabelos | Maquiagem | Depilação | Cílios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              Agendar Horário
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Conheça nosso trabalho
            </a>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Seg à Sáb de 08:00 às 19:00</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <span className="text-sm font-medium">Centro de Fortaleza</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
