import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  timeAgo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Carla Patrícia Rodrigues Siqueira Fischer',
    text: 'Foi muito bom o atendimento, já é a segunda vez que comprei... E estes tambores meu esposo vai fazer uma balsa depois mando foto quando tiver pronto. Parabéns pelo atendimento... E ainda ganhei brindes',
    rating: 5,
    timeAgo: '3 meses atrás',
  },
  {
    name: 'Jaderson Junio Antunes',
    text: 'Excelente atendimento. Parabéns pela qualidade nos produtos.',
    rating: 5,
    timeAgo: '3 meses atrás',
  },
  {
    name: 'Eduardo Fernandes',
    text: 'A melhor do estado no segmento!',
    rating: 5,
    timeAgo: '3 meses atrás',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(78,128,196)]/10 rounded-full px-6 py-2 mb-6">
            <p className="text-[rgb(51,71,144)] font-semibold">Depoimentos</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(45,62,84)] mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista.
            Veja o que eles têm a dizer sobre nossos produtos e serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[rgb(78,128,196)] relative"
            >
              <div className="absolute top-6 right-6 text-[rgb(78,128,196)] opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[rgb(45,62,84)]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[rgb(51,71,144)] to-[rgb(78,128,196)] rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Junte-se aos Nossos Clientes Satisfeitos
          </h3>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Faça parte da nossa história de sucesso. Entre em contato agora e descubra
            por que somos a escolha número um no segmento.
          </p>
          <a
            href="https://wa.me/556392280772"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(51,71,144)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl"
          >
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  );
}
