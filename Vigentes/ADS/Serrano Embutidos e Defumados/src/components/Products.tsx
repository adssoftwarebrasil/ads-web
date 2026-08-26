import { WHATSAPP_URL } from '../lib/constants';

interface Product {
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    badge: 'Colonial',
    title: 'Salame Defumado',
    description:
      'Produzido com carnes selecionadas e temperos especiais, nosso salame defumado tem textura firme, sabor intenso e aroma inconfundível.',
    image:
      'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/SALAME.webp',
    alt: 'Salame Defumado',
  },
  {
    badge: 'Mais Vendido',
    title: 'Salame Reto',
    description:
      'Versão clássica do salame colonial, com corte reto e sabor equilibrado. Ideal para tábuas de frios, petiscos e receitas especiais.',
    image:
      'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/SALAME%20RETO.webp',
    alt: 'Salame Reto',
  },
  {
    badge: 'Churrasco',
    title: 'Linguiça Toscana',
    description:
      'Linguiça artesanal de origem colonial, perfeita para churrascos e degustações. Tempero na medida certa para conquistar o paladar.',
    image:
      'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/LINGUICA%20DEGUSTA%C3%87%C3%83O.webp',
    alt: 'Linguiça Toscana',
  },
  {
    badge: 'Premium',
    title: 'Copa',
    description:
      'Corte nobre da carne suína, curado e defumado com maestria. A copa Serrano é referência em sabor e qualidade na região.',
    image:
      'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/COPA.webp',
    alt: 'Copa',
  },
  {
    badge: 'Artesanal',
    title: 'Torresmo',
    description:
      'Nosso torresmo artesanal é produzido com banha pura e feito de forma tradicional no "fogo a lenha". Somos a única empresa no estado autorizada a produzir na lenha esse produto.',
    image:
      'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/TORRESMO.webp',
    alt: 'Torresmo',
  },
  {
    badge: 'Tradicional',
    title: 'Banha Suína',
    description:
      'Pura e 100% natural. Nossa banha é ideal para o preparo de refeições mais saudáveis, garantindo aquele sabor inconfundível de comida de fazenda.',
    image:
      'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/banha.webp',
    alt: 'Banha Suína',
  },
  {
    badge: 'Frescal',
    title: 'Linguiça Toscana Clássica',
    description:
      'A verdadeira linguiça toscana, com proporção ideal de carne e temperos rústicos para o seu dia a dia ou churrasco de domingo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/linguica-toscana.webp',
    alt: 'Linguiça Toscana Clássica',
  },
  {
    badge: 'Especial',
    title: 'Salame Defumado Especial',
    description:
      'Uma variação especial do nosso salame, com cura lenta e notas marcantes da defumação artesanal para os paladares mais exigentes.',
    image:
      'https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/salame-defumado.webp',
    alt: 'Salame Defumado Especial',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#FF6601] text-xs font-bold uppercase tracking-widest">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Produtos Coloniais<br />
            <span className="text-[#FF6601]">Feitos com Tradição</span>
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Cada produto é elaborado com matéria-prima selecionada, seguindo receitas tradicionais
            que preservam o sabor autêntico do produto colonial.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FF6601]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6601]/10"
            >
              <div className="relative overflow-hidden h-56 sm:h-64">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80"></div>
                <span className="absolute top-4 left-4 bg-[#FF6601] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {product.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6601] transition-colors">
                  {product.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{product.description}</p>
                <a
                  href={WHATSAPP_URL}
                  className="inline-flex items-center gap-2 text-[#FF6601] hover:text-white text-sm font-semibold border border-[#FF6601]/40 hover:bg-[#FF6601] px-4 py-2 rounded-full transition-all duration-200"
                >
                  Solicitar Pedido
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-4">
            Também trabalhamos com Banha e cortes especiais de carne suína.
          </p>
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 bg-[#FF6601] hover:bg-[#AF4502] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105"
          >
            Ver Catálogo Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
