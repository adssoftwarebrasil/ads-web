import { useState } from 'react';
import { Calendar, Gauge, MessageCircle } from 'lucide-react';
import { VEHICLES, whatsappUrl, type Vehicle } from '../data';

const INITIAL_COUNT = 8;

function vehicleWhatsApp(vehicle: Vehicle) {
  return whatsappUrl(
    `Olá, tudo bem? Vi o ${vehicle.name} ${vehicle.year} no site da Grife do Carro e gostaria de mais informações.`
  );
}

export default function Highlights() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? VEHICLES : VEHICLES.slice(0, INITIAL_COUNT);

  return (
    <section id="destaques" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">
            CARROS PARA DESTAQUE
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase leading-tight text-white">
            Veículos <span className="text-gold">em destaque</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Seminovos revisados e prontos para sair da loja. Clique no veículo
            que te interessou e fale direto com um consultor no WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((vehicle) => (
            <a
              key={vehicle.slug}
              href={vehicleWhatsApp(vehicle)}
              target="_blank"
              rel="noopener"
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-card hover:border-gold/40 transition-colors"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`/veiculos/${vehicle.slug}.jpg`}
                  alt={`${vehicle.name} ${vehicle.year}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {vehicle.note && (
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                    {vehicle.note}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-heading text-sm font-bold uppercase leading-snug text-white">
                  {vehicle.name}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    {vehicle.year}
                  </span>
                  {vehicle.km && (
                    <span className="inline-flex items-center gap-1.5">
                      <Gauge className="h-3.5 w-3.5 text-gold" />
                      {vehicle.km}
                    </span>
                  )}
                </div>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[10px] sm:text-xs font-bold tracking-wider text-gold">
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                  TENHO INTERESSE
                </span>
              </div>
            </a>
          ))}
        </div>

        {VEHICLES.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border border-gold/40 px-8 py-3.5 text-sm font-bold tracking-wider text-gold hover:bg-gold hover:text-black transition-colors"
            >
              {showAll
                ? 'VER MENOS VEÍCULOS'
                : `VER TODOS OS ${VEHICLES.length} VEÍCULOS`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
