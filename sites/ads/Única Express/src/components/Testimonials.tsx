import { Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Excelente empresa! Atendimento rápido e eficiente. Recomendo!',
    name: 'Elias Camargos',
    date: '15/10/2024',
  },
  {
    text: 'Profissionais competentes e pontuais. Sempre entregam no prazo combinado.',
    name: 'Marcio Ribeiro',
    date: '08/10/2024',
  },
  {
    text: 'Serviço de qualidade com preço justo. Já utilizei várias vezes e sempre super satisfeita!',
    name: 'Karina Montelo',
    date: '02/10/2024',
  },
  {
    text: 'Confiança e segurança nas entregas. Equipe muito atenciosa e profissional.',
    name: 'Daniel Sousa',
    date: '25/09/2024',
  },
  {
    text: 'A melhor empresa de entregas de Goiânia! Atendimento nota 10 e entregas sempre no prazo.',
    name: 'Hercilio de Castro Viana',
    date: '18/09/2024',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,38,100)] mb-4">Depoimentos</h2>
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">Excelente - Com base em 23 avaliações</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border-l-4 border-[rgb(38,129,196)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{t.text}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <p className="font-semibold text-[rgb(0,38,100)]">{t.name}</p>
                <p className="text-sm text-gray-500">{t.date}</p>
              </div>
              <div className="mt-3">
                <span className="text-xs text-gray-500 flex items-center space-x-1">
                  <span>via</span>
                  <span className="font-semibold text-[rgb(38,129,196)]">Google Trustindex</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
