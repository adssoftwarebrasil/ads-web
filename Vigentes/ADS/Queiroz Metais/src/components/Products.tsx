import { ShoppingCart } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const products = [
  {
    name: 'Calhas',
    desc: 'Dobra e Fabricação de calhas',
    img: 'https://storage.lucasmendes.dev/site-sp/queirozmetais%2FCalhas.webp',
  },
  {
    name: 'Ferro Redondo Mecânico',
    desc: 'Barra cilíndrica de aço caracterizada por seu acabamento superficial superior',
    img: 'https://storage.lucasmendes.dev/site-sp/queirozmetais%2FFerro%20Redondo%20Meca%CC%82nico.jpg',
  },
  {
    name: 'Barra Chata',
    desc: 'Pode ser utilizada para aplicação em grades, portões, esquadrias, máquinas, etc',
    img: 'https://storage.lucasmendes.dev/site-sp/queirozmetais%2FBarra%20Chata.webp',
  },
  {
    name: 'Cantoneiras',
    desc: 'Peças metálicas em formato de L',
    img: 'https://storage.lucasmendes.dev/site-sp/queirozmetais%2FCantoneiras.jpg',
  },
  {
    name: 'Metalon',
    desc: 'Perfil de aço carbono com excelentes propriedades mecânicas',
    img: 'https://storage.lucasmendes.dev/site-sp/queirozmetais%2FMetalon.webp',
  },
  {
    name: 'Chapa para Portão',
    desc: 'Fabricada nas chapas 24, 22, 20, 18, 16 e 14',
    img: 'https://storage.lucasmendes.dev/site-sp/queirozmetais%2FChapa%20para%20Porta%CC%83o.webp',
  },
  {
    name: 'Perfil de Aço',
    desc: 'Componente metálico com formato específico, como uma viga reta ou curvada',
    img: 'https://storage.lucasmendes.dev/site-sp/queirozmetais%2FPerfil%20de%20ac%CC%A7o.jpg',
  },
];

export default function Products() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-primary">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas em produtos metálicos para atender todas as suas necessidades
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  <ShoppingCart size={20} />
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
