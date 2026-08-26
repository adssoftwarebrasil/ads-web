import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Excelente atendimento, serviço de qualidade recomendo!',
    initial: 'F',
    name: 'Fábio Fagundes',
    time: 'Há 1 mês',
  },
  {
    text: 'Excelente atendimento, produtos de qualidade e ótima solução pros serviços, recomendo!',
    initial: 'J',
    name: 'Junnior Souza',
    time: 'Há 3 meses',
  },
  {
    text: 'Super recomendo! Melhor preço, atendimento e serviço de qualidade 👏🏽',
    initial: 'A',
    name: 'Alline Da Silva Santos',
    time: 'Há 4 meses',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(242,150,1)]/10 text-[rgb(242,150,1)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(25,47,79)] mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-[rgb(25,47,79)]/70 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[rgb(253,253,253)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[rgb(242,150,1)] rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-[rgb(25,47,79)]" />
              </div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[rgb(242,150,1)] fill-[rgb(242,150,1)]" />
                ))}
              </div>
              <p className="text-[rgb(25,47,79)]/80 mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-[rgb(25,47,79)]/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(242,150,1)] to-[rgb(242,150,1)]/70 rounded-full flex items-center justify-center">
                  <span className="text-[rgb(25,47,79)] font-bold text-lg">{t.initial}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[rgb(25,47,79)]">{t.name}</h4>
                  <p className="text-sm text-[rgb(25,47,79)]/60">{t.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(242,150,1)] to-[rgb(242,150,1)]/90 rounded-2xl p-8 sm:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 text-[rgb(25,47,79)] fill-[rgb(25,47,79)]" />
            ))}
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-[rgb(25,47,79)] mb-4">
            Avaliação 5.0 no Google
          </h3>
          <p className="text-[rgb(25,47,79)]/80 mb-6 text-lg">
            Mais de 1500 clientes satisfeitos com nossos serviços
          </p>
          <a
            href="https://www.google.com/maps/place/Coruja+Aluguel+de+Carretinha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(25,47,79)] text-[rgb(253,253,253)] px-8 py-4 rounded-full font-bold hover:bg-[rgb(25,47,79)]/90 transition-all duration-300 hover:scale-105"
          >
            Ver Todas as Avaliações
          </a>
        </div>
      </div>
    </section>
  );
}
