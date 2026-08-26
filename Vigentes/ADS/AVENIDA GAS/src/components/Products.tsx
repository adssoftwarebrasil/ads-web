import { Flame, Droplet } from 'lucide-react';

interface Product {
  icon: typeof Flame;
  title: string;
  image: string;
  description: string;
  cta: string;
  href: string;
  delay: string;
}

const products: Product[] = [
  {
    icon: Flame,
    title: 'Gás de Cozinha',
    image:
      'https://storage.lucasmendes.dev/site-sp/Avenida%20gas%2Fimg%2Fbotijoes-gas-empilhados.webp',
    description:
      'Botijões de 13kg com entrega rápida e segura. Qualidade garantida para sua casa ou estabelecimento.',
    cta: 'Solicitar Agora',
    href: 'https://wa.me/5566996186661?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20Gás%20de%20Cozinha',
    delay: '0.1s',
  },
  {
    icon: Droplet,
    title: 'Água Mineral',
    image:
      'https://storage.lucasmendes.dev/site-sp/Avenida%20gas%2Fimg%2Fgalao-agua-propaganda.webp',
    description:
      'Galões de 20 litros de água mineral pura e refrescante. Hidratação com qualidade para toda sua família.',
    cta: 'Fazer Pedido',
    href: 'https://wa.me/5566996186661?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20Água%20Mineral',
    delay: '0.2s',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#021C3F] text-center mb-16">
          Nossos Produtos
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: product.delay }}
              >
                <div className="mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="lucide w-8 h-8 text-[#DBCC5E]" />
                  <h3 className="text-2xl font-bold text-[#021C3F]">
                    {product.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#DBCC5E] text-[#021C3F] px-6 py-3 rounded-lg font-semibold hover:bg-[#c9ba4d] transition-all"
                >
                  {product.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
