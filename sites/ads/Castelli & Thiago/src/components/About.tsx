const stats = [
  { value: '2023', label: 'Fundação' },
  { value: '50K+', label: 'Ouvintes' },
  { value: '100+', label: 'Shows' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Sobre a Dupla
          <div className="h-1 w-24 bg-[#DAA520] mx-auto mt-4"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 leading-relaxed order-2 md:order-1">
            <p className="text-lg">
              Em 2023, <span className="text-[#DAA520] font-semibold">Pedro Castelli</span> e{' '}
              <span className="text-[#DAA520] font-semibold">Thiago Maciel</span> uniram seus
              talentos para criar uma dupla que rapidamente conquistou o cenário sertanejo de Belo
              Horizonte.
            </p>
            <p className="text-lg">
              A marca registrada da dupla é a{' '}
              <span className="text-white font-semibold">
                alternância perfeita entre primeira e segunda voz
              </span>
              , trazendo uma harmonia única e envolvente que cativa o público em cada apresentação.
            </p>
            <p className="text-lg">
              Após o período pós-pandemia, Castelli & Thiago se consolidaram no mercado, tocando
              hoje nas{' '}
              <span className="text-[#DAA520] font-semibold">maiores casas de show de BH</span>,
              incluindo Clube Chalezinho, Observatório, Violada Porcão e Rust Music Bar.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-[#DAA520]/20 to-transparent backdrop-blur-sm border border-[#DAA520]/30 rounded-lg px-6 py-3"
                >
                  <p className="text-[#DAA520] font-bold text-2xl">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://i.ibb.co/Np7tbKQ/1-Foto-de-Trabalho-2.png"
              alt="Castelli & Thiago - Foto Oficial"
              className="rounded-2xl shadow-2xl shadow-[#DAA520]/20 w-full hover:shadow-[#DAA520]/40 transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
