import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";
import { whatsappLink } from "../data/content";

const links = [
  ["O hotel", "#hotel"],
  ["Acomodações", "#acomodacoes"],
  ["Comodidades", "#comodidades"],
  ["Galeria", "#galeria"],
  ["Contato", "#contato"],
];

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label="Paris Apart Hotel - início">
          <BrandMark />
        </a>

        <nav className={`site-nav${open ? " is-open" : ""}`} aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button button--red site-nav__cta"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Consultar reserva <ArrowUpRight size={17} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
