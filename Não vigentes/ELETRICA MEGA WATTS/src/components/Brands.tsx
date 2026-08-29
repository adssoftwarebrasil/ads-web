const brands = ['STIHL', 'TRAPP', 'Hércules', 'Claw', 'Dancor', 'Anauger', 'Gedore'];

export default function Brands() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(41,35,88)] mb-4">
            Marcas que Confiamos
          </h2>
          <div className="w-20 h-1 bg-[rgb(236,33,40)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as principais marcas do mercado para oferecer qualidade e confiabilidade
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="text-2xl font-bold text-gray-400 group-hover:text-[rgb(41,35,88)] transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Distribuidor Autorizado <span className="font-bold text-[rgb(236,33,40)]">STIHL</span>
          </p>
        </div>
      </div>
    </section>
  );
}
