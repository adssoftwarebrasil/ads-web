function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fimg%2Flogo-sem-fundo.png"
              alt="Depósito de Gás Moura"
              className="h-14 md:h-20 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToId('sobre')}
              className="text-[rgb(28,59,126)] hover:text-[rgb(228,29,32)] transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToId('produtos')}
              className="text-[rgb(28,59,126)] hover:text-[rgb(228,29,32)] transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToId('avaliacoes')}
              className="text-[rgb(28,59,126)] hover:text-[rgb(228,29,32)] transition-colors font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToId('contato')}
              className="text-[rgb(28,59,126)] hover:text-[rgb(228,29,32)] transition-colors font-medium"
            >
              Contato
            </button>
          </nav>
          <a
            href="http://wa.me/5562982672012?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(228,29,32)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(200,25,28)] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Peça Agora
          </a>
        </div>
      </div>
    </header>
  );
}
