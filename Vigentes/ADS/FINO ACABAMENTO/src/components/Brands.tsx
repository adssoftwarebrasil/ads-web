const brands = [
  {
    name: 'Elizabeth',
    logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FElizabeth.png'
  },
  {
    name: 'Eliane',
    logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FEliane.png'
  },
  {
    name: 'Decortiles',
    logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FDecortiles.png'
  },
  {
    name: 'Gart',
    logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FGart.png'
  },
  {
    name: 'Gauss',
    logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FGauss.png'
  },
  {
    name: 'Arquitech',
    logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FArquitech.png'
  },
  {
    name: 'E-home',
    logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FE-home.png'
  },
  {
    name: 'Debacco',
    logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FDeBacco.png'
  },
];

export default function Brands() {
  return (
    <section id="marcas" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Parcerias</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Marcas Parceiras
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com as principais marcas do mercado brasileiro de revestimentos e acabamentos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              /* Alterado de w-[160px] h-[120px] para w-[240px] h-[160px] */
              className="bg-white backdrop-blur-sm border border-white/20 rounded-2xl p-4 w-[240px] h-[160px] flex items-center justify-center hover:bg-gray-50 hover:border-white/40 hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}