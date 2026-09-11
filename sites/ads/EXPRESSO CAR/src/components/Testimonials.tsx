import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  hasMore?: boolean;
  initials: string;
  avatarBg: string;
  name: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Serviço de qualidade eu recomendo',
    initials: 'DS',
    avatarBg: 'bg-red-600',
    name: 'Diego S',
    date: '18/07/2025',
  },
  {
    text: 'Excelente atendimento, serviço impecável, preço honesto e cumpriram rigorosamente o prazo.',
    initials: 'DA',
    avatarBg: 'bg-gray-800',
    name: 'Daniel Assis',
    date: '16/07/2025',
  },
  {
    text: 'Do atendimento inicial à entrega, mostraram-se educados, atenciosos e extremamente técnicos. Cobrando um valor justo, a empresa me entregou, dentro do prazo com...',
    hasMore: true,
    initials: 'LL',
    avatarBg: 'bg-red-700',
    name: 'Luis Leal',
    date: '02/06/2025',
  },
  {
    text: 'Muito bem atendido e serviço muito bem feito. Recomendo!!!',
    initials: 'FG',
    avatarBg: 'bg-gray-700',
    name: 'Fábio Gentil',
    date: '24/05/2025',
  },
  {
    text: 'Cheguei com um amassado na tampa da mala do meu carro elétrico e a oficina resolveu muito bem. Acompanhei o serviço por foto e vídeo que foram me enviando. Reco...',
    hasMore: true,
    initials: 'EJ',
    avatarBg: 'bg-red-800',
    name: 'Emilly Jeane',
    date: '20/05/2025',
  },
  {
    text: 'Serviço de ótima qualidade, nota 10. Entrega dentro do prometido e com todo acompanhamento ao cliente.',
    initials: 'DB',
    avatarBg: 'bg-red-600',
    name: 'Danilo Borba',
    date: '13/05/2025',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-red-600 text-sm font-bold tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Nossos clientes
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Veja o que dizem as pessoas que confiaram na Expresso Car.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <Quote className="lucide lucide-quote text-red-100 mb-3" width={28} height={28} />
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                {t.text}
                {t.hasMore && (
                  <button className="ml-1 text-red-600 font-semibold text-xs hover:underline">
                    Ver mais
                  </button>
                )}
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="lucide lucide-star fill-yellow-400 text-yellow-400"
                        width={14}
                        height={14}
                      />
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-xs text-gray-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
            Ver todos os 9 depoimentos
          </button>
        </div>
      </div>
    </section>
  );
}
