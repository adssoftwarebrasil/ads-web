import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Priscila Sousa',
    role: '7 avaliações · 3 fotos',
    rating: 5,
    text: 'Excelente atendimento, e qualidade nos serviços prestados. Recomendo demais!',
    avatar: 'PS',
  },
  {
    name: 'Vidimar Siliprandi',
    role: 'Guia local · 60 avaliações · 29 fotos',
    rating: 5,
    text: 'Bom serviço e rápido. Atendimento ágil, fui bem atendido e o serviço foi entregue no prazo.',
    avatar: 'VS',
  },
  {
    name: 'TOYO BENZ',
    role: 'Guia local · 31 avaliações',
    rating: 5,
    text: 'Excelente lugar. Profissionais capacitados e serviço de qualidade. Com certeza voltaria.',
    avatar: 'TB',
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? 'rgb(234, 34, 37)' : 'none'}
          style={{ color: i < count ? 'rgb(234, 34, 37)' : 'rgb(102, 97, 96)' }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="avaliacoes"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'rgb(22, 17, 21)' }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(98,11,12,0.35) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: 'rgba(234,34,37,0.12)',
              color: 'rgb(234, 34, 37)',
              border: '1px solid rgba(234,34,37,0.25)',
            }}
          >
            Avaliações Google
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black mb-4"
            style={{ color: '#fff' }}
          >
            O Que Dizem Nossos{' '}
            <span style={{ color: 'rgb(234, 34, 37)' }}>Clientes</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < 4 ? 'rgb(234, 34, 37)' : 'none'}
                  style={{ color: i < 5 ? 'rgb(234, 34, 37)' : 'rgb(102,97,96)' }}
                />
              ))}
            </div>
            <span className="text-lg font-black" style={{ color: '#fff' }}>
              4.5
            </span>
            <span className="text-sm" style={{ color: 'rgb(153, 151, 150)' }}>
              Avaliação no Google
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <Quote
                size={32}
                className="absolute top-5 right-5 opacity-10"
                style={{ color: 'rgb(234, 34, 37)' }}
              />

              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgb(98,11,12), rgb(73,20,15))',
                    color: 'rgb(237, 219, 223)',
                  }}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#fff' }}>
                    {review.name}
                  </p>
                  <p className="text-xs" style={{ color: 'rgb(102, 97, 96)' }}>
                    {review.role}
                  </p>
                </div>
              </div>

              <StarRow count={review.rating} />

              <p className="text-sm leading-relaxed" style={{ color: 'rgb(210, 210, 208)' }}>
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
