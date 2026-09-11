import { Clock, MapPin, Phone, Utensils } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function QuickInfo() {
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

  const infoItems = [
    {
      icon: Clock,
      title: 'Horário',
      text: 'Seg-Sex: 11h às 14:30h | Sáb-Dom: 11:30h às 15h',
    },
    {
      icon: MapPin,
      title: 'Localização',
      text: 'Setor Bueno, Goiânia',
    },
    {
      icon: Phone,
      title: 'Contato',
      text: '(62) 3926-7006',
    },
    {
      icon: Utensils,
      title: 'Tipo',
      text: 'Buffet a Quilo',
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-sage">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-primary/10 rounded-full mb-4 hover:scale-110 transition-transform">
                  <Icon className="text-orange-primary" size={28} />
                </div>
                <h3 className="font-semibold text-warm-gray mb-2">{item.title}</h3>
                <p className="text-sm text-warm-gray/70">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
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

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
