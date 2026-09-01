import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP = 'https://wa.me/5566996456124';

const STATS = [
  { value: '10+', label: 'Especialidades' },
  { value: '100%', label: 'Humanizado' },
  { value: 'Seg–Sáb', label: 'Atendimento' },
  { value: 'Nov/2025', label: 'Fundada em' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-glow hero__bg-glow--1" />
      <div className="hero__bg-glow hero__bg-glow--2" />
      <div className="hero__bg-grid" />

      <div className="hero__particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i + 1}`} />
        ))}
      </div>

      <div className="hero__layout">
        <div className="hero__left">
          <div className="hero__badge animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="hero__badge-dot" />
            Clínica Odontológica · Rondonópolis – MT
          </div>

          <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Tecnologia, estética e cuidado para você voltar a sorrir com{' '}
            <span className="hero__title-hl">confiança</span>
          </h1>

          <p className="hero__sub animate-fade-up" style={{ animationDelay: '0.35s' }}>
            Atendimento humanizado, tecnologia avançada e cuidado personalizado. Cuide da sua saúde
            bucal com quem realmente se importa.
          </p>

          <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-wa btn-lg">
              <WhatsAppIcon size={22} />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost btn-lg">
              Ver Serviços
            </a>
          </div>

          <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.65s' }}>
            {STATS.map((stat, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-val">{stat.value}</span>
                <span className="hero__stat-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__right animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="hero__visual">
            <div className="hero__photo-card">
              <img
                src="/familia.jpg"
                alt="Família sorrindo, atendida pela Aurora Odontologia"
                className="hero__photo"
              />
              <div className="hero__photo-shade" aria-hidden="true" />
            </div>

            <div className="hero__logo-orbit">
              <div className="hero__logo-ring hero__logo-ring--1" />
              <div className="hero__logo-ring hero__logo-ring--2" />
              <div className="hero__logo-card">
                <img src="/logo.png" alt="Aurora Odontologia" className="hero__logo-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
