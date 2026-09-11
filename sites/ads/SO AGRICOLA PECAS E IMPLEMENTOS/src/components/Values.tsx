import { Target, Eye, Heart } from 'lucide-react';
import { VALUES } from '../data/constants';

const ICONS: Record<string, React.ElementType> = { Target, Eye, Heart };

export default function Values() {
  return (
    <section className="py-20 md:py-28 bg-brand-green-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-brand-orange font-bold text-sm tracking-widest uppercase mb-4">
            No que acreditamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Visão, Missão e Valores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {VALUES.map((v) => {
            const Icon = ICONS[v.icon] ?? Target;
            return (
              <div
                key={v.title}
                className="group relative bg-white/5 border border-white/10 hover:bg-white/10 rounded-3xl p-8 md:p-10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-orange/20 group-hover:bg-brand-orange/30 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon size={28} className="text-brand-orange" />
                </div>
                <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2">
                  {v.subtitle}
                </p>
                <h3 className="text-2xl font-extrabold text-white mb-4">{v.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}