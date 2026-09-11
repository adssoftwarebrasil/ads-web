import { Droplet, Scissors, Sparkles, Palette, Package, Star } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Palette,
      title: 'Coloração & Tintas',
      description: 'Tintas profissionais para cabelo com cores vibrantes e duradouras',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-tinta-cabelo-maquiagem-po-compacto.webp&version_id=null'
    },
    {
      icon: Droplet,
      title: 'Cuidados Capilares',
      description: 'Shampoos, condicionadores e hidratantes das melhores marcas',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-kit-shampoo-e-condicionador.webp&version_id=null'
    },
    {
      icon: Sparkles,
      title: 'Maquiagem & Beleza',
      description: 'Batons, pós compactos, bases e tudo para sua make perfeita',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-tinta-cabelo-maquiagem-po-compacto.webp&version_id=null'
    },
    {
      icon: Star,
      title: 'Esmaltes & Unhas',
      description: 'Linha completa de esmaltes, unhas postiças e acessórios',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-secante-de-esmalte-e-esmalte.webp&version_id=null'
    },
    {
      icon: Package,
      title: 'Depilação & Skin Care',
      description: 'Ceras depilatórias, argilas e produtos para cuidados da pele',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-cera-depilatoria-e-pano-duramax.webp&version_id=null'
    },
    {
      icon: Scissors,
      title: 'Equipamentos Profissionais',
      description: 'Móveis para salão, pentes, escovas e acessórios profissionais',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-lencol-para-maca.webp&version_id=null'
    }
  ];

  return (
    <section id="produtos" className="py-20 lg:py-32 bg-gradient-to-br from-[#f4ccd4]/30 via-white to-[#f4ccd4]/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#c40278]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#851756]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c40278] font-bold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block mb-4">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#230015] mb-6">
            Tudo o que você precisa para{' '}
            <span className="bg-gradient-to-r from-[#c40278] to-[#851756] bg-clip-text text-transparent">
              realçar sua beleza
            </span>
          </h2>
          <p className="text-lg text-[#350020]/80">
            Mix completo com as melhores marcas nacionais e importadas. Qualidade profissional com preços que cabem no seu bolso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#230015]/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                  <category.icon className="w-6 h-6 text-[#c40278]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#230015] mb-3 group-hover:text-[#c40278] transition-colors">
                  {category.title}
                </h3>
                <p className="text-[#350020]/70 leading-relaxed mb-4">
                  {category.description}
                </p>
                <a
                  href="https://wa.me/5562999597617?text=Olá! Gostaria de saber mais sobre os produtos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#c40278] font-semibold group-hover:gap-2 transition-all"
                >
                  <span>Saiba mais</span>
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5562999597617?text=Olá! Gostaria de conhecer todos os produtos disponíveis na Biolune."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#c40278] to-[#851756] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>Ver Todos os Produtos</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
