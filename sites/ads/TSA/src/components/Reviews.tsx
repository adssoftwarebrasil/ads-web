import { Quote, Star } from 'lucide-react';

interface Review {
  initial: string;
  name: string;
  time: string;
  text: string;
}

const reviews: Review[] = [
  {
    initial: 'E',
    name: 'Enio Eliazar de Sousa',
    time: '3 meses atrás',
    text: '"TSA com uma prestação de serviços excelentes na área de direção hidráulica e turbinas. Ótimos profissionais, atendimento 100%. Você não sai sem fechar uma negociação e com serviços de qualidade. Parabéns para toda equipe."',
  },
  {
    initial: 'C',
    name: 'Carlos Henrique Rocha',
    time: '3 meses atrás',
    text: '"Lugar de confiança para manutenção de caminhão e caminhonete. Direção e turbina só faço na TSA — qualidade e honestidade."',
  },
  {
    initial: 'W',
    name: 'Welicia Guilherme',
    time: 'um mês atrás',
    text: '"TSA excelente em atendimento, serviços entregues com qualidade. Um atendimento exemplar do técnico André Neves juntamente com a equipe. Parabéns, vocês são tops!"',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[rgb(163,24,23)]/10 rounded-full mb-4">
            <p className="text-[rgb(163,24,23)] font-semibold text-sm">AVALIAÇÕES</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(4,26,58)] mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confiança conquistada através da qualidade e excelência no atendimento.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
            >
              <div className="absolute top-6 right-6 text-[rgb(163,24,23)]/20 group-hover:text-[rgb(163,24,23)]/30 transition-colors">
                <Quote width={48} height={48} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgb(163,24,23)] to-[rgb(143,20,20)] rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {review.initial}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[rgb(4,26,58)] text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.time}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={20}
                    height={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed relative z-10">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(4,26,58)] to-[rgb(4,26,58)]/90 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Faça Parte dos Nossos Clientes Satisfeitos
            </h3>
            <p className="text-gray-200 text-lg mb-8">
              Qualidade, confiança e excelência em cada serviço realizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <Star
                  width={24}
                  height={24}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="text-white font-bold text-xl">5.0</span>
                <span className="text-gray-200">Avaliação Média</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <span className="text-[rgb(163,24,23)] font-bold text-2xl">100%</span>
                <span className="text-gray-200">de Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
