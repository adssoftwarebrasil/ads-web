const specialties = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/petexotic%2Fsegurando-calopsita.jpeg',
    title: 'Aves',
    text: 'Calopsitas, papagaios, periquitos e outras aves',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/petexotic%2Fsorrindo-segurando-coelho.jpeg',
    title: 'Coelhos',
    text: 'Todas as raças e idades',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/petexotic%2Fsegurando-hamster.jpeg',
    title: 'Hamsters',
    text: 'Sírios, anões e outras espécies',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/petexotic%2Fsegurando-porquinhodaindia.jpeg',
    title: 'Porquinhos da Índia',
    text: 'Cuidados especializados para porquinhos',
  },
];

const alsoAttend = [
  'Anfíbios (axolotes e anuros)',
  'Chinchilas',
  'Furões',
  'Répteis (serpentes, lagartos e quelônios)',
  'Ratos (Twister e outros)',
  'Outros mamíferos',
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiência e conhecimento no cuidado de diversos animais exóticos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Também Atendemos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {alsoAttend.map((animal) => (
              <div
                key={animal}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-3 h-3 bg-[#3A9E3E] rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{animal}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Tem dúvidas se atendemos seu pet? Entre em contato conosco!
          </p>
        </div>
      </div>
    </section>
  );
}
