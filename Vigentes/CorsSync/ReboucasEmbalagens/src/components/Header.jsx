import { useEffect, useState } from "react";
import { Clock3, Menu, MessageCircleMore, X } from "lucide-react";
import { contact } from "../data/siteData";
import Logo from "./Logo";

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Destaques", href: "#destaques" },
  { label: "Nossa história", href: "#historia" },
  { label: "Onde estamos", href: "#contato" },
];

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <p>
            <Clock3 size={15} aria-hidden="true" />
            Seg a sex, 08h às 17h <span>•</span> Sáb, 08h às 12h
          </p>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
        </div>
      </div>
      <header className="header">
        <div className="container header__inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="button button--small header__cta" href={contact.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircleMore size={18} aria-hidden="true" />
            Fale conosco
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="mobile-menu__backdrop" type="button" onClick={() => setOpen(false)} aria-label="Fechar menu" />
        <div className="mobile-menu__panel" id="mobile-navigation">
          <div className="mobile-menu__head">
            <Logo compact />
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Navegação mobile">
            {navLinks.map((link, index) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="button" href={contact.whatsapp} target="_blank" rel="noreferrer">
            Pedir pelo WhatsApp
          </a>
          <p>Atendimento em Feira de Santana e cidades vizinhas.</p>
        </div>
      </div>
    </>
  );
}

export default Header;
