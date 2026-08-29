import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '34+', label: 'Anos' },
  { value: '500+', label: 'Clientes' },
  { value: '98%', label: 'Fidelidade' },
  { value: '1º', label: 'Lugar' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-12 md:py-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/kangaslanches/hero.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 md:mt-0">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[1.1]">
            Kangas: Lanches e Pizzas
            <span className="block text-[#FF3333] mt-1 md:mt-2">Inesquecíveis</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-[#FDF7E7] mb-8 font-light max-w-3xl mx-auto px-2">
            Tradição e qualidade há 34 anos!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-12">
            <a
              href="https://api.whatsapp.com/send?phone=55556536254300&text=Ol%C3%A1%22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FF3333] hover:bg-[#d01620] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Fazer Pedido
              <ArrowRight size={20} />
            </a>
            <a
              href="https://pedir.delivery/kangas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Ver Cardápio
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-6 border border-white/20"
              >
                <div className="text-2xl md:text-5xl font-bold text-[#FF3333] mb-1">
                  {stat.value}
                </div>
                <div className="text-white text-xs md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-9 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
