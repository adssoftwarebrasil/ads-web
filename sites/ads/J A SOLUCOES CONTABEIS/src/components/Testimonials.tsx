import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Super recomendo, profissionais extremamente dedicados e responsáveis!',
    name: 'Anderson Arroxae',
    role: 'Cliente Soluções Contábeis',
  },
  {
    quote: 'São extremamente profissionais no que fazem',
    name: 'Alex Cirinex',
    role: 'Cliente Soluções Contábeis',
  },
  {
    quote: 'Melhor escritório de contabilidade que existe em MT!!',
    name: 'Bruna Santos',
    role: 'Cliente Soluções Contábeis',
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[rgb(245,134,52)]/10 rounded-full">
              <span className="text-[rgb(245,134,52)] font-semibold text-sm">
                DEPOIMENTOS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(47,55,56)] mb-6">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A confiança dos nossos clientes é o nosso maior patrimônio. Veja o
              que empresários da região falam sobre nosso trabalho.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 relative"
              >
                <div className="absolute -top-4 left-8">
                  <div className="bg-[rgb(245,134,52)] rounded-full p-3 shadow-lg">
                    <Quote size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex gap-1 mb-6 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[rgb(245,134,52)] fill-[rgb(245,134,52)]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[rgb(47,55,56)]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[rgb(245,134,52)] to-[rgb(225,114,32)] rounded-2xl p-10 text-center shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-white fill-white"
                  />
                ))}
              </div>
              <span className="text-white font-bold text-2xl">5.0</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Avaliação Máxima no Google
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Reconhecidos pela excelência em atendimento e resultados concretos
              para nossos clientes.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=SOLUÇÕES+CONTÁBEIS+E+ASSESSORIA+-+CONTABILIDADE+EM+RONDONÓPOLIS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[rgb(245,134,52)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Ver Mais Avaliações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
