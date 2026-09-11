import { STATS } from '../data';

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-[#0C4E9D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-30"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-3 flex items-center justify-center gap-1">
                <span className="text-blue-300 font-medium text-2xl md:text-3xl">{stat.prefix}</span>
                <span className="tabular-nums">{stat.value}</span>
                {stat.suffix && <span className="text-blue-300 font-medium text-2xl md:text-3xl">{stat.suffix}</span>}
              </div>
              <p className="text-blue-50/80 text-xs md:text-sm font-semibold uppercase tracking-wider leading-tight max-w-[150px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
