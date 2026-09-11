import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  meta: string;
}

const testimonials: Testimonial[] = [
  {
    quote: '"Pessoal muito atencioso e ótimo atendimento recomendo"',
    name: 'Girolando de Minas',
    meta: 'Cliente Verificado · 126 avaliações',
  },
  {
    quote: '"Atendimento nota 10!!!"',
    name: 'Wesley Divino',
    meta: 'Cliente Verificado · 14 avaliações',
  },
  {
    quote: '"Excelente atendimento!"',
    name: 'Kellen Karlen',
    meta: 'Cliente Verificado · 8 avaliações',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(66,66,66)] mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote
                className="lucide lucide-quote absolute top-6 right-6 text-[rgb(240,186,25)] opacity-20"
                width={48}
                height={48}
              />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star text-[rgb(240,186,25)] fill-current"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10">{t.quote}</p>
              <div className="border-t pt-4">
                <p className="font-bold text-[rgb(66,66,66)] text-lg">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.meta}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Romaqui+Empilhadeiras/@-18.9009115,-48.240781,17z/data=!4m8!3m7!1s0x94a445eb73fb849f:0x39c89e5a7d84177f!8m2!3d-18.9009115!4d-48.2382061!9m1!1b1!16s%2Fg%2F11b6dqvb_3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgb(240,186,25)] hover:text-[rgb(220,166,5)] font-semibold text-lg transition-colors"
          >
            Ver mais avaliações no Google
            <Star className="lucide lucide-star fill-current" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
