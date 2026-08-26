interface GalleryItem {
  img: string;
  caption: string;
  large?: boolean;
}

const items: GalleryItem[] = [
  { img: '/produtos/chapa-alveolar-1.jpeg', caption: 'Cobertura em policarbonato alveolar', large: true },
  { img: '/produtos/chapa-refletiva-1.jpeg', caption: 'Chapa alveolar refletiva' },
  { img: '/produtos/chapa-compacta-1.jpg', caption: 'Chapa compacta' },
  { img: '/produtos/chapa-alveolar-5.jpeg', caption: 'Estrutura em policarbonato' },
  { img: '/produtos/chapa-refletiva-5.jpeg', caption: 'Soluções em telhado' },
  { img: '/produtos/chapa-alveolar-8.jpeg', caption: 'Obras atendidas', large: true },
  { img: '/produtos/chapa-alveolar-3.jpeg', caption: 'Cobertura curva' },
  { img: '/produtos/chapa-refletiva-8.jpeg', caption: 'Aplicação refletiva' },
  { img: '/produtos/chapa-compacta-3.jpg', caption: 'Chapa compacta aplicada' },
  { img: '/produtos/chapa-alveolar-6.jpeg', caption: 'Cobertura residencial' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Nossa galeria</p>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-foreground leading-none">
            Obras e <span className="text-primary">materiais</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {items.map((item, i) => (
            <div
              key={item.caption}
              className={`reveal group relative overflow-hidden rounded-lg ${item.large ? 'md:row-span-2' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <div>
                  <p className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-1">Camamar</p>
                  <p className="text-white font-display font-bold text-xl uppercase leading-tight">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
