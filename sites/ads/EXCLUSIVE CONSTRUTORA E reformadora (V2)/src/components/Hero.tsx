import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Award, CheckCircle, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTA = () => {
    window.open('https://wa.me/5562993531722?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20engenheiro.', '_blank');
  };

  return (
    <section
      id="hero"
      // ALTERAÇÃO 1: pt-32 no mobile (mais espaço do header) e pb-20 (espaço embaixo)
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-20 md:pb-0"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#050a1e]/90 via-[#0a154b]/85 to-[#104071]/80"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          

          {/* ALTERAÇÃO 2: Fontes menores no mobile (text-3xl) para não quebrar layout */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Excelência em Construção<br />e Reformas
          </h1>

          <p className="text-lg sm:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
            Do projeto ao acabamento, materializamos o seu sonho com agilidade, técnica e atendimento exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
            <Button variant="accent" onClick={handleCTA} className="text-lg px-10 py-4 w-full sm:w-auto">
              Solicite seu orçamento
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const element = document.getElementById('sobre');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-lg px-10 py-4 border-2 border-white/30 w-full sm:w-auto"
            >
              Conheça Nossa História
            </Button>
          </div>

          {/* ALTERAÇÃO 3: gap-4 no mobile para os cards ficarem mais juntos */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-xl hover:bg-white/15 transition-all">
              <Award className="text-[#07dde5] mx-auto mb-3" size={32} />
              <p className="text-xl md:text-2xl font-bold text-white mb-1">+12 Anos</p>
              <p className="text-gray-300 text-sm">de Experiência</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-xl hover:bg-white/15 transition-all">
              <CheckCircle className="text-[#07dde5] mx-auto mb-3" size={32} />
              <p className="text-xl md:text-2xl font-bold text-white mb-1">100%</p>
              <p className="text-gray-300 text-sm">Projetos Entregues</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-xl hover:bg-white/15 transition-all">
              <Users className="text-[#07dde5] mx-auto mb-3" size={32} />
              <p className="text-xl md:text-2xl font-bold text-white mb-1">Engenheiros</p>
              <p className="text-gray-300 text-sm">Titulados e Experientes</p>
            </div>
          </div>
        </div>
      </div>

      {/* ALTERAÇÃO 4: hidden sm:block - Esconde a seta em telas pequenas para não poluir */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};