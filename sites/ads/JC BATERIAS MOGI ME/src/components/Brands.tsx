const brands = [
  {
    name: 'AC Delco',
    img: 'https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fmarca-bateria-ac-delco.webp',
  },
  {
    name: 'Excell',
    img: 'https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fmarca-bateria-excell.webp',
  },
  {
    name: 'Heliar',
    img: 'https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fmarca-bateria-heliar.webp',
  },
  {
    name: 'Herbo',
    img: 'https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fmarca-bateria-herbo.webp',
  },
  {
    name: 'Moura',
    img: 'https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fmarca-bateria-moura.webp',
  },
  {
    name: 'Zeta',
    img: 'https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fmarca-bateria-zeta.webp',
  },
];

export default function Brands() {
  return (
    <section id="produtos" className="py-12 md:py-20 bg-light">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-purple mb-4">
            Trabalhamos com as Melhores Marcas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Parceiros de confiança para garantir a melhor qualidade e durabilidade
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
