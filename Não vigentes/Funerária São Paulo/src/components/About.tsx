import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    'Transparência',
    'Honestidade',
    'Ética',
    'Comprometimento',
  ];

  return (
    <section id="sobre" ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-neutral-dark font-bold mb-6 leading-tight">
              Cuidado e Respeito em Momentos Difíceis
            </h2>
            <p className="text-lg text-neutral mb-6 leading-relaxed">
              Aqui na Funerária São Paulo, nosso compromisso é trazer o melhor atendimento para nossos clientes em um momento tão delicado. Nossa missão é oferecer soluções inteligentes e inovadoras que tragam conforto e tranquilidade para as famílias.
            </p>
            <p className="text-lg text-neutral mb-8 leading-relaxed">
              Com mais de 30 anos de experiência, fazemos parte do renomado Grupo Senap, reconhecido por sua tradição familiar e gestão direta, garantindo agilidade, transparência e excelência em cada atendimento.
            </p>
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-semibold text-neutral-dark mb-4">
                Nossos Valores:
              </h3>
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-neutral-dark font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fsala-velorio.webp"
                alt="Escritório moderno e elegante"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-light rounded-2xl -z-10 hidden lg:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-light rounded-2xl -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
