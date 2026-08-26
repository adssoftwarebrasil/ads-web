import { Quote, Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote:
      '"Uma experiência incrível! O rodízio tem carnes deliciosas e as saladas são frescas."',
    initial: 'J',
    name: 'João Silva',
    role: 'Cliente',
  },
  {
    quote:
      '"Adoro este lugar! Atendimento sempre cordial e um ambiente acolhedor para a família."',
    initial: 'M',
    name: 'Maria Oliveira',
    role: 'Cliente',
  },
  {
    quote:
      '"O melhor rodízio que já experimentei! As carnes são macias e bem temperadas."',
    initial: 'R',
    name: 'Ricardo Pereira',
    role: 'Cliente',
  },
  {
    quote:
      '"Ambiente perfeito para celebrar momentos especiais, sempre saio satisfeita!"',
    initial: 'A',
    name: 'Ana Clara',
    role: 'Cliente',
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[rgb(31,29,30)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos Clientes
          </h2>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[rgb(41,39,40)] p-8 rounded-2xl hover:bg-[rgb(51,49,50)] transition-all duration-300 hover:scale-105 border-l-4 border-[rgb(180,137,27)]"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote
                  width={32}
                  height={32}
                  className="lucide lucide-quote text-[rgb(180,137,27)]"
                />
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      width={18}
                      height={18}
                      className="lucide lucide-star fill-[rgb(180,137,27)] text-[rgb(180,137,27)]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-white text-lg leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[rgb(180,137,27)] bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-[rgb(180,137,27)] font-bold text-lg">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
