const WHATSAPP_URL = 'http://wa.me/5548988277661';

interface Colecao {
  title: string;
  description: string;
  image: string;
  overlay: string;
}

const colecoes: Colecao[] = [
  {
    title: 'Pijamas Femininos',
    description: 'Elegância e conforto em cada detalhe. Do clássico ao moderno, incluindo plus size.',
    image: 'https://storage.lucasmendes.dev/site-sp/moonlight%20pijamas%2Fprodutos%2Fpijama-feminino-01.webp',
    overlay: 'bg-gradient-to-t from-[rgb(223,202,178)] to-[rgb(111,86,60)]/30',
  },
  {
    title: 'Pijamas Masculinos',
    description: 'Estilo e praticidade para noites de descanso com sofisticação.',
    image: 'https://storage.lucasmendes.dev/site-sp/moonlight%20pijamas%2Fprodutos%2Fpijama-masculino-01.webp',
    overlay: 'bg-gradient-to-t from-[rgb(111,86,60)] to-[rgb(223,202,178)]/30',
  },
  {
    title: 'Linha Infantil',
    description: 'Conforto e diversão para os pequenos. Qualidade que as mamães aprovam.',
    image: 'https://storage.lucasmendes.dev/site-sp/moonlight%20pijamas%2Fprodutos%2Fpijama-infantil-feminino-01.webp',
    overlay: 'bg-gradient-to-t from-[rgb(223,202,178)]/80 to-[rgb(102,78,56)]/20',
  },
  {
    title: 'Pantufas & Chinelos',
    description: 'Complete seu momento de relaxamento com nossos calçados premium.',
    image: 'https://storage.lucasmendes.dev/site-sp/moonlight%20pijamas%2Fprodutos%2Fpantufas-rosa-caixa.webp',
    overlay: 'bg-gradient-to-t from-[rgb(102,78,56)]/30 to-[rgb(223,202,178)]/50',
  },
];

export default function Colecoes() {
  return (
    <section className="py-20 md:py-28 bg-[rgb(254,254,252)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(102,78,56)] mb-4">Nossas Coleções</h2>
          <p className="text-lg md:text-xl text-[rgb(102,78,56)]/70 max-w-2xl mx-auto">
            Explore nossas categorias e encontre a peça perfeita para cada momento especial
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {colecoes.map((colecao) => (
            <div
              key={colecao.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={colecao.image}
                  alt={colecao.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 ${colecao.overlay} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                ></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {colecao.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed transform transition-all duration-300 group-hover:-translate-y-1">
                  {colecao.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[rgb(102,78,56)] px-6 py-2 rounded-full font-semibold text-sm hover:bg-[rgb(254,254,252)] transition-colors"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(102,78,56)] text-[rgb(254,254,252)] px-8 py-4 rounded-full hover:bg-[rgb(111,86,60)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Consulte Disponibilidade no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
