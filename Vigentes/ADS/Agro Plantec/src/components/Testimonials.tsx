import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"A AGROPG é sinônimo de confiança. Equipamentos robustos e atendimento de excelência."',
    initial: 'P',
    name: 'Pedro G.',
    role: 'Cliente Satisfeito',
    delay: 0,
  },
  {
    text: '"Desde que começamos a trabalhar com a AGROPG, nossa eficiência operacional melhorou significativamente."',
    initial: 'C',
    name: 'Carlos S.',
    role: 'Cliente Satisfeito',
    delay: 100,
  },
  {
    text: '"Impressionado com a qualidade das peças e o conhecimento técnico da equipe. A AGROPG realmente faz a diferença."',
    initial: 'R',
    name: 'Ricardo F.',
    role: 'Cliente Satisfeito',
    delay: 200,
  },
  {
    text: '"Equipamentos robustos. A nossa eficiência operacional melhorou significativamente."',
    initial: 'R',
    name: 'Roberto F.',
    role: 'Cliente Satisfeito',
    delay: 300,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(138,154,39)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(138,154,39)]/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[rgb(138,154,39)]/10 text-[rgb(138,154,39)] text-sm font-bold uppercase tracking-wider rounded-full">
              Depoimentos
            </span>
          </div>
          <h2 className="text-[rgb(29,29,27)] text-4xl lg:text-6xl font-bold mb-6">Nossos Clientes</h2>
          <p className="text-gray-600 text-xl lg:text-2xl max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nós
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white p-8 rounded-3xl shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 opacity-0 translate-y-10"
              style={{ transitionDelay: `${t.delay}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[rgb(138,154,39)] to-[rgb(118,134,29)] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-[rgb(138,154,39)]/10 rounded-xl">
                    <Quote className="lucide lucide-quote w-8 h-8 text-[rgb(138,154,39)]" />
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="lucide lucide-star w-4 h-4 fill-[rgb(138,154,39)] text-[rgb(138,154,39)]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 italic">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(138,154,39)] to-[rgb(118,134,29)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-[rgb(29,29,27)] text-base font-bold">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
