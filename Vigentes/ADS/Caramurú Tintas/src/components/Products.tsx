import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/site';

type Product = {
  image: string;
  alt: string;
  badge: string;
  title: string;
  text: string;
};

const products: Product[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Ftintas-para-uso-interno.webp',
    alt: 'Tintas para Uso Interno',
    badge: 'Imobiliário',
    title: 'Tintas para Uso Interno',
    text: 'Tintas de alta qualidade para ambientes internos, com excelente cobertura e durabilidade.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Ftintas-para-uso-externo.webp',
    alt: 'Tintas para Uso Externo',
    badge: 'Imobiliário',
    title: 'Tintas para Uso Externo',
    text: 'Proteção e beleza para suas fachadas com resistência às intempéries.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Fesmalte-sintetico-para-uso-residencial.webp',
    alt: 'Esmalte Sintético',
    badge: 'Residencial',
    title: 'Esmalte Sintético',
    text: 'Esmalte sintético de alta performance para uso residencial e acabamento superior.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Ftintas-especificas-para-veiculos.webp',
    alt: 'Tintas Automotivas',
    badge: 'Automotivo',
    title: 'Tintas Automotivas',
    text: 'Linha completa de tintas específicas para veículos com acabamento profissional.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Ftintas-epoxi-e-poliuretano-para-uso-industrial.webp',
    alt: 'Tintas Epóxi e Poliuretano',
    badge: 'Industrial',
    title: 'Tintas Epóxi e Poliuretano',
    text: 'Soluções industriais de alta resistência para ambientes exigentes.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Ftintas-spray-disponivel-em-varias-cores-para-diversas-aplicacoes.webp',
    alt: 'Tinta Spray',
    badge: 'Diversos',
    title: 'Tinta Spray',
    text: 'Disponível em várias cores para diversas aplicações rápidas e práticas.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Fvernizes-para-protecao-de-madeira-com-otima-apresentacao.webp',
    alt: 'Vernizes para Madeira',
    badge: 'Acabamento',
    title: 'Vernizes para Madeira',
    text: 'Proteção e realce da beleza natural da madeira com ótima apresentação.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Fprodutos-que-protegem-superficies-contra-umidade.webp',
    alt: 'Impermeabilizantes',
    badge: 'Proteção',
    title: 'Impermeabilizantes',
    text: 'Produtos que protegem superfícies contra umidade e infiltrações.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Fmassa-corrida-pinceis-e-rolos-para-finalizacao.webp',
    alt: 'Massa Corrida e Acessórios',
    badge: 'Acabamento',
    title: 'Massa Corrida e Acessórios',
    text: 'Pincéis, rolos e massa corrida para finalização perfeita.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fprodutos%2Fpistolas-maquinas-e-acessorios-para-pintura-profissional.webp',
    alt: 'Pistolas e Máquinas',
    badge: 'Equipamentos',
    title: 'Pistolas e Máquinas',
    text: 'Equipamentos e acessórios profissionais para pintura de alta qualidade.',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-4">
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas para <span className="text-blue-600">Todos os Tipos de Pintura</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Da pintura residencial aos projetos industriais mais complexos, temos tudo o que você
            precisa para garantir resultados profissionais e duradouros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.text}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Solicitar Orçamento
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Temos muito mais produtos em nossa loja física. Entre em contato e nossa equipe
              especializada te ajudará a encontrar exatamente o que você precisa.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Falar com Especialista
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
