interface Product {
  name: string;
  power: string;
  img: string;
  alt: string;
  colors?: string[];
}

const products: Product[] = [
  {
    name: 'ONN N1',
    power: '1000W',
    img: 'https://storage.lucasmendes.dev/site-sp/i-move%2FONN%20N1%20100W%20-%20AZUL%20CE%CC%81U.webp',
    alt: 'ONN N1',
    colors: [
      'linear-gradient(135deg, rgb(135, 206, 235), rgb(70, 130, 180))',
      'rgb(26, 26, 26)',
      'linear-gradient(135deg, rgb(176, 176, 176), rgb(128, 128, 128))',
      'linear-gradient(135deg, rgb(152, 251, 152), rgb(60, 179, 113))',
    ],
  },
  {
    name: 'CRUISER',
    power: '500W',
    img: 'https://storage.lucasmendes.dev/site-sp/i-move%2FCRUISER%20500W.webp',
    alt: 'CRUISER',
  },
  {
    name: 'JOY SUPER',
    power: '800W',
    img: 'https://storage.lucasmendes.dev/site-sp/i-move%2FJOY%20SUPER%20800W.webp',
    alt: 'JOY SUPER',
  },
  {
    name: 'X12',
    power: '1000W',
    img: 'https://storage.lucasmendes.dev/site-sp/i-move%2FX12%20-%201000W.webp',
    alt: 'X12',
  },
  {
    name: 'WD2',
    power: '1000W',
    img: 'https://storage.lucasmendes.dev/site-sp/i-move%2FWD2%201000W.webp',
    alt: 'WD2',
  },
  {
    name: 'TRICICLO',
    power: '800W',
    img: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=i-move%2Fuf.png&version_id=null',
    alt: 'TRICICLO',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#035772] mb-4">NOSSOS PRODUTOS</h2>
          <p className="text-xl text-gray-600">Mobilidade elétrica de verdade</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl animate-fade-in-up relative"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-4 right-4 bg-[#e0fd2c] text-black text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                Não precisa CNH
              </div>
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-contain transition-transform duration-500 scale-100"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#035772] mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">
                  Potência: <span className="font-semibold">{product.power}</span>
                </p>
                {product.colors && (
                  <div className="flex gap-2 mb-4">
                    {product.colors.map((color, ci) => (
                      <button
                        key={ci}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          ci === 0
                            ? 'border-[#e0fd2c] scale-110'
                            : 'border-gray-300 hover:border-[#035772]'
                        }`}
                        style={{ background: color }}
                      ></button>
                    ))}
                  </div>
                )}
                <a
                  href="https://wa.me/5541988248004?text=Olá! Gostaria de saber mais sobre as bikes I-MOV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#e0fd2c] text-black text-center px-6 py-3 rounded-full font-bold hover:bg-[#035772] hover:text-white transition-all duration-300"
                >
                  SAIBA MAIS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
