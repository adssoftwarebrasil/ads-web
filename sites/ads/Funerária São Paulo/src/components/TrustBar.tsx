import { useEffect, useState, useRef } from 'react';
import { Award, Clock, MapPin, Building2 } from 'lucide-react';

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
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

  useEffect(() => {
    if (isVisible && count < 30) {
      const timer = setTimeout(() => {
        setCount((prev) => Math.min(prev + 1, 30));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  const features = [
    {
      icon: Award,
      number: `${count}+`,
      label: 'Anos de Experiência',
    },
    {
      icon: Clock,
      number: '24',
      label: 'Atendimento 24 Horas',
    },
    {
      icon: MapPin,
      label: 'Goiânia e Região',
      noNumber: true,
    },
    {
      icon: Building2,
      label: 'Grupo Senap',
      noNumber: true,
    },
  ];

  return (
    <section ref={sectionRef} className="bg-primary-light py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              {!feature.noNumber && (
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                  {feature.number}
                </div>
              )}
              <div className="text-neutral-dark font-semibold text-sm md:text-base">
                {feature.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
