import { Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/muralhacorretora/hero1-slider-animation-zoom.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        {/* ÍCONE CORRIGIDO: w-12 no mobile e w-16 no desktop */}
        <div className="flex justify-center mb-4 md:mb-6">
          <Shield 
            className="w-12 h-12 md:w-16 md:h-16 text-primary animate-pulse" 
            strokeWidth={1.5} 
          />
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Descubra os melhores planos
          <br className="hidden sm:block" /> {/* Quebra de linha apenas em telas maiores */}
          <span className="text-primary"> e seguros em um só lugar</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/90 mb-3 max-w-3xl mx-auto font-light">
          Referência em vendas de Planos de Saúde e Seguros.
        </p>

        <p className="text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto">
          Há mais de 20 anos no mercado | Empresarial | Familiar | Individual | Por Adesão
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto text-center"
          >
            Solicite sua cotação agora
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto text-center"
          >
            Fale conosco
          </a>
        </div>

        <div className="mt-12 md:mt-16 text-white/70">
          <p className="font-semibold text-base md:text-lg mb-2">Na Muralha você está seguro!</p>
        </div>
      </div>

      {/* Indicador de scroll - Oculto em telas muito pequenas para evitar sobreposição */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden xs:block">
        <div className="w-5 h-9 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}