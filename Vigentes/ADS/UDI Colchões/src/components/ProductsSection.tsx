import { Frame, Baby, Layers, Bed, Ruler, MessageCircle } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      icon: Frame,
      title: 'Cabeceiras',
      description: 'Acrescente estilo ao seu quarto',
      image:
        'https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_15_imgi_29_cabeceira_para_cama_box_casal_140cm_cory_pu_caramelo_sallar_home.webp',
      badge: 'Design',
    },
    {
      id: 2,
      icon: Baby,
      title: 'Colchão de Berço',
      description: 'Segurança e conforto para os pequenos',
      image:
        'https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_16_imgi_30_58498_4.jpg',
      badge: 'Infantil',
    },
    {
      id: 3,
      icon: Layers,
      title: 'Colchão D33',
      description: 'Ideal para quem busca suporte e conforto',
      image:
        'https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_17_imgi_32_colchao_d33_solteiro_bom_pastor_sleep_088x188x18_flor_256049_2_2.webp',
      badge: 'Popular',
    },
    {
      id: 4,
      icon: Bed,
      title: 'Camas Box',
      description: 'Praticidade e elegância para seu quarto',
      image:
        'https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_18_imgi_32_4901b871dea3a8a3a15166eeed61d841.webp',
      badge: 'Completo',
    },
  ];

  const featuredProduct = {
    icon: Ruler,
    title: 'Colchões sob Medida',
    description: 'Modelagem exclusiva, garantindo encaixe perfeito e conforto personalizado',
    image:
      'https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_19_imgi_28_o-que-devo-saber-antes-de-comprar-um-colchao-de-espuma-1080x720-1.jpg',
    badge: 'Exclusivo',
  };

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">Nossos Serviços</h2>
          <p className="text-lg text-primary-medium mb-2">
            Confira nossos serviços e encontre o colchão ideal
          </p>
          <p className="text-base text-primary-medium/80">
            Oferecemos uma ampla gama de colchões e camas, com opções sob medida para atender suas
            necessidades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border-3 border-primary-vibrant h-full hover:scale-[1.02] transition-all duration-300">
              <div className="grid lg:grid-cols-2 h-full">
                <div className="relative h-80 lg:h-full">
                  <img
                    src={featuredProduct.image}
                    alt={featuredProduct.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-primary-vibrant text-white text-sm font-bold rounded-full">
                    {featuredProduct.badge}
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-accent-offwhite to-white">
                  <featuredProduct.icon size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {featuredProduct.title}
                  </h3>
                  <p className="text-primary-medium mb-6 leading-relaxed">
                    {featuredProduct.description}
                  </p>
                  <a
                    href="https://wa.me/5534996610265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary-vibrant text-primary-vibrant font-bold rounded-xl hover:bg-primary-vibrant hover:text-white transition-all"
                  >
                    <MessageCircle size={20} />
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {products.slice(0, 2).map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="relative h-56">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary-vibrant text-white text-sm font-bold rounded-full">
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <Icon size={36} className="text-primary mb-3" />
                    <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                    <p className="text-primary-medium text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <a
                      href="https://wa.me/5534996610265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary-vibrant text-primary-vibrant font-bold rounded-xl hover:bg-primary-vibrant hover:text-white transition-all"
                    >
                      <MessageCircle size={18} />
                      Fale Conosco
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.slice(2).map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-primary-vibrant text-white text-sm font-bold rounded-full">
                    {product.badge}
                  </div>
                </div>
                <div className="p-6">
                  <Icon size={36} className="text-primary mb-3" />
                  <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                  <p className="text-primary-medium text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <a
                    href="https://wa.me/5534996610265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary-vibrant text-primary-vibrant font-bold rounded-xl hover:bg-primary-vibrant hover:text-white transition-all"
                  >
                    <MessageCircle size={18} />
                    Fale Conosco
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5534996610265"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary-vibrant text-white text-lg font-bold rounded-xl hover:bg-primary-medium transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle size={24} />
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
}
