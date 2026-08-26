import { Award, Wrench, Heart, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Badges() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const badges = [
    {
      icon: Award,
      title: '6+ Anos',
      description: 'De experiência no mercado',
    },
    {
      icon: Wrench,
      title: 'Manutenção Rápida',
      description: 'Frota sempre revisada',
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Seu conforto é prioridade',
    },
    {
      icon: MapPin,
      title: 'Grande São Luís',
      description: 'Atendemos toda região',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white -mt-16 relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-primary"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <badge.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
