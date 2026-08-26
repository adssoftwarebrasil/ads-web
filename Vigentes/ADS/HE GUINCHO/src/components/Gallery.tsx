interface GalleryItem {
  src: string;
  alt: string;
  delay: string;
}

const items: GalleryItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/heguincho%2Fimgi_14_514868429_1051081257167890_2335819325646144972_n.jpg',
    alt: 'Trabalho HE Guincho 1',
    delay: '0.3s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/heguincho%2Fimgi_15_504493793_1755109661785087_8979490481387958289_n.jpg',
    alt: 'Trabalho HE Guincho 2',
    delay: '0.4s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/heguincho%2Fimgi_21_509269981_703052799124365_5643143614372116136_n.jpg',
    alt: 'Trabalho HE Guincho 3',
    delay: '0.5s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/heguincho%2Fimgi_22_509625907_1200703995128227_6179003295478533107_n.jpg',
    alt: 'Trabalho HE Guincho 4',
    delay: '0.6s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/heguincho%2Fimgi_25_508400347_17847444585500277_7764651268595344145_n.webp',
    alt: 'Trabalho HE Guincho 5',
    delay: '0.7s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/heguincho%2Fimgi_5_519684129_722154850580155_2729584056814417528_n.jpg',
    alt: 'Trabalho HE Guincho 6',
    delay: '0.8s',
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 lg:py-28 px-4 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(10, 10, 10) 50%, rgb(0, 0, 0) 100%)',
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2
            className="text-white font-black text-4xl lg:text-6xl mb-6 opacity-0"
            style={{ letterSpacing: '0.02em' }}
          >
            NOSSO TRABALHO
          </h2>
          <div
            className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[rgb(68,235,21)] to-transparent mx-auto rounded-full opacity-0"
            style={{ animationDelay: '0.2s', boxShadow: 'rgba(68, 235, 21, 0.6) 0px 0px 20px' }}
          ></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.alt}
              className="relative overflow-hidden rounded-2xl cursor-pointer group opacity-0"
              style={{ animationDelay: item.delay, boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 40px' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-80 object-cover transition-all duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(68,235,21)]/40 via-[rgb(68,235,21)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute inset-0 border-2 border-[rgb(68,235,21)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
