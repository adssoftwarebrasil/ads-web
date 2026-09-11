const stats = [
  { value: '30+', label: 'anos' },
  { value: '1.000+', label: 'segurados' },
  { value: '1.000+', label: 'negócios fechados' },
  { value: '15+', label: 'serviços' },
];

export default function Stats() {
  return (
    <section className="bg-[#256C8F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center transform transition-all duration-300 hover:scale-110"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {s.value}
              </div>
              <div className="text-gray-200 text-sm md:text-base font-medium uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
