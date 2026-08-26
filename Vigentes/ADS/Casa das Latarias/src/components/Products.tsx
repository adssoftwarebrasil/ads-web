import WhatsAppIcon from './WhatsAppIcon';

interface Product {
  name: string;
  image: string;
  description: string;
  waText: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    name: 'Para-choques',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/produtos/para-choques.webp',
    description:
      'Dianteiros e traseiros para os principais modelos nacionais e importados. Qualidade e encaixe perfeito.',
    waText: 'http://wa.me/5598985630349?text=Olá!%20Tenho%20interesse%20em%20Para-choques.%20Podem%20me%20ajudar?',
    badge: 'Mais vendido',
  },
  {
    name: 'Grades Frontais',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/produtos/grades-frontais.webp',
    description:
      'Grades de proteção e decorativas com acabamento de alta qualidade para valorizar a frente do seu veículo.',
    waText:
      'http://wa.me/5598985630349?text=Olá!%20Tenho%20interesse%20em%20Grades%20Frontais.%20Podem%20me%20ajudar?',
  },
  {
    name: 'Faróis',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/produtos/farois.webp',
    description:
      'Faróis dianteiros com tecnologia LED e halogênio, garantindo visibilidade e segurança nas estradas.',
    waText: 'http://wa.me/5598985630349?text=Olá!%20Tenho%20interesse%20em%20Far%C3%B3is.%20Podem%20me%20ajudar?',
  },
  {
    name: 'Lanternas',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/produtos/lanternas.webp',
    description:
      'Lanternas traseiras originais e de reposição para todos os modelos, com encaixe garantido.',
    waText: 'http://wa.me/5598985630349?text=Olá!%20Tenho%20interesse%20em%20Lanternas.%20Podem%20me%20ajudar?',
  },
  {
    name: 'Para-lamas',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/produtos/para-lamas.webp',
    description:
      'Para-lamas dianteiros e traseiros com qualidade premium para proteção do seu veículo.',
    waText: 'http://wa.me/5598985630349?text=Olá!%20Tenho%20interesse%20em%20Para-lamas.%20Podem%20me%20ajudar?',
  },
  {
    name: 'Acessórios',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/img/produtos-prateleira.webp',
    description:
      'Linha completa de acessórios automotivos para personalizar e proteger seu carro com estilo.',
    waText:
      'http://wa.me/5598985630349?text=Olá!%20Tenho%20interesse%20em%20Acess%C3%B3rios.%20Podem%20me%20ajudar?',
    badge: 'Novidades',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(252, 255, 252)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(31, 66, 131, 0.08)', color: 'rgb(31, 66, 131)' }}
          >
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'rgb(31, 66, 131)' }}>
            Tudo que seu veículo precisa
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Linha completa de latarias e acessórios com qualidade comprovada e os melhores preços do
            Maranhão.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.name}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: 'rgb(255, 193, 7)', color: 'rgb(26, 26, 26)' }}
                  >
                    {product.badge}
                  </span>
                )}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{ background: 'linear-gradient(to top, rgba(31, 66, 131, 0.7) 0%, transparent 60%)' }}
                ></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2" style={{ color: 'rgb(31, 66, 131)' }}>
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
                <a
                  href={product.waText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: 'rgb(37, 211, 102)' }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Pedir orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
