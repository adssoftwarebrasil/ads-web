interface Product {
  img: string;
  label: string;
}

const products: Product[] = [
  { img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2Fchapas.png', label: 'CHAPAS' },
  { img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FCALHAS.png', label: 'CALHAS' },
  { img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FZinco.png', label: 'ZINCO' },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FCAIXA%20D%E2%80%99AGUA%20E%20SUPORTE.png',
    label: "CAIXA D'ÁGUA E SUPORTE",
  },
  { img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FSUPORTES.png', label: 'SUPORTES' },
  { img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FPerfil.png', label: 'PERFIS' },
  { img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FTelhas.png', label: 'TELHAS' },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FLA%CC%82MINADOS.png',
    label: 'LAMINADOS',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[rgb(139,0,2)] mb-6">
            PRINCIPAIS PRODUTOS!
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          <button className="px-6 sm:px-8 py-3 rounded-lg font-bold transition-all text-sm sm:text-base bg-[rgb(139,0,2)] text-white shadow-lg">
            TODOS
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {products.map((product) => (
            <div key={product.label} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full aspect-square mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-[rgb(139,0,2)] group-hover:border-[rgb(180,0,2)] transition-all duration-300"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden bg-white shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={product.img}
                    alt={product.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <button className="bg-[rgb(139,0,2)] text-white font-bold px-6 py-3 rounded-lg hover:bg-[rgb(180,0,2)] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base whitespace-nowrap">
                {product.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
