import { Zap, Shield, Clock, MessageCircle, ChevronDown } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const badges = [
  { Icon: Shield, label: 'Baterias Originais', color: 'text-green-400' },
  { Icon: Clock, label: 'Instalação Rápida', color: 'text-blue-400' },
  { Icon: Zap, label: 'Socorro 24h', color: 'text-[rgb(250,204,21)]' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(32, 44, 133, 0.85) 0%, rgba(32, 44, 133, 0.65) 50%, rgba(193, 58, 58, 0.25) 100%), url("https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fimg%2Fhero.webp")',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0px)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8 animate-fade-in">
            <Zap className="lucide lucide-zap w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium whitespace-nowrap">
              Mais de 11 anos de experiência
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 md:mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Venda de Baterias
            <br />
            <span className="inline-block mt-2 px-3 rounded-lg bg-[rgb(250,204,21)] text-black">
              em Goiânia
            </span>
          </h1>
          <p
            className="text-base md:text-xl lg:text-2xl xl:text-3xl mb-8 md:mb-12 opacity-95 font-light max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Qualidade e Atendimento Especializado
          </p>
          <div
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12 animate-fade-in-up px-4"
            style={{ animationDelay: '0.3s' }}
          >
            {badges.map(({ Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 md:px-5 py-2 md:py-3 border border-white/20"
              >
                <Icon
                  className={`lucide w-4 md:w-5 h-4 md:h-5 ${color} flex-shrink-0`}
                />
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div
            className="animate-fade-in-up px-4"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={() => openWhatsApp()}
              className="group relative inline-flex items-center gap-2 md:gap-3 bg-[rgb(250,204,21)] text-black px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ boxShadow: 'rgba(250, 204, 21, 0.4) 0px 0px 20px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <MessageCircle className="lucide lucide-message-circle w-5 md:w-6 h-5 md:h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
              <span className="relative z-10">Fale Conosco no WhatsApp</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></div>
            </button>
            <p className="text-xs md:text-sm mt-3 md:mt-4 opacity-80">
              Atendimento rápido e personalizado
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <span className="text-white text-xs uppercase tracking-wider opacity-70">
          Role para baixo
        </span>
        <div className="animate-bounce-slow">
          <ChevronDown className="lucide lucide-chevron-down w-8 h-8 text-white opacity-80" />
        </div>
      </div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-[rgb(250,204,21)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-40 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      ></div>
    </section>
  );
}
