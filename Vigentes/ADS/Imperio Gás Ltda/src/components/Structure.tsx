interface StructureCard {
  image: string;
  title: string;
  subtitle: string;
}

const cards: StructureCard[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fbotijao-prateado-anuncio.webp',
    title: 'Qualidade premium',
    subtitle: 'Segurança certificada',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fcilindros-de-gas.webp',
    title: 'Estoque garantido',
    subtitle: 'Pronta entrega sempre',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fgas-agua-empresa.webp',
    title: 'Abastecimento rápido e confiáve',
    subtitle: 'Atendimento personalizado',
  },
];

export default function Structure() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Nossa Estrutura</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            A força e a logística que abastecem sua casa com água e gás, todos os dias.
          </p>
        </div>
        <div className="mb-12 md:mb-16 flex justify-center w-full">
          <img
            src="https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fhomem-energia-gas.webp"
            alt="Especialista Império Gás - Energia e Confiança"
            loading="eager"
            className="w-full max-w-xl h-auto object-cover rounded-[2rem] shadow-2xl hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative h-72 sm:h-80 rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 cursor-default"
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="h-1.5 w-12 bg-yellow-500 mb-3 rounded-full origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-sm leading-tight">{card.title}</h3>
                  <p className="text-gray-200 text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
