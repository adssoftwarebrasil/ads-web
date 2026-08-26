import { useEffect, useState } from 'react';
import { ArrowDown, Star } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND FIXO */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=oticasvitoria%2F2024-08-03.webp&version_id=null)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b2720]/80 via-[#3b2720]/65 to-[#3b2720]/95"></div>
      </div>

      {/* Conteúdo 
         ALTERAÇÃO PRINCIPAL: Adicionado 'items-center' para forçar alinhamento geométrico no centro.
         Isso garante que títulos e textos fiquem perfeitamente centralizados.
      */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-32 flex flex-col justify-center items-center h-full text-center text-[#fffffa]">
        
        {/* Badge */}
        <div 
          className={`flex justify-center mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#fffffa]/30 bg-[#fffffa]/10 backdrop-blur-sm text-xs md:text-sm uppercase tracking-widest font-medium">
            <Star size={14} className="fill-[#fffffa]" /> Tradição e Estilo
          </span>
        </div>

        {/* Título */}
        <div
          className={`transition-all duration-1000 delay-100 w-full max-w-5xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 drop-shadow-xl tracking-tight leading-tight">
            Ótica Victoria
          </h1>
        </div>

        {/* Subtítulo */}
        <div
          className={`transition-all duration-1000 delay-300 w-full max-w-4xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg md:text-2xl lg:text-3xl font-light mb-6 md:mb-8 drop-shadow-lg text-[#fffffa]/90">
            A excelência em armações e lentes <br className="hidden md:block"/> das marcas mais desejadas.
          </p>
        </div>

        {/* Descrição */}
        <div
          className={`transition-all duration-1000 delay-500 w-full max-w-2xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm md:text-lg mb-8 md:mb-12 text-[#fffffa]/80 leading-relaxed font-light px-4">
            Há mais de 20 anos transformando sua visão com tecnologia de ponta e um atendimento que entende o seu estilo único.
          </p>
        </div>

        {/* Wrapper dos Botões */}
        <div
          className={`w-full max-w-[320px] sm:max-w-none flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://wa.me/5527998695803"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#fffffa] text-[#3b2720] px-8 py-3.5 rounded-lg font-bold text-base md:text-lg hover:bg-[#e6e6e6] hover:scale-105 transition-all shadow-xl flex items-center justify-center"
          >
            Fale com Especialista
          </a>

          <button
            onClick={() => scrollToSection('marcas')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-base md:text-lg text-[#fffffa] border border-[#fffffa]/30 bg-[#fffffa]/5 backdrop-blur-sm hover:bg-[#fffffa]/20 hover:border-[#fffffa] transition-all flex items-center justify-center"
          >
            Conheça as Marcas
          </button>
        </div>
      </div>

      {/* Seta Scroll (Mantida na posição ajustada: 45%) */}
    </section>
  );
}