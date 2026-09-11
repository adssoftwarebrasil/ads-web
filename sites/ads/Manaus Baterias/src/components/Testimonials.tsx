import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Roberto Santos',
      text: 'Profissionais altamente capacitados e produtos de qualidade. Muito satisfeito!',
      rating: 5,
    },
    {
      name: 'Juliana Costa',
      text: 'Recomendo a Manaus Baterias, sempre me atenderam com dedicação e rapidez.',
      rating: 5,
    },
    {
      name: 'Marcelo Ribeiro',
      text: 'Serviços de manutenção de radiadores impecáveis, voltarei sempre!',
      rating: 5,
    },
    {
      name: 'Ana Paula',
      text: 'Atendimento excelente! Recebi minha bateria rapidamente e o serviço foi impecável.',
      rating: 5,
    },
  ];

  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-[#F3F4F6] overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-16">
          <div className="text-[#FF6B00] font-bold tracking-wide uppercase text-sm mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
            O Que Nossos Clientes Dizem
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-slide-infinite">
          {allTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-[350px] mx-4">
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-6xl text-[#FF6B00] mb-4">"</div>
                <p className="text-[#334155] text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FCD34D] fill-current" />
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className="font-bold text-[#1E3A8A]">{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <img
          src="https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-5-estrelas-google.png"
          alt="5 Estrelas Google"
          className="inline-block w-48 mb-2"
        />
        <p className="text-[#1E3A8A] font-semibold">Avaliação 5.0 no Google</p>
      </div>
    </section>
  );
}
