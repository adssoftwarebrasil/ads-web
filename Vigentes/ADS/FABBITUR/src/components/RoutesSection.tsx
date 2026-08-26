import { WhatsAppIcon } from './icons';

interface Route {
  origin: string;
  destination: string;
  slug: string;
}

const routes: Route[] = [
  { origin: 'Imperatriz', destination: 'Araguaína', slug: 'imperatriz-araguaina' },
  { origin: 'Imperatriz', destination: 'Colinas', slug: 'imperatriz-colinas' },
  { origin: 'Imperatriz', destination: 'Guaraí', slug: 'imperatriz-guarai' },
  { origin: 'Imperatriz', destination: 'Paraíso', slug: 'imperatriz-paraiso' },
  { origin: 'Imperatriz', destination: 'Gurupi', slug: 'imperatriz-gurupi' },
  { origin: 'Imperatriz', destination: 'Porangatu', slug: 'imperatriz-porangatu' },
  { origin: 'Imperatriz', destination: 'Uruaçu', slug: 'imperatriz-uruacu' },
  { origin: 'Imperatriz', destination: 'Goiânia', slug: 'imperatriz-goiania' },
  { origin: 'Goiânia', destination: 'Imperatriz', slug: 'goiania-imperatriz' },
];

const waRoute = (o: string, d: string) =>
  `https://wa.me/5599984741978?text=${encodeURIComponent(
    `Olá, vim pelo site da Fabbitur e gostaria de consultar horários e disponibilidade da rota ${o} para ${d}.`,
  )}`;

const BusIcon = () => (
  <svg
    className="text-[var(--color-green-700)] flex-shrink-0"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <path d="M4 11V8a4 4 0 014-4h12M20 11V8" />
    <rect x="2" y="11" width="16" height="10" rx="2" />
    <circle cx="6" cy="21" r="2" />
    <circle cx="14" cy="21" r="2" />
    <path d="M18 5h4v6h-4z" />
  </svg>
);

export default function RoutesSection() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="routes-heading">
      <div className="container-site">
        <div className="mb-10">
          <h2 id="routes-heading" className="section-title">
            Rotas mais procuradas
          </h2>
          <p className="section-subtitle">
            Consulte horários e disponibilidade nas principais rotas atendidas pela Fabbitur.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((r) => (
            <div key={r.slug} className="card p-5 hover:shadow-[var(--shadow-elevated)] transition-shadow group">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-green-700)] ring-2 ring-[var(--color-green-100)]" />
                    <div className="w-px h-6 bg-[var(--color-green-700)]/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-green-900)] ring-2 ring-[var(--color-green-100)]" />
                  </div>
                  <div className="flex flex-col gap-2 min-w-0">
                    <span
                      className="text-sm font-semibold text-[var(--color-text-900)] truncate"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {r.origin}
                    </span>
                    <span
                      className="text-sm font-semibold text-[var(--color-text-900)] truncate"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {r.destination}
                    </span>
                  </div>
                </div>
                <BusIcon />
              </div>
              <p className="text-sm text-[var(--color-text-600)] mb-4">Consulte horários e disponibilidade.</p>
              <div className="flex gap-2">
                <a
                  href={`/rotas/${r.slug}`}
                  className="flex-1 text-center text-sm font-semibold py-2 px-3 rounded-lg bg-[var(--color-green-100)] text-[var(--color-green-800)] hover:bg-[var(--color-green-700)] hover:text-white transition-colors"
                >
                  Consultar passagem
                </a>
                <a
                  href={waRoute(r.origin, r.destination)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-9 rounded-lg bg-[#25D366] text-white hover:bg-[#1ebe5a] transition-colors flex-shrink-0"
                  aria-label={`WhatsApp para rota ${r.origin} → ${r.destination}`}
                >
                  <WhatsAppIcon size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/rotas" className="btn-secondary">
            Ver todas as rotas
          </a>
        </div>
      </div>
    </section>
  );
}
