import { useEffect, useState, useRef } from 'react';
import { Users, Building2, Handshake, Calendar } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const StatCard = ({ icon, value, label, suffix = '+' }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center animate-fade-in-up">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f88601] text-white mb-4">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-[#eb6601] mb-2">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <p className="text-[#666666] text-base">{label}</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatCard
            icon={<Users size={32} />}
            value={10000}
            label="Clientes atendidos"
          />
          <StatCard
            icon={<Building2 size={32} />}
            value={10}
            label="Bancos parceiros"
          />
          <StatCard
            icon={<Handshake size={32} />}
            value={50}
            label="Parceiros de Negócios Confiáveis em todo Brasil"
          />
          <StatCard
            icon={<Calendar size={32} />}
            value={15}
            label="Anos de atuação no mercado"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
