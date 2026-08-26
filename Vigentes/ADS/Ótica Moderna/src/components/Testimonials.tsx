import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Aqui encontrei os melhores preços e uma variedade incrível de lentes! O atendimento técnico é o diferencial."',
    initials: 'JP',
    name: 'João Pereira',
    role: 'Cliente',
  },
  {
    text: '"Adorei a experiência! Profissionais competentes e atenciosos. Minha transição para multifocal foi super tranquila."',
    initials: 'AC',
    name: 'Ana Costa',
    role: 'Cliente Satisfeita',
  },
  {
    text: '"Serviço de conserto impecável! Meu óculos de estimação ficou como novo em tempo recorde."',
    initials: 'CM',
    name: 'Carlos Mendes',
    role: 'Cliente',
  },
  {
    text: '"Eles sempre ajudam a encontrar a armação que combina com meu rosto. Não troco a Ótica Moderna por nada!"',
    initials: 'MS',
    name: 'Maria Silva',
    role: 'Cliente',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
              Social Proof
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              A confiança de quem <br />
              <span className="text-red-600">enxerga a diferença.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between border border-transparent hover:border-red-100"
            >
              <div>
                <Quote className="lucide lucide-quote w-10 h-10 text-red-500/10 mb-4 group-hover:text-red-500/20 transition-colors" width={24} height={24} />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" width={24} height={24} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base italic mb-8">{t.text}</p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-red-600/20">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-[10px] text-red-600 uppercase tracking-widest font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
