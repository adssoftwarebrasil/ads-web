import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/heguincho%2Fquemsomos.webp")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fadeInUp" style={{ animationDelay: '0s' }}>
          <h1
            className="text-white font-black uppercase mb-6"
            style={{
              fontSize: 'clamp(42px, 8vw, 72px)',
              textShadow: 'rgba(0, 0, 0, 0.5) 0px 4px 20px',
              letterSpacing: '0.05em',
            }}
          >
            HE GUINCHO
          </h1>
        </div>
        <div
          className="animate-fadeInUp"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <h2
            className="text-[rgb(68,235,21)] font-bold mb-6"
            style={{
              fontSize: 'clamp(18px, 4vw, 32px)',
              textShadow: 'rgba(68, 235, 21, 0.5) 0px 0px 30px',
              letterSpacing: '0.02em',
            }}
          >
            Remoção de Veículos 24 Horas em Ituiutaba
          </h2>
        </div>
        <div
          className="animate-fadeInUp"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <p
            className="text-white mb-10 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              opacity: 0.95,
              lineHeight: 1.8,
              textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 10px',
            }}
          >
            Atendimento rápido, responsável e eficiente para veículos leves, utilitários e semi
            pesados
          </p>
        </div>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
          style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="https://wa.me/5534998796167"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(68,235,21)] text-black font-bold px-12 py-5 rounded-full text-lg button-hover shadow-2xl"
          >
            CHAMAR GUINCHO
          </a>
          <button
            onClick={scrollToServices}
            className="glass-effect text-white font-bold px-12 py-5 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
          >
            NOSSOS SERVIÇOS
          </button>
        </div>
      </div>
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[rgb(68,235,21)] animate-bounce cursor-pointer"
        style={{ filter: 'drop-shadow(rgba(68, 235, 21, 0.7) 0px 0px 10px)' }}
      >
        <ChevronDown width={48} height={48} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}
