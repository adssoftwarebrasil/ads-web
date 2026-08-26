import { Flame, Star } from 'lucide-react';

interface Product {
  featured: boolean;
  image: string;
  imageAlt: string;
  badge: string;
  badgeClass: string;
  weight: string;
  code: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
}

const products: Product[] = [
  {
    featured: true,
    image:
      'https://storage.lucasmendes.dev/site-sp/imperial%20gas/img2/botijao-gas-supergasbras-bege-em-fundo-branco_317x510.webp',
    imageAlt: 'Gás do Povo gás 13kg entrega Goiânia',
    badge: 'Mais Vendido',
    badgeClass: 'bg-orange-500 text-white',
    weight: '13 kg',
    code: 'P13',
    subtitle: 'Ideal para residências',
    description:
      'O botijão tradicional da cozinha brasileira. Perfeito para uso doméstico diário — fogão, aquecedor e forno.',
    features: ['Uso residencial', 'Entrega em apartamentos', 'Troca rápida'],
    href: 'http://wa.me/556282381551?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20pedido%20de%20G%C3%A1s%20GLP%2013kg%20(P13).%20Qual%20o%20valor%20e%20o%20prazo%20de%20entrega%3F',
  },
  {
    featured: false,
    image:
      'https://storage.lucasmendes.dev/site-sp/imperial%20gas/img2/cilindro-gas-dourado-em-fundo-cinza_680x468.webp',
    imageAlt: 'Gás do Povo botijão de gás Goiânia',
    badge: 'Comércios',
    badgeClass: 'bg-gray-700 text-white',
    weight: '20 kg',
    code: 'P20',
    subtitle: 'Ideal para pequenos comércios',
    description:
      'Botijão ideal para lanchonetes, padarias e condomínios que demandam maior volume de gás.',
    features: ['Lanchonetes e padarias', 'Condomínios', 'Maior autonomia'],
    href: 'http://wa.me/556282381551?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20pedido%20de%20G%C3%A1s%20GLP%2020kg%20(P20).%20Qual%20o%20valor%20e%20o%20prazo%20de%20entrega%3F',
  },
  {
    featured: false,
    image:
      'https://storage.lucasmendes.dev/site-sp/imperial%20gas/img2/cilindro-gas-dourado-em-fundo-cinza_680x468.webp',
    imageAlt: 'Gás do Povo revenda de gás Goiânia',
    badge: 'Industrial',
    badgeClass: 'bg-gray-700 text-white',
    weight: '45 kg',
    code: 'P45',
    subtitle: 'Ideal para grandes estabelecimentos',
    description:
      'Para restaurantes, indústrias e estabelecimentos de alto consumo. Garante operação contínua sem interrupções.',
    features: ['Restaurantes', 'Indústrias', 'Alto consumo'],
    href: 'http://wa.me/556282381551?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20pedido%20de%20G%C3%A1s%20GLP%2045kg%20(P45).%20Qual%20o%20valor%20e%20o%20prazo%20de%20entrega%3F',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Gás GLP para cada <span className="text-orange-500">necessidade</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Precisando <strong>comprar gás perto de mim Goiânia</strong>?
            Trabalhamos com a marca Supergasbras — qualidade e procedência
            certificadas pela ANP.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.code}
              className={
                product.featured
                  ? 'relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl ring-2 ring-orange-500/50'
                  : 'relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-gray-50 border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl'
              }
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {product.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none"></div>
              )}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-24 w-auto object-contain drop-shadow-md"
                  />
                  <span
                    className={`${product.badgeClass} text-xs font-bold px-3 py-1.5 rounded-full h-fit`}
                  >
                    {product.badge}
                  </span>
                </div>
                <div className="mb-1">
                  <span
                    className={`text-5xl font-black ${
                      product.featured ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {product.weight}
                  </span>
                  <span
                    className={`ml-2 text-lg font-semibold ${
                      product.featured ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {product.code}
                  </span>
                </div>
                <p
                  className={`text-sm font-semibold mb-3 ${
                    product.featured ? 'text-orange-400' : 'text-orange-500'
                  }`}
                >
                  {product.subtitle}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    product.featured ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {product.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Flame
                        fill="#fb923c"
                        className="w-4 h-4 flex-shrink-0 text-orange-400"
                      />
                      <span
                        className={`text-sm ${
                          product.featured ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold py-3.5 rounded-2xl transition-all duration-200 bg-orange-500 hover:bg-orange-400 text-white ${
                    product.featured ? 'shadow-lg shadow-orange-500/30' : ''
                  }`}
                >
                  Solicitar Pedido
                </a>
              </div>
              {product.featured && (
                <div className="px-8 pb-6 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      fill="#facc15"
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
                  <span className="text-gray-400 text-xs ml-1">
                    O preferido dos nossos clientes
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
