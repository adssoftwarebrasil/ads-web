const advantages = [
  {
    number: '01',
    image: 'https://storage.lucasmendes.dev/site-sp/marajodi%2Fimg2%2F1.jpeg',
    title: 'Atendimento Diferenciado',
    text: 'Nossa equipe especializada oferece consultoria personalizada para ajudá-lo a encontrar exatamente o que precisa. Valorizamos cada cliente e garantimos um atendimento próximo e profissional.',
  },
  {
    number: '02',
    image: 'https://storage.lucasmendes.dev/site-sp/marajodi%2Fimg2%2F2.jpeg',
    title: 'Peças de Alta Qualidade',
    text: 'Trabalhamos apenas com fornecedores homologados e peças certificadas. Garantimos produtos originais e de primeira linha para assegurar a durabilidade e segurança do seu veículo.',
  },
  {
    number: '03',
    image: 'https://storage.lucasmendes.dev/site-sp/marajodi%2Fimg2%2F3.jpeg',
    title: 'Agilidade nas Entregas',
    text: 'Estoque completo e logística eficiente para atender suas necessidades com rapidez. Entendemos que tempo parado é prejuízo, por isso priorizamos a agilidade sem comprometer a qualidade.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 md:py-28 bg-[rgb(1,51,153)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vantagens de Escolher a Marajó Diesel
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Descubra por que somos a escolha preferida de empresas e profissionais do
            transporte
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {advantages.map((adv) => (
            <div key={adv.number} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-[rgb(255,116,16)] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{adv.number}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{adv.title}</h3>
              <p className="text-white/80 leading-relaxed">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
