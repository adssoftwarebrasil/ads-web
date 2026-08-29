import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage:
              'url("https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=calderan-palace%2Fimage%2049.png&version_id=null")',
            backgroundPosition: 'center 40%',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px] text-center">
        <p className="text-[#F09100] text-xs sm:text-sm uppercase tracking-[3px] font-semibold mb-4 animate-fadeInUp">
          Hospedagem de Excelência em Jardim-MS
        </p>
        <h1
          className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp leading-tight"
          style={{ animationDelay: '0.2s' }}
        >
          Calderan Palace Hotel
        </h1>
        <p
          className="text-white/95 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeInUp drop-shadow-lg"
          style={{ animationDelay: '0.4s' }}
        >
          Há mais de 25 anos oferecendo conforto, qualidade e a melhor localização para sua estadia
          no coração do Mato Grosso do Sul.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="https://wa.me/5567996712871?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F09100] text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-[#D98200] hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            Reserve pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:scale-105 active:scale-95"
          >
            Conheça Nossa Estrutura
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce lg:bottom-24">
        <ChevronDown size={32} className="text-white drop-shadow-lg" />
      </div>
    </section>
  );
}
