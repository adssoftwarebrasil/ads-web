import { Star, CheckCircle2, Quote, MapPin } from 'lucide-react';

interface Review {
  initials: string;
  name: string;
  localGuide: boolean;
  reviews: string;
  photos: string | null;
  quote: string;
  time: string;
}

const reviews: Review[] = [
  { initials: 'GA', name: 'Gabriela Almeida', localGuide: true, reviews: '46 avaliações', photos: '13 fotos', quote: '"Melhor lugar em Goiânia para comprar peças Bosch para caminhão e fazer reparos em linha pesada. Atendimento impecável."', time: '2 meses atrás' },
  { initials: 'RC', name: 'Rafael Catein', localGuide: true, reviews: '15 avaliações', photos: '1 fotos', quote: '"Ótimo atendimento, peças de qualidade, recomendo com certeza! Resolveram meu problema rápido."', time: '5 meses atrás' },
  { initials: 'CO', name: 'Carlos Oficial', localGuide: true, reviews: '127 avaliações', photos: '7 fotos', quote: '"Lugar com bom atendimento e tbm com excelente profissionalismo. Equipe técnica muito capacitada."', time: '2 anos atrás' },
  { initials: 'FM', name: 'Fellipe Miranda', localGuide: false, reviews: '3 avaliações', photos: '3 fotos', quote: '"Ótimo atendimento, recepção, pessoal super educado. Parabéns a toda a equipe da Hidrau Turbo!"', time: '2 anos atrás' },
  { initials: 'CC', name: 'Claudio Costa', localGuide: true, reviews: '22 avaliações', photos: null, quote: '"Funcionários bem eficientes e prestativos. Preço justo e peças originais de verdade."', time: 'um ano atrás' },
  { initials: 'JM', name: 'Josias Mendes', localGuide: true, reviews: '19 avaliações', photos: '1 fotos', quote: '"Top equipe nota 10. Serviço de primeira qualidade em direções hidráulicas."', time: '3 anos atrás' },
];

const RatingStars = () => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        fill="#FBBF24"
        strokeWidth={0}
        className="lucide lucide-star text-yellow-400"
      />
    ))}
  </div>
);

const HeaderStars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={20}
        fill="#FBBF24"
        strokeWidth={0}
        className="lucide lucide-star text-yellow-400 border-none"
      />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28 px-4 sm:px-6 w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-md bg-yellow-50 text-yellow-700 text-sm font-bold uppercase tracking-wider mb-4 border border-yellow-100">
            Prova Social
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 leading-tight mb-6">
            O que dizem sobre nós
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-gray-900">5.0</span>
              <div className="flex flex-col items-start">
                <HeaderStars />
                <span className="text-xs text-gray-500 font-medium mt-1">
                  Baseado em avaliações do Google
                </span>
              </div>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-gray-300 mx-2"></div>
            <p className="text-gray-600 text-sm max-w-xs">
              Excelência comprovada por quem entende de direção e turbinas.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <div
              key={r.initials}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <Quote
                size={40}
                className="lucide lucide-quote absolute top-6 right-6 text-gray-100 group-hover:text-blue-50 transition-colors duration-300"
              />
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-blue-700 flex items-center justify-center text-white text-base font-bold shadow-md">
                    {r.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px]">
                    <CheckCircle2 size={14} className="lucide lucide-check-circle2 text-green-500 fill-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 leading-tight">{r.name}</div>
                  {r.localGuide && (
                    <div className="flex items-center gap-1 mt-1">
                      <Star
                        size={12}
                        fill="currentColor"
                        className="lucide lucide-star text-orange-500"
                      />
                      <span className="text-xs font-medium text-gray-500">Local Guide</span>
                    </div>
                  )}
                  <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                    <span>{r.reviews}</span>
                    {r.photos && (
                      <>
                        <span>•</span>
                        <span>{r.photos}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <RatingStars />
              <p className="text-[15px] text-gray-600 leading-relaxed mb-6 flex-grow">{r.quote}</p>
              <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-medium text-gray-400">
                <span className="flex items-center gap-1">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google"
                    className="w-3 h-3 opacity-60"
                  />
                  Google Review
                </span>
                <span>•</span>
                <span>{r.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://share.google/qivPEzKYAaRxSfU9S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-blue font-bold hover:text-blue-700 transition-colors border-b-2 border-primary-blue/20 hover:border-primary-blue pb-1"
          >
            <MapPin size={18} className="lucide lucide-map-pin " />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
