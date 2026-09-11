import { useState } from 'react';

export default function Brands() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const brands = [
    { name: 'JCB', url: 'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fjcb.png' },
    { name: 'Komatsu', url: 'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fkomatsu.png' },
    { name: 'Volvo', url: 'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fvolvo.png' },
    { name: 'Sany', url: 'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fsany.png' },
    { name: 'Hyundai', url: 'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fhyundai.png' },
    { name: 'Case', url: 'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fcase.png' },
    { name: 'Caterpillar', url: 'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fcaterpillar.png' },
    { name: 'Isuzu', url: 'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fisuzu.png' }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a18] mb-4">
            Algumas das Marcas que Trabalhamos
          </h2>
          <p className="text-gray-600 text-lg">
            Peças originais e compatíveis para as principais marcas do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`bg-white rounded-lg shadow-md p-6 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl ${
                activeIndex === index ? 'grayscale-0' : 'grayscale hover:grayscale-0'
              }`}
              style={{ minHeight: '140px' }}
            >
              <img
                src={brand.url}
                alt={`Logo ${brand.name}`}
                className="max-w-full max-h-24 w-auto h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            E muitas outras marcas líderes em máquinas pesadas
          </p>
        </div>
      </div>
    </section>
  );
}