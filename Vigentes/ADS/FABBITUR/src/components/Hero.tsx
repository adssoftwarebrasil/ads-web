import { WhatsAppIcon, TicketIcon } from './icons';

const WA_ENCOMENDA =
  'https://wa.me/5599984741978?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fabbitur%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20envio%20de%20encomendas.';

const badges = [
  {
    title: 'Desde 1989',
    subtitle: 'Tradição e experiência',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-500)" strokeWidth={2} aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Frota própria',
    subtitle: 'Veículos conservados',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-500)" strokeWidth={2} aria-hidden="true">
        <rect x="1" y="4" width="22" height="12" rx="2" />
        <path d="M16 16v2M8 16v2M1 9h22" />
        <circle cx="8" cy="18" r="1.5" fill="var(--color-gold-500)" stroke="none" />
        <circle cx="16" cy="18" r="1.5" fill="var(--color-gold-500)" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Motoristas treinados',
    subtitle: 'Profissionais registrados',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-500)" strokeWidth={2} aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    title: 'Atendimento 24h',
    subtitle: 'WhatsApp todos os dias',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-500)" strokeWidth={2} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="relative bg-[var(--color-green-900)] text-white overflow-hidden"
      style={{ minHeight: '580px' }}
      aria-labelledby="hero-heading"
    >
      {/* Background layer */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1, transition: 'opacity 1s' }}
          muted
          loop
          playsInline
          preload="none"
          autoPlay
        >
          <source src="https://fabbiturturismo.com.br/videos/hero-fabbitur.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg,rgba(2,75,42,0.96) 0%,rgba(2,75,42,0.80) 45%,rgba(2,75,42,0.25) 75%,rgba(2,75,42,0.05) 100%)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="container-site relative py-20 lg:py-28 xl:py-36">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-green-200 mb-7">
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Desde 1989 transportando com segurança
          </div>

          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Viaje de Imperatriz a{' '}
            <span style={{ color: 'var(--color-gold-500)' }}>Goiânia</span> com conforto, segurança e pontualidade.
          </h1>

          <p className="text-lg lg:text-xl leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Passagens interestaduais, encomendas e atendimento online 24h com a tradição de quem transporta pessoas e histórias há mais de 30 anos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href="/comprar-passagem"
              className="btn-primary text-base px-8 py-4 justify-center"
              style={{ background: 'var(--color-gold-500)', color: 'var(--color-green-900)' }}
            >
              <TicketIcon size={18} />
              Comprar passagem
            </a>
            <a
              href={WA_ENCOMENDA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-white text-base px-8 py-4 justify-center"
            >
              <WhatsAppIcon size={18} />
              Enviar encomenda pelo WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" role="list" aria-label="Diferenciais">
            {badges.map((b) => (
              <div key={b.title} className="flex flex-col gap-1.5" role="listitem">
                {b.icon}
                <span className="text-sm font-semibold text-white">{b.title}</span>
                <span className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {b.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
