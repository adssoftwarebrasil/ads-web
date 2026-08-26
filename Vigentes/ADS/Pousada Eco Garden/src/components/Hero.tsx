import { MapPin, Clock, Leaf, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('sobre');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background com Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/eco-garden%2Fcasa-noturna-palmeiras.webp)',
          transform: 'scale(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2d1a]/50 via-[#2a2d1a]/40 to-[#2a2d1a]/60"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-0 text-center">
        {/* Logo/Título com animação */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#fbfcf2] mb-4 md:mb-6 tracking-tight leading-tight">
            Eco Garden
          </h1>
        </div>

        {/* Subtítulo Principal */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fbfcf2] mb-2 md:mb-4 font-light leading-tight">
            Seu Refúgio de Tranquilidade
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#cbd01c] mb-4 md:mb-6 font-light leading-tight">
            em Meio à Natureza
          </p>
        </div>

        {/* Descrição */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <p className="text-sm sm:text-base md:text-xl text-[#fbfcf2]/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Pousada em Oliveira - MG | Conforto, aconchego e experiências únicas
            na zona rural
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://wa.me/5537998044453?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20Pousada%20Eco%20Garden."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#cbd01c] text-[#2a2d1a] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#fbfcf2] hover:text-[#2a2d1a] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#cbd01c]/50"
          >
            Reserve Sua Estadia
          </a>
        </div>

        {/* Cards de Informações - Apenas Desktop */}
        <div
          className={`hidden md:grid mt-20 grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="group bg-[#fbfcf2]/95 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#fbfcf2]">
            <div className="bg-[#cbd01c] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-[#2a2d1a]" />
            </div>
            <p className="text-[#2a2d1a] font-bold text-lg mb-1">Localização</p>
            <p className="text-[#2a2d1a]/70 text-sm">Oliveira - MG</p>
          </div>

          <div className="group bg-[#fbfcf2]/95 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#fbfcf2]">
            <div className="bg-[#cbd01c] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-8 h-8 text-[#2a2d1a]" />
            </div>
            <p className="text-[#2a2d1a] font-bold text-lg mb-1">Horário</p>
            <p className="text-[#2a2d1a]/70 text-sm">Seg a Sex 08h-18h</p>
          </div>

          <div className="group bg-[#fbfcf2]/95 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#fbfcf2]">
            <div className="bg-[#cbd01c] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Leaf className="w-8 h-8 text-[#2a2d1a]" />
            </div>
            <p className="text-[#2a2d1a] font-bold text-lg mb-1">Experiência</p>
            <p className="text-[#2a2d1a]/70 text-sm">Desde 2021</p>
          </div>
        </div>
      </div>


    </section>
  );
}