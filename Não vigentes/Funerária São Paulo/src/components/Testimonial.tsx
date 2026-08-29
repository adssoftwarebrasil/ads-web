import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32"
      style={{
        backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fpessoas-abracando-parque.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-primary-dark/90" />

      <div className="relative z-10 container mx-auto px-4 lg:px-12 max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <Quote className="w-10 h-10 text-white" />
          </div>

          <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
            "Nossa visão é ser referência em qualidade, agilidade e finalização do atendimento, sempre buscando a satisfação plena dos nossos clientes. Valores como transparência, honestidade, ética e comprometimento estão presentes em cada etapa do nosso trabalho."
          </blockquote>

          <div className="text-white/90 text-lg font-semibold">
            Grupo Senap - Funerária São Paulo
          </div>
        </div>
      </div>
    </section>
  );
}
