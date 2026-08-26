import { Trophy, Users, Award, MapPin } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function TrustBar() {
  const [counts, setCounts] = useState({ years: 0, clients: 0, employees: 0, units: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const targets = { years: 46, clients: 5000, employees: 10, units: 1 };
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        employees: Math.floor(targets.employees * progress),
        units: Math.floor(targets.units * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);
  };

  const stats = [
    { icon: Trophy, value: `${counts.years}+`, label: 'de experiência', color: 'text-[#FCD34D]' },
    { icon: Users, value: `${counts.clients}+`, label: 'atendidos', color: 'text-[#FCD34D]' },
    { icon: Award, value: `${counts.employees}+`, label: 'especializados', color: 'text-[#FCD34D]' },
    { icon: MapPin, value: counts.units, label: 'em Manaus', color: 'text-[#FCD34D]' },
  ];

  return (
    <section ref={sectionRef} className="bg-[#1E3A8A] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#FCD34D]" />
              <div className={`text-5xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-white text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
