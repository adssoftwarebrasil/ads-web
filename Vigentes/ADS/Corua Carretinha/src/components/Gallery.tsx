interface GalleryItem {
  image: string;
  title: string;
}

const items: GalleryItem[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fjet-ski-carretinha.webp',
    title: 'Carretinha para Jet Ski',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fhomem-colocando-jetski-na-carretinha.webp',
    title: 'Serviço de Qualidade',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Floja-carretinha-carro-frente.webp',
    title: 'Nossa Estrutura',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fcarroca-madeira-vazia.webp',
    title: 'Carroça de Madeira',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Freboques-madeira-rua.webp',
    title: 'Reboques Disponíveis',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Floja-carreta-madeira-frente.webp',
    title: 'Variedade de Modelos',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Facessorios-carretinha-metalicos.webp',
    title: 'Acessórios Metálicos',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fpecas-metalicas-variadas.webp',
    title: 'Peças Variadas',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fmolas-helicoidais-pretas.webp',
    title: 'Molas e Suspensão',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-[rgb(253,253,253)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[rgb(242,150,1)]/10 text-[rgb(242,150,1)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            GALERIA
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(25,47,79)] mb-4">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-xl text-[rgb(25,47,79)]/70 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos e produtos disponíveis
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(25,47,79)] via-[rgb(25,47,79)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-[rgb(253,253,253)]">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/corujacarretinha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(25,47,79)] text-[rgb(253,253,253)] px-8 py-4 rounded-full font-bold hover:bg-[rgb(25,47,79)]/90 transition-all duration-300 hover:scale-105"
          >
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
