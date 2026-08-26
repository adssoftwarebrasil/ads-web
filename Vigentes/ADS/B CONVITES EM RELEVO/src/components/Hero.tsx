const trustItems = ['Entrega Garantida', 'Materiais Premium', 'Atendimento Exclusivo'];

const stats = [
  { value: '25+', label: 'Anos de Tradição', italic: false },
  { value: '100%', label: 'Personalização Total', italic: false },
  { value: 'Premium', label: 'Acabamento de Luxo', italic: true },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/Brelevo%2Fbrelevohero.jpg"
          alt="Convites Brelevo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 relative z-10">
        <div className="text-center space-y-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-[rgb(17,50,255)] rounded-full shadow-2xl">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="font-semibold text-sm tracking-wider">EXCELÊNCIA DESDE 1999</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight px-4 drop-shadow-2xl">
              Convites de
              <span className="block mt-2 md:mt-3 text-white italic font-serif">Luxo &amp; Requinte</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-0.5 bg-white/60"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-20 h-0.5 bg-white/60"></div>
            </div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-lg">
            Produzindo momentos inesquecíveis com
            <span className="font-semibold text-white"> fino acabamento artesanal</span> há mais de 25 anos em Brasília
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 px-4">
            <a
              href="https://wa.me/5561986054473"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto text-center bg-[rgb(17,50,255)] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-none font-semibold text-base sm:text-lg hover:bg-slate-900 transition-all duration-500 shadow-2xl hover:shadow-slate-900/50 relative overflow-hidden"
            >
              <span className="relative z-10">Solicite um Orçamento</span>
              <div className="absolute inset-0 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto text-center bg-white text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-none font-semibold text-base sm:text-lg border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg"
            >
              Veja Nossos Produtos
            </a>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/95 backdrop-blur-sm p-8 md:p-10 relative group hover:bg-white transition-all duration-300 shadow-2xl"
              >
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div
                  className={`text-[rgb(17,50,255)] font-bold text-4xl md:text-5xl mb-3 font-serif${stat.italic ? ' italic' : ''}`}
                >
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium uppercase text-xs md:text-sm tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-white text-sm">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
