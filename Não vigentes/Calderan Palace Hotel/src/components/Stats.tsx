const stats = [
  { value: '+0', label: 'Anos de tradição em hotelaria' },
  { value: '+0', label: 'Hóspedes satisfeitos por ano' },
  { value: '+0', label: 'Acomodações confortáveis' },
  { value: '+0', label: 'Eventos realizados com sucesso' },
];

export default function Stats() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/calderan-palace%2Ffachada-hotel-moderno.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 to-[#1A1A1A]/70"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center lg:border-r lg:last:border-r-0 border-white/20 px-4"
            >
              <div className="text-[#F09100] text-4xl lg:text-6xl font-bold mb-2">{s.value}</div>
              <p className="text-white text-xs lg:text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
