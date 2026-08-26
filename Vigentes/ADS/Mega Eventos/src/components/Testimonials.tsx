import { Star } from 'lucide-react';

interface Review {
  text: string;
  initial: string;
  name: string;
  meta: string;
  avatarBg: string;
  filled: number;
  delay: number;
}

const reviews: Review[] = [
  {
    text: '"Melhor empresa de organização e realização de eventos de MT e com certeza uma das melhores do país!"',
    initial: 'A',
    name: 'Amanda Sousa',
    meta: 'Local Guide · 453 avaliações · 88 fotos',
    avatarBg: 'bg-[rgb(234,50,56)]',
    filled: 5,
    delay: 0,
  },
  {
    text: '"Agência nota 10, sempre prestativa e pronta para dar o melhor para o seu evento."',
    initial: 'M',
    name: 'Maria Cristina Vargas',
    meta: 'Local Guide · 15 avaliações',
    avatarBg: 'bg-[rgb(249,171,118)]',
    filled: 5,
    delay: 100,
  },
  {
    text: '"Bom serviço e boa estrutura. Equipe comprometida e atenciosa."',
    initial: 'I',
    name: 'Israel Ribeiro Schmidt',
    meta: '19 avaliações · 1 foto',
    avatarBg: 'bg-[rgb(53,53,53)]',
    filled: 4,
    delay: 200,
  },
];

function Stars({ filled, size }: { filled: number; size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          fill={i < filled ? 'currentColor' : 'none'}
          className="text-[rgb(255,241,18)]"
        />
      ))}
    </>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[rgb(248,248,248)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[rgb(234,50,56)] mb-3">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(53,53,53)] mb-4">
            O que Nossos Clientes
            <br />
            <span className="text-[rgb(234,50,56)]">Dizem sobre Nós</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              <Stars filled={5} size={22} />
            </div>
            <span className="text-3xl font-black text-[rgb(53,53,53)]">4.7</span>
            <span className="text-[rgb(53,53,53)]/50 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map(({ text, initial, name, meta, avatarBg, filled, delay }) => (
            <div
              key={name}
              className="reveal bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="flex mb-3">
                <Stars filled={filled} size={16} />
              </div>
              <p className="text-[rgb(53,53,53)]/80 text-base leading-relaxed flex-1 mb-6">{text}</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {initial}
                </div>
                <div>
                  <div className="font-bold text-[rgb(53,53,53)] text-sm">{name}</div>
                  <div className="text-[rgb(53,53,53)]/50 text-xs">{meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center reveal">
          <a
            href="https://www.google.com/maps/place/Mega+Eventos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgb(234,50,56)] hover:text-[rgb(249,171,118)] font-semibold transition-colors"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
}
