import { Quote, Star } from 'lucide-react';

interface Testimonial {
  initials: string;
  name: string;
  role?: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'GT',
    name: 'Guilherme Tassinari',
    text: '"Maravilhoso. Atendimento muito bom!"',
  },
  {
    initials: 'MG',
    name: 'Marcio Gomes',
    text: '"Excelente atendimento e um piso laminado top👍"',
  },
  {
    initials: 'LP',
    name: 'Luiz Parra',
    role: 'Local Guide',
    text: '"Preço bom e bom atendimento"',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-[rgb(254,238,171)] text-[rgb(66,66,152)] px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            Avaliações
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            O Que Nossos Clientes<span className="block text-[rgb(66,66,152)]">Dizem Sobre Nós</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Satisfação garantida em cada projeto. Veja o feedback de quem já confiou na Comercial Magon.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative"
            >
              <Quote size={48} className="lucide lucide-quote absolute top-6 right-6 text-[rgb(252,205,59)] opacity-20" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(66,66,152)] to-[rgb(113,147,204)] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
                  {t.role && (
                    <span className="text-sm text-[rgb(113,147,204)] font-semibold">{t.role}</span>
                  )}
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="lucide lucide-star fill-[rgb(252,205,59)] text-[rgb(252,205,59)]"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(66,66,152)] to-[rgb(113,147,204)] rounded-3xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={32}
                  className="lucide lucide-star fill-[rgb(252,205,59)] text-[rgb(252,205,59)]"
                />
              ))}
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold">Avaliação 5 Estrelas no Google</h3>
            <p className="text-xl text-gray-100">
              Junte-se aos nossos clientes satisfeitos e transforme seu ambiente com qualidade e excelência.
            </p>
            <a
              href="https://wa.me/5516991541924"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(252,205,59)] text-[rgb(66,66,152)] px-10 py-4 rounded-full text-lg font-bold hover:bg-[rgb(254,238,171)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 mt-4"
            >
              Solicitar Meu Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
