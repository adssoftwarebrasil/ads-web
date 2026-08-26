import { CheckCircle, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-hero.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 via-[#1E3A8A]/70 to-[#1E3A8A]/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8">
        <div className="max-w-4xl">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
            Atendimento Rápido e Eficiente em{' '}
            <span className="block mt-2">Manaus Baterias</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FCD34D] mb-6 md:mb-8 font-medium tracking-wide">
            Mais de 46 anos de tradição e confiança em Manaus
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
            {[
              '46 Anos de Experiência',
              'Delivery até 23:30',
              'Atendimento 24/7',
              'Marcas Renomadas',
            ].map((usp, index) => (
              <div
                key={index}
                className="glassmorphism px-4 py-3 md:px-6 md:py-4 rounded-lg flex items-center space-x-3"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#FCD34D] flex-shrink-0" />
                <span className="text-white font-semibold text-sm md:text-base">{usp}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-16">
            <a
              href="https://wa.me/5592981059681"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#059669] text-white px-6 py-4 md:px-8 md:py-5 rounded-lg hover:brightness-110 transition-all transform hover:scale-105 text-base md:text-lg font-bold text-center flex items-center justify-center space-x-2"
            >
              <span>SOLICITAR ORÇAMENTO VIA WHATSAPP</span>
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-6 py-4 md:px-8 md:py-5 rounded-lg hover:bg-white hover:text-[#1E3A8A] transition-all text-base md:text-lg font-bold text-center"
            >
              VER NOSSOS SERVIÇOS
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle cursor-pointer hidden md:block"
      >
        <ChevronDown className="w-10 h-10 text-white opacity-80 hover:opacity-100 transition-opacity" />
      </a>
    </section>
  );
}
