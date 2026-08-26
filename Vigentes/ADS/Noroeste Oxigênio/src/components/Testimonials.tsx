import { Quote, Star } from 'lucide-react';

const BG_PATTERN =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem00LTRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Atendimento excelente fui muito bem tratado super recomendo"',
    name: 'Marcos Marquim',
    role: 'Cliente Verificado',
  },
  {
    text: '"Os melhores preços e atendimento ótimo!"',
    name: 'Isabela Crispim',
    role: 'Cliente Verificado',
  },
  {
    text: '"Loja maravilhosa!!"',
    name: 'Adelaide Camporez',
    role: 'Cliente Verificado',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url('${BG_PATTERN}')` }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-blue-100">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer
            sobre nossos serviços.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 relative"
            >
              <Quote size={40} className="absolute top-6 right-6 text-blue-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10">{t.text}</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-2">
              <Star size={28} className="fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold text-white">5.0</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold">Avaliação Excelente</p>
              <p className="text-blue-100 text-sm">Baseada em avaliações reais de clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
