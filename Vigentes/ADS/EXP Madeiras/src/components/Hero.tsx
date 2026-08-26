import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FHero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, rgba(46, 32, 15, 0.85), rgba(46, 32, 15, 0.6))' }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <div
            className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full animate-fade-in-up"
            style={{
              backgroundColor: 'rgba(184, 134, 84, 0.2)',
              border: '1px solid rgb(184, 134, 84)',
              animationDelay: '0.2s',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            <span className="text-[#F1F1FF] text-sm sm:text-base font-medium">
              Mais de 20 anos de experiência
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F1FF] mb-4 sm:mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
          >
            Acabamentos em Madeira<br />de Alta Qualidade
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F1F1FF] opacity-90 mb-6 sm:mb-8 max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
          >
            Transforme seus ambientes com elegância e durabilidade. Especialistas em acabamentos
            nobres para residências e construtoras.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-[#B88654] text-[#F1F1FF] rounded-lg font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
            >
              <WhatsAppIcon className="w-5 h-5" fill="currentColor" />
              Solicitar Orçamento
            </a>
            <button
              onClick={scrollToServicos}
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-[#F1F1FF] text-[#F1F1FF] rounded-lg font-semibold text-base sm:text-lg hover:bg-[rgba(241,241,255,0.1)] transition-all duration-300 text-center"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          className="lucide lucide-chevron-down text-[#F1F1FF] opacity-70"
          width={32}
          height={32}
          strokeWidth={2}
        />
      </div>
    </section>
  );
}
