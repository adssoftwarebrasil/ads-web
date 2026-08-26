import { Star, Quote } from 'lucide-react';

interface Review {
  initials: string;
  name: string;
  time: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    initials: 'ZM',
    name: 'Zé Maria Barros',
    time: '2 semanas atrás',
    text: 'Loja especializada em peças de Lataria, um ótimo atendimento, tem tudo que você precisa!',
  },
  {
    initials: 'AC',
    name: 'Ana Clarice Coutinho',
    time: 'Um mês atrás',
    text: 'Uma ótima loja, e ótimos produtos! Super recomendo para quem busca qualidade e bom atendimento.',
  },
  {
    initials: 'CM',
    name: 'Carlos Mendonça',
    time: '3 meses atrás',
    text: 'Encontrei tudo que precisava para o meu carro. Equipe muito atenciosa e os preços são ótimos. Voltarei com certeza!',
  },
];

function StarRow({ size }: { size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          fill="#FFC107"
          color="#FFC107"
          className="lucide lucide-star"
        />
      ))}
    </>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(252, 255, 252)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(31, 66, 131, 0.08)', color: 'rgb(31, 66, 131)' }}
          >
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'rgb(31, 66, 131)' }}>
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex">
              <StarRow size={24} />
            </div>
            <span className="text-2xl font-extrabold" style={{ color: 'rgb(31, 66, 131)' }}>
              5.0
            </span>
            <span className="text-gray-500 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote
                width={32}
                height={32}
                className="lucide lucide-quote absolute top-5 right-5 opacity-10"
                style={{ color: 'rgb(31, 66, 131)' }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: 'rgb(31, 66, 131)' }}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.time}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                <StarRow size={16} />
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 transition-all duration-700 delay-400 opacity-100 translate-y-0">
          <a
            href="https://www.google.com/maps/place/CASA+DAS+LATARIAS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
            style={{ color: 'rgb(31, 66, 131)' }}
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
