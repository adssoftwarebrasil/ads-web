const stats = [
  { value: '0+', label: 'Anos' },
  { value: '0+', label: 'Projetos Realizados' },
  { value: '0+', label: 'Clientes Satisfeitos' },
  { value: '0+', label: 'Tipos de Produtos' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#2E200F]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-8">
              <div className="text-5xl md:text-6xl font-bold text-[#B88654] mb-2">{s.value}</div>
              <div className="text-lg text-[#F1F1FF] opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
