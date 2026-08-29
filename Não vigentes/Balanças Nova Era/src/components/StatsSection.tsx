import { Award, Users, Wrench, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { icon: Award, number: 30, suffix: '+', label: 'Anos de Experiência' },
    { icon: Users, number: 3000, suffix: '+', label: 'Clientes Atendidos' },
    { icon: Wrench, number: 5000, suffix: '+', label: 'Balanças Consertadas' },
    { icon: CheckCircle, number: 1500, suffix: '+', label: 'Balanças Calibradas' },
  ];

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const interval = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.round(increment * currentStep), stat.number);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = newValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0162B1 0%, #003D6B 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px),
                           repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-5">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <stat.icon className="text-[#EA1E26]" size={56} strokeWidth={2} />
                </div>
              </div>

              <div
                className="text-white font-black mb-2 font-mono"
                style={{
                  fontSize: '64px',
                  lineHeight: '1',
                  textShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                {counts[index]}
                {stat.suffix}
              </div>

              <div
                className="text-white/90 font-semibold uppercase tracking-widest"
                style={{ fontSize: '17px', letterSpacing: '1.5px' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="absolute top-1/2 -translate-y-1/2 w-px h-24 bg-white/20"
              style={{ left: `${(index + 1) * 25}%` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
