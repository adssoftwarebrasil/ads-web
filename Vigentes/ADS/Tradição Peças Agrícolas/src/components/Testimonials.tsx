import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Ótimo atendimento e muito organizado.',
    name: 'Guilherme Martins',
    role: 'Produtor Rural',
    badge: '',
  },
  {
    text: 'Excelente empresa! Qualidade de atendimento e variedade de peças.',
    name: 'Carlos Artur',
    role: 'Empresário do Agronegócio',
    badge: 'Local Guide',
  },
  {
    text: 'Profissionais sérios e muito competentes.',
    name: 'Bruno Lauck Mariano',
    role: 'Agricultor',
    badge: 'Local Guide',
  },
];

const bottomStats = [
  { value: '5.0', label: 'Avaliação Google', stars: true, span: false },
  { value: '100%', label: 'Satisfação dos Clientes', stars: false, span: false },
  { value: '20+', label: 'Anos de Confiança', stars: false, span: true },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[rgb(221,183,120)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(173,132,84)] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[rgb(173,132,84)] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(1,52,47)] mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group hover:-translate-y-2"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[rgb(221,183,120)] to-[rgb(173,132,84)] rounded-2xl flex items-center justify-center opacity-90 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-8 h-8 text-[rgb(1,52,47)]" />
              </div>
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[rgb(221,183,120)] text-[rgb(221,183,120)]"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-[rgb(1,52,47)] text-lg">
                  {t.name}
                </div>
                <div className="text-sm text-gray-600 mt-1">{t.role}</div>
                {t.badge && (
                  <div className="inline-block mt-2 px-3 py-1 bg-[rgb(221,183,120)]/20 text-[rgb(173,132,84)] text-xs font-semibold rounded-full">
                    {t.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(1,52,47)] via-[rgb(1,52,47)]/95 to-[rgb(1,52,47)] rounded-3xl p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Faça Parte dos Nossos Clientes Satisfeitos
              </h3>
              <p className="text-xl text-gray-200 mb-8">
                Junte-se a centenas de produtores rurais e empresários que
                confiam na Tradição Peças Agrícolas para manter suas máquinas
                sempre em perfeito funcionamento.
              </p>
              <a
                href="https://wa.me/557736281005?text=Olá! Gostaria de conhecer mais sobre a Tradição Peças Agrícolas."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[rgb(221,183,120)] hover:bg-[rgb(173,132,84)] text-[rgb(1,52,47)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Entre em Contato
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {bottomStats.map((s) => (
                <div
                  key={s.label}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center${
                    s.span ? ' col-span-2' : ''
                  }`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-[rgb(221,183,120)] mb-2">
                    {s.value}
                  </div>
                  {s.stars ? (
                    <>
                      <div className="flex items-center justify-center mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[rgb(221,183,120)] text-[rgb(221,183,120)]"
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-200">{s.label}</div>
                    </>
                  ) : (
                    <div className="text-sm text-gray-200 mt-6">{s.label}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
