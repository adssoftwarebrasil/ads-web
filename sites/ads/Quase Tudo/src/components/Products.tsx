import { Sparkles, ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Puxadores',
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fgaleria%2Fpuxadores-metalicos-modernos.webp',
    alt: 'Puxadores',
    text: 'A maior variedade de puxadores para móveis e portas de passagem em Goiânia. Todas as marcas, modelos e acabamentos para dar vida ao seu projeto.',
    dotColor: 'rgb(212, 171, 85)',
    items: ['Modelos clássicos e contemporâneos', 'Todos os acabamentos', 'Marcas renomadas', 'Qualidade premium'],
  },
  {
    title: 'Decorações',
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo/atualizacao/decoracao.webp',
    alt: 'Decorações',
    text: 'Peças exclusivas que transformam ambientes. Nossa linha de decoração foi cuidadosamente selecionada para elevar o design de interiores a um novo patamar.',
    dotColor: 'rgb(45, 45, 45)',
    items: ['Peças exclusivas', 'Design sofisticado', 'Tendências atuais', 'Para todos os estilos'],
  },
  {
    title: 'Acessórios para Banheiro',
    image: 'https://storage.lucasmendes.dev/site-sp/Quase%20Tudo/novas/acessorios-para-banheiro-atlzd.webp',
    alt: 'Acessórios para Banheiro',
    text: 'Complemente seu banheiro com elegância. Dispensers, porta-escovas, organizadores e muito mais para criar um ambiente harmonioso e funcional.',
    dotColor: 'rgb(226, 31, 22)',
    items: ['Design elegante', 'Materiais de qualidade', 'Acabamentos variados', 'Funcionalidade e beleza'],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(212,171,85)]/10 px-4 py-2 rounded-full mb-4">
            <Sparkles width={20} height={20} className="text-[rgb(212,171,85)]" />
            <span className="text-sm font-semibold text-[rgb(45,45,45)]">Nossos Produtos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Soluções para Cada <span className="text-[rgb(212,171,85)]">Ambiente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de produtos premium para transformar seus espaços
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[rgb(212,171,85)]"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-3xl font-bold text-white mb-2">{product.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">{product.text}</p>
                <ul className="space-y-3 mb-8">
                  {product.items.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: product.dotColor }}
                      ></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-[rgb(45,45,45)] hover:text-[rgb(212,171,85)] font-semibold transition-colors duration-300 group"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight
                    width={18}
                    height={18}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-br from-[rgb(45,45,45)] to-[rgb(45,45,45)]/90 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Não encontrou o que procura?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Temos milhares de produtos em nossa loja física. Entre em contato e nossa equipe especializada te ajudará a encontrar exatamente o que você precisa!
          </p>
          <a
            href="http://wa.me/556293252626"
            className="inline-flex items-center space-x-2 bg-[rgb(212,171,85)] text-[rgb(45,45,45)] px-8 py-4 rounded-full hover:bg-white transition-all duration-300 font-bold text-lg shadow-xl transform hover:scale-105"
          >
            <span>Fale com Especialista</span>
            <ArrowRight width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
