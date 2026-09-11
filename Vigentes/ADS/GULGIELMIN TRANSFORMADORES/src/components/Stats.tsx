import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 20, suffix: '+', label: 'Anos de Experiência', desc: 'no mercado elétrico industrial' },
  { value: 500, suffix: 'km', label: 'Área de Atendimento', desc: 'raio de cobertura no MT' },
  { value: 98, suffix: '%', label: 'Taxa de Satisfação', desc: 'dos clientes atendidos' },
  { value: 24, suffix: 'h', label: 'Resposta Emergencial', desc: 'atendimento prioritário' },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
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
  }, [target, duration, start]);

  return count;
}

function StatItem({ value, suffix, label, desc, started }: {
  value: number;
  suffix: string;
  label: string;
  desc: string;
  started: boolean;
}) {
  const count = useCountUp(value, 1800, started);

  return (
    <div className="text-center px-4 py-8">
      <div className="text-4xl sm:text-5xl font-black text-brand-yellow mb-2">
        {count}{suffix}
      </div>
      <div className="text-white font-bold text-base mb-1">{label}</div>
      <div className="text-white/50 text-sm">{desc}</div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-brand-dark border-y border-brand-yellow/20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #FCEC03 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-yellow/20">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
