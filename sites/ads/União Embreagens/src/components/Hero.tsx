const badges = ['Qualidade Garantida', 'Atendimento 300km', 'Sustentabilidade'];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            'url("https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=embreagens%2Fheroembreagem.jpeg&version_id=null")',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(60,88,144)]/60 via-[rgb(60,88,144)]/50 to-[rgb(40,60,100)]/65"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(60,88,144)]/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(60,88,144)]/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(240, 178, 121, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(240, 178, 121, 0.15) 0%, transparent 50%)',
            }}
          ></div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 sm:py-24 md:py-32">
        <div className="text-center text-white space-y-6 sm:space-y-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-[rgb(60,88,144)]/70 backdrop-blur-md border border-[rgb(240,178,121)]/60 px-4 sm:px-5 py-2 rounded-full shadow-lg">
            <span className="w-2 h-2 bg-[rgb(240,178,121)] rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
              DESDE 2003 NO MERCADO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight px-2">
            <span className="block mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]">
              Embreagens Remanufaturadas
            </span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(240,178,121)] to-[rgb(255,200,150)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
              style={{
                filter: 'drop-shadow(rgba(0, 0, 0, 0.9) 2px 2px 8px)',
                WebkitTextStroke: '0.5px rgba(240, 178, 121, 0.3)',
              }}
            >
              de Alta Performance
            </span>
          </h1>
          <div className="inline-block bg-[rgb(60,88,144)]/60 backdrop-blur-md px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl mx-2">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed text-white font-light">
              Mais de <span className="font-bold text-[rgb(240,178,121)]">20 anos</span> oferecendo
              <span className="font-semibold"> qualidade, economia e sustentabilidade</span> para
              linhas<span className="font-semibold"> Leve, Pesada e Agrícola</span> em Ribeirão Preto
              e Região
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-4 sm:pt-6 pb-6 sm:pb-8 px-2">
            {badges.map((b) => (
              <div
                key={b}
                className="flex items-center justify-center gap-2 bg-[rgb(60,88,144)]/50 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(240,178,121)] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xs sm:text-sm font-medium text-white">{b}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 px-4">
            <button
              onClick={() => scrollTo('contato')}
              className="group relative bg-[rgb(240,178,121)] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-[rgb(255,190,135)] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden w-full sm:w-auto sm:min-w-[240px] md:min-w-[260px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Solicite um Orçamento
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button
              onClick={() => scrollTo('produtos')}
              className="group border-2 border-white/90 backdrop-blur-md bg-[rgb(60,88,144)]/50 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-white hover:text-[rgb(60,88,144)] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl w-full sm:w-auto sm:min-w-[240px] md:min-w-[260px]"
            >
              <span className="flex items-center justify-center gap-2">
                Conheça Nossos Produtos
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="pt-6 sm:pt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm px-2">
            <div className="flex items-center gap-2 bg-[rgb(60,88,144)]/50 backdrop-blur-md px-3 sm:px-4 py-2 rounded-lg shadow-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(240,178,121)] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="font-medium text-white whitespace-nowrap">Avaliação 5 Estrelas</span>
            </div>
            <div className="flex items-center gap-2 bg-[rgb(60,88,144)]/50 backdrop-blur-md px-3 sm:px-4 py-2 rounded-lg shadow-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(240,178,121)] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="font-medium text-white whitespace-nowrap">Garantia de Qualidade</span>
            </div>
            <div className="flex items-center gap-2 bg-[rgb(60,88,144)]/50 backdrop-blur-md px-3 sm:px-4 py-2 rounded-lg shadow-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(240,178,121)] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="font-medium text-white whitespace-nowrap">Entrega Rápida</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="bg-[rgb(60,88,144)]/50 backdrop-blur-md p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
