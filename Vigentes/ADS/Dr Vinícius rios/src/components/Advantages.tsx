const advantages = [
  {
    number: '1',
    title: 'Tratamento Individualizado',
    text: 'Planos de cuidado personalizados e adaptados especificamente às suas necessidades e condições, garantindo os melhores resultados.',
  },
  {
    number: '2',
    title: 'Equipe Qualificada',
    text: 'Profissionais experientes e comprometidos, com formação sólida nas melhores instituições e atuação contínua desde 2018 em Goiânia.',
  },
  {
    number: '3',
    title: 'Atendimento Humanizado',
    text: 'Relação de empatia, acolhimento e cuidado durante todo o tratamento - do pré-operatório ao pós-operatório completo.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="bg-[rgb(241,241,255)] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Vantagens de Nosso Atendimento
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div key={adv.number} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-[#2563eb] to-[#1e40af] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-3xl font-bold">
                {adv.number}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{adv.title}</h3>
              <p className="text-gray-600 leading-relaxed">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
