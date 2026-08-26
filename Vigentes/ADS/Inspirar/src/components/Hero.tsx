export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/inspirar%2Fhero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                Pioneiros em Saúde Respiratória
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight">
              Respire Melhor.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Viva Melhor.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-3xl">
              Transformando vidas há mais de 5 anos com tecnologia de ponta e
              atendimento humanizado em Sinop/MT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="#contato"
                className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg text-center overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <span className="relative z-10">Agende uma Consulta</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#servicos"
                className="group border-2 border-blue-400/50 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-blue-400 transition-all duration-300 font-bold text-lg text-center"
              >
                <span>Nossos Serviços</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
}
