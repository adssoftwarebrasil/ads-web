import { ArrowRight, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#021D46]/95 to-[#021D46]/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transferimos seu veículo em <span className="text-[#FA1213]">até 24h</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#B7AF92] mb-8 font-light">
            Soluções completas em despachante veicular em Foz do Iguaçu
          </p>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Atendimento ágil, seguro e transparente. Parcelamos seus débitos em até 18x nos cartões.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="http://wa.me/5545999661849"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-[#FA1213] text-white font-semibold rounded-full hover:bg-[#d10f10] transition-all duration-300 hover:scale-105 shadow-2xl text-lg"
            >
              Solicite um Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </a>
            <a
              href="tel:+5545999661849"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/30 text-lg"
            >
              (45) 99966-1849
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
              <Clock className="text-[#B7AF92] flex-shrink-0" size={28} />
              <span className="text-white font-medium">Segunda a Sexta: 8h às 17h30</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
              <MapPin className="text-[#B7AF92] flex-shrink-0" size={28} />
              <span className="text-white font-medium">Foz do Iguaçu - PR</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
