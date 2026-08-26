import { Star, Quote } from 'lucide-react';

interface Review {
  text: string;
  name: string;
  meta: string;
  image: string;
}

const reviews: Review[] = [
  {
    text: '"São muito atenciosos, ótimo atendimento. Eu recomendo!"',
    name: 'Roni do Carmo',
    meta: '1 avaliação no Google',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    text: '"Recomendo, atendimento rápido, super atenciosos e resolveram o problema da melhor maneira possível. Muito satisfeito!"',
    name: 'Mateus Almeida',
    meta: '16 avaliaçãoões no Google',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    text: '"Atendimento excelente, são ótimos, prestativos e muita agilidade no processo! Show. Super recomendo."',
    name: 'Cristiane Martelo',
    meta: '4 avaliaçãoões no Google',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
];

function StarRow({ size }: { size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={size} height={size} fill="#FED600" className="lucide lucide-star text-brand-yellow" />
      ))}
    </>
  );
}

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-4 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">Avaliações reais</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            O que nossos clientes
            <br />
            <span className="text-brand-yellow">estão dizendo</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-14 transition-all duration-700 delay-100 opacity-100 translate-y-0">
          <div className="flex items-center gap-2 bg-brand-dark border border-brand-dark-border rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              <StarRow size={18} />
            </div>
            <span className="text-white font-bold text-lg ml-1">5.0</span>
            <span className="text-brand-gray text-sm">/ Avaliação média no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="relative bg-brand-dark border border-brand-dark-border rounded-2xl p-8 transition-all duration-700 hover:-translate-y-1 hover:border-brand-yellow/30 hover:shadow-xl hover:shadow-brand-yellow/5 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote width={32} height={32} className="lucide lucide-quote text-brand-yellow/20 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-5">
                <StarRow size={14} />
              </div>
              <p className="text-brand-gray-light leading-relaxed mb-6 text-sm">{review.text}</p>
              <div className="flex items-center gap-3 border-t border-brand-dark-border pt-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand-yellow/20"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-brand-gray text-xs">{review.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 transition-all duration-700 delay-400 opacity-100 translate-y-0">
          <p className="text-brand-gray text-sm">Todas as avaliações são de clientes reais do <strong className="text-white">Google Maps</strong></p>
        </div>
      </div>
    </section>
  );
}
