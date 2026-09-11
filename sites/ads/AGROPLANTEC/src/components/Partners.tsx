const partners = Array.from({ length: 10 }, (_, i) => ({
  src: `https://storage.lucasmendes.dev/site-sp/agroplantec%2Fparceiro${i + 1}.png`,
  alt: `Parceiro ${i + 1}`,
}));

export default function Partners() {
  return (
    <section id="partners" className="bg-[rgb(245,245,245)] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-[rgb(29,29,27)] text-3xl lg:text-5xl font-bold text-center mb-16">Parceiros</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 transition-all duration-700 opacity-0">
          {partners.map((p) => (
            <div key={p.alt} className="flex items-center justify-center p-4 transition-all duration-300">
              <img
                src={p.src}
                alt={p.alt}
                className="max-w-[140px] w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
