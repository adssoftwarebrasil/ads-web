import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Gostei bastante do serviço prestado. Muito satisfeito certamente farei serviço com essa empresa novamente',
    name: 'Karoline Marques',
    time: '3 meses atrás',
  },
  {
    text: 'Profissional excelente, fez o serviço bem feito, sou meia perfeccionista, e vê os detalhes do jeito que eu queria, fez toda a diferença pra escolher a melhor marmoraria de Goiânia',
    name: 'Katiane Sousa',
    time: '3 meses atrás',
  },
  {
    text: 'Serviço de qualidade, amei. Tudo perfeito. Maravilhoso desde o serviço até a qualidade do material',
    name: 'Bruna Carla Silva',
    time: '3 meses atrás',
  },
];

const avatars = [
  { letter: 'K', bg: 'bg-amber-600' },
  { letter: 'K', bg: 'bg-amber-700' },
  { letter: 'B', bg: 'bg-amber-800' },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider bg-amber-900/30 px-4 py-2 rounded-full">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            O Que Nossos <span className="text-amber-400">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-gray-300">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-10 h-10 text-amber-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
            <div className="flex -space-x-2">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-full ${a.bg} flex items-center justify-center border-2 border-gray-900 font-bold text-white`}
                >
                  {a.letter}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-2xl">100% Satisfação</p>
              <p className="text-gray-300">Avaliação de 5 estrelas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
