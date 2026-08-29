import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Clara',
      initials: 'MC',
      text: 'A experiência de compra foi incrível, e a qualidade do colchão mudou minha vida! Acordo sem dores e descansada.'
    },
    {
      name: 'João Pedro',
      initials: 'JP',
      text: 'Os produtos são de alta qualidade e o atendimento, excepcional. Realmente vale cada centavo investido.'
    },
    {
      name: 'Luciana Almeida',
      initials: 'LA',
      text: 'A equipe da LIH é muito atenciosa e dedicada. Recomendo para todos que buscam qualidade no sono!'
    },
    {
      name: 'Felipe Sousa',
      initials: 'FS',
      text: 'Estou impressionado com a minha nova cama! Melhor sono da minha vida! Obrigado LIH!'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            Depoimentos
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">
                    {testimonial.initials}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-gray-900 font-bold mb-1">
                    {testimonial.name}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="w-10 h-10 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-secondary leading-relaxed italic pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
