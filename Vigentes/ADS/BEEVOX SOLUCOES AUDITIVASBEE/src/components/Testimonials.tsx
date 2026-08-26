import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Thaís Inaê',
      text: 'Excelente atendimento e trabalho! Pessoas amorosas e competentes.',
      rating: 5,
    },
    {
      name: 'Jaqueline Mourão Silva Ourives',
      text: 'Fui atendida com carinho e atenção pela equipe, além de receber informações e orientações muito esclarecedoras sobre o procedimento e forma de uso do Tampão. Fiquei muito satisfeita com o resultado e por isso recomendo!! Grata!',
      rating: 5,
    },
    {
      name: 'Patricia Souza',
      text: 'Atendimento de excelência! Atendimento humanizado, profissionais capacitados.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos <span className="text-[rgb(246,182,31)]">Clientes Dizem</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação de nossos pacientes é nossa maior conquista. Veja o que eles têm a dizer
            sobre a experiência na BEEVOX.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative"
            >
              <div className="absolute top-6 right-6 text-[rgb(246,182,31)]/10">
                <Quote className="w-16 h-16" />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[rgb(246,182,31)] text-[rgb(246,182,31)]"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[rgb(246,182,31)] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Cliente BEEVOX</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/beevox%2Fimg%2Fpessoas-reunidas-felizes-texto-post.webp"
                alt="Clientes felizes e satisfeitos com os serviços"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Faça Parte da Nossa História de{' '}
                <span className="text-[rgb(246,182,31)]">Sucesso</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Centenas de pacientes já transformaram suas vidas com nossas soluções auditivas.
                Venha você também experimentar o atendimento que faz a diferença.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://wa.me/5565999818250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-semibold hover:bg-[rgb(226,162,11)] transition-all shadow-lg hover:shadow-xl"
                >
                  Agende Sua Consulta
                </a>
                <a
                  href="tel:6536248823"
                  className="inline-flex items-center justify-center border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all"
                >
                  (65) 3624-8823
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
