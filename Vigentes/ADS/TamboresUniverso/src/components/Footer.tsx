export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#034D9B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2Flogo.webp"
              alt="Tambores Universo"
              className="h-12 md:h-16 mb-4"
            />
            <p className="text-sm md:text-base text-white/80">
              Mais de 30 anos fornecendo soluções sustentáveis em embalagens industriais
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <button
                  onClick={() => scrollToSection('#historia')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Nossa História
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#produtos')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Nossos Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#chapas')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Chapas PEAD
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#galeria')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contato')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm md:text-base text-white/80">
              <li>Av. Vera Cruz, 2018</li>
              <li>Jardim Guanabara</li>
              <li>Goiânia - GO, 74675-830</li>
              <li className="pt-2">
                <a
                  href="https://wa.me/5562984164141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (62) 98416-4141
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-xs md:text-sm text-white/70">
            © {currentYear} Tambores Universo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
