const gallery = [
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/copo-chopp-nattos.webp', alt: 'Produto 1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/caneca-chopp-espuma.webp', alt: 'Produto 2' },
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/copo-cerveja-puro-malte.webp', alt: 'Produto 3' },
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/barril-cerveja-confetes.webp', alt: 'Produto 4' },
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/caneca-cerveja-agua.webp', alt: 'Produto 5' },
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/copos-cerveja-chopp.webp', alt: 'Produto 6' },
];

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-[rgb(40,44,115)] px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Qualidade que Você Pode Ver</h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">Produtos premium cuidadosamente selecionados</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div key={item.alt} className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[rgb(176,146,71)]/0 group-hover:bg-[rgb(176,146,71)]/20 transition-all duration-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
