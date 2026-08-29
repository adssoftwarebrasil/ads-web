const reasons = [
  {
    number: '1',
    title: 'Foco em Pequenos Negócios',
    description: 'Entendemos os desafios únicos de pequenas e médias empresas do DF.',
  },
  {
    number: '2',
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe atenção individual e soluções sob medida.',
  },
  {
    number: '3',
    title: 'Tecnologia e Inovação',
    description: 'Utilizamos as ferramentas mais modernas para otimizar processos.',
  },
  {
    number: '4',
    title: 'Experiência Comprovada',
    description: 'Mais de duas décadas ajudando empresas a crescerem de forma sustentável.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que Escolher a Gerencial Contábil?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map(({ number, title, description }) => (
            <div key={number} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(192, 160, 98)' }}>
                  <span className="text-white font-bold text-lg">{number}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
