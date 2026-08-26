import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Flancha-vermelha-branca.webp')",
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow leading-tight">
            Conquiste sua Habilitação Náutica em Foz do Iguaçu
          </h1>
          <p className="text-xl md:text-2xl text-white text-shadow max-w-3xl mx-auto">
            Cursos completos para Arrais Amador, Motonauta, Capitão Amador e mais. Navegue com segurança e liberdade nas águas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => window.open('https://wa.me/5545999207671', '_blank')}
              className="bg-[#c6272f] hover:bg-[#0caff0] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 animate-pulse-slow shadow-xl"
            >
              Matricule-se Agora
            </button>
            <button
              onClick={() => scrollToSection('cursos')}
              className="border-2 border-white text-white hover:bg-white hover:text-[#26367e] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Conheça os Cursos
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('beneficios')}
          className="text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          <ChevronDown size={40} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 wave-bottom"></div>
    </section>
  );
}
