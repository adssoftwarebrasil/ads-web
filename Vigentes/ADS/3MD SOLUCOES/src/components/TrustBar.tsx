import { Award, MapPin, Clock, Zap } from 'lucide-react';

const items = [
  { icon: Award, iconClass: 'lucide lucide-award', wrap: 'from-blue-500 to-cyan-500', label: 'Credenciada Intelbras' },
  { icon: MapPin, iconClass: 'lucide lucide-map-pin', wrap: 'from-cyan-500 to-teal-500', label: '5 Cidades Atendidas' },
  { icon: Clock, iconClass: 'lucide lucide-clock', wrap: 'from-teal-500 to-emerald-500', label: 'Suporte 24h' },
  { icon: Zap, iconClass: 'lucide lucide-zap', wrap: 'from-emerald-500 to-green-500', label: 'Instalação Grátis' },
];

export default function TrustBar() {
  return (
    <section className="relative py-6 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 border-y border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="group flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100">
                <div className={`w-10 h-10 bg-gradient-to-br ${item.wrap} rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className={`${item.iconClass} w-5 h-5 text-white`} />
                </div>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500">Jaboatão • Candeias • Piedade • Barra de Jangada • Cajueiro Seco</p>
        </div>
      </div>
    </section>
  );
}
