import { Star } from 'lucide-react';

interface Testimonial {
  initial: string;
  avatarBg: string;
  name: string;
  text: string;
  time: string;
  delay: string;
}

const testimonials: Testimonial[] = [
  {
    initial: 'M',
    avatarBg: 'bg-blue-500',
    name: 'Maria Silva',
    text: 'Atendimento rápido e pontual. Sempre que preciso, o gás chega em menos de 30 minutos!',
    time: 'Há 2 meses',
    delay: '0ms',
  },
  {
    initial: 'J',
    avatarBg: 'bg-green-500',
    name: 'João Oliveira',
    text: 'Preço justo e qualidade excelente. Já sou cliente há 3 anos e nunca tive problemas.',
    time: 'Há 1 mês',
    delay: '100ms',
  },
  {
    initial: 'A',
    avatarBg: 'bg-purple-500',
    name: 'Ana Costa',
    text: 'Melhor distribuidora da região! Atendimento nota 10 e sempre me lembram de pedir antes de acabar.',
    time: 'Há 3 semanas',
    delay: '200ms',
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-0 translate-y-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600">
            Avaliações reais de quem confia na Azarias Gás
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 opacity-0 translate-y-10"
              style={{ transitionDelay: t.delay }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${t.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="lucide lucide-star w-4 h-4 fill-[rgb(219,138,69)] text-[rgb(219,138,69)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{t.text}</p>
              <div className="text-sm text-gray-400">{t.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
