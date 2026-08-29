// Removi os imports dos ícones e do ArrowRight que não são mais usados
// Mantive apenas o Check caso queira usar em algum lugar futuro, se não, pode remover também.

const products = [
  {
    title: 'Tubos',
    description: 'Tubos quadrados, redondos e retangulares. Precisão milimétrica para estruturas metálicas e serralheria.',
    image: 'https://storage.lucasmendes.dev/site-sp/acoideal/tubo.webp',
    // icon removed
    
  },
  {
    title: 'Chapas de Aço',
    description: 'Finas, grossas, xadrez e expandidas. De 0,35mm a 100mm para indústria e construção civil.',
    image: 'https://storage.lucasmendes.dev/site-sp/acoideal/chapas-de-metal.webp',
    // icon removed
  
  },
  {
    title: 'Perfis',
    description: 'Perfis estruturais de alta resistência para steel frame, galpões e portões basculantes.',
    image: 'https://storage.lucasmendes.dev/site-sp/acoideal/Perfils.webp',
    // icon removed
  
  },
  {
    title: 'Telhas Galvalume',
    description: 'Durabilidade superior contra corrosão. A melhor opção custo-benefício para sua cobertura.',
    image: 'https://storage.lucasmendes.dev/site-sp/acoideal/telha-galvalume.webp',
    // icon removed
  
  },
  {
    title: 'Telhas Sanduíche',
    description: 'Isolamento térmico e acústico de alta performance. Conforto e economia de energia garantidos.',
    image: 'https://storage.lucasmendes.dev/site-sp/acoideal/Telha-Sandwich.webp',
    // icon removed
  
  },
  {
    title: 'Bobinas Galvanizadas',
    description: 'Matéria-prima de qualidade para calhas, rufos e sistemas de exaustão.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acoideal%2Fnovas%2Fbobina.jpeg',
    // icon removed
 
  },
  {
    title: 'Vergalhões e Vigas',
    description: 'Barras nervuradas CA-50/CA-60 e Vigas I/H. A base sólida para fundações e pilares.',
    image: 'https://storage.lucasmendes.dev/site-sp/acoideal/vergalhoes-e-vigas.webp',
    // icon removed
    badge: null
  },
  {
    title: 'Cantoneiras',
    description: 'Barras em L e chatas para reforços estruturais e acabamentos de serralheria.',
    image: 'https://storage.lucasmendes.dev/site-sp/acoideal%2FCantoneira%201.1%3A2%20x%203%3A16%20C%3A6m.jpg',
    // icon removed
    badge: null
  }
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern Sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#464646_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[rgb(238,51,52)] font-bold tracking-wider uppercase text-sm bg-red-50 px-3 py-1 rounded-full">
            Catálogo Completo
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[rgb(30,30,30)]">
            Soluções em <span className="text-[rgb(63,63,152)]">Aço e Ferro</span>
          </h2>
          <p className="text-lg text-gray-600">
            Do fundamento ao acabamento, temos o material ideal com certificação e entrega rápida.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => {
            // const Icon = product.icon; // Removido

            return (
              // Adicionei 'cursor-pointer' e um evento de clique no card inteiro para levar ao contato, já que removemos o botão
              <div
                key={index}
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex flex-col w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[rgb(63,63,152,0.3)] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Área da Imagem - Aumentei a presença visual usando aspect-[4/3] em vez de altura fixa */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  {/* Gradiente sutil para o texto branco do badge se destacar mais se necessário */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Badge Flutuante (Mantido) */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <span className="text-xs font-bold text-[rgb(238,51,52)] uppercase tracking-wide">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Ícone Sobreposto REMOVIDO daqui */}
                </div>

                {/* Conteúdo do Card - Simplificado */}
                {/* Ajustei o padding top (pt-6) pois o ícone flutuante não existe mais */}
                <div className="p-6 bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-[rgb(30,30,30)] mb-2 group-hover:text-[rgb(63,63,152)] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Seção "Consultar preço" REMOVIDA daqui */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}