import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { photos } from "../data/hotel";

const navigation = [
  ["O hotel", "#o-hotel"],
  ["Acomodações", "#acomodacoes"],
  ["Comodidades", "#comodidades"],
  ["Galeria", "#galeria"],
  ["Localização", "#localizacao"],
];

export function Brand({ footer = false }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#inicio"
      aria-label="Entre Rios Hotel — início"
    >
      <img
        src={photos.logo}
        width="52"
        height="52"
        alt="Brasão do Entre Rios Hotel"
      />
      <span>
        ENTRE RIOS<small>H O T E L</small>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnResize = () => {
      if (window.innerWidth > 1000) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav
          id="principal"
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="mobile-reserve"
            href="#reservas"
            onClick={() => setOpen(false)}
          >
            Planejar minha estadia <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
        <a className="header-reserve" href="#reservas">
          Reserve sua estadia <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle icon-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-controls="principal"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
