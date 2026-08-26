import { useEffect, useRef, useState } from 'react';

interface Stat {
  target: number;
  suffix: string;
  decimals: number;
  label: string;
  sub: string;
  divider: boolean;
}

const stats: Stat[] = [
  { target: 90, suffix: '+', decimals: 0, label: 'Clientes Ativos', sub: 'empresas atendidas', divider: true },
  { target: 3, suffix: '+', decimals: 0, label: 'Anos de Experiência', sub: 'desde 2022', divider: true },
  { target: 7, suffix: '', decimals: 0, label: 'Profissionais', sub: 'equipe qualificada', divider: true },
  { target: 5, suffix: '', decimals: 1, label: 'Avaliação Google', sub: 'nota máxima', divider: false },
];

function useCountUp(target: number, decimals: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setValue(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);

  return value.toFixed(decimals);
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const display = useCountUp(stat.target, stat.decimals, active);
  return (
    <div className="text-center animate-on-scroll">
      <div className="text-5xl lg:text-6xl font-black text-accent mb-2 leading-none">
        <span>
          {display}
          {stat.suffix}
        </span>
      </div>
      <p className="text-white font-bold text-base mb-1">{stat.label}</p>
      <p className="text-white/50 text-sm">{stat.sub}</p>
      {stat.divider && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10"></div>
      )}
    </div>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-primary-gradient py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
