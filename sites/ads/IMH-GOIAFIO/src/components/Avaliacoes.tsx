import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Melhor empresa de máquinas de medir fio. Ótimo atendimento."',
    name: 'Lene Lopes',
    role: 'Local Guide',
  },
  {
    text: '"Ótimo atendimento, muito rápido gostei muito."',
    name: 'EMIVAL GUIMARAES',
    role: 'Cliente',
  },
  {
    text: '"Excelente atendimento, resolvem rápido o problema."',
    name: 'Marcos Paulo Da Silva Rodrigues',
    role: 'Cliente',
  },
];

export default function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="py-20 sm:py-28 bg-gradient-to-br from-[rgb(2,45,103)] via-blue-900 to-[rgb(2,45,103)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            O Que Nossos Clientes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Dizem Sobre Nós
            </span>
          </h2>
          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <Quote size={40} className="text-blue-200 mb-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white text-lg leading-relaxed mb-6 italic">{t.text}</p>
              <div className="border-t border-white/20 pt-6">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-blue-200 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <Star size={32} className="text-yellow-400 fill-yellow-400" />
                <p className="text-4xl font-bold text-white">5.0</p>
              </div>
              <p className="text-blue-200">Avaliação Média</p>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">30+</p>
              <p className="text-blue-200">Anos de Confiança</p>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-blue-200">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
