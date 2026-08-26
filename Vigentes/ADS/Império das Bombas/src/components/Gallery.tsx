import { Building2, Package, Gauge, Wrench, Users, Waves, Eye, ArrowUpRight } from 'lucide-react';

const galleryItems = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2FFachada-Da-Loja-De-Frente.jpg',
    text: 'Fachada Principal da Loja',
    icon: Building2,
    color: 'from-imperio-blue to-imperio-mid-blue',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Falteracoes%2FFachada-Da-Loja-De-Lado.jpg',
    text: 'Vista Lateral da Loja',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Fbombas-hidraulicas-prateleira%20-%20Copia.webp',
    text: 'Amplo Estoque de Bombas',
    icon: Package,
    color: 'from-green-500 to-green-600',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Fbombas-hidrometros-azuis%20-%20Copia.webp',
    text: 'Hidrômetros e Medidores',
    icon: Gauge,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Floja-equipamentos-hidraulicos%20-%20Copia.webp',
    text: 'Equipamentos Hidráulicos',
    icon: Wrench,
    color: 'from-orange-500 to-orange-600',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Fprodutos-piscina-loja%20-%20Copia.webp',
    text: 'Produtos para Piscina',
    icon: Waves,
    color: 'from-rose-500 to-rose-600',
  },
];

const Gallery = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 md:py-16 lg:py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-imperio-light-blue text-xs md:text-sm font-semibold uppercase tracking-wider mb-2 bg-imperio-light-blue/10 px-4 py-1.5 rounded-full">
            <Eye className="w-3 h-3 md:w-4 md:h-4" />
            Nossa Estrutura
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-imperio-dark mb-2 md:mb-4">
            Conheça Nosso Espaço
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-600">
            Ampla variedade de produtos e atendimento profissional
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {galleryItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative h-64 md:h-72 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient Overlay - sempre visível em mobile, hover em desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-imperio-dark/90 via-imperio-dark/50 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  {/* Icon Badge */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${item.color} rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-xl transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300`}>
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  {/* Text */}
                  <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span>Veja mais detalhes</span>
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                </div>

                {/* Border glow effect no hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 blur-xl`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-600 text-sm md:text-base">
            Visite nossa loja e conheça pessoalmente toda nossa estrutura
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;