import { Plane, Home, Building2, Car, Heart, Smile, Stethoscope, ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Plane,
      title: 'Seguro Viagem',
      description: 'Viaje com proteção médica e assistência internacional garantidas.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguro%20Viagem.jpeg',
    },
    {
      icon: Home,
      title: 'Seguros Residenciais',
      description: 'Tranquilidade para seu lar contra danos, roubos e acidentes.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros%20Residenciais.jpeg',
    },
    {
      icon: Building2,
      title: 'Seguros Empresariais',
      description: 'Proteção para empresas contra riscos operacionais e patrimoniais.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguros%20Empresariais.jpeg',
    },
    {
      icon: Car,
      title: 'Seguro Auto',
      description: 'Mais segurança com assistência e proteção veicular completa.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Seguro%20Auto.jpeg',
    },
    {
      icon: Heart,
      title: 'Vida e Previdência',
      description: 'Planejamento financeiro para garantir estabilidade no futuro.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Vida%20e%20Previde%CC%82ncia.jpeg',
    },
    {
      icon: Smile,
      title: 'Planos Odontológicos',
      description: 'Cuidados com a saúde bucal com preços competitivos e boa cobertura.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20Odontolo%CC%81gicos.jpeg',
    },
    {
      icon: Stethoscope,
      title: 'Planos de Saúde',
      description: 'Coberturas com ampla rede credenciada e opções sob medida.',
      image: 'https://storage.lucasmendes.dev/site-sp/muralhacorretora/Planos%20de%20Sau%CC%81de.jpeg',
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Soluções completas para proteger o que é mais importante para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20sobre%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-600 font-semibold transition-colors group"
                  >
                    Cotação
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Conheça todos os Produtos
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
