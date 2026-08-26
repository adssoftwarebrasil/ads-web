interface Brand {
  img: string;
  alt: string;
  name: string;
  desc: string;
}

interface Gallery {
  img: string;
  alt: string;
  label: string;
}

const brands: Brand[] = [
  {
    img: 'https://storage.lucasmendes.dev/caroba/baterias/heliar.webp',
    alt: 'Bateria Heliar',
    name: 'Heliar',
    desc: 'Alta performance e confiabilidade para todo tipo de veículo.',
  },
  {
    img: 'https://storage.lucasmendes.dev/caroba/baterias/moura.webp',
    alt: 'Bateria Moura',
    name: 'Moura',
    desc: 'Líder de mercado brasileiro com qualidade comprovada.',
  },
  {
    img: 'https://storage.lucasmendes.dev/caroba/baterias/zetta.webp',
    alt: 'Bateria Zetta',
    name: 'Zetta',
    desc: 'Ótimo custo-benefício com tecnologia de ponta.',
  },
  {
    img: 'https://storage.lucasmendes.dev/caroba/baterias/real.webp',
    alt: 'Bateria Real',
    name: 'Real',
    desc: 'Resistente e durável, ideal para múltiplos usos automotivos.',
  },
  {
    img: 'https://storage.lucasmendes.dev/caroba/baterias/kf.webp',
    alt: 'Bateria KF',
    name: 'KF',
    desc: 'Tecnologia alemã com excelente desempenho em condições adversas.',
  },
];

const gallery: Gallery[] = [
  {
    img: 'https://storage.lucasmendes.dev/caroba/annb%20baterias/img/pilha-baterias-moura-loja-varejo_900x1600.webp',
    alt: 'Estoque Moura',
    label: 'Estoque Moura',
  },
  {
    img: 'https://storage.lucasmendes.dev/caroba/annb%20baterias/img/estante-azul-baterias-moura-agm-empilhadas_900x1600.webp',
    alt: 'Baterias AGM',
    label: 'Baterias AGM',
  },
  {
    img: 'https://storage.lucasmendes.dev/caroba/annb%20baterias/img/pilha-baterias-heliar-prateleira-loja_900x1600.webp',
    alt: 'Estoque Heliar',
    label: 'Estoque Heliar',
  },
];

export default function Marcas() {
  return (
    <section id="marcas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 transition-all duration-700 opacity-0 translate-y-8">
          <span className="inline-block text-brand-green font-bold text-sm uppercase tracking-widest mb-3">
            Marcas Oficiais
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Trabalhamos com as melhores marcas
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Distribuidor autorizado das principais marcas do mercado. Produto original com nota
            fiscal e garantia de fábrica.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-lg hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300
                opacity-0 translate-y-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-16 flex items-center justify-center">
                <img src={b.img} alt={b.alt} className="h-full object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-brand-dark text-sm">{b.name}</p>
                <p className="text-gray-400 text-xs mt-1 leading-snug">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-500 opacity-0 translate-y-8">
          {gallery.map((g) => (
            <div key={g.label} className="relative group rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src={g.img}
                alt={g.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm bg-brand-green/80 px-3 py-1 rounded-lg">
                  {g.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
