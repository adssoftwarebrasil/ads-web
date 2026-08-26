import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building2, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Counter {
  icon: LucideIcon;
  prefix?: string;
  target: number;
  suffix: string;
  title: string;
  desc: string;
  delay: number;
}

const counters: Counter[] = [
  { icon: Calendar, target: 13, suffix: '+', title: 'Anos de Mercado', desc: 'Experiência sólida transformando gestão.', delay: 0 },
  { icon: MapPin, target: 15, suffix: '+', title: 'Cidades Atendidas', desc: 'Atuação forte em SP e região.', delay: 150 },
  { icon: Building2, target: 100, suffix: '+', title: 'Empresas Assessoradas', desc: 'Histórias de sucesso construídas.', delay: 300 },
  { icon: TrendingUp, prefix: 'R$', target: 500, suffix: 'Mi', title: 'Analisados', desc: 'Em faturamento otimizado.', delay: 450 },
];

function CounterCard({ counter }: { counter: Counter }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);
  const Icon = counter.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(counter.target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, counter.target]);

  return (
    <div
      ref={ref}
      className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${counter.delay}ms` }}
    >
      <div className="mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br from-[rgb(64,102,215)]/20 to-[rgb(62,215,252)]/20 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
        <Icon width={32} height={32} className="text-[rgb(62,215,252)]" />
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        {counter.prefix && <span className="text-2xl font-bold text-white/60">{counter.prefix}</span>}
        <span className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 tracking-tight">
          {value}
        </span>
        <span className="text-3xl font-bold text-[rgb(62,215,252)]">{counter.suffix}</span>
      </div>
      <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">{counter.title}</h3>
      <p className="text-blue-200/70 text-sm font-medium leading-relaxed">{counter.desc}</p>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
    </div>
  );
}

export default function Counters() {
  return (
    <section className="py-20 bg-gradient-to-b from-[rgb(30,60,140)] to-[rgb(15,30,80)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[rgb(62,215,252)]/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/3"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {counters.map((c) => (
            <CounterCard key={c.title} counter={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
