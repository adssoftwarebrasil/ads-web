import { Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMetabordados = () => {
    const element = document.getElementById('metabordados');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-[800px] flex items-center justify-center overflow-hidden bg-neutral-900"
    >
      {/* Background Limpo - Sem Blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F8.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)', // Escurece um pouco para o texto branco "saltar"
        }}
      />
      
      {/* Gradiente de profundidade para melhorar contraste do texto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Conteúdo Direto no Background */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
          <Sparkles className="text-[#F7D061] animate-pulse" size={24} />
          <span className="text-[#F7D061] text-sm md:text-base font-medium tracking-[0.3em] uppercase">
            Precisão & Qualidade
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight text-white drop-shadow-lg italic">
          Bordados e personalização <span className="text-[#F7D061] not-italic">têxtil</span>.
        </h1>

        <p className="text-lg md:text-2xl mb-12 font-light text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Tecnologia de ponta e expertise de 24 anos em bordados, sublimação e personalização industrial.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToMetabordados}
            className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-black transition-all duration-300 bg-[#F7D061] rounded-full hover:bg-[#f0c34a] hover:scale-105 active:scale-95 shadow-xl"
          >
            Nossos Serviços
          </button>
          
          <div className="flex items-center gap-3 text-white/80 text-sm tracking-wide">
            <span className="w-6 h-[1px] bg-[#F7D061]"></span>
            <span>📍 Natal/RN para todo o Brasil</span>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 z-20 animate-bounce text-white/70">
        <ChevronDown size={40} />
      </div>
    </section>
  );
}