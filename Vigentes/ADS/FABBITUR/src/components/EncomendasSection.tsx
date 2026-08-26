import { WhatsAppIcon } from './icons';

const IMG = 'https://fabbiturturismo.com.br';
const WA_ENCOMENDA =
  'https://wa.me/5599984741978?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fabbitur%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20envio%20de%20encomendas.';

const features = ['Atendimento prático', 'Rotas conhecidas', 'Agências e equipe de apoio', 'Consulta rápida pelo WhatsApp'];
const slides = [1, 2, 3];

const CheckIcon = () => (
  <svg
    className="text-[var(--color-green-700)] flex-shrink-0"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function EncomendasSection() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="encomendas-heading">
      <div className="container-site">
        <div className="bg-[var(--color-green-100)] rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--color-green-700)] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
                Encomendas
              </div>
              <h2 id="encomendas-heading" className="section-title">
                Envie sua encomenda com quem conhece a rota
              </h2>
              <p className="text-[var(--color-text-600)] mb-6 leading-relaxed">
                A Fabbitur também realiza transporte de encomendas, objetos, volumes e cargas entre as cidades atendidas, com orientação direta pelo WhatsApp.
              </p>
              <ul className="flex flex-col gap-2.5 mb-8" role="list">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-text-900)]">
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_ENCOMENDA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-3.5"
              >
                <WhatsAppIcon size={20} />
                Solicitar envio pelo WhatsApp
              </a>
            </div>

            {/* Interior slideshow */}
            <div
              className="hidden lg:block interior-gallery-home relative overflow-hidden rounded-xl shadow-[var(--shadow-elevated)]"
              style={{ height: '380px' }}
              role="img"
              aria-label="Fotos reais dos ônibus da Fabbitur Turismo"
            >
              {slides.map((n) => (
                <picture key={n} className={`home-gallery-slide home-gallery-slide-${n} absolute inset-0`}>
                  <source type="image/avif" srcSet={`${IMG}/images/frota-slide-${n}.avif`} />
                  <source type="image/webp" srcSet={`${IMG}/images/frota-slide-${n}.webp`} />
                  <img
                    src={`${IMG}/images/frota-slide-${n}.jpg`}
                    alt={`Ônibus da Fabbitur Turismo — foto ${n}`}
                    width={960}
                    height={640}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </picture>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
