import { WHATSAPP_URL, scrollToSection } from '../lib/constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/pharmafloris/hero.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            PHARMA FLORIS
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-[rgb(88,171,218)]">
              Farmácia de Manipulação
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 max-w-3xl mx-auto font-light">
            Medicamentos Manipulados com Qualidade
          </p>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Sua Saúde em Primeiro Lugar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[rgb(88,171,218)] text-white text-lg font-semibold rounded-full hover:bg-[rgb(78,161,208)] transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto justify-center"
            >
              Fale pelo WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/50 w-full sm:w-auto justify-center"
            >
              Saiba Mais
            </button>
          </div>
          <div className="pt-8">
            <div className="inline-flex items-center px-6 py-3 bg-[rgb(130,116,187)] text-white rounded-full font-semibold text-lg shadow-lg">
              6+ Anos de Experiência
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
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
