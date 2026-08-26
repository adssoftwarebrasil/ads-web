import { useEffect, useState, useRef } from 'react';
import { Calendar, Users, FileCheck, Star } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  inView: boolean;
}

const StatItem = ({ icon, number, label, inView }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const target = parseInt(number.replace(/\D/g, ''));
  const isPercentage = number.includes('%');
  const hasPlus = number.includes('+');

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div className="flex flex-col items-center group">
      <div className="bg-blue-very-light rounded-full p-6 mb-4 group-hover:scale-110 transition-transform">
        <div className="text-accent">{icon}</div>
      </div>
      <div className="text-5xl lg:text-6xl font-black text-primary font-mono text-shadow">
        {hasPlus && '+'}
        {count.toLocaleString()}
        {isPercentage && '%'}
      </div>
      <div className="text-sm lg:text-base text-gray-600 font-semibold uppercase tracking-wider mt-2 text-center">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: <Calendar size={48} />,
      number: '+19',
      label: 'Anos de Experiência'
    },
    {
      icon: <Users size={48} />,
      number: '+5000',
      label: 'Clientes Atendidos'
    },
    {
      icon: <FileCheck size={48} />,
      number: '+10000',
      label: 'Processos Finalizados'
    },
    {
      icon: <Star size={48} />,
      number: '98%',
      label: 'De Satisfação'
    }
  ];

  return (
    <div className="relative -mt-16 z-20 px-4">
      <div
        ref={ref}
        className="container mx-auto bg-white rounded-3xl shadow-2xl py-12 lg:py-16 px-8 lg:px-16"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatItem {...stat} inView={inView} />
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-blue-pastel" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
