import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 md:pt-18"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fimg%2Fhero-background.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/85 via-[#020202]/60 to-[#020202]/20"></div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
        <div className="max-w-2xl animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-black/60 border border-[#F97316] rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🏍️</span>
            <span className="text-sm text-white font-medium">
              Mais de 1 ano transformando motos em Roraima
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
            Peças e Serviços Especializados para Sua{' '}
            <span className="text-[#F97316]">Moto</span> em Boa Vista
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-[#D3D6D5] mb-8 leading-relaxed">
            Qualidade, agilidade e preço justo. Atendemos baixa e alta cilindrada desde 2023.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/559591772210?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#DC2626] text-white font-semibold text-base uppercase rounded-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] hover:scale-105 transition-all duration-200"
            >
              <span>SOLICITAR ORÇAMENTO GRÁTIS</span>
              <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
            </a>
            <button
              onClick={() => scrollToSection('produtos')}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-base uppercase rounded-lg hover:bg-white hover:text-black transition-all duration-200"
            >
              <span>VER PRODUTOS</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/60 backdrop-blur-sm border-l-4 border-[#F97316] rounded-lg p-5 hover:bg-black/70 transition-colors">
              <div className="flex items-start space-x-3">
                <MapPin className="lucide lucide-map-pin w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Onde Estamos</h3>
                  <p className="text-[#D3D6D5] text-sm leading-snug">
                    Av. Nossa Sra. de Nazaré, 915 - Asa Branca
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border-l-4 border-[#F97316] rounded-lg p-5 hover:bg-black/70 transition-colors">
              <div className="flex items-start space-x-3">
                <Clock className="lucide lucide-clock w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Funcionamento</h3>
                  <p className="text-[#D3D6D5] text-sm leading-snug">Seg a Sáb: 08:00 às 18:00</p>
                </div>
              </div>
            </div>
            <a
              href="tel:+559591772210"
              className="bg-black/60 backdrop-blur-sm border-l-4 border-[#F97316] rounded-lg p-5 hover:bg-black/70 hover:border-[#DC2626] transition-all cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <Phone className="lucide lucide-phone w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Ligue Agora</h3>
                  <p className="text-[#D3D6D5] text-sm leading-snug">(95) 99177-2210</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
