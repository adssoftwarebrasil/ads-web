import { useEffect, useRef, useState } from 'react';
import { Users, BookOpen, Trophy, Building2 } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '24', suffix: '+', label: 'Anos de Tradição', color: 'text-yellow-500' },
  { icon: Users, value: '10', suffix: 'mil+', label: 'Alunos Formados', color: 'text-brand-blue-light' },
  { icon: BookOpen, value: '12', suffix: '', label: 'Cursos Disponíveis', color: 'text-brand-red' },
  { icon: Building2, value: '2', suffix: '', label: 'Unidades em MT', color: 'text-green-500' },
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="relative z-10 -mt-1">
      <div
        className="py-12 px-4"
        style={{
          background: 'linear-gradient(135deg, rgb(62,64,150) 0%, rgb(56,73,156) 50%, rgb(5,145,211) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                    <stat.icon size={22} className={stat.color} />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  {stat.value}
                  <span className="text-xl font-bold text-white/80">{stat.suffix}</span>
                </div>
                <div className="text-sm text-white/75 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
