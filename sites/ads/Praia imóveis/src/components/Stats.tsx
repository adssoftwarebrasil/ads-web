import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Home, MapPin, Award } from 'lucide-react';

const stats = [
  { icon: Award, value: 17, suffix: '+', label: 'Anos no Mercado', desc: 'Experiência consolidada' },
  { icon: Home, value: 500, suffix: '+', label: 'Imóveis Negociados', desc: 'Negócios realizados' },
  { icon: MapPin, value: 6, suffix: '', label: 'Regiões de Atuação', desc: 'Litoral cearense' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Satisfação', desc: 'Clientes satisfeitos' },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ icon: Icon, value, suffix, label, desc }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1800, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-8 group">
      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors duration-300">
        <Icon size={24} className="text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-1">{label}</div>
      <div className="text-white/45 text-xs">{desc}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#00484e] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
