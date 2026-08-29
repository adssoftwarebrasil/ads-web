import { scrollToSection } from '../lib/utils';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden py-20 sm:py-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/protaldastintas%2Fimg%2Fhero.jpeg")',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div
        className="absolute inset-0 animate-fadeIn"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 50, 0, 0.9) 0%, rgba(240, 135, 54, 0.9) 50%, rgba(255, 180, 0, 0.85) 100%)',
          animationDuration: '1s',
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className="absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-5 hidden lg:block">
        <div className="paint-can mb-8" style={{ animationDelay: '0.5s' }}>
          <svg width="100" height="120" viewBox="0 0 120 140" className="drop-shadow-2xl">
            <ellipse cx="60" cy="130" rx="45" ry="8" fill="#c0392b" opacity="0.3"></ellipse>
            <rect x="15" y="40" width="90" height="90" rx="8" fill="#e74c3c"></rect>
            <rect x="15" y="40" width="90" height="20" rx="8" fill="#c0392b"></rect>
            <path d="M 30 40 Q 60 10 90 40" stroke="#2c3e50" strokeWidth="4" fill="none"></path>
            <ellipse cx="40" cy="70" rx="15" ry="25" fill="white" opacity="0.3"></ellipse>
          </svg>
        </div>
        <div className="paint-can" style={{ animationDelay: '1s' }}>
          <svg width="85" height="100" viewBox="0 0 100 120" className="drop-shadow-2xl">
            <ellipse cx="50" cy="110" rx="38" ry="7" fill="#2980b9" opacity="0.3"></ellipse>
            <rect x="12" y="35" width="76" height="75" rx="7" fill="#3498db"></rect>
            <rect x="12" y="35" width="76" height="17" rx="7" fill="#2980b9"></rect>
            <path d="M 25 35 Q 50 10 75 35" stroke="#2c3e50" strokeWidth="3.5" fill="none"></path>
            <ellipse cx="35" cy="60" rx="12" ry="20" fill="white" opacity="0.3"></ellipse>
          </svg>
        </div>
      </div>

      <div className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-5 hidden lg:block">
        <div className="paint-can" style={{ animationDelay: '1.5s' }}>
          <svg width="95" height="110" viewBox="0 0 110 130" className="drop-shadow-2xl">
            <ellipse cx="55" cy="120" rx="42" ry="7" fill="#d35400" opacity="0.3"></ellipse>
            <rect x="13" y="35" width="84" height="85" rx="7" fill="#e67e22"></rect>
            <rect x="13" y="35" width="84" height="19" rx="7" fill="#d35400"></rect>
            <path d="M 27 35 Q 55 8 83 35" stroke="#2c3e50" strokeWidth="3.5" fill="none"></path>
            <ellipse cx="38" cy="65" rx="13" ry="23" fill="white" opacity="0.3"></ellipse>
          </svg>
        </div>
        <div className="paint-can mt-8" style={{ animationDelay: '2s' }}>
          <svg width="80" height="95" viewBox="0 0 95 115" className="drop-shadow-2xl">
            <ellipse cx="47.5" cy="105" rx="36" ry="6.5" fill="#27ae60" opacity="0.3"></ellipse>
            <rect x="11.5" y="32" width="72" height="73" rx="6.5" fill="#2ecc71"></rect>
            <rect x="11.5" y="32" width="72" height="16" rx="6.5" fill="#27ae60"></rect>
            <path d="M 24 32 Q 47.5 9 71 32" stroke="#2c3e50" strokeWidth="3.2" fill="none"></path>
            <ellipse cx="33" cy="55" rx="11" ry="19" fill="white" opacity="0.3"></ellipse>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center max-w-5xl">
        <div
          className="inline-block mb-4 sm:mb-6 animate-fadeInUp"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="bg-yellow-400 text-gray-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-white shadow-xl">
            ✨ Desde 2004 no mercado
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fadeInUp px-2"
          style={{
            animationDelay: '0.5s',
            textShadow:
              'rgba(255, 0, 100, 0.5) 2px 2px 0px, rgba(0, 0, 0, 0.7) 4px 4px 15px',
          }}
        >
          Transforme Seu Espaço
          <br />
          <span
            style={{
              background:
                'linear-gradient(90deg, rgb(0, 255, 136), rgb(0, 191, 255), rgb(191, 0, 255), rgb(255, 20, 147)) text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              display: 'inline-block',
              fontWeight: 'bold',
              filter: 'drop-shadow(rgba(0, 0, 0, 0.5) 2px 2px 4px)',
            }}
          >
            com Cores
          </span>
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp font-light px-4"
          style={{
            animationDelay: '0.7s',
            textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 8px',
          }}
        >
          Mais de <strong className="font-bold text-yellow-300">20 anos</strong>{' '}
          entregando qualidade em tintas automotivas e imobiliárias.
          <br className="hidden sm:block" />
          Mais de <strong className="font-bold text-yellow-300">6.000 cores</strong>{' '}
          disponíveis para você.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fadeInUp px-4"
          style={{ animationDelay: '0.9s' }}
        >
          <a
            href="https://wa.me/5527997073666?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-green-500/70 w-full sm:w-auto overflow-hidden border-2 border-white"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
              </svg>
              <span className="whitespace-nowrap">Solicitar Orçamento</span>
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
          <button
            onClick={() => scrollToSection('produtos')}
            className="group bg-white text-purple-600 border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-yellow-400 hover:text-gray-900 hover:border-yellow-400 transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="whitespace-nowrap">Nossos Produtos</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 animate-fadeInUp px-4"
          style={{ animationDelay: '1.1s' }}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border-2 border-white/30">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="font-bold whitespace-nowrap">+5.000 Clientes</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border-2 border-white/30">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span className="font-bold whitespace-nowrap">Entrega Garantida</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border-2 border-white/30">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <span className="font-bold whitespace-nowrap">Atendimento Rápido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
