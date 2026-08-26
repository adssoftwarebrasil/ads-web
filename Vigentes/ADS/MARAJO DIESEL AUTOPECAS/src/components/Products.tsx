import {
  Settings,
  Wrench,
  Gauge,
  Wind,
  Package,
  Circle,
  Droplet,
  Disc,
  Grip,
  LucideIcon,
} from 'lucide-react';

interface Product {
  name: string;
  image: string;
  Icon: LucideIcon;
}

const products: Product[] = [
  {
    name: 'Cardan',
    image: 'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2FCardan.png',
    Icon: Settings,
  },
  {
    name: 'Câmbio MB e Alavancas',
    image:
      'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2FCa%CC%82mbio%20MB%20e%20Alavancas.png',
    Icon: Wrench,
  },
  {
    name: 'Diferencial',
    image:
      'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2FDiferencial.png',
    Icon: Gauge,
  },
  {
    name: 'Direção e Suspensão',
    image:
      'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2FDirec%CC%A7a%CC%83o%20e%20suspensa%CC%83o.png',
    Icon: Wind,
  },
  {
    name: 'Escapamentos',
    image:
      'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2FEscapamentos.png',
    Icon: Package,
  },
  {
    name: 'Juntas',
    image: 'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2FJuntas.png',
    Icon: Circle,
  },
  {
    name: 'Reservatório e Tanques',
    image:
      'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2FReservato%CC%81rio%20e%20tanques.png',
    Icon: Droplet,
  },
  {
    name: 'Rodas',
    image: 'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2FRodas.png',
    Icon: Disc,
  },
  {
    name: 'Cabos',
    image: 'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2Fcabos.png',
    Icon: Grip,
  },
  {
    name: 'Freios',
    image: 'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2Ffreios.png',
    Icon: Disc,
  },
  {
    name: 'Lubrificantes e Colas',
    image:
      'https://storage.lucasmendes.dev/site-sp/marajodi%2Fprodutos%2Flubrificantes%20e%20colas.png',
    Icon: Droplet,
  },
];

export default function Products() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(1,51,153)] mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-[rgb(84,84,84)] max-w-3xl mx-auto">
            Oferecemos uma linha completa de autopeças para caminhões e ônibus, com
            produtos de qualidade garantida e preços competitivos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => {
            const Icon = product.Icon;
            return (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[rgb(255,116,16)] mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[rgb(1,51,153)] mb-6 flex-grow">
                    {product.name}
                  </h3>
                  <button className="w-full py-3 px-6 border-2 border-[rgb(1,51,153)] text-[rgb(1,51,153)] rounded-lg font-semibold hover:bg-[rgb(1,51,153)] hover:text-white transition-all duration-300">
                    Fale Conosco
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
