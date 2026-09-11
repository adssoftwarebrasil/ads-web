import { Sparkles, Leaf, Heart } from 'lucide-react';

const Hero = () => {
  const handleScrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5EEEB 0%, #FFFFFF 50%, #FFDCDE 100%)',
      }}
    >

      {/* Padrão decorativo de fundo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20 Q25 15 20 20 T30 30 Q35 25 30 20 M40 10 Q35 5 30 10 T40 20 Q45 15 40 10' stroke='%23A88D83' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Elementos flutuantes melhorados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {/* Grupo 1 - Superior Esquerda */}
        <div
          className="absolute top-24 md:top-32 left-[5%] md:left-[8%] animate-float opacity-[0.08]"
          style={{ animationDelay: '0s', animationDuration: '6s' }}
        >
          <Leaf size={32} className="text-[#A88D83] md:w-12 md:h-12" strokeWidth={1.5} />
        </div>
        
        {/* Grupo 2 - Superior Direita */}
        <div
          className="absolute top-28 md:top-40 right-[5%] md:right-[8%] animate-float opacity-[0.06]"
          style={{ animationDelay: '1.2s', animationDuration: '7s' }}
        >
          <Sparkles size={28} className="text-[#FFB5B8] md:w-10 md:h-10" strokeWidth={1.5} />
        </div>

        {/* Grupo 3 - Centro Esquerda - Hidden on small mobile */}
        <div
          className="hidden sm:block absolute top-[45%] left-[8%] md:left-[10%] animate-float opacity-[0.05]"
          style={{ animationDelay: '2.5s', animationDuration: '8s' }}
        >
          <Heart size={28} className="text-[#FFB5B8] md:w-9 md:h-9" strokeWidth={1.5} />
        </div>
        
        {/* Grupo 4 - Centro Direita - Hidden on small mobile */}
        <div
          className="hidden sm:block absolute top-[40%] right-[10%] md:right-[12%] animate-float opacity-[0.07]"
          style={{ animationDelay: '1.8s', animationDuration: '6.5s' }}
        >
          <Leaf size={26} className="text-[#A88D83] md:w-8 md:h-8" strokeWidth={1.5} />
        </div>

        {/* Grupo 5 - Inferior Esquerda */}
        <div
          className="absolute bottom-20 md:bottom-28 left-[10%] md:left-[15%] animate-float opacity-[0.06]"
          style={{ animationDelay: '3s', animationDuration: '7.5s' }}
        >
          <Sparkles size={30} className="text-[#A88D83] md:w-10 md:h-10" strokeWidth={1.5} />
        </div>

        {/* Grupo 6 - Inferior Direita */}
        <div
          className="hidden sm:block absolute bottom-24 md:bottom-36 right-[12%] md:right-[18%] animate-float opacity-[0.05]"
          style={{ animationDelay: '0.8s', animationDuration: '8.5s' }}
        >
          <Leaf size={32} className="text-[#FFB5B8] md:w-10 md:h-10" strokeWidth={1.5} />
        </div>

        {/* Elementos menores para preencher espaços - Desktop only */}
        <div
          className="hidden lg:block absolute top-[25%] left-[25%] animate-float opacity-[0.04]"
          style={{ animationDelay: '2s', animationDuration: '9s' }}
        >
          <Sparkles size={28} className="text-[#FFB5B8]" strokeWidth={1.5} />
        </div>

        <div
          className="hidden lg:block absolute top-[60%] right-[25%] animate-float opacity-[0.05]"
          style={{ animationDelay: '3.5s', animationDuration: '7s' }}
        >
          <Heart size={30} className="text-[#A88D83]" strokeWidth={1.5} />
        </div>

        <div
          className="hidden xl:block absolute top-[70%] left-[30%] animate-float opacity-[0.04]"
          style={{ animationDelay: '1.5s', animationDuration: '8s' }}
        >
          <Leaf size={26} className="text-[#FFB5B8]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Blur decorativo sutil */}
      <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-[#FFB5B8] rounded-full blur-[100px] md:blur-[120px] opacity-10 pointer-events-none z-20" />
      <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-56 h-56 md:w-96 md:h-96 bg-[#A88D83] rounded-full blur-[120px] md:blur-[140px] opacity-10 pointer-events-none z-20" />

      {/* Conteúdo principal */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-[60px] py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Coluna esquerda - Texto */}
          <div className="text-center lg:text-left">
            {/* Badge/Tag pequena acima do título */}
            <div 
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 animate-fadeInUp border border-flor-green/20"
              style={{ animationDelay: '0s' }}
            >
              <Sparkles size={14} className="text-flor-green md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium text-[#78645C]">Desde 2019 cuidando de você</span>
            </div>

            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#78645C] mb-4 md:mb-6 leading-[1.2] animate-fadeInUp tracking-tight">
              Onde Saúde, Beleza e{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Equilíbrio</span>
                <span className="absolute bottom-0.5 md:bottom-1 left-0 w-full h-2 md:h-3 bg-[#FFB5B8]/30 -rotate-1" />
              </span>
              {' '}se Encontram
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-[#78645C]/80 mb-6 md:mb-8 lg:mb-10 max-w-[90%] lg:max-w-none mx-auto lg:mx-0 leading-relaxed animate-fadeInUp font-light"
              style={{ animationDelay: '0.2s' }}
            >
              Tratamentos integrativos e personalizados para o seu bem-estar
              completo. Cuidado humanizado que transforma corpo, mente e espírito.
            </p>

            {/* Botões de CTA */}
            <div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center animate-fadeInUp mb-8 md:mb-12"
              style={{ animationDelay: '0.4s' }}
            >
              <a href="https://wa.me/5594991379414?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20RC%20Flor%20De%20Salute."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-flor-green text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Agendar Minha Consulta</span>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <button
                onClick={handleScrollToServices}
                className="group relative border-2 border-flor-green text-flor-green px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-flor-green hover:text-white transition-all duration-300 w-full sm:w-auto overflow-hidden shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Conheça Nossos Serviços</span>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Indicadores de confiança */}
            <div 
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-[#78645C]/70 animate-fadeInUp"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFB5B8]" />
                <span>6+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFB5B8]" />
                <span>Equipe especializada</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFB5B8]" />
                <span>Resultados comprovados</span>
              </div>
            </div>
          </div>

          {/* Coluna direita - Card com imagem */}
          <div 
            className="hidden lg:block animate-fadeInUp"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              {/* Card principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Fprofissional-saude-consultorio.webp"
                  alt="Profissional de saúde no consultório"
                  className="w-full h-[500px] object-cover"
                  style={{ objectPosition: '50% 20%' }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#78645C]/30 via-transparent to-transparent" />
              </div>

              {/* Card decorativo menor sobreposto */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl overflow-hidden shadow-xl border-4 border-white w-48 h-48 bg-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Fmedica-bebe-consultorio.webp"
                  alt="Atendimento humanizado"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Elemento decorativo flutuante */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFB5B8] rounded-full blur-2xl opacity-40 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll - Hidden on mobile */}
      <div 
        className="hidden md:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30 z-30"
      >
        <svg 
          className="w-5 h-5 md:w-6 md:h-6 text-[#A88D83]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;