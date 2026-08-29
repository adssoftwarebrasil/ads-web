import { useEffect, useState } from 'react';

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('produtos');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const products = [
    {
      name: 'Bomba D\'água',
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fproduto-loja-bomba-agua-preta.webp',
    },
    {
      name: 'Pastilhas de Freio',
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fproduto-loja-caixa-pastilhas-freio.webp',
    },
    {
      name: 'Calota Volkswagen',
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fproduto-loja-calota-prata-volkswagen.webp',
    },
    {
      name: 'Espelhos Retrovisores',
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fproduto-loja-espelhos-retrovisores.webp',
    },
    {
      name: 'Ventoinha',
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fproduto-loja-ventoinha-carro.webp',
    },
    {
      name: 'Sensor de Fluxo de Ar',
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fproduto-loja-sensor-fluxo-ar.webp',
    },
    {
      name: 'Velas de Aquecimento',
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fproduto-loja-velas-aquecimento-embalagem.webp',
    },
    {
      name: 'Motor Regulador de Vidro',
      image: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Fproduto-loja-motor-regulador-vidro.webp',
    },
  ];

  const handleConsult = () => {
    window.open(
      'https://wa.me/5545984268490?text=Olá! Vim do site e gostaria de consultar a disponibilidade de peças.',
      '_blank'
    );
  };

  return (
    <section
      id="produtos"
      className="py-20 lg:py-32"
      style={{
        background: 'linear-gradient(to bottom, #f2eb97 0%, #ffffff 100%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#2b2d91' }}
          >
            Alguns Dos Nossos Produtos
          </h2>
          <p className="text-xl" style={{ color: '#0a0d00' }}>
            Peças originais e de primeira linha para todos os tipos de veículos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fdf309';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-lg" style={{ color: '#0a0d00' }}>
                  {product.name}
                </h3>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: '#2b2d91' }}
                >
                  Original
                </div>
                <button
                  onClick={handleConsult}
                  className="w-full py-2 rounded-lg border-2 font-semibold transition-all hover:bg-[#2b2d91] hover:text-white"
                  style={{ borderColor: '#2b2d91', color: '#2b2d91' }}
                >
                  Consultar Disponibilidade
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
