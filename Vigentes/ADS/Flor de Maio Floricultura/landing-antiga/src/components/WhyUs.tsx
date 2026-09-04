interface Reason {
  value: string;
  title: string;
  text: string;
}

const reasons: Reason[] = [
  {
    value: '39',
    title: 'Anos de Tradição',
    text: 'A floricultura em atividade mais antiga de São Luís',
  },
  {
    value: '7/7',
    title: 'Dias por Semana',
    text: 'Funcionamos e entregamos todos os dias, inclusive domingos',
  },
  {
    value: '⚡',
    title: 'Entrega no Mesmo Dia',
    text: 'Entregas rápidas em toda São Luís e região',
  },
  {
    value: '💯',
    title: 'Qualidade Premium',
    text: 'Flores naturais selecionadas e presentes de alta qualidade',
  },
  {
    value: '💰',
    title: 'Preço Justo',
    text: 'Melhor custo-benefício sem comprometer a qualidade',
  },
  {
    value: '📍',
    title: 'Cobertura Completa',
    text: 'Atendemos toda São Luís, Paço do Lumiar, São José de Ribamar',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-gradient-to-b from-white to-[#ffe5e5] py-16 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-[var(--texto-escuro)] mb-12 lg:mb-16">
          Por Que Somos a Floricultura Mais Escolhida de São Luís?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((r) => {
            const isNumber = r.value === '39' || r.value === '7/7';
            return (
              <div
                key={r.title}
                className="bg-white rounded-[20px] p-10 lg:p-12 text-center border-2 border-transparent hover:-translate-y-3 hover:border-[var(--vermelho)] transition-all duration-300"
              >
                <div
                  className={
                    isNumber
                      ? 'text-6xl lg:text-7xl font-bold text-[var(--vermelho)] mb-4'
                      : 'text-6xl lg:text-7xl mb-4'
                  }
                >
                  {r.value}
                </div>
                <h3 className="text-xl font-bold text-[var(--texto-escuro)] mb-3">{r.title}</h3>
                <p className="text-[var(--texto-medio)] leading-relaxed">{r.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
