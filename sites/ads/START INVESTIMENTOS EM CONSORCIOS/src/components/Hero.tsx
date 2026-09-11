export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0a0303] pt-28 md:pt-0">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#450a0a] to-transparent blur-[128px] opacity-80 mix-blend-screen"></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#450a0a] to-transparent blur-[128px] opacity-80 mix-blend-screen"></div>
      <div className="absolute inset-0 hero-grid"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <span className="inline-block text-xs sm:text-sm uppercase tracking-widest text-white/30 mb-6">
          START Investimentos em Consórcios
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6">
          O Futuro é <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7251C] via-[#ff5e57] to-[#E7251C] drop-shadow-[0_0_25px_rgba(231,37,28,0.5)]">
            CONSTRUÍDO
          </span>
          <span className="text-white"> HOJE.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Realize seus sonhos com a segurança de quem tem{' '}
          <strong className="text-white font-semibold">8 anos de história</strong>. A menor taxa do
          mercado esperando por você.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 mt-12 w-full justify-center">
          <a
            href="./simulador.html"
            className="shine group relative px-8 py-4 bg-[#E7251C] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(231,37,28,0.6)]"
          >
            <span className="relative flex items-center gap-2">Simular Agora →</span>
          </a>
          <a
            href="#servicos"
            className="px-8 py-4 rounded-full font-medium text-lg text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            Ver nossos serviços
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-center border-t border-white/5 pt-8 w-full max-w-3xl">
          <div>
            <p className="text-3xl font-bold text-white">8+</p>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Anos de Mercado</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Segurança</p>
          </div>
          <div className="hidden md:block">
            <p className="text-3xl font-bold text-white">Meia</p>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Parcela até contemplar</p>
          </div>
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 hover:text-white transition-colors animate-bounce"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </section>
  );
}
