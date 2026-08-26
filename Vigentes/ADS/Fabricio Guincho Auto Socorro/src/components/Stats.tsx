const stats = [
  { value: '3+', label: 'anos de experiência' },
  { value: '500+', label: 'clientes atendidos' },
  { value: '1000+', label: 'veículos rebocados' },
  { value: '100%', label: 'satisfação dos clientes' },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(211,66%,41%)] mb-2">{s.value}</div>
              <p className="text-gray-600 text-sm md:text-base font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
