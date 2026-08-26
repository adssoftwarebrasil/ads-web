import { ArrowRight, Image } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/r%20l%20tintas/galeria/';
const WA = 'http://wa.me/5566984628134';

interface Product {
  img: string;
  alt: string;
  title: string;
  desc: string;
  badge?: string;
}

const products: Product[] = [
  {
    img: BASE + 'latas-de-tinta-anjo-extra-rapido-plus_960x1280.webp',
    alt: 'Tintas Automotivas',
    title: 'Tintas Automotivas',
    desc: 'Ampla variedade de tintas para todos os tipos de veículos. Acabamento profissional com cores vivas e alta durabilidade.',
    badge: 'Mais Vendido',
  },
  {
    img: BASE + 'estante-latas-tinta-varias-marcas_960x1280.webp',
    alt: 'Tintas Imobiliárias',
    title: 'Tintas Imobiliárias',
    desc: 'Soluções completas para pintura de paredes, tetos e fachadas. Resistência e beleza para sua casa ou empresa.',
  },
  {
    img: BASE + 'latas-de-thinner-farben-5000-6000_960x1280.webp',
    alt: 'Vernizes e Primers',
    title: 'Vernizes e Primers',
    desc: 'Vernizes de alta proteção e primers de qualidade para preparar superfícies e garantir aderência perfeita.',
  },
  {
    img: BASE + 'prateleiras-azuis-com-lixas-norton-diversas_960x1280.webp',
    alt: 'Massas e Preparação',
    title: 'Massas e Preparação',
    desc: 'Massa plástica, massa poliéster e todos os produtos de preparação de superfície para um acabamento impecável.',
  },
  {
    img: BASE + 'estante-equipamentos-pintura-protecao-wimpel-3m_1280x960.webp',
    alt: 'Ferramentas e Pistolas',
    title: 'Ferramentas e Pistolas',
    desc: 'Pistolas de pintura profissionais, rolos, pincéis e todos os equipamentos para o trabalho perfeito.',
  },
  {
    img: BASE + 'produtos-automotivos-vonix-boinas-estantes_960x1280.webp',
    alt: 'Estética Automotiva',
    title: 'Estética Automotiva',
    desc: 'Linha completa Vonixx, ceras, massas de polir e produtos premium para dar brilho e proteção ao seu veículo.',
    badge: 'Destaque',
  },
];

const gallery = [
  'embalagens-thinner-anjo-premium-5l_1280x960.webp',
  'latas-tinta-farben-linha-industrial_1280x960.webp',
  'oficina-latas-tintas-prateleiras-e-mesa-colorida_1280x960.webp',
  'oficina-tintas-latas-prateleiras-balcao-computador_1280x960.webp',
  'prateleira-discos-abrasivos-ferramentas-loja_1280x960.webp',
  'prateleira-fitas-dupla-face-3m-amarelo_1280x960.webp',
  'prateleira-latas-tintas-diversas-marcas_960x1280.webp',
  'prateleira-tintas-spray-cores-diversas-loja_960x1280.webp',
  'prateleiras-latas-tinta-azul-amarelo_1280x960.webp',
  'prateleiras-latas-tintas-diversas-marcas-loja_960x1280.webp',
  'prateleiras-loja-latas-tintas-variadas_1280x960.webp',
  'prateleiras-produtos-automotivos-limpeza-e-cera_960x1280.webp',
  'prateleiras-produtos-limpeza-automotiva-massas-polir_960x1280.webp',
  'prateleiras-produtos-limpeza-automotiva-variados_1280x960.webp',
];

export default function Products() {
  return (
    <section id="produtos" className="bg-[#f9f9f9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-700 text-sm font-bold uppercase tracking-widest">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mt-2 mb-4">
            Produtos para Cada Necessidade
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base lg:text-lg">
            De tintas automotivas a imobiliárias, temos tudo que você precisa para um resultado
            profissional e duradouro.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-red-700 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.desc}</p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-700 font-semibold text-sm hover:gap-2.5 transition-all"
                >
                  Solicitar Orçamento
                  <ArrowRight className="lucide lucide-arrow-right " width={15} height={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 mb-20">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            Ver Todos os Produtos
            <ArrowRight className="lucide lucide-arrow-right " width={18} height={18} />
          </a>
        </div>
        <div className="pt-16 border-t border-gray-200">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image className="lucide lucide-image text-red-700" width={24} height={24} />
              <h3 className="text-2xl sm:text-3xl font-black text-black">Conheça Nossa Loja</h3>
            </div>
            <p className="text-gray-500 text-base">
              Explore nosso ambiente e veja a variedade de marcas e produtos que oferecemos.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {gallery.map((file, i) => (
              <div
                key={file}
                className="relative overflow-hidden rounded-xl aspect-square bg-gray-200 group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={BASE + file}
                  alt={`Galeria da loja - Imagem ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
