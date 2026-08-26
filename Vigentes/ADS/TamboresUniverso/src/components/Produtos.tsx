import { Package, Droplet, Box, Beef, Waves, Truck } from 'lucide-react';

export default function Produtos() {
  const produtos = [
    {
      icon: Package,
      title: 'Tambores',
      description: 'Tambores de polietileno e aço para diversos tipos de armazenamento e transporte seguro.',
    },
    {
      icon: Droplet,
      title: 'Bombonas Plásticas',
      description: 'Bombonas de alta qualidade para armazenamento de líquidos e produtos químicos.',
    },
    {
      icon: Box,
      title: 'Containers IBC 1000L',
      description: 'Containers intermediários para transporte e armazenamento em grande volume.',
    },
    {
      icon: Beef,
      title: 'Cochos para Bovinos',
      description: 'Cochos resistentes e duráveis, ideais para alimentação de bovinos em fazendas.',
    },
    {
      icon: Waves,
      title: 'Bebedouros',
      description: 'Bebedouros de polietileno para criação de bovinos, garantindo água limpa e fresca.',
    },
    {
      icon: Truck,
      title: 'Chapas Deslizantes',
      description: 'Chapas PEAD para caçambas de caminhões, facilitando o transporte de materiais.',
    },
  ];

  return (
    <section id="produtos" className="bg-gray-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#034D9B] mb-6">
            Nossos Produtos
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa empresa é especializada no ramo de Tambores, Bombonas Plásticas e Containers IBC 1000 L. Além disso, oferecemos uma ampla variedade de Cochos e Bebedouros para a criação de bovinos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {produtos.map((produto, index) => {
            const Icon = produto.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 md:p-8 group"
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#0A85E3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl md:text-2xl font-semibold text-[#034D9B] mb-3">
                  {produto.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {produto.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5562984164141?text=Olá, gostaria de saber mais sobre os produtos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#0A85E3] to-[#034D9B] text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
}
