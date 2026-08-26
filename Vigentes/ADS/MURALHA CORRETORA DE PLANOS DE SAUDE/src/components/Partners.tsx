import { useState } from 'react';

export default function Partners() {
  const [activeTab, setActiveTab] = useState<'seguros' | 'saude'>('seguros');

  const seguros = [
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/03c56f76-8c97-436f-bf20-581a8e14ba9c.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/1962e00a-e0f5-4a47-a637-472d86145d36.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/1fdb3ddd-12a5-456a-b5e6-a2e57636250e.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/26ba91ae-20b0-41d8-9b06-873f5bbcea86.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/3128530c-0278-4cbd-85a9-86be45078a80.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/45a606d9-37ba-4496-acbe-51b99d3f2d0a.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/4a95a772-2763-4e7e-82b6-1984b48f328b.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/6f013af0-e286-4f86-8a10-0b1ac3bf4ea3.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/8a9a998e-47bd-4b44-b1a5-5abb4e36a3fa.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/c007f0c1-780b-410b-b5ed-d492e1eccc69.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros/c7644836-a4f8-4601-8c31-16a5bce95277.jpg',
  ];

  const saude = [
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/0ceebdc3-9767-4357-85bf-b96ff22f18d0.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/3fca910b-f7e8-4fe6-bb6a-7dfb46d1daf5.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/4395683a-3528-4c67-9849-e97ea1b2a93a.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/46a2ba4c-a08e-4a63-a8e4-9dffdb02e22b.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/54333a60-228d-4953-96c9-0123ef55021d.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/5861ce6b-9c5c-4e78-a339-ef5afd78f971.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/7697819b-05a0-4122-8430-9d07f1ccef12.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/b10cb428-6178-4573-b516-a295170fb287.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/cdf66630-c9dc-4f37-afe4-610b2fa537cc.jpg',
    'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Saude/f0cf5437-2040-4371-b12b-8e866f92cbc1.jpg',
  ];

  const displayImages = activeTab === 'seguros' ? seguros : saude;

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Marcas Parceiras
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600">
            Trabalhamos com os melhores fornecedores do mercado
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('seguros')}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === 'seguros'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
          >
            Seguros
          </button>
          <button
            onClick={() => setActiveTab('saude')}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === 'saude'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
          >
            Planos de Saúde
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 md:p-6 flex items-center justify-center h-40 md:h-48"
            >
              <img
                src={image}
                alt={`Parceira ${index + 1}`}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
