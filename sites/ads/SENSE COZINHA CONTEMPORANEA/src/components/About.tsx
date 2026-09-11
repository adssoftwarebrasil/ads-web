import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const differentials = [
    'Ingredientes frescos e selecionados',
    'Opções saudáveis e equilibradas',
    'Ambiente sofisticado e acolhedor',
    'Localização privilegiada no Setor Bueno',
  ];

  return (
    <section ref={sectionRef} id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2FDSC09550_ultra.webp"
              alt="Ambiente sofisticado do Sense Cozinha Contemporânea em Goiânia"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div
            className={`${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <span className="text-sage uppercase tracking-widest text-sm font-medium">
              Cozinha Contemporânea
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-gray mt-2 mb-6 leading-tight">
              Uma Experiência Gastronômica Única
            </h2>
            <p className="text-warm-gray/80 text-lg mb-6 leading-relaxed">
              O Sense Cozinha Contemporânea é um restaurante de comida a quilo sofisticado, que une a riqueza da culinária brasileira com o cuidado de uma refeição equilibrada e saudável.
            </p>
            <p className="text-warm-gray/80 text-lg mb-8 leading-relaxed">
              Cada prato é preparado com ingredientes selecionados, técnicas contemporâneas e muito carinho.
            </p>

            <div className="space-y-4">
              {differentials.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <CheckCircle2 className="text-sage flex-shrink-0 mt-1" size={24} />
                  <span className="text-warm-gray text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
