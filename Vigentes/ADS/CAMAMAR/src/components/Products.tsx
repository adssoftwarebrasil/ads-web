interface Product {
  img: string;
  title: string;
  desc: string;
}

const products: Product[] = [
  {
    img: '/assets/parafuso_auto_perfurante-ZxwDAmJn.png',
    title: 'PARAFUSO AUTO PERFURANTE',
    desc: 'O parafuso auto perfurante não necessita de um pré furo, dispensa porca e já vem com arruela de vedação.',
  },
  {
    img: '/assets/ancoragem_mecanica-B0Oo0sVq.png',
    title: 'ANCORAGEM MECÂNICA',
    desc: 'Confira mais sobre a Ancoragem Mecânica Não Expansiva da Camamar.',
  },
  {
    img: '/assets/produto-ancoragem-quimica-CLyUY-sl.png',
    title: 'ANCORAGEM QUÍMICA',
    desc: 'Utilizada por aplicação de cargas e fixação de aço e estruturas de concreto.',
  },
  {
    img: '/assets/produto-policarbonatos-BGKJXOOY.png',
    title: 'POLICARBONATO',
    desc: 'Material leve, resistente e versátil, utilizado na fabricação de diversas coberturas.',
  },
  {
    img: '/assets/produto-acessorios-telhas-zh4mZcMO.png',
    title: 'ACESSÓRIOS TELHAS',
    desc: 'Acessórios para telhas, fita anti-corrosiva, parafusos autoperfurantes e muito mais.',
  },
  {
    img: '/assets/produto-vedacao-bBp-L5w3.png',
    title: 'VEDAÇÃO',
    desc: 'Adesivo selante poliuretano, flange para tubos e muito mais.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-secondary">
      <div className="text-center mb-16 reveal">
        <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Nossas categorias</p>
        <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-foreground leading-none">
          Tudo para sua <span className="text-primary">obra</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {products.map((product, i) => (
          <article
            key={product.title}
            className="reveal group bg-background rounded-xl border border-border hover:border-primary p-6 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] relative overflow-hidden"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
            <div className="w-full aspect-[4/3] bg-white flex items-center justify-center overflow-hidden mb-6 rounded-lg">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <h3 className="min-h-[64px] flex items-center justify-center font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors tracking-wide uppercase mb-4">
              {product.title}
            </h3>
            <div className="w-12 h-0.5 bg-primary mb-5"></div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{product.desc}</p>
            <button
              type="button"
              className="mt-auto inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-md text-sm font-bold tracking-widest hover:bg-primary hover:text-primary-foreground transition"
            >
              VER MAIS
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
