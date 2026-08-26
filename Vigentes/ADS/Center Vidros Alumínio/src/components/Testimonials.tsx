import { Star, Quote } from 'lucide-react';
import { GoogleIcon } from './icons';
import { useInView } from '../hooks/useInView';

interface Review {
  initial: string;
  name: string;
  meta: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    initial: 'E',
    name: 'Emanuel Santos',
    meta: 'Guia Local · 10 avaliações · 5 fotos',
    text: 'Muito bom, há várias variações de vidros diferentes, você quer lá tem! Atendimento excelente e produtos de ótima qualidade. Recomendo a todos!',
  },
  {
    initial: 'C',
    name: 'Chico Gomes',
    meta: 'Cliente verificado',
    text: 'Qualidade muito boa. Muito lindo o meu portão. Fiquei muito satisfeito com o resultado final. Profissionais pontuais e cuidadosos na instalação.',
  },
  {
    initial: 'P',
    name: 'Contatos Plano BR',
    meta: 'Cliente verificado',
    text: 'Ótimo atendimento desde o primeiro contato. Equipe prestativa, orçamento transparente e entrega no prazo. Com certeza voltarei a contratar.',
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} width={16} height={16} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export default function Testimonials() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-blue text-sm font-bold tracking-widest uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-5">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior reconhecimento. Veja o que eles têm a dizer
            sobre nosso trabalho.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-700 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{review.meta}</p>
                  </div>
                </div>
                <Quote width={24} height={24} className="text-brand-blue/20 flex-shrink-0" />
              </div>
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed mt-4">{review.text}</p>
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-2">
                <GoogleIcon className="w-4 h-4 fill-[#4285F4]" />
                <span className="text-xs text-gray-400 font-medium">Google Reviews</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`mt-16 text-center transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-sm">
            <div className="flex -space-x-2">
              {['E', 'C', 'P', 'M'].map((l) => (
                <div
                  key={l}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={16} height={16} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-brand-dark font-bold ml-1">5.0</span>
              </div>
              <p className="text-gray-500 text-sm mt-0.5">Avaliado no Google pelos nossos clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
