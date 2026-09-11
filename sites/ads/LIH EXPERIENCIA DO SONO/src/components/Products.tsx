import { Phone, Eye } from 'lucide-react';
import { useState } from 'react';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      image: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/Imagem%20do%20WhatsApp%20de%202025-12-17%20%C3%A0(s)%2014.24.52_01eddcf4.jpg',
      title: 'Enxovais de Luxo',
      description: 'Confeccionados em tecidos sofisticados e confortáveis.',
      whatsappMessage: 'Olá, gostaria de saber mais sobre os Enxovais de Luxo'
    },    
    {
      image: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/Imagem%20do%20WhatsApp%20de%202025-12-17%20%C3%A0(s)%2014.25.56_3378fa48.jpg',
      title: 'Acessórios de Hotel',
      description: 'Experimente o conforto de um hotel 5 estrelas em casa.',
      whatsappMessage: 'Olá, gostaria de saber mais sobre os Acessórios de Hotel'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/Imagem%20do%20WhatsApp%20de%202025-12-17%20%C3%A0(s)%2014.26.15_e514a007.jpg',
      title: 'Cabeceiras Artesanais',
      description: 'Produtos personalizados que aumentam a sensação de satisfação.',
      whatsappMessage: 'Olá, gostaria de saber mais sobre as Cabeceiras Artesanais'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/Imagem%20do%20WhatsApp%20de%202025-12-17%20%C3%A0(s)%2014.23.55_29baac40.jpg',
      title: 'Travesseiros Importados',
      description: 'Tecnologia antirronco, antissuor, para quem dorme de bruços ou de lado, com adequação a diferentes biotipos de altura, peso e estilo de sono. Nossos consultores estão preparados para orientar-lhe na melhor escolha para sua saúde e descanso.',
      whatsappMessage: 'Olá, gostaria de saber mais sobre os Travesseiros Importados'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/Imagem%20do%20WhatsApp%20de%202025-12-17%20%C3%A0(s)%2014.24.25_93c5ef08.jpg',
      title: 'Poltronas de Descanso e Massageadora',
      description: 'Para relaxar com total conforto.',
      whatsappMessage: 'Olá, gostaria de saber mais sobre as Poltronas de Descanso e Massageadoras'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/Imagem%20do%20WhatsApp%20de%202025-12-17%20%C3%A0(s)%2014.25.38_9f4c89d9.jpg',
      title: 'Camas Personalizadas',
      description: 'Feitas sob medida conforme sua preferência.',
      whatsappMessage: 'Olá, gostaria de saber mais sobre as Camas Personalizadas'
    }
  ];

  return (
    <section id="produtos" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            Nossos Serviços
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto">
            Conheça nossos serviços e produtos que garantem uma noite de sono perfeita.
          </h2>

          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
            Oferecemos uma linha diversificada de produtos voltados para o bem-estar do sono, incluindo colchões, camas personalizadas e enxovais de alta qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product, index) => (
            <a
              key={index}
              href={`https://wa.me/5562981369983?text=${encodeURIComponent(product.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProduct === index ? 'scale-110' : 'scale-100'
                  }`}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-primary/40 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                {/* min-h aqui ajuda a manter o alinhamento mesmo com títulos longos */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[3.5rem] flex items-center group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm md:text-base">
                  {product.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center text-primary font-semibold text-sm">
                   Ver detalhes no WhatsApp
                   <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/5562981369983?text=Olá,%20acabei%20de%20visitar%20o%20seu%20site%20e%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
          >
            <Phone className="w-6 h-6" />
            Quero Conhecer os Produtos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;