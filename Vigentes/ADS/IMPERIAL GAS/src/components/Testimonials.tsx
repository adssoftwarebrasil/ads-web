import { Star, Quote } from 'lucide-react';
import { GoogleIcon } from './icons';
import { useReveal } from '../hooks/useReveal';

interface Testimonial {
  initials: string;
  name: string;
  reviews: string;
  avatarClass: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'NP',
    name: 'Niliane Pamela',
    reviews: '3 avaliações',
    avatarClass: 'bg-rose-500',
    text: '"Maravilha, muito atenciosos e prestativos. E um detalhe: quem mora em apto eles sobem e levam até lá pra você. Excelente atendimento!"',
  },
  {
    initials: 'NS',
    name: 'Nandinho Sousa',
    reviews: '3 avaliações',
    avatarClass: 'bg-sky-500',
    text: '"Ótimo atendimento e rápido nas entregas, gostei muito! Recomendo sem hesitar para quem está precisando."',
  },
  {
    initials: 'HC',
    name: 'Hellen Costa',
    reviews: '4 avaliações',
    avatarClass: 'bg-emerald-500',
    text: '"Ótimo atendimento, entrega rápida e entregador muito educado. Nota máxima! Vou continuar comprando aqui."',
  },
];

export default function Testimonials() {
  const header = useReveal();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            O que nossos <span className="text-orange-500">clientes dizem</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            Mais de dois décadas de confiança — veja o que quem compra fala sobre
            nós.
          </p>
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-md border border-gray-100">
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 leading-none">
                4.9
              </div>
              <div className="text-gray-400 text-xs mt-1">de 5.0</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    fill="#facc15"
                    className="w-4 h-4 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-gray-500 text-xs mt-1">Avaliação no Google</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-orange-500">★</div>
              <div className="text-gray-400 text-xs mt-0.5">Excelente</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { ref, inView } = useReveal();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl p-7 border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 ${testimonial.avatarClass} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
          >
            {testimonial.initials}
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm">
              {testimonial.name}
            </div>
            <div className="text-gray-400 text-xs">{testimonial.reviews}</div>
          </div>
        </div>
        <Quote
          fill="#ffedd5"
          className="w-8 h-8 text-orange-100 flex-shrink-0"
        />
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} fill="#facc15" className="w-4 h-4 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mt-4">
        {testimonial.text}
      </p>
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
        <GoogleIcon className="w-4 h-4" />
        <span className="text-gray-400 text-xs">
          Avaliação verificada no Google
        </span>
      </div>
    </div>
  );
}
