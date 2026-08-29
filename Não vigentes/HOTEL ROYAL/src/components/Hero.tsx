const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/royal%20hotel%2Fhero.jpg")',
          transform: 'translateY(0px) scale(1.1)',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#C8AF82]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#435A4A]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-[#435A4A]/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0">
          <span className="w-2 h-2 bg-[#C8AF82] rounded-full animate-pulse"></span>
          <span className="text-sm md:text-base font-medium text-[#C8AF82]">
            5 Anos de Excelência
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-700 delay-150 opacity-100 translate-y-0">
          <span className="block text-white drop-shadow-2xl">Royal Hotel</span>
          <span className="block text-[#C8AF82] drop-shadow-2xl">Dourados</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 opacity-100 translate-y-0">
          Conforto e Hospitalidade no Coração de Dourados - MS
        </p>
        <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-gray-200 max-w-2xl mx-auto transition-all duration-700 delay-500 opacity-100 translate-y-0">
          Hospedagem de qualidade • Localização privilegiada • Atendimento 24h
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-700 opacity-100 translate-y-0">
          <button className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-[#435A4A] text-white hover:bg-[#2D3A2F]  group bg-[#C8AF82] hover:bg-[#D4AF37] text-[#2C2C2C] font-semibold text-base md:text-lg px-8 md:px-12 py-3.5 md:py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
              Reservar Agora
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() => scrollTo('quartos')}
            className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-[#C8AF82] bg-transparent text-[#C8AF82] hover:bg-[#C8AF82] hover:text-[#2C2C2C]  group border-2 border-white text-white hover:bg-white hover:text-[#435A4A] font-semibold text-base md:text-lg px-8 md:px-12 py-3.5 md:py-4 rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              Conheça os Quartos
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-10 md:mt-12 transition-all duration-700 delay-1000 opacity-100 translate-y-0">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#C8AF82]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">Avaliação 8,8</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#C8AF82]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-medium">Centro de Dourados</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#C8AF82]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">Atendimento 24h</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Rolar para baixo"
      >
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </button>
    </section>
  );
}
