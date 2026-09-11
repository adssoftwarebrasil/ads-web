import { MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="py-20 bg-[rgb(237,27,38)] text-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto ${
            isVisible ? 'animate-in fade-in duration-600' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Aproveitar Nossas Ofertas?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Fale conosco agora e garanta as melhores condições de pagamento
          </p>
          <a
            href="https://wa.me/c/558491775185"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[rgb(237,27,38)] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <MessageCircle size={28} />
            Abrir Catálogo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
