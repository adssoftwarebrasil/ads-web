import { ArrowRight } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5538999719665';

interface Product {
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
}

const products: Product[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fimg%2Fcilindros-oxigenio-industriais.webp',
    alt: 'Cilindros de Oxigênio',
    title: 'Cilindros de Oxigênio',
    description: 'Cilindros industriais e medicinais certificados, disponíveis em diversos tamanhos.',
    tags: ['Venda', 'Aluguel', 'Recarga'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fimg%2Fsolda-multiprocessos-striker.webp',
    alt: 'Máquinas de Solda',
    title: 'Máquinas de Solda',
    description:
      'Equipamentos profissionais para soldagem com tecnologia de ponta e alta durabilidade.',
    tags: ['MIG/MAG', 'TIG', 'Inversora'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fimg%2Fprodutos-solda-discos.webp',
    alt: 'Eletrodos e Arames',
    title: 'Eletrodos e Arames',
    description: 'Consumíveis de soldagem de alta qualidade para diversos tipos de aplicação.',
    tags: ['Eletrodos', 'Arames MIG', 'Discos'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fimg%2Fsoprador-termico-caixa.webp',
    alt: 'Ferramentas e Acessórios',
    title: 'Ferramentas e Acessórios',
    description:
      'Linha completa de ferramentas e acessórios para soldagem e manutenção industrial.',
    tags: ['Sopradores', 'EPI', 'Acessórios'],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Variedade e Qualidade em Estoque
          </h2>
          <p className="text-lg text-gray-600">
            Trabalhamos com as melhores marcas do mercado e mantemos amplo estoque para atender sua
            demanda com agilidade.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Consultar
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Estoque Completo e Diversificado
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa loja conta com prateleiras repletas de produtos selecionados e equipamentos de
                ponta. Seja para uso medicinal, industrial ou profissional, temos a solução ideal
                para você.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-yellow-500 text-gray-900 px-8 py-4 rounded-full hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
              >
                Ver Disponibilidade
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fimg%2Fnoroeste-oxigenio-prateleira.webp"
                alt="Prateleira de produtos"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/noroeste%20oxigenio%2Fimg%2Fprateleira-produtos-estoque.webp"
                alt="Estoque de produtos"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
