import { MessageCircle } from 'lucide-react';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento para meu projeto.');
    window.open(`https://wa.me/5562992287419?text=${message}`, '_blank');
  };

  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/attiva%2Fcasa-moderna-arvores.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-orange/95 via-primary-orange/85 to-primary-orange-light/80" />

      <div className="container mx-auto px-4 lg:px-8 z-20 relative text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
          Pronto para Tirar seu Projeto do Papel?
        </h2>
        <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Solicite um orçamento sem compromisso e descubra como podemos ajudar
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-3 bg-white text-primary-orange px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-slow"
        >
          <MessageCircle size={24} />
          Falar no WhatsApp
        </button>
        <p className="text-white/90 text-sm mt-6">
          Atendimento de Segunda a Sábado, das 8h às 17h
        </p>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
