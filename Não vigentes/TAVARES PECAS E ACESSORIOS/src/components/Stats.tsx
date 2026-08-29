import { Calendar, Package, Users, Star } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '30+', label: 'Anos de Experiência', sub: 'No mercado desde 1993' },
  { icon: Package, value: '10mil+', label: 'Itens em Estoque', sub: 'Todas as marcas e modelos' },
  { icon: Users, value: '50mil+', label: 'Clientes Atendidos', sub: 'Consumidores, oficinas e frotas' },
  { icon: Star, value: '4.4', label: 'Avaliação no Google', sub: 'Referência em Ribeirão Preto' },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-brand-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 transition-all duration-700 opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-red/15 text-brand-red mb-4">
                  <Icon size={28} />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-white/50 text-xs">{s.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
