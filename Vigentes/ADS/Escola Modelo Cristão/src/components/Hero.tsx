import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcrianca-sorriso-uniforme.jpg"
        />
        <img
          src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-uniformes-coloridos.jpg"
          alt="Crianças da Escola Modelo Cristão"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-[#024977]/90 via-[#024977]/70 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white text-balance">
            Educação de Excelência com Valores Cristãos
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-50 leading-relaxed">
            Formando crianças em sabedoria, caráter e fé há mais de 25 anos
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://wa.me/5511989742323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
              style={{ backgroundColor: 'rgb(246, 174, 9)' }}
            >
              Agende uma Visita
              <ArrowRight className="lucide lucide-arrow-right ml-2" width={20} height={20} />
            </a>
            <button
              onClick={() => scrollTo('galeria')}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all border-2 border-white text-white hover:bg-white hover:text-[#024977] backdrop-blur-sm"
            >
              Conheça Nossa Estrutura
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Rolar para baixo"
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <ChevronDown className="lucide lucide-chevron-down text-white" width={20} height={20} />
        </div>
      </button>
    </section>
  );
}
