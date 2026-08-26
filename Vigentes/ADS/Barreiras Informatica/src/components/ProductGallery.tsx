import { MessageCircle } from 'lucide-react';

interface Product {
  image: string;
  alt: string;
  name: string;
  category: 'Informática' | 'Papelaria' | 'Móveis';
}

const products: Product[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fcadeira-gamer-preta.webp',
    alt: 'Cadeira Gamer Preta Ergonômica',
    name: 'Cadeira Gamer Pro',
    category: 'Móveis',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fmochilas-coloridas-loja.webp',
    alt: 'Mochilas escolares coloridas',
    name: 'Mochilas Escolares',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fnotebook-mesa.webp',
    alt: 'Notebook sobre mesa',
    name: 'Notebooks e Laptops',
    category: 'Informática',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fcadernos-coloridos-ilustrados.webp',
    alt: 'Cadernos coloridos com ilustrações',
    name: 'Cadernos Ilustrados',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Ffones-ouvido-jbl.webp',
    alt: 'Fones de ouvido JBL',
    name: 'Fones JBL',
    category: 'Informática',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fcaixa-som-preta.webp',
    alt: 'Caixa de som portátil preta',
    name: 'Caixas de Som',
    category: 'Informática',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fkit-materiais-escola.webp',
    alt: 'Kit completo de materiais escolares',
    name: 'Kits Escolares',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fplanners-turquesa-rosa.webp',
    alt: 'Planners 2025 turquesa e rosa',
    name: 'Planners 2025',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Festojos-coloridos-canetas.webp',
    alt: 'Estojos coloridos com canetas',
    name: 'Estojos Sortidos',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fcanetas-coloridas-embalagem.webp',
    alt: 'Canetas coloridas em embalagem',
    name: 'Canetas Coloridas',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fmochilas-homem-aranha.webp',
    alt: 'Mochilas do Homem-Aranha',
    name: 'Mochilas Personagens',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fprojetor-intelbras-mesa.webp',
    alt: 'Projetor Intelbras sobre mesa',
    name: 'Projetores',
    category: 'Informática',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fmochila-xadrez-rosa.webp',
    alt: 'Mochila xadrez rosa',
    name: 'Mochila Xadrez',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fcadeira-gamer-azul.webp',
    alt: 'Cadeira gamer azul',
    name: 'Cadeira Gamer Azul',
    category: 'Móveis',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fmochila-sereia-disney.webp',
    alt: 'Mochila da Sereia Disney',
    name: 'Mochila Disney',
    category: 'Papelaria',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Fcaixa-som-azul.webp',
    alt: 'Caixa de som azul',
    name: 'Caixa de Som Azul',
    category: 'Informática',
  },
];

function ProductCard({ product }: { product: Product }) {
  const categoryColors = {
    Informática: { bg: 'bg-[#145bcc]/10', text: 'text-[#145bcc]' },
    Papelaria: { bg: 'bg-[#f8cd21]/10', text: 'text-[#f8cd21]' },
    Móveis: { bg: 'bg-[#e3130c]/10', text: 'text-[#e3130c]' },
  };

  const colors = categoryColors[product.category];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.alt}
          className="w-full h-full object-cover transition-transform duration-400 hover:scale-115"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 mb-2">{product.name}</h3>
        <span className={`inline-block text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} font-semibold uppercase`}>
          {product.category}
        </span>
      </div>
    </div>
  );
}

export default function ProductGallery() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-[#f0f9ff] py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#69bfd6] text-sm font-semibold uppercase tracking-wider mb-4">
            DESTAQUES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Confira Alguns de Nossos Produtos
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Uma seleção especial para você conhecer a variedade e qualidade que oferecemos em todas as categorias
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/5577999948600?text=Olá! Gostaria de ver todos os produtos disponíveis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-12 py-5 rounded-xl text-lg font-bold shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:scale-105 transition-transform"
          >
            <MessageCircle size={24} />
            Ver Todos os Produtos no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
