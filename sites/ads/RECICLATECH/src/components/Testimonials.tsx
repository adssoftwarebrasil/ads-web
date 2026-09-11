import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    quote: '"Ótima experiência, profissionais divididos e atenciosos."',
    name: 'Fernando Almeida',
    initial: 'F',
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;
  const current = testimonials[active];

  const prev = () => setActive((a) => (a - 1 + count) % count);
  const next = () => setActive((a) => (a + 1) % count);

  return (
    <section
      id="depoimentos"
      className="py-16 lg:py-20 bg-gradient-to-b from-[rgb(248,249,250)] to-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(53,64,66)] mb-4">Nossos clientes</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-2xl transition-all duration-500">
            <Quote className="lucide lucide-quote absolute top-6 left-6 w-16 h-16 text-[rgba(26,157,39,0.2)]" />
            <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
              <div className="flex justify-center mb-4">
                {Array.from({ length: current.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star w-6 h-6 text-[rgb(26,157,39)] fill-current"
                  />
                ))}
              </div>
              <p className="text-lg lg:text-2xl text-[rgb(53,64,66)] italic leading-relaxed mb-6 text-center">
                {current.quote}
              </p>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(26,157,39)] to-[rgb(18,132,27)] text-white text-xl font-bold mb-3">
                  {current.initial}
                </div>
                <p className="text-lg font-semibold text-[rgb(18,132,27)]">{current.name}</p>
              </div>
            </div>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white border-2 border-[rgb(26,157,39)] text-[rgb(26,157,39)] rounded-full hover:bg-[rgb(26,157,39)] hover:text-white transition-all duration-300 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="lucide lucide-chevron-left w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white border-2 border-[rgb(26,157,39)] text-[rgb(26,157,39)] rounded-full hover:bg-[rgb(26,157,39)] hover:text-white transition-all duration-300 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="lucide lucide-chevron-right w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-[rgb(26,157,39)] w-8'
                    : 'bg-[rgba(26,157,39,0.3)] hover:bg-[rgba(26,157,39,0.5)]'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5541999600458"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(26,157,39)] text-white px-8 py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-[rgb(18,132,27)] hover:scale-105 transition-all duration-300 shadow-md"
          >
            <MessageCircle className="lucide lucide-message-circle w-5 h-5 mr-2" />
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
