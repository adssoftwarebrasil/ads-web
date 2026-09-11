import { useInView } from '../hooks/useInView';

interface Product {
  title: string;
  description: string;
  image: string;
  badge: string;
}

const products: Product[] = [
  {
    title: 'Baterias Automotivas',
    description:
      'Linha completa de baterias para todos os modelos de veículos, com garantia e instalação gratuita.',
    image:
      'https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Fbaterias-moura-empilhadas.webp',
    badge: 'Mais Vendido',
  },
  {
    title: 'Pneus de Todas as Marcas',
    description:
      'Amplo estoque de pneus para carros, caminhonetes e SUVs. Marcas líderes do mercado.',
    image:
      'https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Fpneus-empilhados-loja.webp',
    badge: 'Grande Estoque',
  },
  {
    title: 'Rodas de Liga Leve',
    description: 'Rodas esportivas e elegantes para transformar o visual do seu veículo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Frodas-de-liga.webp',
    badge: 'Qualidade Premium',
  },
];

export default function Products() {
  const title = useInView<HTMLHeadingElement>();

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={title.ref}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-12 lg:mb-16 transition-all duration-800 ${
            title.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Nossos Produtos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl overflow-hidden transition-all duration-800 hover:scale-105 hover:shadow-2xl ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms`, boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 20px' }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-[rgb(248,203,27)] text-black px-4 py-2 rounded-full text-sm font-semibold">
          {product.badge}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-black mb-3">{product.title}</h3>
        <p className="text-[rgb(66,66,66)] leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}
