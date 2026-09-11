import { Calendar, Leaf, Heart, Globe, Home, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Differentials() {
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
    {
      icon: Calendar,
      title: 'Cardápio Renovado Diariamente',
      description: 'Todos os dias preparamos novos pratos para surpreender seu paladar',
    },
    {
      icon: Leaf,
      title: 'Ingredientes Frescos',
      description: 'Selecionamos os melhores ingredientes para garantir qualidade e sabor',
    },
    {
      icon: Heart,
      title: 'Culinária Equilibrada',
      description: 'Opções saudáveis sem abrir mão do sabor e da sofisticação',
    },
    {
      icon: Globe,
      title: 'Inspiração Mediterrânea',
      description: 'Técnicas contemporâneas com influências da culinária mundial',
    },
    {
      icon: Home,
      title: 'Ambiente Acolhedor',
      description: 'Espaço sofisticado e confortável para sua refeição',
    },
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      description: 'No coração do Setor Bueno, fácil acesso e estacionamento',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sage uppercase tracking-widest text-sm font-medium">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-gray mt-2 mb-4 leading-tight">
            Por Que Escolher o Sense
          </h2>
          <p className="text-warm-gray/70 text-lg max-w-3xl mx-auto">
            Cada detalhe pensado para proporcionar a melhor experiência gastronômica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-cream to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-warm-gray mb-3">{item.title}</h3>
                <p className="text-warm-gray/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
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

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
