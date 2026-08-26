import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"A Marajó Diesel me salvaram várias vezes com suas peças de alta qualidade e atendimento sempre prestativo. Recomendo!"',
    initials: 'CS',
    name: 'Carlos Silva',
  },
  {
    text: '"Fui muito bem atendida e encontrei tudo que precisava para meu caminhão. A entrega foi super rápida!"',
    initials: 'AP',
    name: 'Ana Paula',
  },
  {
    text: '"Ótima experiência de compra! Profissionais atenciosos e peças em ótimo estado."',
    initials: 'JF',
    name: 'João Ferreira',
  },
  {
    text: '"A Marajó Diesel é meu fornecedor de confiança. Sempre encontro o que preciso e a equipe é show!"',
    initials: 'MS',
    name: 'Mariana Souza',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(1,51,153)] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-[rgb(84,84,84)] max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <Quote className="w-10 h-10 text-[rgb(255,116,16)] mb-4" />
              <p className="text-[rgb(84,84,84)] italic leading-relaxed mb-6 flex-grow">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(255,116,16)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{t.initials}</span>
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-[rgb(1,51,153)]">{t.name}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[rgb(255,116,16)] text-[rgb(255,116,16)]"
                      />
                    ))}
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
