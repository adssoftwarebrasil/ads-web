import { ArrowRight } from 'lucide-react';

interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Blocos de Concreto',
    image:
      'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2Fblocos-concreto-empilhados%201.webp',
  },
  {
    name: 'Caixa de Passagem',
    image:
      'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FCaixa%20de%20passagem-empilhados.webp',
  },
  {
    name: 'Manilha 1,00×0,50',
    image:
      'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FManilha%201%2C00x0%2C50%201.webp',
  },
  {
    name: 'Tubos de Concreto',
    image:
      'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FTubos%20400x1000%20600x1000%20800x1000%20Simples%20e%20com%20armac%CC%A7a%CC%83o.webp',
  },
  {
    name: 'Paver Intertravante',
    image:
      'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FPaver%20intertravante-4cm-6cm-8cm.webp',
  },
  {
    name: 'Paver Intertravado 16 Faces',
    image:
      'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FPaver%20intertravado%2016%20faces.webp',
  },
  {
    name: 'Piso Tátil 25×25',
    image:
      'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FPiso%20ta%CC%81til%2025x25%20alerta%20e%20direcional.webp',
  },
  {
    name: 'Pingadeira',
    image: 'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FPingadeira.webp',
  },
  {
    name: 'Postes',
    image:
      'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FPoste%202%2C5m%20reto%20Poste%203m%20reto%20Poste%203m%20curvado%201.webp',
  },
  {
    name: 'Concregrama',
    image: 'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FConcregrama.webp',
  },
  {
    name: 'Meio-Fio',
    image: 'https://storage.lucasmendes.dev/site-sp/jmpremoldados%2Fmeio-fio-concreto%201.webp',
  },
  {
    name: 'Canaletas',
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=jmpremoldados%2Fimage%2056.png&version_id=null',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B4C] mb-4">Nossos Produtos</h2>
          <p className="text-lg text-[#A8AAAA] max-w-2xl mx-auto">
            Ampla linha de artefatos de concreto com qualidade certificada para sua obra
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={product.name} className="animate-fadeInUp" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4C] via-[#0D1B4C]/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{product.name}</h3>
                </div>
                <div className="absolute inset-0 bg-[#4A90E2] bg-opacity-95 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <a
                    href="https://wa.me/5567999737241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-[#0D1B4C] font-semibold px-6 py-3 rounded-lg hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
