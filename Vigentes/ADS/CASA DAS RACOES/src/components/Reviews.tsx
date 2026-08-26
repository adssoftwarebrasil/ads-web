import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: 'Jhulyanna Rodrigues',
    badge: 'Guia Local · 35 avaliações',
    rating: 5,
    text: 'Muito bom o lugar, preços ótimos e super humanos, cuidam até dos cães de rua, todos gordinhos pq comem lá.',
    date: '2 semanas atrás',
    avatar: 'JR',
    avatarColor: 'bg-pink-500',
  },
  {
    id: 2,
    author: 'Jardel Araújo',
    badge: 'Guia Local · 4 avaliações',
    rating: 5,
    text: 'Ótimos produtos e de um bom atendimento.',
    date: '2 meses atrás',
    avatar: 'JA',
    avatarColor: 'bg-blue-500',
  },
  {
    id: 3,
    author: 'Tamires Aragão',
    badge: 'Guia Local · 5 avaliações',
    rating: 5,
    text: 'Bom preço e muitas opções pro seu pet.',
    date: '1 mês atrás',
    avatar: 'TA',
    avatarColor: 'bg-teal-500',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-700 font-bold text-lg">5.0</span>
            <span className="text-gray-400 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-green-50 transition-colors duration-200 relative"
            >
              <Quote size={28} className="text-green-200 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full ${review.avatarColor} text-white font-bold flex items-center justify-center text-sm shrink-0`}>
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                  <p className="text-gray-400 text-xs">{review.badge}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">"{review.text}"</p>
              <p className="text-gray-400 text-xs">{review.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 text-center border border-green-100">
          <p className="text-2xl font-extrabold text-gray-900 mb-2">
            Você também pode ser nosso próximo cliente feliz!
          </p>
          <p className="text-gray-500 mb-0">
            Venha nos visitar ou fale conosco pelo WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
