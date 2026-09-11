import { MessageCircle } from 'lucide-react';

export default function CtaParallax() {
  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/pjtapete%2FPec%CC%A7a%20seu%20Orc%CC%A7amento-paralax-efeito.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[rgb(89,16,21)] opacity-75"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Pronto para Transformar Seu Espaço?
        </h2>
        <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
          Solicite um orçamento gratuito e sem compromisso
        </p>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center space-x-2 bg-white text-[rgb(183,40,26)] border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-transparent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <MessageCircle
            className="lucide lucide-message-circle"
            width={24}
            height={24}
          />
          <span>Falar com Especialista</span>
        </button>
      </div>
    </section>
  );
}
