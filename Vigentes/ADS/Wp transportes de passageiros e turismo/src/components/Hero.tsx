import { Phone } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Anos de Experiência', delay: undefined },
  { value: '24/7', label: 'Disponibilidade', delay: '100ms' },
  { value: '100%', label: 'Segurança', delay: '200ms' },
];

export default function Hero() {
  const scrollToFrota = () => {
    document.getElementById('frota')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-0"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/wp%20transportes/img/onibus-noturno-estrada.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(36,31,33)]/90 via-[rgb(36,31,33)]/70 to-[rgb(36,31,33)]/40"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 lg:space-y-8 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-[rgb(245,131,31)] px-4 py-2 rounded-full">
              <span className="text-2xl">🚌</span>
              <span className="text-sm font-medium">Disponível 24 horas</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Transporte de Passageiros com Segurança e Conforto em Sergipe
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl">
              Desde 2022 oferecendo soluções completas em fretamento, turismo e transporte escolar.
              Frota moderna com ônibus rodoviários, urbanos, micro-ônibus, vans e automóveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/557981183939?text=Olá! Gostaria de solicitar uma cotação grátis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[rgb(245,131,31)] hover:bg-[rgb(220,110,20)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Solicitar Cotação Grátis</span>
              </a>
              <button
                onClick={scrollToFrota}
                className="inline-flex items-center justify-center border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Conhecer Frota
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 lg:pt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 animate-fadeInUp"
                  style={stat.delay ? { animationDelay: stat.delay } : undefined}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[rgb(245,131,31)]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/wp%20transportes/img/logo.webp"
              alt="WP Transportes Logo"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
