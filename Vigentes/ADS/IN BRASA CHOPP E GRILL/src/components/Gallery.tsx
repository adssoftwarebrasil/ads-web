import { Instagram, MapPin } from 'lucide-react';

interface GalleryItem {
  label: string;
  image: string;
  delay: number;
}

const items: GalleryItem[] = [
  {
    label: 'Nosso espaço em Sinop',
    image: '/img/fachada-in-brasa.jpeg',
    delay: 0,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand/4 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading animate-reveal">Galeria</p>
          <h2 className="section-heading mt-3 animate-reveal">
            Um Lugar Feito Para <span className="text-gradient">Ficar</span>
          </h2>
          <div className="divider mx-auto mt-6 animate-reveal"></div>
          <p className="text-white/60 mt-4 max-w-xl mx-auto animate-reveal">
            Mesas ao ar livre, luz baixa e chopp gelado — o ambiente que faz o In Brasa ser o
            ponto de encontro favorito em Sinop.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.label}
              className="animate-reveal relative overflow-hidden rounded-3xl group cursor-pointer aspect-[4/3] sm:aspect-[16/10] border border-white/10"
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-end justify-start p-5 sm:p-8">
                <span className="flex items-center gap-2 text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin className="lucide" width={15} height={15} />
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-reveal">
          <a
            href="https://www.instagram.com/inbrasaespetaria_"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Instagram className="lucide lucide-instagram" width={18} height={18} />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
