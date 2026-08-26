import { ArrowRight, Wrench } from 'lucide-react';

const products = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/tradicao%20pecas%20agricolas%2Fimg%2Frolamento-para-plantadeira.webp',
    title: 'Rolamentos para Plantadeiras',
    desc: 'Rolamentos de alta precisão para máquinas agrícolas Case e New Holland',
    tags: ['Rolamentos Case', 'Rolamentos New Holland', 'Plantadeiras'],
    wa: 'https://wa.me/557736281005?text=Olá! Gostaria de saber mais sobre Rolamentos para Plantadeiras',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/tradicao%20pecas%20agricolas%2Fimg%2Frolamento.webp',
    title: 'Rolamentos Industriais',
    desc: 'Linha completa de rolamentos para máquinas agrícolas de diversas marcas',
    tags: ['Máquinas Agrícolas', 'Alta Durabilidade', 'Qualidade'],
    wa: 'https://wa.me/557736281005?text=Olá! Gostaria de saber mais sobre Rolamentos Industriais',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/tradicao%20pecas%20agricolas%2Fimg%2Fsem-fim-usado-perfeito-estado.webp',
    title: 'Sem Fim e Componentes',
    desc: 'Peças de reposição em perfeito estado para colheitadeiras e plantadeiras',
    tags: ['Colheitadeiras', 'Peças de Reposição', 'Certificadas'],
    wa: 'https://wa.me/557736281005?text=Olá! Gostaria de saber mais sobre Sem Fim e Componentes',
  },
];

const categories = [
  {
    title: 'Plantadeiras',
    items: [
      'Peças para plantadeiras Case',
      'Peças para plantadeiras New Holland',
      'Peças plantadeira Momentum',
      'Peças plantadeiras Horsch',
    ],
  },
  {
    title: 'Colheitadeiras',
    items: [
      'Peças colheitadeiras Case',
      'Peças colheitadeiras New Holland',
      'Correias agrícolas para colheitadeiras',
      'Esteiras para máquinas agrícolas',
    ],
  },
  {
    title: 'Pulverizadores',
    items: [
      'Peças para pulverizadores Case',
      'Peças para pulverizadores New Holland',
      'Peças Pulverizador Case',
      'Peças pulverizador New Holland',
    ],
  },
  {
    title: 'Componentes',
    items: [
      'Rolamentos para máquinas agrícolas',
      'Correntes para máquinas agrícolas',
      'Correias e parafusos',
      'Peças plataforma CNH e Macdon',
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(173,132,84)] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(1,52,47)] mb-6">
            Peças de Alta Qualidade para Seu Agronegócio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma linha completa de peças agrícolas certificadas para as
            principais marcas do mercado
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(1,52,47)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[rgb(1,52,47)] mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-[rgb(221,183,120)]/20 text-[rgb(1,52,47)] px-3 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[rgb(173,132,84)] hover:text-[rgb(1,52,47)] font-semibold group/link"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="flex items-center justify-center mb-10">
            <Wrench className="w-8 h-8 text-[rgb(173,132,84)] mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-[rgb(1,52,47)]">
              Categorias de Produtos
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((c) => (
              <div key={c.title} className="space-y-4">
                <h4 className="text-lg font-bold text-[rgb(1,52,47)] border-b-2 border-[rgb(221,183,120)] pb-2">
                  {c.title}
                </h4>
                <ul className="space-y-3">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-gray-600"
                    >
                      <span className="text-[rgb(173,132,84)] mr-2 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://wa.me/557736281005?text=Olá! Gostaria de conhecer mais sobre os produtos da Tradição Peças Agrícolas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[rgb(1,52,47)] hover:bg-[rgb(1,52,47)]/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Ver Catálogo Completo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
