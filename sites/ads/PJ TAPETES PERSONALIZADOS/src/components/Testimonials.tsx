import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Os tapetes da PJ transformaram minha casa! A qualidade é excepcional e o atendimento foi impecável. Altamente recomendados!"',
    name: 'Ana Silva',
  },
  {
    text: '"Fiquei impressionado com a qualidade dos materiais e o acabamento perfeito. A equipe é muito profissional e atenciosa."',
    name: 'João Pereira',
  },
  {
    text: '"Consegui o tapete dos meus sonhos! A personalização foi exatamente como eu imaginei. Muito obrigada pela dedicação!"',
    name: 'Marta Oliveira',
  },
  {
    text: '"Serviço excepcional do início ao fim. A entrega foi rápida e o resultado superou minhas expectativas. Super recomendo a PJ Tapetes!"',
    name: 'Ricardo Gomes',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-[rgb(248,249,250)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[rgb(183,40,26)] text-center mb-4">
          O Que Nossos Clientes Dizem
        </h2>
        <p className="text-xl text-[rgb(15,15,13)] opacity-70 text-center mb-16 max-w-2xl mx-auto">
          A satisfação de nossos clientes é nossa maior conquista
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <Quote
                  className="lucide lucide-quote text-[rgb(183,40,26)] opacity-20"
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-[rgb(15,15,13)] text-lg leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-[rgb(15,15,13)]">
                  {t.name}
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="lucide lucide-star text-yellow-400 fill-current"
                      width={18}
                      height={18}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
