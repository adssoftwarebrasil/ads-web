import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/petexotic%2Fhero.jpeg"
          alt="Pet Exotic - Cuidado com animais exóticos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Cuidado Especializado para seu Pet Exótico
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-green-100 mb-8 font-light">
            Veterinária especializada em aves, coelhos, hamsters, porquinhos da índia e répteis
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/556283177646"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#3A9E3E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Calendar className="lucide lucide-calendar" width={24} height={24} />
              Agendar Consulta
              <ArrowRight
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.instagram.com/consultorio_petexotic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Conheça nosso Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
