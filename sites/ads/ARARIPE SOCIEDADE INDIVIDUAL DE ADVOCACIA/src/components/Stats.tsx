import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 9, suffix: '+', label: 'Anos de Experiência', description: 'Atuando desde 2016' },
  { value: 500, suffix: '+', label: 'Casos Resolvidos', description: 'Em todo o Goiás' },
  { value: 5, suffix: '.0', label: 'Avaliação Google', description: 'Satisfação dos clientes' },
  { value: 100, suffix: '%', label: 'Comprometimento', description: 'Em cada processo' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
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
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#003F5C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EAE6AE] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#C9A84C] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EAE6AE] mb-2 transition-transform duration-300 group-hover:scale-110">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white font-semibold text-base mb-1">{stat.label}</p>
              <p className="text-white/50 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
