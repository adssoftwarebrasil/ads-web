import { MessageCircle } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    name: 'Tambores e Bombonas 200L',
    description: 'Tambores plásticos de alta resistência, ideais para armazenamento e transporte de líquidos.',
    image: 'https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fprodutos%2Fbombonas-azuis-armazenamento.webp',
    features: ['200 litros', 'Alta durabilidade', 'Múltiplos usos'],
  },
  {
    name: 'Containers IBC 1000L',
    description: 'Containers para transporte e armazenamento de líquidos com estrutura reforçada.',
    image: 'https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fprodutos%2Fcontainer-ibc-armazenamento.webp',
    features: ['1000 litros', 'Grade metálica', 'Empilhável'],
  },
  {
    name: 'Cochos para Gado',
    description: 'Cochos de polietileno em diversos tamanhos, resistentes e duráveis para alimentação animal.',
    image: 'https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fprodutos%2Fcocho-azul-210.webp',
    features: ['Vários tamanhos', 'Material resistente', 'Fácil limpeza'],
  },
  {
    name: 'Cocho 90L Toblerone',
    description: 'Modelo exclusivo com design otimizado para melhor acesso dos animais.',
    image: 'https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fprodutos%2Fcocho-azul-90-toblerone.webp',
    features: ['90 litros', 'Design ergonômico', 'Alta resistência'],
  },
  {
    name: 'Cocho 125L',
    description: 'Cocho de tamanho intermediário, perfeito para pequenos e médios rebanhos.',
    image: 'https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fprodutos%2Fcocho-azul-125.webp',
    features: ['125 litros', 'Compacto', 'Versátil'],
  },
  {
    name: 'Cocho 210L',
    description: 'Cocho de grande capacidade para rebanhos maiores.',
    image: 'https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fprodutos%2Fcocho-azul-212.webp',
    features: ['210 litros', 'Grande capacidade', 'Robusto'],
  },
  // Alteração feita aqui: Substituição das Chapas por Arame Ovalado
  {
    name: 'Arame Ovalado',
    description: 'Arame de aço de alta resistência com formato ovalado, ideal para cercas rurais robustas e duradouras.',
    image: 'https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fprodutos%2Farame-ovalado.webp',
    features: ['Alta resistência à tração', 'Fácil manuseio', 'Ideal para cercas'],
  },
  {
    name: 'Arame Farpado',
    description: 'Arame farpado de qualidade para cercamento de propriedades rurais.',
    image: 'https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fprodutos%2Farame-farpado.webp',
    features: ['Alta resistência', 'Galvanizado', 'Diversas metragens'],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(78,128,196)]/10 rounded-full px-6 py-2 mb-6">
            <p className="text-[rgb(51,71,144)] font-semibold">Nossos Produtos</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(45,62,84)] mb-6">
            Soluções Completas para o Agronegócio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Amplo catálogo de produtos plásticos de alta qualidade, direto da fábrica,
            com os melhores preços do mercado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[rgb(78,128,196)] flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[rgb(45,62,84)] mb-3 group-hover:text-[rgb(51,71,144)] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[rgb(78,128,196)] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/556392280772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center space-x-2 w-full bg-[rgb(51,71,144)] text-white px-4 py-3 rounded-lg hover:bg-[rgb(78,128,196)] transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Solicitar Orçamento</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/556392280772"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(51,71,144)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(78,128,196)] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Ver Todos os Produtos no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}