import { MessageCircle, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #152755 0%, #1a3366 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Fconserto-caminhao-oficina.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Mecânica Pesada e Auto Peças em Água Boa/MT
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            27 anos de experiência em manutenção de caminhões e máquinas pesadas.
            Atendimento especializado com garantia em todos os serviços.
          </p>

          <div className="space-y-3 mb-10">
            {[
              'Atendimento 24h em emergências',
              'Técnicos especializados e certificados',
              'Garantia em todos os serviços',
              'Auto peças com os melhores preços'
            ].map((item, index) => (
              <div key={index} className="flex items-center text-white">
                <svg className="w-6 h-6 mr-3 text-[#FF6B35] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5566996460016?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e55a2a] transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="mr-2" size={24} />
              Fale no WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('servicos')}
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#152755] transition-all transform hover:scale-105"
            >
              Ver Serviços
              <ArrowDown className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50" size={32} />
      </div>
    </section>
  );
}
