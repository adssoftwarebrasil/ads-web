import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    text: "O atendimento e excepcional! Comprei cestas para doar e fui tratada com muito carinho. Os produtos sao de otima qualidade.",
    author: "Maria Silva",
    location: "Goiania, GO",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    text: "Compramos mensalmente para nossa empresa. A Fort das Cestas e nossa parceira de confianca ha 3 anos. Entrega sempre no prazo!",
    author: "Joao Santos",
    location: "Aparecida de Goiania, GO",
    rating: 5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    text: "Diferente de tudo que ja vi. As cestas basicas sao completas e com produtos de verdadeira qualidade. Vale cada centavo!",
    author: "Ana Paula",
    location: "Goiania, GO",
    rating: 5,
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    text: "Atendimento humanizado e produtos excelentes. E isso que diferencia a Fort das Cestas. Super recomendo!",
    author: "Carlos Eduardo",
    location: "Trindade, GO",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${index + 1} bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="w-11 h-11 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.author}</div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
