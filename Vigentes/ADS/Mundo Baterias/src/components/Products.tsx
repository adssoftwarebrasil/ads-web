import { useState } from 'react';

const tabs = ['Baterias', 'Serviços', 'Peças Elétricas'];

interface Product {
  image: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2FBaterias%20para%20carro.png',
    title: 'Automotivas',
    description: 'Para carros, caminhonetes e veículos leves',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2FMoura%20para%20motos.jpeg',
    title: 'Motos',
    description: 'Alta performance e durabilidade para duas rodas',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2FBateria%20espacial.png',
    title: 'Especiais',
    description: 'Tratores, jet-ski, barcos e quadriciclos',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2FBateria%20estacionaria.png',
    title: 'Estacionárias',
    description: 'Nobreak, cerca elétrica e sistemas de backup',
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="produtos"
      className="bg-gradient-to-b from-[rgb(253,253,253)] to-gray-100 py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[rgb(32,29,30)]">
          Produtos &amp; Serviços
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={
                index === activeTab
                  ? 'px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 bg-[rgb(234,29,34)] text-white shadow-lg'
                  : 'px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 bg-white text-[rgb(32,29,30)] hover:bg-gray-200'
              }
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="animate-fadeInUp" key={activeTab}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-full h-64 bg-gray-50 flex items-center justify-center p-4 border-b border-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[rgb(32,29,30)] mb-2 group-hover:text-[rgb(234,29,34)] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
