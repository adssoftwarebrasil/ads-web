import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 300, suffix: '+', label: 'Obras Realizadas' },
  { target: 11, suffix: '+', label: 'Anos de Experiência' },
  { target: 100, suffix: '%', label: 'Garantia de Qualidade' },
  { target: 1, suffix: ' Ano', label: 'Garantia nos Produtos' },
];

function Counter({ stat, active }: { stat: Stat; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * stat.target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, stat.target]);

  return (
    <div className="text-center">
      <div className="text-[#29456D] text-4xl lg:text-[56px] font-bold mb-2">
        {value}
        {stat.suffix}
      </div>
      <div className="text-[#666666] text-base font-medium">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="bg-[#F5F5F5] py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <Counter key={stat.label} stat={stat} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
