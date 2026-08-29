import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: '"Eu sempre confiei na HOME FILTER para cuidar da água da minha família. O purificador é ótimo e o atendimento é excepcional."',
    initial: 'C',
    name: 'Carlos M. Silva',
    role: 'Uso Residencial',
  },
  {
    text: '"A qualidade da água melhorou muito com o purificador que adquiri. Atendimento rápido e eficiente, recomendo!"',
    initial: 'M',
    name: 'Maria J. Oliveira',
    role: 'Cliente Soft Everest',
  },
  {
    text: '"Os bebedouros são incríveis! Meus funcionários adoram e a saúde de todos melhorou perceptivelmente no dia a dia."',
    initial: 'F',
    name: 'Felipe R. Santos',
    role: 'Empresário',
  },
  {
    text: '"Comprei um purificador e não me arrependo. Água pura e saborosa sempre à disposição. Valeu cada centavo."',
    initial: 'A',
    name: 'Ana P. Costa',
    role: 'Uso Residencial',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Prova Social</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3 mb-6">
            Quem Confia, <span className="text-blue-600">Recomenda</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="lucide lucide-star text-yellow-400 fill-yellow-400"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p className="text-slate-600 font-medium">4.9/5 baseada em mais de 1.500 atendimentos</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col justify-between"
            >
              <Quote
                className="lucide lucide-quote absolute top-6 right-8 text-slate-100 group-hover:text-blue-50 transition-colors"
                width={48}
                height={48}
              />
              <div className="relative z-10">
                <div className="flex mb-6 gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="lucide lucide-star text-yellow-400 fill-yellow-400"
                      width={14}
                      height={14}
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">{t.text}</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
                  {t.initial}
                </div>
                <div>
                  <p className="text-slate-900 font-bold leading-none mb-1">{t.name}</p>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-tighter opacity-70">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
