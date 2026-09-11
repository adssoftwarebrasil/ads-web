import { useEffect, useRef, useState } from 'react';
import { Award, Users, Globe, Calendar } from 'lucide-react';

export default function Stats() {
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

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Calendar, number: 7, suffix: '+', label: 'Anos de Experiência' },
    { icon: Users, number: 500, suffix: '+', label: 'Pacientes Atendidos' },
    { icon: Award, number: 100, suffix: '%', label: 'Online' },
    { icon: Globe, number: 10, suffix: '+', label: 'Países Atendidos' },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-beige-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                <stat.icon className="w-8 h-8 text-brown-dark" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-text-main mb-2">
                {isVisible && <Counter target={stat.number} suffix={stat.suffix} />}
              </div>
              <div className="text-beige-dark font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
