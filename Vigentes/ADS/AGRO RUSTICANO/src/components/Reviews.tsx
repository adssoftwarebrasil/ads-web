import { Star, Quote } from 'lucide-react';

interface Review {
  text: string;
  name: string;
  meta?: string;
}

const reviews: Review[] = [
  { text: '"Ótimo atendimento e preço justo"', name: 'Kiwamen Shamyra' },
  { text: '"Ótimo atendimento, bom preço"', name: 'Guilherme Gamer Plays 3' },
  {
    text: '"Excelente atendimento das proprietárias, ótima variedades de produtos"',
    name: 'Claudinei Souza',
    meta: 'Local Guide · 26 avaliações',
  },
];

const stats = [
  { value: '100%', label: 'Satisfação Garantida' },
  { value: '5.0', label: 'Avaliação Google' },
  { value: '1000+', label: 'Clientes Atendidos' },
  { value: '5+', label: 'Anos no Mercado' },
];

function StarRow({ size }: { size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className="fill-[rgb(186,213,51)] text-[rgb(186,213,51)]"
        />
      ))}
    </>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <StarRow size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(54,59,27)] mb-4">
            O Que Dizem Nossos <span className="text-[rgb(186,213,51)]">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Avaliação média de 5.0 estrelas no Google
          </p>
          <div className="inline-flex items-center space-x-3 bg-[rgb(186,213,51)]/10 px-6 py-3 rounded-full">
            <span className="text-5xl font-bold text-[rgb(186,213,51)]">5.0</span>
            <div className="text-left">
              <div className="flex space-x-1">
                <StarRow size={16} />
              </div>
              <p className="text-sm text-gray-600">Baseado em avaliações reais</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              <Quote width={48} height={48} className="absolute top-6 right-6 text-[rgb(186,213,51)]/20" />
              <div className="relative z-10">
                <div className="flex space-x-1 mb-4">
                  <StarRow size={20} />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">{r.text}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[rgb(54,59,27)] text-lg">{r.name}</p>
                  {r.meta && <p className="text-sm text-gray-500 mt-1">{r.meta}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(54,59,27)] to-[rgb(74,79,37)] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Faça Parte da Nossa História!</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Junte-se aos nossos clientes satisfeitos e descubra por que somos a escolha número 1 em
                Jacareí para produtos agropecuários e pet.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20"
                >
                  <p className="text-4xl font-bold text-[rgb(186,213,51)] mb-2">{s.value}</p>
                  <p className="text-white text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
