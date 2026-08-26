import { Calendar, Award, Headphones, Sparkles } from 'lucide-react';

interface AdvantageCardProps {
  number: string;
  numberColor: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  delay: string;
}

function AdvantageCard({ number, numberColor, icon, iconColor, iconBg, title, description, delay }: AdvantageCardProps) {
  return (
    <div 
      className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 card-hover overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-500"
      style={{
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        animation: 'fade-in-up 0.8s ease-out forwards',
        animationDelay: delay,
        opacity: 0
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${numberColor}05 0%, transparent 100%)`
        }}
      />

      {/* Number Watermark */}
      <div
        className="absolute top-[-10px] md:top-[-15px] right-4 md:right-6 text-[80px] md:text-[110px] font-black opacity-[0.06] select-none transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-110"
        style={{ color: numberColor }}
        aria-hidden="true"
      >
        {number}
      </div>

      {/* Decorative Corner Element */}
      <div 
        className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${numberColor}08, transparent 70%)`
        }}
      />

      <div className="relative z-10">
        {/* Icon Container */}
        <div 
          className="relative inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl mb-4 md:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ 
            background: iconBg,
            boxShadow: `0 8px 24px ${numberColor}20`
          }}
        >
          <div style={{ color: iconColor }}>
            {icon}
          </div>
          
          {/* Icon Glow Effect */}
          <div 
            className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{ background: numberColor }}
          />
        </div>

        {/* Title */}
        <h3 className="text-[#1a1a1a] text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 transition-colors duration-300 group-hover:text-[#324422]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#666666] text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-[#555555]">
          {description}
        </p>

        {/* Hover Indicator */}
        <div className="mt-4 md:mt-6 flex items-center gap-2 text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <span style={{ color: numberColor }}>Saiba mais</span>
          <svg 
            className="w-3 md:w-4 h-3 md:h-4 transition-transform duration-300 group-hover:translate-x-1" 
            style={{ color: numberColor }}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Advantages() {
  return (
    <section id="vantagens" className="relative bg-gradient-to-b from-[#fafafa] to-white py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-[#a2c145] rounded-full opacity-[0.03] blur-3xl" />
      <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-56 md:w-80 h-56 md:h-80 bg-[#fbbf1f] rounded-full opacity-[0.03] blur-3xl" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-[#a2c145]/10 to-[#688631]/10 border border-[#a2c145]/20 text-[#324422] px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 animate-fade-in"
            style={{ 
              letterSpacing: '0.5px',
              boxShadow: '0 4px 12px rgba(162, 193, 69, 0.1)'
            }}
          >
            <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-[#a2c145]" />
            <span>VANTAGENS</span>
          </div>

          {/* Main Title */}
          <h2 
            className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[52px] font-black mb-4 md:mb-6 leading-tight animate-fade-in-up px-4"
            style={{ 
              animationDelay: '0.1s',
              letterSpacing: '-0.02em'
            }}
          >
            Por Que Escolher a{' '}
            <span 
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #a2c145 0%, #688631 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Lamar Neto
              <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-[#a2c145] to-[#688631] rounded-full opacity-30" />
            </span>
          </h2>

          {/* Subtitle */}
          <p 
            className="text-[#666666] text-sm md:text-base lg:text-lg xl:text-xl max-w-[750px] mx-auto leading-relaxed animate-fade-in px-4"
            style={{ animationDelay: '0.2s' }}
          >
            A escolha certa para suprir suas necessidades com{' '}
            <span className="font-semibold text-[#324422]">produtos de qualidade</span> e{' '}
            <span className="font-semibold text-[#324422]">atendimento excepcional</span>
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-transparent via-[#a2c145] to-transparent rounded-full" />
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#a2c145] rounded-full animate-pulse-slow" />
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-l from-transparent via-[#a2c145] to-transparent rounded-full" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          <AdvantageCard
            number="01"
            numberColor="#a2c145"
            icon={<Calendar className="w-6 md:w-8 h-6 md:h-8" strokeWidth={2.5} />}
            iconColor="#ffffff"
            iconBg="linear-gradient(135deg, #a2c145 0%, #7a9d35 100%)"
            title="Experiência Comprovada"
            description="Mais de 17 anos no mercado de grãos, acumulando conhecimento profundo sobre logística, armazenamento e comercialização."
            delay="0s"
          />
          <AdvantageCard
            number="02"
            numberColor="#fbbf1f"
            icon={<Award className="w-6 md:w-8 h-6 md:h-8" strokeWidth={2.5} />}
            iconColor="#ffffff"
            iconBg="linear-gradient(135deg, #fbbf1f 0%, #f5a623 100%)"
            title="Qualidade Garantida"
            description="Grãos rigorosamente selecionados e testados, atendendo aos mais altos padrões do mercado agroindustrial."
            delay="0.1s"
          />
          <AdvantageCard
            number="03"
            numberColor="#faa431"
            icon={<Headphones className="w-6 md:w-8 h-6 md:h-8" strokeWidth={2.5} />}
            iconColor="#ffffff"
            iconBg="linear-gradient(135deg, #faa431 0%, #f58220 100%)"
            title="Atendimento Personalizado"
            description="Foco total nas necessidades específicas de cada cliente, com soluções customizadas e suporte dedicado."
            delay="0.2s"
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-16 animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
          <p className="text-[#666666] text-sm md:text-base mb-4 md:mb-6">
            Está pronto para experimentar a diferença?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#a2c145] to-[#688631] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            style={{
              boxShadow: '0 8px 24px rgba(162, 193, 69, 0.3)'
            }}
          >
            <span>Fale Conosco</span>
            <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }
      `}</style>
    </section>
  );
}