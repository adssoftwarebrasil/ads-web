import { Phone, MapPin } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Avaliações', id: 'reviews' },
  { label: 'Contato', id: 'contact' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="bg-[rgb(1,0,104)] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs md:text-sm gap-2 md:gap-4">
            <a href="tel:3836762159" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Phone width={14} height={14} />
              <span>(38) 3676-2159</span>
            </a>
            <a href="https://wa.me/553899492159" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Phone width={14} height={14} />
              <span>(38) 9 9949-2159</span>
            </a>
            <div className="flex items-center gap-1">
              <MapPin width={14} height={14} />
              <span className="hidden sm:inline">Av. Gov. Valadares, 1964 - Unaí/MG</span>
              <span className="sm:hidden">Unaí/MG</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <img src="https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/logo-sem-fundo.png" alt="Central Ferragens" className="h-12 md:h-16 w-auto" />
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(1,0,104)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a href="https://wa.me/553899492159" target="_blank" rel="noopener noreferrer" className="bg-[rgb(1,0,104)] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl font-medium text-sm md:text-base">Fazer Orçamento</a>
        </div>
      </div>
    </header>
  );
}
