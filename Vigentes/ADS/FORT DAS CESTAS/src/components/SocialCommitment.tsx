import { WHATSAPP_NUMBER } from '../lib/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BG_IMAGE = "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fimg%2Fmulher-doando-comida.webp";

export default function SocialCommitment() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BG_IMAGE})` }} />
      <div className="absolute inset-0 bg-primary/90" />

      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-on-scroll ${isVisible ? 'visible' : ''}`}>
        <svg className="w-16 h-16 mx-auto mb-6 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Nosso Compromisso Social
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-white/90">
          Conectamos-nos a comunidade por meio de iniciativas sociais. Nossa missao vai alem de vender cestas: queremos construir um mundo onde todos tenham acesso a uma refeicao digna.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { value: '+100 mil', label: 'Familias Atendidas' },
            { value: '50+', label: 'Instituicoes Parceiras' },
            { value: '100%', label: 'Comprometimento Social' },
          ].map((s, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de doar uma cesta para quem precisa.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-primary-dark px-10 py-4 rounded-full text-base font-bold hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          Quero Doar uma Cesta
        </a>
      </div>
    </section>
  );
}
