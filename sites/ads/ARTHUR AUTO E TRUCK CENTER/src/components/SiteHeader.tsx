import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/arthur-logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Arthur Auto e Truck Center" className="h-12 w-auto md:h-14" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/80 transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <WhatsAppButton>Orçamento</WhatsAppButton>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md border border-border p-2 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-base font-semibold uppercase text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <WhatsAppButton>Orçamento</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
