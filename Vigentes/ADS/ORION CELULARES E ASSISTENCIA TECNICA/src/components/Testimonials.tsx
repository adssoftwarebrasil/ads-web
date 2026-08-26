import { Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  { text: 'Melhor atendimento da região! Consertaram meu Xiaomi no mesmo dia.', author: 'Carlos Silva' },
  { text: 'Preços justos e produtos originais. Virei cliente fiel!', author: 'Ana Paula' },
  { text: 'Assistência técnica salvou meu celular. Recomendo!', author: 'Roberto Mendes' },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[rgb(254,254,252)] bg-gradient-to-br from-[rgb(231,189,44)]/10 via-transparent to-[rgb(231,189,44)]/5 fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">O Que Dizem Nossos Clientes</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">Avaliações reais de quem confia na Órion Celulares</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[rgb(231,189,44)] stroke-[rgb(231,189,44)]" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">{t.text}</p>
              <p className="font-semibold text-sm text-gray-900">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
