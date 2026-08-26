import { Award, Users, Battery, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  bg: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Award, iconClass: 'lucide-award', bg: 'rgb(251, 35, 51)', value: '40+', label: 'Anos de Experiência' },
  { Icon: Users, iconClass: 'lucide-users', bg: 'rgb(41, 97, 169)', value: '1.000+', label: 'Clientes Mensais' },
  { Icon: Battery, iconClass: 'lucide-battery', bg: 'rgb(251, 35, 51)', value: '200+', label: 'Tipos de Baterias' },
  { Icon: Building2, iconClass: 'lucide-building2', bg: 'rgb(41, 97, 169)', value: '5+', label: 'Unidades na Região' },
];

const GRID_BG =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=";

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-[rgb(41,97,169)] to-[rgb(31,77,149)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${GRID_BG}')` }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
            Números que Impressionam
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Nossa Trajetória de Sucesso
          </h2>
          <div className="w-24 h-1 bg-[rgb(251,35,51)] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: stat.bg }}>
                  <stat.Icon size={32} className={`lucide ${stat.iconClass} text-white`} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
