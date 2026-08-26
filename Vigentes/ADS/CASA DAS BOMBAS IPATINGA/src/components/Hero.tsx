import { waLink, scrollToId } from '../lib/site';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Fhero-animacaomovimento.jpeg"
          alt="Casa das Bombas - Manutenção e Perfuração"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[rgb(1,8,82)] opacity-85"></div>
      </div>
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Manutenção e Perfuração de Poços Artesianos
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 font-medium">
            15 anos de experiência | Assistência técnica especializada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={waLink('Olá! Gostaria de solicitar um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[rgb(37,155,208)] text-white px-8 py-4 rounded-lg font-semibold text-lg uppercase hover:bg-white hover:text-[rgb(37,155,208)] transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Solicitar Orçamento Grátis
            </a>
            <button
              onClick={() => scrollToId('produtos')}
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg uppercase hover:bg-white hover:text-[rgb(1,8,82)] transition-all duration-300 transform hover:scale-105"
            >
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
