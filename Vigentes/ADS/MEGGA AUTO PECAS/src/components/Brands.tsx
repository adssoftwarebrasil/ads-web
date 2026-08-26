const brands = [
  'ZF', 'Eaton', 'Meritor', 'Mahle', 'Cinpal', 'Cofap', 'Wabco', 'Sachs',
  'Bosch', 'Schadek', 'Visconde', 'Reserplastic', 'Hipper Freios', 'Fras-le',
  'Gates', 'Mann', 'Fleetguard', 'Cummins', 'Mercedes', 'Scania', 'Volvo',
  'Volkswagen', 'Ford', 'Iveco', 'Agrale', 'Volare', 'Spicer', 'Alcoa',
  'SKF', 'Timken', 'Nakata',
];

const extraBrands = [
  'Parker', 'Valeo', 'Monroe', 'Luk', 'Haldex', 'TRW', 'Lemförder', 'INA',
  'FAG', 'Continental',
];

function BrandList({ marginLeft }: { marginLeft?: boolean }) {
  return (
    <div className={`flex gap-8 min-w-max${marginLeft ? ' ml-8' : ''}`}>
      {brands.map((brand, i) => (
        <div
          key={`${brand}-${i}`}
          className="flex-shrink-0 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl px-8 py-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <span className="text-lg font-bold text-[rgb(28,58,122)]">{brand}</span>
        </div>
      ))}
    </div>
  );
}

export default function Brands() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgb(216,32,38)]/10 text-[rgb(216,32,38)] rounded-full text-sm font-semibold">
            Marcas Parceiras
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[rgb(28,58,122)] mb-4">
            Distribuidor Autorizado das Principais Marcas
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com mais de 100 marcas líderes no mercado de autopeças para
            veículos pesados
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            <BrandList />
            <BrandList marginLeft />
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">E muito mais...</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {extraBrands.map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 bg-[rgb(28,58,122)]/10 text-[rgb(28,58,122)] rounded-lg text-sm font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
