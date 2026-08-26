import React from 'react';

export default function Brands() {
  const brands = [
    {
      name: '',
      logo: 'https://storage.lucasmendes.dev/site-sp/AMPLIASOM%2Flogomarcas%2F1.jpg',
      description: 'Tecnologia dinamarquesa para aparelhos auditivos de alta qualidade.'
    },
    {
      name: '',
      logo: 'https://storage.lucasmendes.dev/site-sp/AMPLIASOM%2Flogomarcas%2F2.jpg',
      description: 'Aparelhos auditivos com tecnologia alemã e design discreto.'
    },
    {
      name: '',
      logo: 'https://storage.lucasmendes.dev/site-sp/AMPLIASOM%2Flogomarcas%2F3.jpg',
      description: 'Soluções auditivas inovadoras e de excelente custo-benefício.'
    },
    {
      name: '',
      logo: 'https://storage.lucasmendes.dev/site-sp/AMPLIASOM%2Flogomarcas%2F4.jpg',
      description: 'Tecnologia avançada para diferentes necessidades auditivas.'
    },
    {
      name: '',
      logo: 'https://storage.lucasmendes.dev/site-sp/AMPLIASOM%2Flogomarcas%2F5.jpg',
      description: 'Inovação em tecnologia auditiva com processamento avançado de som.'
    },
    {
      name: '',
      logo: 'https://storage.lucasmendes.dev/site-sp/AMPLIASOM%2Flogomarcas%2F6.jpg',
      description: 'Líder mundial em aparelhos auditivos com tecnologia BrainHearing.'
    }
  ];

  return (
    <section id="marcas" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Marcas Parceiras
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#007E7A] to-[#ED0180] mx-auto rounded-full" />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Trabalhamos com os principais fabricantes mundiais para garantir a melhor tecnologia para sua audição.
          </p>
        </div>

        {/* Grid de Marcas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#007E7A]/30 flex flex-col items-center text-center hover:-translate-y-2"
            >
              {/* Área da Imagem Aumentada */}
              <div className="h-48 w-full flex items-center justify-center mb-8 overflow-hidden">
                <img
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className="max-h-full max-w-[220px] object-contain opacity-100 transition-all duration-500 transform group-hover:scale-110"
                /> {/* Removido grayscale e aumentado max-w de 180px para 220px */}
              </div>

              {/* Nome e Descrição Aumentados */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#007E7A] transition-colors duration-300">
                {brand.name}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {brand.description}
              </p>
            </div>
          ))}
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-500 font-bold uppercase tracking-widest">
            E muitas outras soluções auditivas.
          </p>
        </div>
      </div>
    </section>
  );
}