import logo from "@/assets/arthur-logo.png";
import { MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="h-1 bg-stripes" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-8">
        <div>
          <img src={logo} alt="Arthur Auto e Truck Center" className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Manutenção, pintura e reforma de caminhões e máquinas pesadas com qualidade que mantém sua frota
            rodando.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Serviços</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Manutenção de caminhões</li>
            <li>Máquinas pesadas</li>
            <li>Pintura automotiva</li>
            <li>Troca de óleo</li>
            <li>Alinhamento e balanceamento</li>
            <li>Reforma de caminhões</li>
            <li>Peças e acessórios</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a href="https://wa.me/5598984112123" className="hover:text-primary">
                (98) 98411-2123
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <a
                href="https://www.google.com/maps/place/Arthur+Auto+e+Truck+Center/data=!4m2!3m1!1s0x0:0x635ff66fbea5b9a5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Ver no Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Arthur Auto e Truck Center. Todos os direitos reservados.</p>
          <p>Força e precisão para sua frota.</p>
        </div>
      </div>
    </footer>
  );
}
