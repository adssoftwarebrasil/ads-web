import { ShoppingCart } from 'lucide-react';

interface Product {
  name: string;
  category: string;
  img: string;
}

const products: Product[] = [
  {
    name: 'Alho Frito - Pote',
    category: 'Especiarias',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FALHO%20FRITO%20-%20POTE.webp',
  },
  {
    name: 'Alho Picado',
    category: 'Especiarias',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FALHO%20PICADO.webp',
  },
  {
    name: 'Chimichurri',
    category: 'Temperos',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FCHIMICHURRI.webp',
  },
  {
    name: 'Farofa Pronta - Sabor Costela',
    category: 'Farofas',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FFAROFA%20PRONTA%20-%20SABOR%20COSTELA.webp',
  },
  {
    name: 'Farofa Pronta',
    category: 'Farofas',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FFAROFA%20PRONTA.webp',
  },
  {
    name: 'Lemon Pepper',
    category: 'Temperos',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FLEMON%20PEPPER.webp',
  },
  {
    name: 'Milho de Pipoca',
    category: 'Pipocas',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FMILHO%20DE%20PIPOCA.webp',
  },
  {
    name: 'Molho de Pimenta Caipira',
    category: 'Molhos',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FMOLHO%20DE%20PIMENTA%20CAIPIRA.webp',
  },
  {
    name: 'Molho para Pipoca',
    category: 'Molhos',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FMOLHO%20PARA%20PIPOCA.webp',
  },
  {
    name: 'Orégano',
    category: 'Especiarias',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FOR%C3%89GANO.webp',
  },
  {
    name: 'Pipoca Premium',
    category: 'Pipocas',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FPIPOCA%20PREMIUM.webp',
  },
  {
    name: 'Páprica Defumada',
    category: 'Especiarias',
    img: 'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fprodutos%20em%20destaque%2FP%C3%81PRICA%20DEFUMADA.webp',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-[rgb(238,29,35)]">Produtos</span> em Destaque
          </h2>
          <p className="text-lg text-gray-600">
            Uma seleção especial dos produtos que conquistam o paladar das famílias brasileiras há
            quase 50 anos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[rgb(0,173,239)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4 min-h-[56px]">{product.name}</h3>
                <a
                  href="http://wa.me/5516997516375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[rgb(238,29,35)] to-[rgb(238,29,35)]/90 text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <ShoppingCart className="lucide lucide-shopping-cart w-5 h-5" />
                  Solicitar
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="http://wa.me/5516997516375"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[rgb(0,173,239)] to-[rgb(46,49,146)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
