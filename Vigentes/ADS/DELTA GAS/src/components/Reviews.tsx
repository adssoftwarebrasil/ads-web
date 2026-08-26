import { Quote } from 'lucide-react';
import { StarSolid, GoogleIcon, WhatsAppIcon } from '../icons';

interface Review {
  initials: string;
  avatarGradient: string;
  name: string;
  meta: string;
  text: string;
  delay: number;
}

const reviews: Review[] = [
  {
    initials: 'SS',
    avatarGradient: 'from-brand-secondary to-brand-dark',
    name: 'Sam Siqueira',
    meta: 'Local Guide · 53 avaliações',
    text: '"Entrega rápida e atendimento cordial. Recomendo! Uma empresa séria que cumpre o que promete. Ficou bem abaixo do tempo esperado na entrega."',
    delay: 0,
  },
  {
    initials: 'AL',
    avatarGradient: 'from-brand-light to-brand-secondary',
    name: 'Andre Luiz Machado',
    meta: 'Cliente verificado',
    text: '"Ótimo atendimento... Entrega super rápida... virei cliente com certeza! Muito profissional, já indiquei para minha família toda. Nota 10!"',
    delay: 120,
  },
  {
    initials: 'AM',
    avatarGradient: 'from-brand-mid to-brand-secondary',
    name: 'Ana Maria Martins',
    meta: 'Cliente verificada',
    text: '"Excelente atendimento, rapidez nas entregas. Muito bom, super recomendo. Perfeito para quem precisa de gás rápido e sem complicação."',
    delay: 240,
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-brand-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14 section-observe">
          <p className="section-subtitle">O que dizem nossos clientes</p>
          <h2 className="section-title mb-4">
            Avaliações reais de quem
            <br />
            <span className="text-brand-secondary">confia na Delta Gás</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarSolid key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-brand-dark font-bold text-lg">5.0</span>
            <span className="text-gray-500 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="section-observe bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${review.delay}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.avatarGradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm leading-tight">
                      {review.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{review.meta}</p>
                  </div>
                </div>
                <Quote size={20} className="text-brand-light/40 flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarSolid key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">{review.text}</p>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
                <GoogleIcon className="w-4 h-4" />
                <span className="text-gray-400 text-xs">Avaliação no Google</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center section-observe">
          <a
            href="https://wa.me/556699814075?text=Ol%C3%A1%21%20Quero%20fazer%20meu%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon size={18} />
            Faça seu pedido agora
          </a>
        </div>
      </div>
    </section>
  );
}
