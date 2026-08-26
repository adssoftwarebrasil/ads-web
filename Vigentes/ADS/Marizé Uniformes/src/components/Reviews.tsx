import { Star, Quote } from 'lucide-react';

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="lucide lucide-star fill-amber-400 text-amber-400"
          width={14}
          height={14}
          strokeWidth={2}
        />
      ))}
    </div>
  );
}

const reviews = [
  {
    text: '"Um excelente lugar. Com clima sempre feliz. Com a Mazé sempre rindo e nos tratando com muita alegria e simplicidade."',
    initials: 'VM',
    name: 'Valdivan Marinho',
    meta: 'Local Guide · 26 avaliações',
    avatar: 'bg-gradient-to-br from-brand-blue to-brand-cyan',
  },
  {
    text: '"Malharia que trabalha com os mais variados tipos de fardamentos. Atendimento bastante agradável."',
    initials: 'WJ',
    name: 'Wlpvjr',
    meta: 'Local Guide · 37 avaliações',
    avatar: 'bg-gradient-to-br from-brand-cyan to-blue-400',
  },
  {
    text: '"Ótimo atendimento. Costura de excelência!!! Super recomendo."',
    initials: 'AV',
    name: 'Analu Vale',
    meta: 'Local Guide · 94 avaliações',
    avatar: 'bg-gradient-to-br from-blue-600 to-brand-blue',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 text-brand-blue border border-brand-blue/20 bg-brand-blue/5">
            Avaliações Google
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            O Que Nossos Clientes
            <br />
            <span className="text-gradient">Falam da Gente</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-gray-900">4.7</span>
              <Stars />
              <span className="text-sm text-gray-500 mt-1">Avaliação no Google</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-blue/8 hover:-translate-y-1 transition-all duration-400 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="absolute top-5 right-5 text-gray-100">
                <Quote className="lucide lucide-quote" width={40} height={40} strokeWidth={2} />
              </div>
              <Stars />
              <p className="text-gray-700 leading-relaxed mt-4 mb-6 text-sm relative z-10">{review.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${review.avatar} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 transition-all duration-700 delay-400 opacity-100 translate-y-0">
          <a
            href="https://www.google.com/search?q=Marizé+Uniformes+São+Luís"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm border border-brand-blue/20 px-6 py-3 rounded-full hover:bg-brand-blue/5 transition-colors"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
