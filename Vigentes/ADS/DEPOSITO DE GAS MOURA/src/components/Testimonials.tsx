import { Quote, Star } from 'lucide-react';

interface Review {
  initial: string;
  name: string;
  localGuide?: string;
  time: string;
  text: string;
}

const reviews: Review[] = [
  {
    initial: 'D',
    name: 'Diego Silva Macedo',
    time: '3 meses atrás',
    text: 'Nota 10 pro Depósito de gás moura pelo excelente atendimento pelas transparência dos atendimento com agente uma boa entrega agilidade nas entregas eu só tenho que agradecer pela a atenção e transparência que vxs passa nois clientes obrigado',
  },
  {
    initial: 'C',
    name: 'Canal Aleatórios',
    localGuide: 'Local Guide · 50 avaliações',
    time: '3 meses atrás',
    text: 'Melhor distribuidora de gás e água de 20 litros da região de Goiânia, preços excelentes, gás de qualidade que dura um tempão, a entrega é super rápida e entregadores e instaladores super educados, experientes e atenciosos.',
  },
  {
    initial: 'I',
    name: 'Igor Moreira da Silva',
    time: '5 meses atrás',
    text: 'Atendimento excelente! Entrega incrível! Eu não compro mais gás e água em outro lugar!',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-2 mb-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="lucide lucide-star fill-[rgb(228,29,32)] text-[rgb(228,29,32)]"
          width={16}
          height={16}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,59,126)] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-[rgb(228,29,32)] mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(162,173,190)] max-w-3xl mx-auto">
            Avaliações reais de clientes satisfeitos com nosso atendimento
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -left-4 bg-[rgb(228,29,32)] p-3 rounded-full shadow-lg">
                <Quote className="lucide lucide-quote text-white" width={24} height={24} />
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(228,29,32)] to-[rgb(28,59,126)] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {review.initial}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[rgb(28,59,126)] text-lg">{review.name}</h4>
                  {review.localGuide && (
                    <p className="text-xs text-[rgb(162,173,190)] mb-1">{review.localGuide}</p>
                  )}
                  <Stars />
                  <p className="text-xs text-[rgb(162,173,190)]">{review.time}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-[rgb(228,29,32)] mb-1">5.0</div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star fill-[rgb(228,29,32)] text-[rgb(228,29,32)]"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <p className="text-sm text-[rgb(162,173,190)]">Avaliação Google</p>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[rgb(28,59,126)] mb-1">100%</div>
              <p className="text-sm text-[rgb(162,173,190)]">
                Clientes
                <br />
                Satisfeitos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
