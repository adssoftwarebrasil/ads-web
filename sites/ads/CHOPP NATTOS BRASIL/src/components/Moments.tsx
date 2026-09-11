const moments = [
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/copos-cerveja-brinde.webp', title: 'Celebrações' },
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/mulher-sorriso-cerveja.webp', title: 'Momentos Especiais' },
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/mulher-copo-cerveja.webp', title: 'Eventos Corporativos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/mulher-segurando-cerveja.webp', title: 'Encontros Casuais' },
];

export default function Moments() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[rgb(245,247,250)] to-white px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(40,44,115)] text-center mb-16">
          Presentes nos Seus Melhores Momentos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {moments.map((item) => (
            <div key={item.title} className="relative h-[350px] rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-400"></div>
              <h3 className="absolute bottom-8 left-8 text-white text-2xl md:text-3xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
