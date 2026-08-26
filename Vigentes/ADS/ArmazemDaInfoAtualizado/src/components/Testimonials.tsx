import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Andréa Carolina Bettes',
      review: 'Atendimento excelente e cordial. Trabalho impecável. Rapidez e agilidade em tudo. Sempre que preciso, utilizo produtos e soluções da loja. Super recomendo!',
      rating: 5,
      date: '4 meses atrás',
    },
    {
      name: 'Jan Henrique Uszkurat',
      review: 'Excelentes profissionais, sempre dispostos a atender com atenção seus clientes. Fidelizaram um cliente! Parabéns a todos envolvidos!',
      rating: 5,
      date: '4 meses atrás',
    },
    {
      name: 'Paulo Alves',
      review: 'Muito bom! Rápido e eficiente! Sempre me orientaram e realizaram o trabalho com excelência. Recomendo!',
      rating: 5,
      date: '4 meses atrás',
    },
  ];

  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[rgb(46,47,147)]/10 text-[rgb(46,47,147)] px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Nossos Clientes{' '}
            <span className="text-[rgb(46,47,147)]">Dizem</span>
          </h2>
          <p className="text-lg text-gray-600">
            Satisfação e confiança conquistadas ao longo de mais de 20 anos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[rgb(0,168,89)] rounded-full flex items-center justify-center shadow-lg">
                <Quote size={24} className="text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[rgb(0,168,89)] text-[rgb(0,168,89)]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.review}"</p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[rgb(0,168,89)] to-[rgb(46,47,147)] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="fill-white text-white" />
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Avaliação 5 Estrelas no Google
          </h3>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Centenas de clientes satisfeitos confiam na nossa expertise. Seja o próximo a experimentar a excelência!
          </p>
          <a
            href="http://wa.me/554191217176"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(46,47,147)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg font-semibold text-lg"
          >
            Solicite uma Consultoria
          </a>
        </div>
      </div>
    </section>
  );
}
