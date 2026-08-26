import { ShoppingBag, Package, Box, Layers, Coffee, UtensilsCrossed, Tag, Wrench } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/casa%20das%20embalagens';

const categories = [
  {
    icon: Coffee,
    title: 'Copos e Potes',
    description: 'Copos com tampa, potes retangulares e redondos em vários tamanhos.',
    image: `${BASE}/copos-tampa-bolha-isopor-lisos-embalagens_1290x2293.webp`,
  },
  {
    icon: Box,
    title: 'Isopor',
    description: 'Embalagens de isopor para alimentos, marmitas e delivery.',
    image: `${BASE}/embalagens-de-isopor-para-alimentos-variados_1290x2293.webp`,
  },
  {
    icon: UtensilsCrossed,
    title: 'Hambúrguer & Fast Food',
    description: 'Embalagens para hambúrguer, folha acoplada e separadores.',
    image: `${BASE}/embalagens-hamburguer-folha-acoplada-e-separador_1290x2293.webp`,
  },
  {
    icon: Layers,
    title: 'Bobinas e Filmes',
    description: 'Bobinas picotadas, bobina estrela, filme plástico para embalar.',
    image: `${BASE}/catalogocompleto-bobina-filme-plastico-embalagens_1290x2293.webp`,
  },
  {
    icon: ShoppingBag,
    title: 'Sacolas e Sacos',
    description: 'Sacolas kraft, delivery, sacos para lanche e papéis variados.',
    image: `${BASE}/sacos-embalagens-diversos-papeis-kraft-delivery_1290x2293.webp`,
  },
  {
    icon: Package,
    title: 'Fitas e Adesivos',
    description: 'Fitas adesivas, durex, bobinas de segurança para embalagem.',
    image: `${BASE}/produtos-embalagens-fitas-adesivas-bobinas-durex_1290x2293.webp`,
  },
  {
    icon: Tag,
    title: 'Descartáveis e EPI',
    description: 'Aventais, toucas, luvas de vinil, nitrílica, látex e plástica.',
    image: `${BASE}/conjunto-descartaveis-aventais-toucas-lencois_1290x2293.webp`,
  },
  {
    icon: Wrench,
    title: 'Produtos de Higiene',
    description: 'Linha completa de produtos de higiene para casa e estabelecimentos.',
    image: `${BASE}/catalogo-produtos-higiene-casa-das-embalagens_1290x2293.webp`,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-yellow/20 text-brand-blue font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue leading-tight">
            Tudo que você precisa em{' '}
            <span className="text-brand-red">embalagens</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Trabalhamos com a maior variedade em embalagens da região para todos os tipos de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="bg-brand-yellow rounded-lg p-1.5">
                    <cat.icon size={16} className="text-brand-blue" />
                  </div>
                  <span className="text-white font-bold text-sm">{cat.title}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5562984075879"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-brand-blue-dark transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Solicitar orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
