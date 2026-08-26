import WhatsAppIcon from './WhatsAppIcon';

interface Brand {
  name: string;
  image: string;
  description: string;
  href: string;
}

const BRANDS: Brand[] = [
  {
    name: 'Moura',
    image: 'https://storage.lucasmendes.dev/caroba/scorpionxpress%2FMoura.png',
    description: 'Líder nacional em baterias automotivas com tecnologia avançada.',
    href: 'https://wa.me/5514996487352?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20baterias%20Moura%20dispon%C3%ADveis.',
  },
  {
    name: 'Heliar',
    image: 'https://storage.lucasmendes.dev/caroba/scorpionxpress%2FHeliar.png',
    description: 'Alta performance e longa vida útil para o seu veículo.',
    href: 'https://wa.me/5514996487352?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20baterias%20Heliar%20dispon%C3%ADveis.',
  },
  {
    name: 'Cral',
    image: 'https://storage.lucasmendes.dev/caroba/scorpionxpress%2FCral.png',
    description: 'Qualidade e confiança para carros de passeio e comerciais.',
    href: 'https://wa.me/5514996487352?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20baterias%20Cral%20dispon%C3%ADveis.',
  },
  {
    name: 'Zetta',
    image: 'https://storage.lucasmendes.dev/caroba/scorpionxpress%2FZetta.png',
    description: 'Tecnologia eficiente e custo-benefício imbatível.',
    href: 'https://wa.me/5514996487352?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20baterias%20Zetta%20dispon%C3%ADveis.',
  },
  {
    name: 'Pioneiro',
    image: 'https://storage.lucasmendes.dev/caroba/scorpionxpress%2FPioneiro.png',
    description: 'Robustez e durabilidade para qualquer condição de uso.',
    href: 'https://wa.me/5514996487352?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20baterias%20Pioneiro%20dispon%C3%ADveis.',
  },
];

export default function Brands() {
  return (
    <section id="marcas" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#fcc209] text-sm font-semibold tracking-widest uppercase mb-3">
            Marcas Parceiras
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Trabalhamos com as <span className="text-[#fcc209]">Melhores Marcas</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Oferecemos baterias originais com garantia de fábrica. Qualidade que você pode confiar.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {BRANDS.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 border border-white/10 hover:border-[#fcc209]/50 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#fcc209]/10 cursor-pointer"
            >
              <div className="w-full aspect-square flex items-center justify-center bg-white rounded-xl overflow-hidden p-3 group-hover:shadow-md transition-shadow">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm">{brand.name}</p>
                <p className="text-white/40 text-xs mt-1 leading-tight">{brand.description}</p>
              </div>
              <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <WhatsAppIcon size={14} fill="#fcc209" />
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-white/30 text-sm mt-8">
          Clique em qualquer marca para consultar disponibilidade e preços via WhatsApp
        </p>
      </div>
    </section>
  );
}
