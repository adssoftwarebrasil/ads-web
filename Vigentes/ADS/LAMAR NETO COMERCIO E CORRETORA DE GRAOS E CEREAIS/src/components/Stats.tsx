import { Award, Users, Truck, Handshake } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  color: string;
}

function StatItem({ icon, number, label, color }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const targetNumber = parseInt(number.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = targetNumber / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetNumber]);

  return (
    <div
      ref={elementRef}
      className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 text-center card-hover shadow-md"
      style={{ boxShadow: '0 4px 20px rgba(50, 68, 34, 0.08)' }}
    >
      <div className="flex justify-center mb-3 md:mb-4" style={{ color }}>
        {icon}
      </div>
      <div className="text-3xl md:text-[42px] font-bold text-[#324422] my-3 md:my-4">
        {count}+
      </div>
      <div className="text-sm md:text-[15px] text-[#666666] font-medium leading-snug">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-[#f8f8f8] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <StatItem
            icon={<Award className="w-10 md:w-12 h-10 md:h-12" />}
            number="17"
            label="Anos de Experiência"
            color="#fbbf1f"
          />
          <StatItem
            icon={<Users className="w-10 md:w-12 h-10 md:h-12" />}
            number="500"
            label="Clientes Satisfeitos"
            color="#688631"
          />
          <StatItem
            icon={<Truck className="w-10 md:w-12 h-10 md:h-12" />}
            number="50000"
            label="Toneladas Comercializadas"
            color="#faa431"
          />
          <StatItem
            icon={<Handshake className="w-10 md:w-12 h-10 md:h-12" />}
            number="25"
            label="Parceiros Estratégicos"
            color="#a2c145"
          />
        </div>
      </div>
    </section>
  );
}