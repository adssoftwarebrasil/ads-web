const Marcas = () => {
  const marcas = Array.from({ length: 20 }, (_, n) => ({
    id: n + 1,
    url: `/assets/img/marca-parceiro-${n + 1}.webp`,
    alt: `Marca ${n + 1}`,
  }));

  return (
    <section id="parceiros" className="bg-[rgb(245,247,250)] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[rgb(19,46,78)] text-3xl md:text-4xl font-bold mb-4">
            Marcas com que Trabalhamos
          </h2>
          <p className="text-[rgb(107,114,128)] text-lg">
            Peças novas, originais e compatíveis das principais marcas do mercado agrícola
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {marcas.map((marca) => (
            <div
              key={marca.id}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <img
                src={marca.url}
                alt={marca.alt}
                className="w-full h-auto object-contain max-h-[80px] grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-[rgb(107,114,128)] text-xs mt-10 max-w-3xl mx-auto">
          As marcas e logotipos exibidos pertencem aos seus respectivos proprietários e são
          utilizados apenas para indicar a compatibilidade das peças comercializadas. A AGROPG é
          uma distribuidora independente e não possui vínculo de representação oficial com os
          fabricantes.
        </p>
      </div>
    </section>
  );
};

export default Marcas;
