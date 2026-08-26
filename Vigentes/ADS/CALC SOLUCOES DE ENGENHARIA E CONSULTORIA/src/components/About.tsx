const features = [
  { icon: '🌱', label: 'Sustentável' },
  { icon: '💰', label: 'Econômico' },
  { icon: '🔧', label: 'Suporte Total' },
  { icon: '⚡', label: 'Eficiente' },
];

const stats = [
  { icon: '⚡', value: '200+', label: 'Projetos Entregues', delay: '700ms' },
  { icon: '📅', value: '2', label: 'Anos de Experiência', delay: '800ms' },
  { icon: '✓', value: '100%', label: 'Satisfação', delay: '900ms' },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc22]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00108a]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00108a] mb-4 transition-all duration-1000 opacity-100 translate-y-0">
            Sobre a CALC Soluções
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-[#facc22] via-[#f88c00] to-[#facc22] rounded-full transition-all duration-1000 delay-200 opacity-100 scale-x-100"></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-[#00108a]">
                Fundada em setembro de 2023, nossa empresa nasceu com o propósito de oferecer
                soluções em energias renováveis, promovendo sustentabilidade e economia para nossos
                clientes.
              </p>
              <p>
                Com dois anos de experiência no setor e mais de 200 projetos entregues e
                homologados, atuamos na venda e instalação de sistemas fotovoltaicos, sempre
                priorizando qualidade, acessibilidade e eficiência.
              </p>
              <p>
                Nossa missão é fornecer produtos e serviços de excelência, aliando tecnologia,
                transparência e responsabilidade em cada etapa do processo. Nos destacamos como a
                escolha ideal para quem busca qualidade, custo-benefício e suporte completo,
                garantindo satisfação e confiança em cada projeto realizado.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span className="text-3xl">{f.icon}</span>
                  <span className="font-semibold text-[#00108a]">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative transition-all duration-1000 delay-500 opacity-100 translate-x-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#facc22] to-[#f88c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/calc%2Fimg%2F20240629_163131_ultra_ultra.webp"
                  alt="Instalação de painéis solares"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00108a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00108a]">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Projetos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 opacity-100 translate-y-0"
              style={{
                background: 'linear-gradient(135deg, rgb(0, 16, 138) 0%, rgb(0, 21, 184) 100%)',
                transitionDelay: s.delay,
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
              <div className="relative text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-[#facc22] mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="text-xl text-white font-medium">{s.label}</div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#facc22]/10 rounded-full blur-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
