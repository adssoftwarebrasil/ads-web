import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToServicos = () => {
    const el = document.getElementById('servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Fhero-background-paralax.webp")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            Especialistas em <span className="text-[rgb(16,130,201)]">Motores Elétricos</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Mantenha sua linha de produção com qualidade
          </p>
          <p className="text-lg text-gray-300 mb-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Mais de 20 anos de experiência em manutenção e revenda de motores elétricos, geradores e bombas d'água.
            Assistência técnica autorizada WEG e Franklin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <a
              href="http://wa.me/5564999368011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgb(28,85,163)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[rgb(16,130,201)] transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Fale Conosco no WhatsApp
              <ArrowRight size={20} className="ml-2" />
            </a>
            <button
              onClick={scrollToServicos}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
