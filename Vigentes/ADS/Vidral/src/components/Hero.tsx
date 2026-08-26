import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#29456D] via-[#29456D] to-[#1f3657] overflow-hidden pt-[70px] lg:pt-[80px]"
    >
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-1">
            <div className="inline-block mb-4 lg:mb-6 animate-fade-in">
              <span className="text-white/90 text-xs lg:text-sm font-semibold tracking-wider uppercase bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                Desde 2013 • 300+ Obras
              </span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-[1.15] mb-6 lg:mb-8 animate-fade-in-up">
              Soluções Inteligentes para Valorização do Seu Patrimônio
            </h1>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 max-w-[600px] mx-auto lg:mx-0 animate-fade-in-up-delay">
              Esquadrias e vidros de alto padrão com mais de 11 anos de experiência em{' '}
              <strong className="font-semibold text-white">Cuiabá, Várzea Grande</strong> e região
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 lg:mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-semibold whitespace-nowrap">Garantia 1 Ano</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-semibold whitespace-nowrap">Qualidade Premium</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white text-sm font-semibold whitespace-nowrap">Entrega Ágil</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-0">
              <button
                onClick={() => scrollTo('produtos')}
                className="group bg-white text-[#29456D] px-8 py-4 rounded-xl font-semibold text-base hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Conheça Nossos Produtos
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="https://wa.me/556596603393"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white hover:text-[#29456D] transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Fale com um Especialista
              </a>
            </div>
          </div>
          <div className="order-2 animate-fade-in-right">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <div className="h-[300px] sm:h-[350px] lg:h-[420px] xl:h-[500px] overflow-hidden">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/vidral%2Ffachada%3Ahero.jpg"
                    alt="Fachada moderna com esquadrias e vidros de alto padrão"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 lg:top-5 lg:right-5 bg-white text-[#29456D] px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg">
                  <p className="text-xs font-bold">Premium</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-3 lg:p-4 border border-white/20">
                    <h3 className="text-base lg:text-lg font-bold text-white mb-1">Projetos de Alto Padrão</h3>
                    <p className="text-white/90 text-xs leading-relaxed">
                      Referência em esquadrias e vidros para residências sofisticadas
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-white/10 rounded-2xl -z-10 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('diferenciais')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce cursor-pointer hover:text-white transition-colors hidden lg:block"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} strokeWidth={2.5} />
      </button>
    </section>
  );
}
