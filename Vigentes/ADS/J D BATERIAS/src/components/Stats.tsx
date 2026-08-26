import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

const STATS = [
  { target: 15, label: 'Marcas Disponíveis' },
  { target: 500, label: 'Clientes Satisfeitos' },
  { target: 10, label: 'Anos de Mercado' },
  { target: 1, label: 'Filial em Natal' },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatItem({ target, label, active }: { target: number; label: string; active: boolean }) {
  const value = useCountUp(target, active);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2" style={{ color: 'rgb(254, 186, 0)' }}>
        +{value}
      </div>
      <div className="text-white text-base md:text-lg font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <section className="py-16" style={{ backgroundColor: 'rgb(4, 51, 140)' }}>
      <div ref={ref} className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <StatItem key={s.label} target={s.target} label={s.label} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
