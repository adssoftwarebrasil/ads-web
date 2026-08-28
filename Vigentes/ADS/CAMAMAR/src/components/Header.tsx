import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logo-camamar-navbar.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex-shrink-0">
          <img
            src={logo}
            alt="Camamar Soluções Inteligentes"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-14" : "h-16 md:h-20"
            } ${scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"}`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold tracking-wide transition relative group ${
                scrolled ? "text-foreground" : "text-white text-shadow-hero"
              }`}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5562982972917"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-whatsapp text-white px-4 py-2.5 rounded-md font-semibold text-sm hover:scale-105 hover:shadow-[0_0_24px_hsl(var(--whatsapp)/0.6)] transition-all"
        >
          <FaWhatsapp size={18} />
          WhatsApp
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded transition ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-foreground hover:bg-primary hover:text-primary-foreground transition text-sm font-semibold tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5562982972917"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-whatsapp text-white"
          >
            <FaWhatsapp size={18} />
            <span className="text-sm font-bold">Fale pelo WhatsApp</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
