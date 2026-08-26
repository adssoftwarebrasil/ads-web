import { ChevronDown, Shield, Truck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/img/hero-background.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/90 via-[#3069A3]/70 to-[#0D1B2A]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F58842]/20 border border-[#F58842]/40 text-[#F58842] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <Shield size={14} />
          15 Anos de Confiança e Excelência em Marabá – PA
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl">
          Tecnologia que{' '}
          <span className="text-[#F58842]">Funciona de Verdade</span>
          <br className="hidden sm:block" /> para Você e sua Empresa
        </h1>

        <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Assistência técnica especializada, venda de produtos e suprimentos de informática.
          Atendemos residências e empresas com qualidade, agilidade e garantia de 3 meses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="http://wa.me/559491941919"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F58842] hover:bg-[#e07432] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Solicitar Orçamento Grátis
          </a>
          <a
            href="#servicos"
            className="border-2 border-white/60 hover:border-white text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            Ver Nossos Serviços
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { icon: <Shield size={18} />, text: 'Garantia de 3 Meses' },
            { icon: <Truck size={18} />, text: 'Busca e Entrega Grátis' },
            { icon: <Clock size={18} />, text: 'Atendimento Rápido' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <span className="text-[#F58842]">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
