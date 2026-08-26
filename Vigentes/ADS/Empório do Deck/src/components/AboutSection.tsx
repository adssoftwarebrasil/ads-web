export default function AboutSection() {
  const stats = [
    { value: '1+', label: 'Ano de experiência' },
    { value: '1000+', label: 'Metros de deck instalados' },
    { value: '100%', label: 'Madeiras selecionadas' },
    { value: '24h', label: 'Resposta no orçamento' },
  ];

  const values = ['União Familiar', 'Qualidade Garantida', 'Entrega Ágil', 'Atendimento Rápido'];

  return (
    <section id="sobre" className="py-20 bg-beigeSand">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <p className="text-accent font-semibold mb-2">Desde 2023</p>
              <h2 className="section-title text-left">Tradição Familiar em Madeiras</h2>
            </div>
            <p className="text-lg text-primaryMedium leading-relaxed">
              O Empório do Deck nasceu da união entre dois irmãos que compartilham a paixão por madeiras nobres e o compromisso com a excelência no atendimento. Desde 11 de setembro de 2023, nos dedicamos a fornecer as melhores madeiras para acabamentos, decks e forros, sempre com foco em entregas ágeis e atendimento rápido.
            </p>
            <div className="bg-white/50 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-primary font-semibold italic">
                "Nossa missão é transformar seus projetos em realidade, oferecendo madeiras selecionadas e um atendimento personalizado que supera expectativas."
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span key={value} className="badge-outline">
                  {value}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-primaryMedium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimgi_40_416024274_1034970277731902_495160883465147996_n.jpg"
                alt="Empório do Deck"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 z-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimgi_41_409435953_228727136918010_2372394749387732063_n.jpg"
                alt="Detalhe madeira"
                className="rounded-xl border-8 border-white shadow-xl w-64 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
