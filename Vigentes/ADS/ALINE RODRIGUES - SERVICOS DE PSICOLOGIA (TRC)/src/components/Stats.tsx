const gridStyle = {
  backgroundImage:
    'linear-gradient(rgb(74, 59, 42) 1px, transparent 1px), linear-gradient(90deg, rgb(74, 59, 42) 1px, transparent 1px)',
  backgroundSize: '64px 64px',
};

const stats = ['12 módulos', '1 ano de acesso', 'Base em TCC', '100% online'];

export default function Stats() {
  return (
    <section className="bg-brand-beige pb-12 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.025]">
        <div className="absolute inset-0" style={gridStyle} />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s) => (
            <div
              key={s}
              className="text-center bg-white/60 backdrop-blur-sm border border-brand-brown/15 rounded-2xl px-4 py-5 md:py-6 shadow-sm"
            >
              <p className="font-display text-xl md:text-2xl lg:text-[1.75rem] text-brand-brown font-bold leading-tight">
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
