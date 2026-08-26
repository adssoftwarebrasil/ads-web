import { Zap, Truck, Bus, Settings, Laptop, Droplets, Sparkles } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=5531999364049&text=Ol%C3%A1%20vim%20pelo%20Google!';

const products = [
  {
    icon: Zap,
    title: 'Bateria para Carro',
    description: 'Baterias de alta performance para todos os modelos de veículos de passeio. Marcas Moura e Tudor.',
    highlight: true,
  },
  {
    icon: Settings,
    title: 'Bateria para Moto',
    description: 'Modelos específicos para motocicletas de todas as cilindradas e fabricantes.',
    highlight: false,
  },
  {
    icon: Truck,
    title: 'Bateria para Caminhão',
    description: 'Baterias robustas e de longa duração para veículos de carga pesada.',
    highlight: false,
  },
  {
    icon: Bus,
    title: 'Bateria para Ônibus',
    description: 'Soluções de alta capacidade para frotas de transporte coletivo.',
    highlight: false,
  },
  {
    icon: Settings,
    title: 'Bateria para Máquinas',
    description: 'Baterias para equipamentos industriais, agrícolas e de construção.',
    highlight: false,
  },
  {
    icon: Laptop,
    title: ' Nobreak',
    description: 'Reposição de Nobreak com garantia de qualidade.',
    highlight: false,
  },
  {
    icon: Droplets,
    title: 'Óleo Automotivo',
    description: 'Linha completa de óleos lubrificantes para manutenção do seu veículo.',
    highlight: false,
  },
  {
    icon: Sparkles,
    title: 'Lava Jato',
    description: 'Serviço de lavagem completa do seu veículo com cuidado e atenção aos detalhes.',
    highlight: false,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-blue font-barlow font-700 uppercase tracking-widest text-sm mb-3">
            O Que Oferecemos
          </p>
          <h2 className="font-condensed font-900 uppercase text-4xl md:text-5xl lg:text-6xl text-brand-blue leading-none mb-4">
            Produtos &amp; Serviços
          </h2>
          <div className="w-16 h-1 bg-brand-yellow rounded-full mx-auto mb-6" />
          <p className="text-gray-600 font-barlow text-lg max-w-xl mx-auto leading-relaxed">
            Tudo o que seu veículo precisa em um só lugar, com qualidade e preço justo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default ${
                  product.highlight
                    ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/30'
                    : 'bg-white text-gray-800 shadow-md'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    product.highlight ? 'bg-brand-yellow' : 'bg-brand-blue/10'
                  }`}
                >
                  <Icon
                    size={26}
                    className={product.highlight ? 'text-brand-blue' : 'text-brand-blue'}
                  />
                </div>
                <h3
                  className={`font-condensed font-800 text-xl uppercase mb-3 leading-tight ${
                    product.highlight ? 'text-white' : 'text-brand-blue'
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`font-barlow text-sm leading-relaxed ${
                    product.highlight ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {product.description}
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex items-center text-sm font-barlow font-700 uppercase tracking-wide transition-colors ${
                    product.highlight
                      ? 'text-brand-yellow hover:text-brand-yellow-light'
                      : 'text-brand-blue hover:text-brand-blue-mid'
                  }`}
                >
                  Consultar preco →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
