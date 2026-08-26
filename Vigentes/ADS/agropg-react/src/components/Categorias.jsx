const Categorias = () => {
  const categorias = [
    {
      title: "Distribuidora de Peças",
      image: "/assets/img/distribuidora-de-pecas.jpg",
      link: "#produtos",
    },
    {
      title: "Sistemas Elétricos",
      image: "/assets/img/eletrica-trator.jpg",
      link: "#produtos",
    },
    {
      title: "Eixos e Transmissões",
      image: "/assets/img/eixo-trator.jpg",
      link: "#produtos",
    },
    {
      title: "Pneus Agrícolas",
      image: "/assets/img/pneu-trator.jpg",
      link: "#produtos",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[rgb(19,46,78)] text-3xl md:text-4xl font-bold">
            Nossas Categorias
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((categoria, index) => (
            <a
              key={index}
              href={categoria.link}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-400 hover:scale-105"
            >
              <img
                src={categoria.image}
                alt={categoria.title}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-400"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(19,46,78,0.7)] to-[rgba(19,46,78,0.9)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                  {categoria.title}
                </h3>
                <button className="bg-[rgb(45,156,219)] text-white px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-all duration-300">
                  VER PRODUTOS
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categorias;
