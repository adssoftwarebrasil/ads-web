import { useEffect, useRef, useState } from 'react';

interface Stat {
  target: number;
  label: string;
}

const stats: Stat[] = [
  { target: 15, label: 'Anos de Experiência' },
  { target: 500, label: 'Poços Artesianos Perfurados' },
  { target: 2000, label: 'Manutenções de Bombas' },
  { target: 3000, label: 'Clientes Satisfeitos' },
];

function Counter({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return <span ref={ref}>{value}+</span>;
}

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-[rgb(222,222,221)]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(37,155,208)] mb-2">
                <Counter target={stat.target} />
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
