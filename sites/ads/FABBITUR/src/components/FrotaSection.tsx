const IMG = 'https://fabbiturturismo.com.br';
const slides = Array.from({ length: 10 }, (_, i) => i + 1);
const features = [
  'Poltronas confortáveis',
  'Veículos higienizados',
  'Frota conservada',
  'Bagageiro para viagem',
  'Ambiente para longos trajetos',
  'Motoristas registrados',
];

export default function FrotaSection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--color-bg)]" aria-labelledby="frota-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* 10-slide frota gallery */}
          <div
            className="frota-gallery relative rounded-xl overflow-hidden shadow-[var(--shadow-card)]"
            style={{ aspectRatio: '3 / 2' }}
            role="img"
            aria-label="Galeria de fotos da frota Fabbitur Turismo"
          >
            {slides.map((n) => (
              <picture key={n} className={`frota-slide frota-slide-${n} absolute inset-0`}>
                <source type="image/avif" srcSet={`${IMG}/images/frota-slide-${n}.avif`} />
                <source type="image/webp" srcSet={`${IMG}/images/frota-slide-${n}.webp`} />
                <img
                  src={`${IMG}/images/frota-slide-${n}.jpg`}
                  alt={`Frota Fabbitur Turismo — foto ${n}`}
                  width={960}
                  height={640}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            ))}
          </div>

          <div>
            <h2 id="frota-heading" className="section-title">
              Conforto em cada detalhe da viagem
            </h2>
            <p className="text-[var(--color-text-600)] mb-6">
              A Fabbitur valoriza a conservação, a limpeza e o conforto da frota para oferecer uma viagem mais segura e tranquila.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-900)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-green-700)] flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <a href="/frota" className="btn-secondary">
              Conhecer a frota
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
