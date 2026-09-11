import { Leaf, Recycle, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2Fhero.jpg")',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf
          className="lucide lucide-leaf absolute top-20 left-[10%] w-12 h-12 text-[rgb(26,157,39)] opacity-20 animate-float"
          style={{ animationDelay: '0s', animationDuration: '6s' }}
        />
        <Recycle
          className="lucide lucide-recycle absolute top-40 right-[15%] w-16 h-16 text-[rgb(26,157,39)] opacity-20 animate-float"
          style={{ animationDelay: '2s', animationDuration: '8s' }}
        />
        <Leaf
          className="lucide lucide-leaf absolute bottom-40 left-[20%] w-10 h-10 text-[rgb(26,157,39)] opacity-20 animate-float"
          style={{ animationDelay: '4s', animationDuration: '7s' }}
        />
        <Recycle
          className="lucide lucide-recycle absolute bottom-32 right-[25%] w-14 h-14 text-[rgb(26,157,39)] opacity-20 animate-float"
          style={{ animationDelay: '1s', animationDuration: '9s' }}
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-8">
          <div
            className="inline-flex items-center gap-2 bg-[rgb(26,157,39)]/20 backdrop-blur-sm border border-[rgb(26,157,39)]/40 px-4 py-2 rounded-full transition-all duration-1000 opacity-100 translate-y-0"
            style={{ transitionDelay: '0.1s' }}
          >
            <Recycle className="lucide lucide-recycle w-4 h-4 text-[rgb(26,157,39)]" />
            <span className="text-sm font-medium text-white/90">Desde 2011 em Curitiba</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 opacity-100 translate-y-0"
            style={{ transitionDelay: '0.3s' }}
          >
            <span className="block mb-2">Gestão Sustentável</span>
            <span className="block bg-gradient-to-r from-[rgb(26,157,39)] to-[rgb(18,132,27)] bg-clip-text text-transparent">
              de Resíduos
            </span>
          </h1>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 opacity-100 translate-y-0"
            style={{ transitionDelay: '0.5s' }}
          >
            Reciclagem de Eletroeletrônicos em Curitiba
          </h2>
          <p
            className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 opacity-100 translate-y-0"
            style={{ transitionDelay: '0.7s' }}
          >
            Comprometidos com o meio ambiente e a sustentabilidade. Descarte consciente e certificado
            de equipamentos eletrônicos.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-1000 opacity-100 translate-y-0"
            style={{ transitionDelay: '0.9s' }}
          >
            <a
              href="https://wa.me/5541999600458"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-[rgb(26,157,39)] hover:bg-[rgb(18,132,27)] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg shadow-[rgb(26,157,39)]/30 hover:shadow-xl hover:shadow-[rgb(26,157,39)]/50 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <MessageCircle className="lucide lucide-message-circle w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <span className="relative z-10">Fale Conosco</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span>Nossos Serviços</span>
            </a>
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 transition-all duration-1000 opacity-100 translate-y-0"
            style={{ transitionDelay: '1.1s' }}
          >
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-2 h-2 bg-[rgb(26,157,39)] rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base font-medium">+12 Anos de Experiência</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white/80">
              <div
                className="w-2 h-2 bg-[rgb(26,157,39)] rounded-full animate-pulse"
                style={{ animationDelay: '0.5s' }}
              ></div>
              <span className="text-sm sm:text-base font-medium">+2.000 Clientes</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white/80">
              <div
                className="w-2 h-2 bg-[rgb(26,157,39)] rounded-full animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
              <span className="text-sm sm:text-base font-medium">100% Certificado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
