import { Award, PackageCheck, Users, MapPin } from 'lucide-react';

const items = [
  { icon: Award, cls: 'lucide-award', label: '25+ anos de mercado' },
  { icon: PackageCheck, cls: 'lucide-package-check', label: '40.000 itens em estoque' },
  { icon: Users, cls: 'lucide-users', label: 'Equipe especializada' },
  { icon: MapPin, cls: 'lucide-map-pin', label: 'Cobertura no Nordeste' },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3 reveal is-visible">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                  <Icon className={`lucide ${item.cls} w-5 h-5`} />
                </div>
                <p className="text-sm md:text-base font-semibold text-slate-700 leading-tight">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
