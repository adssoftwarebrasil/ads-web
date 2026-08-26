import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-[100dvh] min-h-screen overflow-hidden">
      <img
        src="https://storage.lucasmendes.dev/site-sp/climatec%2Fhero.jpeg"
        alt="Ar condicionado moderno"
        className="absolute inset-0 w-full h-full object-cover object-left"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <div className="animate-fade-in-up">
              <span className="inline-block bg-secondary/20 border border-secondary/30 text-secondary-light px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
                Climatec
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight animate-fade-in-up-delay">
              Conforto e Qualidade
              <span className="block text-secondary mt-2">Para o Seu Ambiente</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-md animate-fade-in-up-delay-2">
              Venda, instalacao, manutencao, higienizacao e locacao de ar condicionado em Sorriso - MT. Mais de 4.000 clientes atendidos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-in-left">
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-secondary/25 hover:-translate-y-0.5"
              >
                Fale Conosco
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                Nossos Servicos
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
