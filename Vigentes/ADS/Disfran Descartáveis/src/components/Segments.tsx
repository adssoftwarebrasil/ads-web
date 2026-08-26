import { UtensilsCrossed, Cake, CakeSlice, PartyPopper, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Segment {
  icon: LucideIcon;
  iconClass: string;
  label: string;
}

const segments: Segment[] = [
  { icon: UtensilsCrossed, iconClass: 'lucide lucide-utensils-crossed mx-auto', label: 'Restaurantes' },
  { icon: Cake, iconClass: 'lucide lucide-cake mx-auto', label: 'Docerias' },
  { icon: CakeSlice, iconClass: 'lucide lucide-cake-slice mx-auto', label: 'Padarias' },
  { icon: PartyPopper, iconClass: 'lucide lucide-party-popper mx-auto', label: 'Festas e Eventos' },
  { icon: Utensils, iconClass: 'lucide lucide-utensils mx-auto', label: 'Buffets' },
];

export default function Segments() {
  return (
    <section className="py-20 px-8 bg-accent-light">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl text-primary font-bold text-center mb-16">Atendemos Diversos Segmentos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {segments.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-white p-8 rounded-2xl text-center shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
              >
                <div className="text-secondary mb-4">
                  <Icon className={s.iconClass} width={48} height={48} />
                </div>
                <p className="font-semibold text-black">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
