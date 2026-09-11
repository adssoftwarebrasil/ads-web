import { Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00284d] via-[#005098]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#00284d] via-transparent to-transparent opacity-90 md:opacity-0"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 animate-fade-in-up">
            <Star width={16} height={16} className="text-[#FD7500] fill-[#FD7500]" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Referência desde 2009
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
            Cuidado Completo <br />
            para o seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD7500] to-[#ff9e42]">
              Melhor Amigo
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light border-l-4 border-[#FD7500] pl-6">
            Produtos premium, farmácia completa e o carinho que seu pet merece. Atendendo com
            excelência em <strong className="text-white">São Leopoldo</strong> e{' '}
            <strong className="text-white">Ivoti</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#FD7500] text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(253,117,0,0.5)] hover:-translate-y-1"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center">
                Ver Nossos Serviços
                <ArrowRight
                  width={20}
                  height={20}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
            <a
              href="#locations"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-[#005098] transition-all duration-300 hover:-translate-y-1"
            >
              Encontrar Unidade Próxima
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-white/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FD7500] rounded-full"></div>2 Unidades Físicas
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FD7500] rounded-full"></div>+15 Anos de Experiência
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-white text-xs tracking-widest uppercase mb-2">Role para baixo</span>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
