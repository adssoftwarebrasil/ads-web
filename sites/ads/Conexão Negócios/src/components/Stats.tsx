import { Calendar, Users, Truck, Handshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  value: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { Icon: Calendar, value: '+15', label: 'anos', sub: 'de experiência' },
  { Icon: Users, value: '+10.000', label: 'clientes', sub: 'satisfeitos' },
  { Icon: Truck, value: '+7.000', label: 'veículos', sub: 'atendidos' },
  { Icon: Handshake, value: '+100', label: 'parceiros', sub: 'comerciais' },
];

export default function Stats() {
  return (
    <div className="relative bg-gradient-to-br from-primary-blue via-[#1e2a4a] to-[#111827] py-20 sm:py-24 px-4 sm:px-6 w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent-red blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative group flex flex-col items-center text-center p-4">
              <div className="mb-6 p-4 rounded-full bg-white/10 text-white group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm">
                <stat.Icon size={32} strokeWidth={2} />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-none mb-2 tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base sm:text-lg font-bold text-white/90 uppercase tracking-widest">{stat.label}</span>
                <span className="text-sm font-medium text-white/60">{stat.sub}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
