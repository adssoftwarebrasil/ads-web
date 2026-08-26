import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center py-24 md:py-32"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/pjtapete%2Fhero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(15, 15, 13, 0.85) 5%, rgba(15, 15, 13, 0.4) 40%, rgba(15, 15, 13, 0.85) 95%)',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center animate-fadeIn max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight animate-fadeInDelay1 drop-shadow-lg">
            Tapetes Personalizados de{' '}
            <span className="text-[rgb(183,40,26)]">Qualidade Superior</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed animate-fadeInDelay2 drop-shadow-md">
            Transforme seu espaço com elegância e estilo único. Mais de 20 anos
            criando arte em tapetes feitos sob medida para você.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center space-x-3 bg-[rgb(183,40,26)] hover:bg-[rgb(150,30,20)] text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_10px_20px_rgba(183,40,26,0.6)] animate-fadeInDelay3 ring-4 ring-[rgb(183,40,26)] ring-opacity-50"
          >
            <span>Solicitar Orçamento Grátis</span>
            <ArrowRight className="lucide lucide-arrow-right ml-1" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
