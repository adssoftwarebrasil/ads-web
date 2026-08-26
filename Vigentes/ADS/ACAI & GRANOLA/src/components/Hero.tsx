import { openWhatsApp } from '../lib/whatsapp';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fhero.png")',
          transform: 'scale(1.1)',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(118, 42, 117, 0.85) 0%, rgba(6, 173, 244, 0.75) 100%)',
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(6,173,244)] opacity-10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div className="relative z-10 flex-grow flex flex-col items-center justify-between px-4 py-24 md:h-screen md:py-8 md:pt-20">
        <div className="hidden md:block flex-none h-16"></div>
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center transition-all duration-1000 ease-out opacity-100 translate-y-0">
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-md px-6 py-3 rounded-full border border-white border-opacity-20">
              <span className="text-white text-sm font-semibold tracking-widest">DESDE 2015</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none flex flex-col items-center">
            <span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[rgb(6,173,244)]"
              style={{ textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 40px' }}
            >
              AÇAI &amp; GRANOLA
            </span>
          </h1>
          <h2 className="text-xl md:text-4xl font-semibold text-white mb-3 tracking-wide">
            Alta Qualidade em Alimentos
          </h2>
          <p className="text-base md:text-xl text-white text-opacity-90 mb-8 md:mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Produtos Premium de Açaí e Granola para você e seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0">
            <button
              onClick={() => openWhatsApp()}
              className="group bg-[rgb(6,173,244)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(5,155,220)] hover:shadow-2xl hover:shadow-[rgb(6,173,244)]/50 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-3 w-full sm:w-auto min-w-[240px]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Fale Conosco</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="bg-white bg-opacity-10 backdrop-blur-md text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-20 hover:border-opacity-50 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-2 w-full sm:w-auto min-w-[240px]"
            >
              <span>Nossos Produtos</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-white text-opacity-90">
            <div className="flex items-center space-x-2 bg-white/5 md:bg-transparent px-3 py-1 rounded-full md:p-0">
              <svg className="w-5 h-5 text-[rgb(6,173,244)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-xs md:text-sm font-medium">+2.000 Clientes</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 md:bg-transparent px-3 py-1 rounded-full md:p-0">
              <svg className="w-5 h-5 text-[rgb(6,173,244)]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs md:text-sm font-medium">Qualidade Certificada</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 md:bg-transparent px-3 py-1 rounded-full md:p-0">
              <svg className="w-5 h-5 text-[rgb(6,173,244)]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs md:text-sm font-medium">10+ Anos de Exp.</span>
            </div>
          </div>
        </div>
        <div className="flex-none animate-bounce mt-8 md:mt-4">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-xs font-medium tracking-wider">ROLE PARA BAIXO</span>
            <svg
              className="w-6 h-6 text-white opacity-75"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
