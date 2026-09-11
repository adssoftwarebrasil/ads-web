import { useEffect, useRef, useState } from 'react';
import { Calendar, FolderCheck, MapPin, CheckCircle } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon, number, label, delay }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const targetNumber = parseInt(number.replace(/\D/g, ''));
    if (isNaN(targetNumber)) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  const displayNumber = number.includes('+')
    ? `${count}+`
    : number.includes('%')
    ? `${count}%`
    : count.toString();

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center text-center p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-4 text-primary-orange">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-2">
        {isVisible ? displayNumber : '0'}
      </div>
      <div className="text-gray-300 text-sm">
        {label}
      </div>
    </div>
  );
};

const TrustBar = () => {
  const stats = [
    {
      icon: <Calendar size={48} />,
      number: '15+',
      label: 'Anos de experiência no mercado',
      delay: 0,
    },
    {
      icon: <FolderCheck size={48} />,
      number: '500+',
      label: 'Projetos realizados',
      delay: 100,
    },
    {
      icon: <MapPin size={48} />,
      number: 'Grande Goiânia',
      label: 'Área de atendimento',
      delay: 200,
    },
    {
      icon: <CheckCircle size={48} />,
      number: '100%',
      label: 'Aprovação em órgãos públicos',
      delay: 300,
    },
  ];

  return (
    <section id="credibilidade" className="bg-primary-blue-dark py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
