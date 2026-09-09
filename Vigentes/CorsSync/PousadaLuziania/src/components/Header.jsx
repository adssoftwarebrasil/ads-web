import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/images/logo-horizontal.webp";
import { contact } from "../data/siteData";

const links = [
  { label: "A pousada", href: "#pousada" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner container">
        <a className="brand" href="#inicio" aria-label="Pousada Luziânia - início">
          <img src={logo} alt="Pousada Luziânia" />
        </a>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">
          <div className="mobile-nav-heading">
            <span>Menu</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X aria-hidden="true" />
            </button>
          </div>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact-mobile" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            Consultar disponibilidade <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <a className="button button-small header-cta" href={contact.whatsappHref} target="_blank" rel="noreferrer">
          Consultar <ArrowUpRight aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <Menu aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default Header;
