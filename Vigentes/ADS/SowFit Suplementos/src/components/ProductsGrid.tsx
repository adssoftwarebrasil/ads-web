import { ShoppingBag, MessageCircle } from 'lucide-react';

interface Product {
  category: string;
  name: string;
  img: string;
}

const products: Product[] = [
  { category: 'Aminoácidos', name: 'Aminoácidos Essenciais', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/aminoacidos-essenciais.webp' },
  { category: 'Aminoácidos', name: 'Arginina NewNutrition', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/arginina-newnutrition.webp' },
  { category: 'Proteínas', name: 'Best Whey Toddy', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/best-whey-toddy.webp' },
  { category: 'Aminoácidos', name: 'Beta Alanina', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/beta-alanine.webp' },
  { category: 'Proteínas', name: 'Carnibol', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/carnibol.webp' },
  { category: 'Vitaminas', name: 'Colágeno Protein Verisol', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/colageno-protein-verisol.webp' },
  { category: 'Aminoácidos', name: 'Creatina 100% Pura', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/creatina-100-pura.webp' },
  { category: 'Aminoácidos', name: 'Creatine Monohydrate 100% Pure', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/creatine-monohydrate-100-pure.webp' },
  { category: 'Pré-Treinos', name: 'Heat Coffee Leve Vida', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/heat-coffe-leve-vida.webp' },
  { category: 'Proteínas', name: 'Hyper Mass Protein', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/hyper-mass-protein.webp' },
  { category: 'Pré-Treinos', name: 'Pumonew Pré-Treino', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/pumonew-pre-treino.webp' },
  { category: 'Vitaminas', name: 'Bisglicinato de Zinco', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/suplemento-alimentar-de-bisglicinato-de-zinco.webp' },
  { category: 'Vitaminas', name: 'Vitamina C 1000mg', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/vitamina-c-1000-mg.webp' },
  { category: 'Proteínas', name: 'Whey 100% Puro Concentrado', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/whey-100-puro-concentrado.webp' },
  { category: 'Proteínas', name: 'Whey Protein Amendoim NewNutrition', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/whey-protein-amedoim-newnutrition.webp' },
  { category: 'Proteínas', name: 'Whey Protein Pasta de Amendoim', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/whey-protein-pasta-de-amedoim.webp' },
  { category: 'Proteínas', name: 'Whey Protein Synthe Size Morango', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/whey-protein-synthe-size-morango.webp' },
  { category: 'Proteínas', name: 'Whey Protein Synthe Size', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/whey-protein-synthe-size.webp' },
  { category: 'Proteínas', name: 'Whey Protein Zero Lactose NewNutrition', img: 'https://storage.lucasmendes.dev/site-sp/sowfit/produtos/whey-protein-zero-lactose-newnutrition.webp' },
];

export default function ProductsGrid() {
  return (
    <section id="featured-products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nossos Produtos</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção exclusiva de suplementos para potencializar seus treinos.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
            >
              <div className="aspect-[3/4] bg-white p-6 relative flex items-center justify-center border-b border-gray-50">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-gray-900 mb-4 text-sm md:text-base line-clamp-2 flex-grow group-hover:text-primary transition-colors">
                  {product.name}
                </h4>
                <a
                  href={`https://wa.me/553497228602?text=Olá! Gostaria de consultar o preço do produto: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center space-x-2 bg-gray-900 hover:bg-primary text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg w-full group-hover:bg-primary"
                >
                  <MessageCircle className="w-4 h-4" />
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
