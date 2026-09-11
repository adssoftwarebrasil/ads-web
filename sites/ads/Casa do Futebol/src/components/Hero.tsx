import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      // 1. Trocado min-h-screen por min-h-[100svh] para melhor ajuste no celular
      // 2. Adicionado pt-28 pb-16 no mobile (e pt-20 no desktop) para dar espaço ao header
      className="relative min-h-[100svh] flex flex-col justify-end sm:justify-center items-center overflow-hidden pt-28 pb-20 sm:pt-20 sm:pb-12"
    >
      {/* No celular usamos um enquadramento mais fechado da capa, com as cabecas
          das criancas no alto do quadro, para elas nao ficarem atras do texto */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
        style={{
          backgroundImage: `url('/fotos/capa-mobile.jpg')`,
        }}
      />
      {/* No desktop a foto e vertical: com o enquadramento no centro as cabecas
          das criancas ficavam cortadas na borda de cima. Ancorando em 35% da
          altura, o grupo aparece inteiro, do rosto ate a cintura */}
      <div
        className="absolute inset-0 hidden sm:block bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/fotos/capa.jpg')`,
          backgroundPosition: 'center 35%',
        }}
      />

      {/* Escurecimento: no celular quase transparente no topo (onde ficam as
          criancas) e forte embaixo, onde fica o texto */}
      <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-[#363434]/20 from-0% via-[#363434]/85 via-40% to-[#2C4D39]/95" />
      <div className="absolute inset-0 hidden sm:block bg-gradient-to-b from-[#363434]/55 from-0% via-[#363434]/80 via-45% to-[#2C4D39]/93" />

      {/* Removido o flex items-center da div pai e repassado para o section, 
          permitindo que o padding funcione perfeitamente */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="hidden sm:flex justify-center mb-6">
          <img
            src="/logo-casa-do-futebol.png"
            alt="Casa do Futebol"
            className="h-24 sm:h-32 w-auto object-contain [filter:drop-shadow(0_0_2px_rgba(255,255,255,0.95))_drop-shadow(0_4px_10px_rgba(0,0,0,0.55))]"
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-[#236E45]/30 border border-[#236E45]/50 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-[#236E45] rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
            Cuiabá · Mato Grosso
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
          Onde o Futebol{' '}
          <span className="text-[#A3E635]">Transforma</span>{' '}
          Vidas
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
          Formamos crianças e jovens através do esporte, incentivando disciplina, respeito,
          trabalho em equipe e paixão pelo futebol em um ambiente seguro, acolhedor e preparado
          para o desenvolvimento de cada atleta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/556581172880?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20do%20Futebol."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#236E45] hover:bg-[#2C4D39] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#236E45]/40 hover:shadow-xl text-base"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </a>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base backdrop-blur-sm"
          >
            Conheça nossos serviços
          </button>
        </div>

        {/* Estatísticas */}
        <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto">
          {[
            { value: '6+', label: 'Anos no mercado' },
            { value: '4.6', label: 'Avaliação Google' },
            { value: '100%', label: 'Qualidade garantida' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#236E45]">{stat.value}</div>
              <div className="text-white/70 text-xs sm:text-sm mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}