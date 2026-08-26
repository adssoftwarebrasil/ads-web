import { MessageCircle, ChevronDown, Sparkles, TrendingUp, Shield, Award, Zap, X, Phone } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contacts = [
    {
      number: '5566984082396',
      display: '(66) 98408-2396',
      name: 'Comercial 1',
      type: 'whatsapp'
    },
    {
      number: '5566999383052',
      display: '(66) 99938-3052',
      name: 'Comercial 2',
      type: 'whatsapp'
    },
    {
      number: '5566996892350',
      display: '(66) 99689-2350',
      name: 'Comercial 3',
      type: 'whatsapp'
    },
    {
      number: '5566984080873',
      display: '(66) 98408-0873',
      name: 'Comercial 4',
      type: 'whatsapp'
    }

  ];

  const handleContactClick = (contact: typeof contacts[0]) => {
    if (contact.type === 'whatsapp') {
      const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para comercialização de grãos');
      window.open(`https://wa.me/${contact.number}?text=${message}`, '_blank', 'noopener noreferrer');
    } else if (contact.type === 'phone') {
      window.location.href = `tel:${contact.number}`;
    }
    setIsModalOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 md:pt-[85px] pb-16 md:pb-32"
      >
        {/* Background com Imagem Reduzida e Otimizada */}
        <div className="absolute inset-0">
          {/* Imagem de Fundo com Tamanho Reduzido */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/lamarneto%2Ftrucks-graos-silo.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 45%',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.45) contrast(1.15) saturate(1.1)'
            }}
            aria-hidden="true"
          />

          {/* Overlay Gradiente Premium */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top left, rgba(25, 40, 18, 0.95) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(40, 58, 28, 0.92) 0%, transparent 50%),
                linear-gradient(135deg, 
                  rgba(25, 40, 18, 0.97) 0%, 
                  rgba(35, 50, 25, 0.94) 25%,
                  rgba(50, 70, 30, 0.90) 50%, 
                  rgba(35, 50, 25, 0.93) 75%, 
                  rgba(25, 40, 18, 0.96) 100%
                )
              `
            }}
            aria-hidden="true"
          />

          {/* Vignette Suave */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)'
            }}
            aria-hidden="true"
          />
        </div>

        {/* Efeitos de Luz Premium */}
        <div 
          className="absolute top-[15%] left-[15%] w-[450px] h-[450px] bg-[#fbbf1f] rounded-full opacity-[0.08] blur-[120px] animate-pulse-glow"
          style={{ animationDuration: '7s' }}
          aria-hidden="true"
        />
        <div 
          className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-[#a2c145] rounded-full opacity-[0.08] blur-[110px] animate-pulse-glow"
          style={{ animationDelay: '2s', animationDuration: '9s' }}
          aria-hidden="true"
        />
        <div 
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#faa431] rounded-full opacity-[0.06] blur-[100px] animate-pulse-glow"
          style={{ animationDelay: '4s', animationDuration: '11s' }}
          aria-hidden="true"
        />

        {/* Grid Pattern Minimalista */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          aria-hidden="true"
        />

        {/* Partículas Flutuantes Otimizadas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${18 + Math.random() * 12}s`
              }}
            />
          ))}
        </div>

        {/* Conteúdo Principal */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          {/* Badge Superior Redesenhado */}
          <div
            className={`inline-flex items-center gap-2 md:gap-3 backdrop-blur-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white px-4 md:px-7 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-9 shadow-2xl hover:scale-105 hover:border-white/30 transition-all duration-500 ${
              isVisible ? 'animate-slide-down' : ''
            }`}
            style={{ 
              animationDelay: '0.1s',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            <div className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3.5 py-1 md:py-1.5 bg-gradient-to-r from-[#fbbf1f] via-[#fdd45a] to-[#faa431] rounded-full shadow-lg">
              <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#1a1a1a]" />
              <span className="text-[#1a1a1a] font-black text-[10px] md:text-xs tracking-wider">2009</span>
            </div>
            <span className="tracking-wide font-bold text-[11px] md:text-sm">17 Anos de Excelência</span>
            <div className="relative flex items-center gap-1 md:gap-1.5">
              <Zap className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#a2c145]" />
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#a2c145] rounded-full animate-ping-slow" />
              <div className="absolute right-0 w-1 md:w-1.5 h-1 md:h-1.5 bg-[#a2c145] rounded-full" />
            </div>
          </div>

          {/* Título Principal Ultra Moderno */}
          <h1
            className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px] font-black leading-[1.08] md:leading-[1.02] mb-3 md:mb-6 ${
              isVisible ? 'animate-fade-in-up' : ''
            }`}
            style={{
              animationDelay: '0.3s',
              letterSpacing: '-0.02em'
            }}
          >
            <span 
              className="block mb-1 md:mb-3"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 20%, #ffffff 40%, #f5f5f5 60%, #ffffff 80%, #f8f8f8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.8))',
                backgroundSize: '200% 100%',
                animation: 'shimmer-text 8s ease-in-out infinite'
              }}
            >
              Comercialização de
            </span>
            <span 
              className="block relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #fbbf1f 0%, #fdd45a 25%, #faa431 50%, #fdd45a 75%, #fbbf1f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(251, 191, 31, 0.7)) drop-shadow(0 6px 24px rgba(0,0,0,0.8))',
                backgroundSize: '200% 100%',
                animation: 'shimmer-gold 6s ease-in-out infinite'
              }}
            >
              Grãos Premium
              <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-[#fbbf1f]/8 to-transparent blur-2xl -z-10 animate-pulse-glow" style={{ animationDuration: '4s' }} />
            </span>
          </h1>

          {/* Subtítulo Elegante */}
          <div className="flex items-center justify-center gap-3 md:gap-5 mb-4 md:mb-8">
            <div className="h-[1.5px] w-12 md:w-24 bg-gradient-to-r from-transparent via-[#fbbf1f]/50 to-transparent" />
            <h2
              className={`text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[36px] font-light ${
                isVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ 
                animationDelay: '0.5s',
                letterSpacing: '0.05em',
                textShadow: '0 3px 20px rgba(0,0,0,0.7)'
              }}
            >
              Soluções para Fábricas e Indústrias
            </h2>
            <div className="h-[1.5px] w-12 md:w-24 bg-gradient-to-l from-transparent via-[#fbbf1f]/50 to-transparent" />
          </div>

          {/* Descrição Refinada */}
          <p
            className={`text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] max-w-[850px] mx-auto leading-[1.6] md:leading-[1.8] mb-6 md:mb-14 font-light px-2 ${
              isVisible ? 'animate-fade-in' : ''
            }`}
            style={{ 
              animationDelay: '0.7s', 
              textShadow: '0 2px 16px rgba(0,0,0,0.8)'
            }}
          >
            Especialistas em comercialização de{' '}
            <span className="font-semibold text-white">
              soja, milho, milheto e sorgo
            </span>
            . Qualidade premium, logística eficiente e{' '}
            <span className="font-bold text-[#fbbf1f]" style={{ textShadow: '0 0 20px rgba(251, 191, 31, 0.5)' }}>
              17 anos de tradição
            </span>
            {' '}no agronegócio brasileiro.
          </p>

          {/* Cards de Destaque Modernos */}
          <div
            className={`flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-14 ${
              isVisible ? 'animate-fade-in-scale' : ''
            }`}
            style={{ animationDelay: '0.9s' }}
          >
            {[
              { icon: Shield, text: 'Qualidade Certificada', color: 'from-[#a2c145] to-[#7a9d35]' },
              { icon: TrendingUp, text: 'Entrega Garantida', color: 'from-[#fbbf1f] to-[#f5a623]' },
              { icon: Award, text: 'Preços Competitivos', color: 'from-[#faa431] to-[#f58220]' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative flex items-center justify-center gap-2.5 md:gap-3.5 backdrop-blur-2xl bg-white/8 hover:bg-white/14 px-5 md:px-7 py-2.5 md:py-3.5 rounded-full border border-white/20 hover:border-white/40 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-default w-full sm:w-auto"
                  style={{
                    boxShadow: '0 6px 28px rgba(0,0,0,0.3)',
                    animationDelay: `${0.9 + index * 0.1}s`
                  }}
                >
                  <div className={`p-2 md:p-2.5 rounded-full bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-4 md:w-4.5 h-4 md:h-4.5 text-white" />
                  </div>
                  <span className="font-semibold text-sm md:text-base tracking-wide">{item.text}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>

          {/* Botões de Ação Aprimorados */}
          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-5 justify-center items-stretch sm:items-center mb-3 md:mb-5 px-2 ${
              isVisible ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '1.1s' }}
          >
            {/* Botão WhatsApp Premium */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2.5 md:gap-3.5 bg-gradient-to-r from-[#fbbf1f] via-[#fdd45a] to-[#faa431] text-[#1a1a1a] px-8 md:px-14 py-3.5 md:py-5 rounded-full text-sm md:text-base font-black overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl"
              style={{
                boxShadow: '0 12px 48px rgba(251, 191, 31, 0.5), inset 0 1px 0 rgba(255,255,255,0.5)'
              }}
              aria-label="Solicitar orçamento via WhatsApp"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <div className="relative z-10 flex items-center gap-2.5 md:gap-3.5">
                <div className="p-2 md:p-2.5 bg-white/25 rounded-full group-hover:rotate-12 transition-transform duration-300 shadow-md">
                  <MessageCircle className="w-4.5 md:w-5.5 h-4.5 md:h-5.5" />
                </div>
                <span className="tracking-wide">Solicitar Orçamento</span>
              </div>
              
              <div className="absolute right-5 md:right-7 w-1.5 md:w-2 h-1.5 md:h-2 bg-[#a2c145] rounded-full animate-ping-slow" />
              <div className="absolute right-5 md:right-7 w-1.5 md:w-2 h-1.5 md:h-2 bg-[#a2c145] rounded-full shadow-md" />
            </button>

            {/* Botão Secundário Refinado */}
            <button
              onClick={() => scrollToSection('servicos')}
              className="group relative inline-flex items-center justify-center gap-2 md:gap-3 backdrop-blur-2xl bg-white/8 hover:bg-white/16 border-2 border-white/25 hover:border-white/50 text-white px-8 md:px-12 py-3 md:py-[19px] rounded-full text-sm md:text-base font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 10px 36px rgba(0,0,0,0.4)'
              }}
              aria-label="Conhecer nossos serviços"
            >
              <span className="tracking-wide relative z-10">Nossos Serviços</span>
              <ChevronDown className="w-4 md:w-4.5 h-4 md:h-4.5 group-hover:translate-y-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf1f]/0 via-[#fbbf1f]/12 to-[#fbbf1f]/0 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500" />
            </button>
          </div>

          {/* Estatísticas Premium */}
          <div
            className={`flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-8 md:mt-16 ${
              isVisible ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '1.3s' }}
          >
            {[
              { number: '17+', label: 'Anos de Mercado', color: 'from-[#a2c145] to-[#7a9d35]', icon: Award },
              { number: '500+', label: 'Clientes Ativos', color: 'from-[#faa431] to-[#f58220]', icon: Shield },
              { number: '50k+', label: 'Toneladas/Ano', color: 'from-[#fbbf1f] to-[#f5a623]', icon: TrendingUp }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group flex flex-col items-center gap-2 md:gap-3.5 cursor-default">
                  <div className={`relative flex items-center justify-center w-20 md:w-24 h-20 md:h-24 rounded-xl bg-gradient-to-br ${stat.color} shadow-2xl group-hover:scale-110 transition-all duration-500`}
                    style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.45)' }}
                  >
                    <span className="text-white font-black text-xl md:text-2xl tracking-tight">{stat.number}</span>
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-white/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-2 md:-top-2.5 -right-2 md:-right-2.5 w-8 md:w-9 h-8 md:h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 shadow-md">
                      <Icon className="w-4 md:w-4.5 h-4 md:h-4.5 text-white/90" />
                    </div>
                  </div>
                  <span className="text-white/90 font-semibold text-sm md:text-base text-center max-w-[120px] md:max-w-[140px] leading-snug">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Estilos CSS Otimizados */}
        <style jsx>{`
          @keyframes slide-down {
            from {
              opacity: 0;
              transform: translateY(-40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fade-in-scale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes pulse-glow {
            0%, 100% {
              opacity: 0.06;
              transform: scale(1);
            }
            50% {
              opacity: 0.12;
              transform: scale(1.15);
            }
          }

          @keyframes ping-slow {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            75%, 100% {
              transform: scale(2.2);
              opacity: 0;
            }
          }

          @keyframes scroll-bounce {
            0%, 100% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(14px);
              opacity: 0.2;
            }
          }

          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(8px);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 0.05;
            }
            25% {
              transform: translate(12px, -12px) rotate(90deg);
              opacity: 0.15;
            }
            50% {
              transform: translate(-6px, -24px) rotate(180deg);
              opacity: 0.10;
            }
            75% {
              transform: translate(-12px, -12px) rotate(270deg);
              opacity: 0.15;
            }
          }

          @keyframes shimmer-text {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes shimmer-gold {
            0%, 100% {
              background-position: 0% 50%;
              filter: drop-shadow(0 0 40px rgba(251, 191, 31, 0.7)) drop-shadow(0 6px 24px rgba(0,0,0,0.8)) brightness(1);
            }
            50% {
              background-position: 100% 50%;
              filter: drop-shadow(0 0 60px rgba(251, 191, 31, 0.9)) drop-shadow(0 6px 24px rgba(0,0,0,0.8)) brightness(1.2);
            }
          }

          .animate-slide-down {
            animation: slide-down 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.9s ease-out forwards;
          }

          .animate-fade-in-scale {
            animation: fade-in-scale 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .animate-pulse-glow {
            animation: pulse-glow 7s ease-in-out infinite;
          }

          .animate-ping-slow {
            animation: ping-slow 3.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          .animate-scroll-bounce {
            animation: scroll-bounce 2.8s ease-in-out infinite;
          }

          .animate-bounce-slow {
            animation: bounce-slow 2.3s ease-in-out infinite;
          }

          .animate-float {
            animation: float 22s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[10001] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Título */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#fbbf1f] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Fale Conosco
                </h2>
              </div>
              <p className="text-gray-600 text-sm">
                Escolha uma opção para entrar em contato
              </p>
            </div>

            {/* Lista de Contatos */}
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleContactClick(contact)}
                  className={`w-full ${
                    contact.type === 'phone' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                      : 'bg-gradient-to-r from-[#fbbf1f] to-[#f5b000] hover:from-[#f5b000] hover:to-[#fbbf1f]'
                  } text-white rounded-xl p-4 flex items-center justify-between transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      {contact.type === 'phone' ? (
                        <Phone className="w-5 h-5" />
                      ) : (
                        <MessageCircle className="w-5 h-5" />
                      )}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{contact.name}</div>
                      <div className="text-sm opacity-90">{contact.display}</div>
                    </div>
                  </div>
                  <div className="text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}