const stats = [
  { value: '300m²', label: 'Área Total' },
  { value: '5+', label: 'Profissionais' },
  { value: '100%', label: 'Climatizado' },
];

export default function Store() {
  return (
    <section id="loja" className="bg-gray-50 py-20 md:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#F97316] text-sm font-bold uppercase tracking-wider">
            CONHEÇA-NOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020202] mt-3 mb-4 leading-tight">
            Estrutura Completa para Cuidar da Sua Moto
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fimg%2Fnossa-estrutura.webp"
              alt="Nossa Estrutura"
              className="w-full h-full object-cover aspect-square"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fimg%2Fnossa-loja.webp"
              alt="Nossa Loja"
              className="w-full h-full object-cover aspect-video"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fimg%2Fvista-loja.webp"
              alt="Vista da Loja"
              className="w-full h-full object-cover aspect-video"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center mb-10">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa loja conta com estrutura moderna e completa para atender você com excelência.
            Equipamentos de última geração, ambiente organizado e equipe sempre pronta para ajudar.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2">{s.value}</div>
              <div className="text-sm md:text-base text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
