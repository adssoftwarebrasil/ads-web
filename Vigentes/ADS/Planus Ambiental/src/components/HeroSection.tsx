import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 bg-gradient-to-br from-[#1A472A] via-[#1A472A] to-[#2d5e42] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8BC34A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8BC34A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Sparkles className="text-[#8BC34A] mr-2" size={20} />
            <span className="text-white text-sm font-medium">Mais de 20 anos de experiência no mercado</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Garanta a conformidade ambiental e impulsione o crescimento sustentável do seu negócio
          </h1>

          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Soluções completas em licenciamento e consultoria ambiental no Norte de Goiás.
            Evite multas, otimize custos e fortaleça a imagem da sua empresa no mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contato')}
              className="group bg-[#8BC34A] text-[#1A472A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center"
            >
              Analisar meu Caso
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 flex items-center"
            >
              Conhecer Benefícios
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
