import { ArrowRight, MessageCircle, Award, MapPin, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Ffachada-loja-amarela.webp"
          alt="Fachada Lyon Trator Peças"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a18] opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-[#fbba00]/20 border border-[#fbba00] rounded-full px-4 py-2 text-[#fbba00] text-sm font-semibold mb-6">
              <Award size={18} />
              Mais de 10 anos de experiência
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            <span className="text-[#fbba00]">Qualidade</span> em peças e{' '}
            <span className="text-[#fbba00]">Excelência</span> em atendimento
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Distribuidora especializada em peças para Caterpillar, Komatsu, Hyundai, XCMG e mais.
            Atendemos todo o Norte do Brasil com agilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <a
              href="https://wa.me/5595984303773"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbba00] text-[#1a1a18] px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#ffd04d] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              Solicitar Orçamento
            </a>
            <button
              onClick={() => scrollToSection('produtos')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-[#1a1a18] transition-all hover:scale-105"
            >
              Nossos Produtos
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2 text-white">
              <Award className="text-[#fbba00]" size={24} />
              <span className="font-semibold">+10 anos no mercado</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="text-[#fbba00]" size={24} />
              <span className="font-semibold">3 unidades</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Zap className="text-[#fbba00]" size={24} />
              <span className="font-semibold">Entrega Rápida</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}