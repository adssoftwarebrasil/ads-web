import { Package, MapPin, Clock, ThumbsUp } from 'lucide-react';

const STATS = [
  { icon: Package, value: 'Estoque Completo', label: 'Sempre abastecido' },
  { icon: MapPin, value: 'Vila Mineira', label: 'Localização estratégica' },
  { icon: Clock, value: '7h às 17h', label: 'Seg a Sábado' },
  { icon: ThumbsUp, value: 'Atendimento', label: 'Personalizado e ágil' },
];

export default function StatsBanner() {
  return (
    <section className="bg-[#663300] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>
                <p className="font-heading font-black text-white text-base md:text-lg leading-snug">
                  {stat.value}
                </p>
                <p className="text-white/65 text-xs md:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
