const items = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/churrascaria%20costelao/img/balcao-bebidas-cadeiras-mesas.webp',
    alt: 'Área de Bebidas',
    title: 'Área de Bebidas',
    desc: 'Nosso balcão completo com diversas opções',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/churrascaria%20costelao/img/restaurante-vazio-mesas.webp',
    alt: 'Salão Principal',
    title: 'Salão Principal',
    desc: 'Ambiente acolhedor e familiar',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/churrascaria%20costelao/img/imagem-estabelecimento-lado.webp',
    alt: 'Nossa Estrutura',
    title: 'Nossa Estrutura',
    desc: 'Instalações preparadas para receber você',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/churrascaria%20costelao/img/churrascaria-fachada-amarela-hero-background.webp',
    alt: 'Fachada',
    title: 'Fachada',
    desc: 'Fácil de encontrar no coração de Foz',
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(61,61,67)] mb-4">
              Conheça Nossa <span className="text-[rgb(212,178,37)]">Estrutura</span>
            </h2>
            <div className="w-24 h-1 bg-[rgb(212,86,96)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Um ambiente preparado para proporcionar a melhor experiência para você e sua família
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(61,61,67)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[rgb(212,178,37)] text-[rgb(61,61,67)] px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Clique para ampliar
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">Venha nos visitar e conhecer pessoalmente!</p>
            <a
              href="https://wa.me/5545999434290?text=Olá!%20Gostaria%20de%20conhecer%20a%20churrascaria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(212,86,96)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[rgb(212,178,37)] hover:text-[rgb(61,61,67)] transition-all duration-300 shadow-lg"
            >
              Agende Sua Visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
