import { useEffect, useState } from 'react';
import { useInView } from '../lib/utils';

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 20, suffix: '+', label: 'Anos de Experiência' },
  { target: 6000, suffix: '+', label: 'Cores Disponíveis' },
  { target: 5000, suffix: '+', label: 'Clientes Atendidos' },
  { target: 100, suffix: '%', label: 'de Satisfação Garantida' },
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <div className="text-4xl lg:text-5xl font-bold mb-2">
      {value}
      {suffix}
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section
      className="py-20 lg:py-24 text-white"
      style={{
        background: 'linear-gradient(135deg, rgb(240, 135, 54) 0%, rgb(230, 115, 33) 100%)',
      }}
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter target={s.target} suffix={s.suffix} active={inView} />
              <div className="text-lg lg:text-xl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
