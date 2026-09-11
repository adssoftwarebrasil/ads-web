const navItems: { label: string; target: string }[] = [
  { label: 'Início', target: 'home' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Nossa Loja', target: 'loja' },
  { label: 'Avaliações', target: 'avaliacoes' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Flogo.jpg"
              alt="Colchões Ortobom Afonso Pena"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-gray-700 hover:text-[rgb(0,0,160)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href="https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20conhecer%20os%20colchões%20Ortobom."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(0,0,160)] hover:bg-[rgb(0,0,200)] text-white px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Fale Conosco
          </a>
        </div>
      </nav>
    </header>
  );
}
