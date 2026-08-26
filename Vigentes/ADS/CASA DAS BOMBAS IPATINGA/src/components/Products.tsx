import { Zap, Wrench } from 'lucide-react';
import { waLink } from '../lib/site';

interface Product {
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    category: 'Bombas Anauger',
    title: 'Bomba Sapo Ecco Fit',
    description: '280W, 50m elevação, ideal para residências',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FBomba%20Sapo%20Ecco%20fit%20%E2%80%93%20Anauger.jpeg',
    alt: 'Bomba Sapo Ecco Fit',
  },
  {
    category: 'Bombas Anauger',
    title: 'Bomba Sapo 800',
    description: '380W, 70m elevação, excelente rendimento',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FBomba%20Sapo%20800%20%E2%80%93%20Anauger.jpeg',
    alt: 'Bomba Sapo 800',
  },
  {
    category: 'Bombas Anauger',
    title: 'Bomba Sapo 900',
    description: '450W, 70m elevação, vazão otimizada',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FBomba%20Sapo%20900%20%E2%80%93%20Anauger.jpeg',
    alt: 'Bomba Sapo 900',
  },
  {
    category: 'Bombas Claw',
    title: 'Bombas Canetas Claw',
    description: 'Precisão em injeção de químicos industriais',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FBombas%20Canetas%20Claw.jpeg',
    alt: 'Bombas Canetas Claw',
  },
  {
    category: 'Bombas para Piscinas',
    title: 'Bombas Lider',
    description: 'Filtragem para piscinas, pré-filtro com visor',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FBombas%20Lider.jpeg',
    alt: 'Bombas Lider',
  },
  {
    category: 'Serviços',
    title: 'Perfuração de Poços',
    description: 'Tecnologia de ponta com garantia',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FPerfurac%CC%A7a%CC%83o%20de%20Poc%CC%A7o%20Artesiano.png',
    alt: 'Perfuração de Poços',
  },
  {
    category: 'Serviços',
    title: 'Serviços de Manutenção',
    description: 'Limpeza, perfuração e assistência residencial',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FServic%CC%A7os%20de%20Poc%CC%A7os%20e%20Bombas.png',
    alt: 'Serviços de Manutenção',
  },
  {
    category: 'Produtos para Piscina',
    title: 'Linha ULTRACLOR',
    description: 'Cloro, algicidas e produtos para piscina',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FLinha%20Completa%20ULTRACLOR.jpeg',
    alt: 'Linha ULTRACLOR',
  },
  {
    category: 'Ferramentas',
    title: 'Esmerilhadeira Vonder',
    description: 'Cortes e acabamentos profissionais',
    image: 'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FEsmerilhadeira%20Vonder.jpeg',
    alt: 'Esmerilhadeira Vonder',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: 'rgb(1, 8, 82)' }}>
            Nosso Catálogo de Produtos e Serviços 🛒
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Soluções completas para poços artesianos, piscinas e ferramentas profissionais.
          </p>
          <div className="w-24 h-1 mx-auto bg-[rgb(37,155,208)]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between h-auto">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'rgb(1, 8, 82)' }}>
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                </div>
                <a
                  href={waLink(`Olá! Gostaria de saber mais sobre o produto: ${product.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#25D366] hover:bg-[#1da851] shadow-lg transition-all duration-300"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Saiba Mais
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-xl text-white bg-[#25D366] hover:bg-[#1da851] shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Wrench className="w-5 h-5 mr-3" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
