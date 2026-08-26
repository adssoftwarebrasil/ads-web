import { useEffect, useState } from "react";
import { Menu, X, Wind } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { content, WHATSAPP } from "@/i18n/content";
import logo from "@/assets/logo.png";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: content.nav.home },
    { id: "courses", label: content.nav.courses },
    { id: "rental", label: content.nav.rental },
    { id: "reviews", label: content.nav.reviews },
    { id: "contact", label: content.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark py-2" : "py-4 bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <a href="#home" className="flex items-center gap-2 group">
          <img src={logo} alt="Clube do Kite PF" className="h-10 w-10 rounded-full bg-white/90 p-0.5 ring-2 ring-primary/40 group-hover:ring-primary transition" />
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80">Clube do Kite</div>
            <div className="text-sm font-bold text-foreground flex items-center gap-1">
              Praia do Futuro <Wind className="h-3 w-3 text-secondary" />
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-fire after:transition-all hover:after:w-full"
              >
                {t(l.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-xs font-semibold text-foreground/90 hover:border-primary hover:text-primary transition"
            aria-label="Toggle language"
          >
            {lang === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
          </button>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-fire text-primary-foreground text-sm font-bold shadow-lg shadow-primary/30 hover:scale-105 hover:glow-fire transition-all"
          >
            {t(content.nav.cta)}
          </a>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass-dark border-t border-border animate-fade-up">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground/90 hover:text-primary border-b border-border/50"
                >
                  {t(l.label)}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between pt-3">
              <button
                onClick={() => setLang(lang === "pt" ? "en" : "pt")}
                className="px-3 py-1.5 rounded-full border border-border text-xs font-semibold"
              >
                {lang === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
              </button>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gradient-fire text-primary-foreground text-sm font-bold">
                {t(content.nav.cta)}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}