import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const MAPS_LINK =
  "https://www.google.com/maps/place/Arthur+Auto+e+Truck+Center/data=!4m2!3m1!1s0x0:0x635ff66fbea5b9a5?sa=X&ved=1t:2428&hl=pt-BR&ictx=111";

const EMBED_SRC =
  "https://www.google.com/maps?q=Arthur+Auto+e+Truck+Center&output=embed&hl=pt-BR";

export function LocationContact() {
  return (
    <section id="localizacao" className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
              Onde estamos
            </span>
          </div>
          <h2 className="text-display text-5xl leading-none text-foreground md:text-7xl">
            Venha nos <span className="text-primary">visitar</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div id="contato" className="space-y-4 lg:col-span-2">
            <InfoCard
              icon={MapPin}
              title="Endereço"
              body="Arthur Auto e Truck Center"
              extra="Veja a localização exata no mapa ao lado."
              cta={{ label: "Abrir no Google Maps", href: MAPS_LINK }}
            />
            <InfoCard
              icon={Phone}
              title="WhatsApp / Telefone"
              body="(98) 98411-2123"
              extra="Atendimento rápido e orçamento sem compromisso."
              cta={{
                label: "Chamar no WhatsApp",
                href: "https://wa.me/5598984112123",
              }}
            />
            <InfoCard
              icon={Clock}
              title="Horário de atendimento"
              body="Segunda a Sábado"
              extra="Entre em contato para confirmar disponibilidade."
            />

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <h3 className="text-display text-xl text-foreground">Precisa de um orçamento?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fale agora com nossa equipe. Respondemos rapidinho.
              </p>
              <div className="mt-4">
                <WhatsAppButton>Solicitar agora</WhatsAppButton>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border lg:col-span-3">
            <iframe
              title="Localização Arthur Auto e Truck Center"
              src={EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[500px] w-full grayscale-[0.3] contrast-110"
              style={{ filter: "invert(0.9) hue-rotate(180deg)" }}
            />
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-xl transition hover:scale-105"
            >
              <Navigation className="h-4 w-4" /> Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  extra,
  cta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  extra?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {title}
          </h3>
          <p className="mt-1 text-lg font-semibold text-foreground">{body}</p>
          {extra && <p className="mt-1 text-sm text-muted-foreground">{extra}</p>}
          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              {cta.label} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
