import { useEffect, useRef, useState } from 'react';
import { Heart, Award, Building2, Bird } from 'lucide-react';

const DifferentialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  const differentials = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Tratamento ético e carinhoso para cada pet e tutor',
    },
    {
      icon: Award,
      title: 'Equipe Experiente',
      description: 'Profissionais especializados com mais de 10 anos de experiência',
    },
    {
      icon: Building2,
      title: 'Estrutura Completa',
      description: 'Equipamentos modernos incluindo raio-x e sala de emergência',
    },
  ];

  return (
    <section
      id="differentials"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #363157 0%, #924786 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Por Que Escolher o Consultório Melina?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 transition-all duration-700 hover:bg-white/20 hover:scale-105 hover:shadow-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;