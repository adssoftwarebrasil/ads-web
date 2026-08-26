const infoCards = [
  {
    title: 'Nossa História',
    text: 'Localizada em Goiânia - Goiás, trabalhamos para criar uma forte reputação dentro do comércio, fornecendo produtos de alta qualidade com uma vasta variedade.',
    path: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Tecnologia e Qualidade',
    text: 'Buscamos a melhor qualidade nos materiais e a última tecnologia para o desenvolvimento e fabricação de produtos que nossos distribuidores recomendam.',
    path: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Melhor Custo-Benefício',
    text: 'Nosso time monitora constantemente os preços para garantir o melhor valor sobre toda a concorrência do mercado.',
    path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const stats = [
  { value: '500+', label: 'Modelos Disponíveis' },
  { value: '12', label: 'Marcas Atendidas' },
  { value: '100%', label: 'Qualidade Garantida' },
  { value: '24h', label: 'Atendimento Rápido' },
];

export default function About() {
  return (
    <section id="quem-somos" className="bg-gradient-to-b from-white to-[#F8F9FA] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[rgb(175,11,18)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Conheça a União Engates <br />
            Distribuidora
          </h2>
          <div className="w-24 h-1 bg-[rgb(175,11,18)] mx-auto rounded-full"></div>
          <p className="text-[#2C2C2C] text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Uma das maiores fabricantes de engates e acessórios do Brasil
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          <div className="relative group flex items-center justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(175,11,18)]/20 to-[rgb(175,11,18)]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-[600px]">
              <div className="aspect-[4/3]">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fimg%2Fcarros-oficina-fachada.webp"
                  alt="Fachada União Engates"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[rgb(175,11,18)] text-white px-6 py-3 rounded-xl shadow-xl">
              <p className="text-xl md:text-2xl font-bold">15+</p>
              <p className="text-xs md:text-sm">Anos</p>
            </div>
          </div>
          <div>
            <div className="space-y-5">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[rgb(175,11,18)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[rgb(175,11,18)]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[rgb(175,11,18)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.path} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[rgb(175,11,18)] font-bold text-base md:text-lg mb-2">{card.title}</h3>
                      <p className="text-[#2C2C2C] text-sm md:text-base leading-relaxed">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-5 md:p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-[rgb(175,11,18)]"
            >
              <div className="text-3xl md:text-4xl font-bold text-[rgb(175,11,18)] mb-1">{s.value}</div>
              <p className="text-[#2C2C2C] font-semibold text-xs md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
