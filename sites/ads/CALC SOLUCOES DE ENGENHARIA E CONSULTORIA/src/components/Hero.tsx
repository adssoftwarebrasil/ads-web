export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage:
            'url("https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=calc%2Fimg%2Fdji_fly_20240429_144600_305_1714412773651_photo_optimized_ultra_ultra.webp&version_id=null")',
          transform: 'translateY(0px) scale(1.1)',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#00108a]/90 via-[#00108a]/85 to-[#001570]/90"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#facc22]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#f88c00]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 delay-100 opacity-100 translate-y-0">
          Soluções em{' '}
          <span className="relative inline-block">
            <span className="text-[#facc22]">Energia Solar</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#facc22] to-[#f88c00] rounded-full"></span>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl mb-12 max-w-2xl mx-auto text-white/90 transition-all duration-1000 delay-300 opacity-100 translate-y-0">
          Economia e sustentabilidade com sistemas fotovoltaicos de alta qualidade
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          <a
            href="#sobre"
            className="group relative bg-[#facc22] text-[#00108a] px-10 py-4 rounded-full font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
            <span className="relative z-10">Saiba Mais</span>
            <span className="absolute inset-0 bg-[#f88c00] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              Saiba Mais
            </span>
          </a>
          <a
            href="#contato"
            className="group relative bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
            <span className="relative z-10">Fale Conosco</span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            <span className="absolute inset-0 flex items-center justify-center text-[#00108a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              Fale Conosco
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  );
}
