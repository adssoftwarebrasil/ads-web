import { ShoppingBag, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Uniformes em Geral',
      image: 'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg4%2Fciafibra_img_Uniformes%20em%20geral.webp',
      description: 'Conforto, qualidade e padronização para diferentes segmentos',
    },
    {
      name: 'Camisa Social',
      image: 'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg4%2Fciafibra_img_Camisa%20Social.webp',
      description: 'Tradicional, manga curta ou longa, ideal para ambientes formais',
    },
    {
      name: 'Camisa Polo',
      image: 'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg4%2Fciafibra_img_Camisa%20Polo.webp',
      description: 'Versátil, com gola e botões, une elegância e praticidade',
    },
    {
      name: 'Camisete Social Feminina',
      image: 'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg4%2Fciafibra_img_Camisete%20Social%20Feminina.webp',
      description: 'Modelagem adaptada, conforto e sofisticação feminina',
    },
    {
      name: 'Jaleco',
      image: 'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg4%2Fciafibra_img_Jaleco.webp',
      description: 'Proteção profissional em áreas técnicas e de saúde',
    },
    {
      name: 'Calça Jeans',
      image: 'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg4%2Fciafibra_img_Calc%CC%A7a%20Jeans.webp',
      description: 'Resistência e estilo para setores que exigem durabilidade',
    },
    {
      name: 'Calça de Brim',
      image: 'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg4%2Fciafibra_img_Calc%CC%A7a%20de%20Brim.webp',
      description: 'Clássica no vestuário profissional, resistente e confortável',
    },
    {
      name: 'Calça ½ Elástico de Brim',
      image: 'https://storage.lucasmendes.dev/site-sp/ciafibra%2Fimg4%2Fciafibra_img_Calc%CC%A7a%20ela%CC%81stico%20de%20Brim.webp',
      description: 'Conforto extra na cintura para maior mobilidade',
    },
  ];

  const handleProductClick = (productName: string) => {
    const message = `Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(productName)}%20da%20Cia%20Fibra.`;
    window.open(`https://wa.me/5519991007977?text=${message}`, '_blank');
  };

  return (
    <section id="produtos" className="relative bg-gradient-to-br from-[#0a91c6] via-[#e8e8e8] to-[#DCDCDC] py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D7B46A] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#012E60] opacity-5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D7B46A] to-[#c19e56] rounded-2xl mb-6 shadow-lg">
            <ShoppingBag size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E60] mb-4">
            Nossos Produtos
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uniformes de alta qualidade para valorizar sua equipe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(product.name)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Container da Imagem com aspect ratio fixo */}
              <div className="relative overflow-hidden aspect-[3/4] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                  loading="lazy"
                  width="600"
                  height="800"
                />
                
                {/* Overlay */}

                {/* Número */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[#012E60] font-bold text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-5 relative">
                
                <h3 className="text-lg font-bold text-[#012E60] mb-2 min-h-[3.5rem] flex items-center">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                  {product.description}
                </p>

                <div className="flex items-center text-[#D7B46A] font-semibold text-sm">
                  <span>Ver detalhes</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#012E60] to-[#024080] px-6 sm:px-12 py-8 rounded-2xl shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Não encontrou o que procura?
            </h3>
            <p className="text-white/90 mb-6 text-sm sm:text-base">
              Fazemos uniformes personalizados sob medida
            </p>
            
            <button
              onClick={() => window.open('https://wa.me/5519991007977?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado.', '_blank')}
              className="bg-gradient-to-r from-[#D7B46A] to-[#c19e56] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-xl transition-shadow duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="whitespace-nowrap">Orçamento Personalizado</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;