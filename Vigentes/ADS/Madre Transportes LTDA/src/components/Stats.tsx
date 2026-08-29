import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 20, suffix: '+', label: 'Anos de Experiência' },
  { value: 20, suffix: '+', label: 'Anos dos Fundadores no Setor' },
  { value: 5, suffix: '', label: 'Estados Atendidos' },
  { value: 100, suffix: '%', label: 'Comprometimento' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
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
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="gradient-blue py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-brand-amber/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/65 text-sm md:text-base font-medium">
                {stat.label}
              </div>
              <div className="mx-auto mt-3 w-8 h-0.5 bg-brand-amber rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
