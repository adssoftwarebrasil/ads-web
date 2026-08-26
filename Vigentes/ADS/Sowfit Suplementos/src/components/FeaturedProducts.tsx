import { MessageCircle } from 'lucide-react';

interface FeaturedProduct {
  badge: string;
  name: string;
  desc: string;
  img: string;
}

const products: FeaturedProduct[] = [
  {
    badge: 'Mais Vendido',
    name: 'Whey 100% Puro Concentrado',
    desc: 'Proteína premium para ganho de massa muscular',
    img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/whey-100-puro-concentrado.webp',
  },
  {
    badge: 'Destaque',
    name: 'Creatina 100% Pura',
    desc: 'Aumento de força e performance nos treinos',
    img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/creatina-100-pura.webp',
  },
  {
    badge: 'Mais Vendido',
    name: 'Whey Protein Zero Lactose',
    desc: 'Todo o poder do Whey, agora 100% livre de lactose.',
    img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/whey-protein-zero-lactose-newnutrition.webp',
  },
  {
    badge: 'Lançamento',
    name: 'Pumonew Pré-Treino',
    desc: 'Energia e foco máximo para seus treinos',
    img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/pumonew-pre-treino.webp',
  },
  {
    badge: 'Destaque',
    name: 'Colágeno Protein Verisol',
    desc: 'Saúde da pele, cabelos e articulações',
    img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/colageno-protein-verisol.webp',
  },
  {
    badge: 'Mais Vendido',
    name: 'Vitamina C 1000mg',
    desc: 'Fortalecimento do sistema imunológico',
    img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/vitamina-c-1000-mg.webp',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Produtos em Destaque</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Os suplementos mais procurados pelos nossos clientes
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animation: `0.6s ease-out ${i * 0.1}s 1 normal forwards running fadeInUp`, opacity: 0 }}
            >
              <div className="relative aspect-[3/4] bg-gray-50">
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.badge}
                  </span>
                </div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain p-6"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{product.desc}</p>
                <a
                  href={`https://wa.me/553497228602?text=Olá! Gostaria de consultar o preço do produto: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Consultar Preço</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
