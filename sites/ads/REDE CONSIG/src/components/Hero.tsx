import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5563984274000', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-[122px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/redeconsig%2Ftrabalhadores-de-varias-profissoes-felizes-fundo-de-predios.png)'
        }}
      />
      
      {/* Overlay com gradiente laranja bem mais claro */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(248, 134, 1, 0.75) 0%, rgba(250, 160, 50, 0.70) 50%, rgba(255, 180, 80, 0.72) 100%)'
        }}
      />
      
      {/* Efeito de brilho sutil */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 animate-fade-in-up tracking-tight drop-shadow-lg">
            Facilidade e Confiança em Crédito Consignado
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 animate-fade-in-up-delay font-light tracking-wide drop-shadow-md">
            As Melhores Soluções de Empréstimos no Brasil
          </p>
          
          <button
            onClick={handleWhatsApp}
            className="group bg-white text-[#eb6601] px-10 py-4 rounded-full text-lg font-semibold flex items-center gap-3 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] transition-all duration-300 animate-fade-in-up-delay-2 backdrop-blur-sm"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            Enviar WhatsApp
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;