const stats = [
  { value: '+20', label: 'anos de experiência' },
  { value: '+1.000', label: 'clientes satisfeitos' },
  { value: '+500', label: 'modelos diferentes' },
  { value: '+150', label: 'projetos realizados' },
];

export default function Stats() {
  return (
    <section className="bg-[rgb(183,40,26)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i < 3
                  ? 'text-center lg:border-r border-white border-opacity-20'
                  : 'text-center '
              }
            >
              <div className="text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white text-opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
