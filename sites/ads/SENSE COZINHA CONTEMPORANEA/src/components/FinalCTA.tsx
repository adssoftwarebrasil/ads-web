import { MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_16_576662460_18392468212121202_3202758875584047937_n_ultra.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div
          className={`max-w-4xl mx-auto ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Venha Descobrir os Sabores do Dia
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-light leading-relaxed">
            Todos os dias uma nova experiência te espera no Setor Bueno!
          </p>
          <a
            href="https://wa.me/556239267006?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-orange-primary text-white rounded-full hover:bg-orange-dark transition-all duration-300 hover:scale-110 shadow-2xl font-medium text-lg animate-pulse-subtle"
          >
            <MessageCircle size={24} />
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
