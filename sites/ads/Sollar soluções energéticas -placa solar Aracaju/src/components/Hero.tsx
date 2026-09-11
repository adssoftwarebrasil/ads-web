import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

const features = ['Economia até 95%', 'Instalação Profissional', 'Suporte Especializado'];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Fpaineis-solares-telhado8.webp")',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right bottom, rgba(15, 30, 60, 0.95), rgba(20, 40, 80, 0.9), rgba(15, 30, 60, 0.85))',
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(255, 69, 0) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-5 py-2 mb-2 sm:mb-4">
            <Zap width={18} height={18} className="lucide lucide-zap " style={{ color: 'rgb(255, 69, 0)' }} />
            <span className="text-white font-semibold text-xs sm:text-sm lg:text-base">
              Desde 2020 Transformando Sol em Economia
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-in px-4">
            Transforme Luz Solar em{' '}
            <span className="block mt-2" style={{ color: 'rgb(255, 69, 0)' }}>
              Economia Real
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto px-4">
            Reduza até{' '}
            <span className="font-bold" style={{ color: 'rgb(255, 69, 0)' }}>
              95%
            </span>{' '}
            na sua conta de luz com energia solar. Tecnologia de ponta e projetos personalizados.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-4">
            {features.map((f) => (
              <div
                key={f}
                className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle
                  width={28}
                  height={28}
                  className="lucide lucide-check-circle "
                  style={{ color: 'rgb(255, 69, 0)' }}
                />
                <span className="text-white font-semibold text-center text-xs sm:text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-4">
            <a
              href="https://wa.me/5579991174811?text=Olá, vim do site e gostaria de solicitar um orçamento grátis!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 group w-full sm:w-auto whitespace-nowrap hover:brightness-110"
              style={{ backgroundColor: 'rgb(255, 69, 0)', color: 'rgb(15, 30, 60)' }}
            >
              Solicitar Orçamento Grátis
              <ArrowRight
                width={18}
                height={18}
                className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button
              onClick={() => scrollTo('portfolio')}
              className="inline-flex items-center justify-center border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-950 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto whitespace-nowrap"
            >
              Ver Nossos Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
