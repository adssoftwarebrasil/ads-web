import { Wrench, Wind, Cable, Droplets } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Wind,
      title: 'Ar Condicionado',
      description: 'Tubos, controles remotos e peças para todas as marcas',
      images: [
        'https://storage.lucasmendes.dev/site-sp/kipontofrio%2FTubos-Ar-Condicionado.webp',
        'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fcontroles-remotos-ArCondicionado-loja.webp'
      ]
    },
    {
      icon: Wrench,
      title: 'Ferramentas Profissionais',
      description: 'Equipamentos de qualidade para instalação e manutenção',
      images: [
        'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fferramentas-na-prateleira.webp',
        'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fbolsas-ferramentas-loja.webp'
      ]
    },
    {
      icon: Cable,
      title: 'Fios e Cabos',
      description: 'Linha completa de condutores elétricos e acessórios',
      images: [
        'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fexpositor-fios-cabos.webp',
        'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fmangueiras-brancas-cinzas.webp'
      ]
    },
    {
      icon: Droplets,
      title: 'Produtos de Limpeza',
      description: 'Sprays, detergentes e produtos de manutenção',
      images: [
        'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fprodutos-spray-prateleira.webp',
        'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fprodutos-limpeza-prateleira.webp'
      ]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#082432] mb-4">
            Nossas <span className="text-[#166188]">Categorias</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado. Encontre tudo o que você precisa em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2 gap-1">
                    {category.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082432] via-[#082432]/50 to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-[#6ed2e1] w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                      <Icon className="text-[#082432]" size={28} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#082432] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <a
                    href="https://wa.me/556332152711?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
                    className="inline-flex items-center gap-2 text-[#166188] font-bold hover:text-[#6ed2e1] transition-colors group-hover:gap-4 duration-300"
                  >
                    Ver Produtos
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
