const brands = [
  { name: 'Kérastase', desc: 'Luxo & Tratamento' },
  { name: 'Wella', desc: 'Coloração & Cuidado' },
  { name: 'Schwarzkopf', desc: 'Profissional Premium' },
  { name: 'Keune', desc: 'Beleza Holandesa' },
  { name: 'Lanza', desc: 'Tratamento Capilar' },
  { name: 'MaisonVisage', desc: 'Cosmética Avançada' },
];

export default function Brands() {
  return (
    <section className="py-12 bg-cream/40 border-y border-cream">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="font-sans text-xs text-stone-light uppercase tracking-widest font-medium">
            Trabalhamos com as melhores marcas do mercado
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center gap-1 px-6 py-3 rounded-xl border border-transparent hover:border-gold/30 hover:bg-white transition-all duration-300"
            >
              <span className="font-serif text-xl md:text-2xl text-stone font-medium group-hover:text-gold transition-colors duration-300">
                {brand.name}
              </span>
              <span className="font-sans text-xs text-stone-light">{brand.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
