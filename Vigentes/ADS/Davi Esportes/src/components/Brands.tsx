const brands = ['Adidas', 'Puma', 'Mormaii', 'Penalty', 'Kappa', 'Umbro', 'Topper', 'Mizuno'];

export default function Brands() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#363435] mb-4">Marcas de Confiança</h2>
          <p className="text-xl text-gray-600">Trabalhamos com as melhores marcas do mercado</p>
        </div>
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4 min-w-max">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex-shrink-0 px-8 py-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 w-48 text-center"
              >
                <span className="text-2xl font-bold text-[#363435] hover:text-[#FDF341] transition-colors">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
