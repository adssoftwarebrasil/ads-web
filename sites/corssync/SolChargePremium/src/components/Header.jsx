import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand.jsx";
import { navigation } from "../data/company.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 901px)");
    function closeOnDesktop(event) {
      if (event.matches) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner container">
        <Brand />
        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button-dark mobile-contact"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Vamos conversar <ArrowUpRight size={18} />
          </a>
        </nav>
        <a className="button button-dark header-contact" href="#contato">
          Vamos conversar <ArrowUpRight size={18} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
          ref={toggleRef}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
