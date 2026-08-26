import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Vim através do site da AgroPG e gostaria de mais informações."
    );
    window.open(`https://wa.me/554233230147?text=${message}`, "_blank");
  };

  return (
    <>
      <div className="bg-[rgb(19,46,78)] text-white text-center py-2 text-sm">
        Seg a Sex: 08h às 18h | Sábado: 08h às 12h
      </div>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[90px] md:h-[90px]">
            <button
              className="md:hidden text-[rgb(19,46,78)]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className="flex items-center">
              <img
                src="/assets/img/logo.png"
                alt="AGROPG Logo"
                className="h-[60px] md:h-[60px]"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#quem-somos"
                className="text-[rgb(19,46,78)] font-medium hover:text-[rgb(45,156,219)] transition-colors"
              >
                Quem Somos
              </a>
              <a
                href="#parceiros"
                className="text-[rgb(19,46,78)] font-medium hover:text-[rgb(45,156,219)] transition-colors"
              >
                Marcas
              </a>
              <a
                href="#produtos"
                className="text-[rgb(19,46,78)] font-medium hover:text-[rgb(45,156,219)] transition-colors"
              >
                Produtos
              </a>
              <a
                href="#contato"
                className="text-[rgb(19,46,78)] font-medium hover:text-[rgb(45,156,219)] transition-colors"
              >
                Contato
              </a>
            </nav>
            <div className="flex items-center">
              <button
                onClick={openWhatsApp}
                className="hidden md:block bg-[rgb(45,156,219)] text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300"
              >
                ENVIAR WHATSAPP
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <a
                href="#quem-somos"
                className="block text-[rgb(19,46,78)] font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Quem Somos
              </a>
              <a
                href="#parceiros"
                className="block text-[rgb(19,46,78)] font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Marcas
              </a>
              <a
                href="#produtos"
                className="block text-[rgb(19,46,78)] font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Produtos
              </a>
              <a
                href="#contato"
                className="block text-[rgb(19,46,78)] font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </a>
              <button
                onClick={openWhatsApp}
                className="w-full bg-[rgb(45,156,219)] text-white px-6 py-3 rounded-lg font-semibold"
              >
                ENVIAR WHATSAPP
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
