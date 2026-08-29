const equipe = [
  {
    nome: 'Pedro Edivar Pontes',
    cargo: 'Técnico ortopédico',
    texto: 'Responsável técnico pela oficina e pela produção das próteses, órteses e coletes.',
    iniciais: 'PP',
  },
  {
    nome: 'Dr. Aleksandro B. Pontes',
    cargo: 'Fisioterapeuta',
    texto: 'Avaliação funcional do paciente e indicação dos dispositivos mais adequados ao caso.',
    iniciais: 'AP',
  },
  {
    nome: 'Dr. Edi Angelo B. Pontes',
    cargo: 'Fisioterapeuta',
    texto: 'Acompanhamento da adaptação e dos ajustes ao longo do tratamento.',
    iniciais: 'EP',
  },
];

export default function Team() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[#0e6d8f] font-bold text-sm uppercase tracking-[0.2em]">
            Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3d5c] mt-3 mb-5 leading-tight">
            Quem cuida do seu tratamento
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Um dispositivo ortopédico bem feito depende de quem avalia tanto quanto de quem produz.
            Aqui as duas etapas conversam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {equipe.map(({ nome, cargo, texto, iniciais }) => (
            <div
              key={nome}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0e6d8f] to-[#14a3c7] flex items-center justify-center mb-5">
                <span className="text-white font-bold text-lg">{iniciais}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0b3d5c]">{nome}</h3>
              <p className="text-[#0e6d8f] font-semibold text-sm mb-3">{cargo}</p>
              <p className="text-gray-600 leading-relaxed">{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
