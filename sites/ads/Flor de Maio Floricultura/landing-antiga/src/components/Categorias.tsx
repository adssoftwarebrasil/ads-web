interface Categoria {
  icon: string;
  title: string;
  options: string;
  image: string;
}

const categorias: Categoria[] = [
  {
    icon: '🌹',
    title: 'Bouquets de Rosas',
    options: '+150 opções',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FBouquet%20Amor%20e%20Paixa%CC%83o%20Rosas-%2024%20Rosas.webp',
  },
  {
    icon: '🎁',
    title: 'Cestas & Kits Especiais',
    options: '+80 opções',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FCesta%20Box%20Love%20Cafe%CC%81.webp',
  },
  {
    icon: '🧸',
    title: 'Pelúcias & Combos',
    options: '+60 opções',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FCorac%CC%A7a%CC%83o%20Pelu%CC%81cia%20Grande.webp',
  },
  {
    icon: '🌻',
    title: 'Girassóis & Arranjos',
    options: '+45 opções',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FArranjo%20Cor%20do%20Sol.webp',
  },
  {
    icon: '💝',
    title: 'Presentes Românticos',
    options: '+100 opções',
    image: 'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FAmor%20de%20Cesta.webp',
  },
  {
    icon: '🎉',
    title: 'Eventos & Celebrações',
    options: '+70 opções',
    image: 'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FAmor%20e%20Alegria.webp',
  },
];

export default function Categorias() {
  return (
    <section id="categorias" className="bg-[var(--cinza-claro)] py-16 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-[var(--texto-escuro)] mb-12 lg:mb-16">
          Encontre o Presente Perfeito Para Cada Ocasião
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((c) => (
            <a
              key={c.title}
              href="https://giovannaflores.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-80 rounded-[20px] overflow-hidden group cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${c.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/40 group-hover:from-[rgba(254,0,0,0.8)] group-hover:via-[rgba(254,0,0,0.4)] transition-all duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">{c.title}</h3>
                <p className="text-base opacity-90">{c.options}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
