import { Waves, Layers, Home, Grid3x3, DoorOpen, Lock, Frame } from 'lucide-react';

const products = [
  {
    title: 'Decks de Madeira',
    description: 'Decks em madeiras nobres para áreas externas e internas',
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fdecks-comercial-piso-madeira-homem-jardinagem.webp',
    icon: Grid3x3,
  },
  {
    title: 'Decks para Piscinas',
    description: 'Madeiras tratadas específicas para áreas molhadas',
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fdecks-comercial-madeira-piscina.webp',
    icon: Waves,
  },
  {
    title: 'Forros Paulistas',
    description: 'Forros de madeira estilo paulista para acabamento perfeito',
    image:'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fforro-parede-madeira-iluminacao.webp',
    icon: Layers,
  },
  {
    title: 'Forros de Madeira',
    description: 'Diversos modelos de forros em madeiras nobres',
    image:'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fforro-madeira-cedrinho.webp',
    icon: Home,
  },
  {
    title: 'Madeiras para Pergolados',
    description: 'Vigas e caibros selecionados para pergolados duráveis',
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimgi_45_403184550_1089035208753973_1316002327757744255_n.jpg',
    icon: Grid3x3,
  },
  {
    title: 'Forros Ripados',
    description: 'Forros ripados para design moderno e sofisticado',
    image:'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fforro-teto-ripado-madeira.webp',
    icon: Layers,
  },
  {
    title: 'Forro Lambril',
    description: 'Lambris em madeira maciça para revestimento',
    image:'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2F1530291218lambril-01.png',
    icon: Grid3x3,
  },
  {
    title: 'Portas e Janelas',
    description: 'Portas e janelas em madeira sob medida',
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTA-COM-ALISAR-E-PORTAL-6.webp',
    icon: DoorOpen,
  },
  {
    title: 'Portas Laminadas',
    description: 'Portas laminadas com acabamento premium',
    image:'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTA-COM-ALISAR-E-PORTAL-4.webp',
    icon: DoorOpen,
  },
  {
    title: 'Portais',
    description: 'Portais decorativos em madeira nobre',
    image:'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTAL-DUPLO-PIVOTANTE-BARCELONA-CEDRO-ARANA.png',
    icon: Home,
  },
  {
    title: 'Fechaduras e Dobradiças',
    description: 'Ferragens de qualidade para complementar seu projeto',
    image:'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimgi_44_403930917_897437527980777_3379034983242928591_n.jpg',
    icon: Lock,
  },
  {
    title: 'Alisares para Acabamentos',
    description: 'Alisares e molduras para acabamento refinado',
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2F15243_alisar-misto-jogo-5x1-137_z1_637227431929507920_1200x.webp',
    icon: Frame,
  },
];

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Produtos em Madeira</h2>
          <p className="section-subtitle">Soluções completas em madeiras para construção e acabamento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="product-card group"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {product.image ? (
                <div className="overflow-hidden rounded-t-xl mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="flex justify-center mb-4">
                  <product.icon size={40} className="text-primary transition-transform duration-500 group-hover:rotate-[360deg]" />
                </div>
              )}
              <h3 className="text-lg font-bold text-primary mb-2">{product.title}</h3>
              <p className="text-sm text-primaryMedium leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
