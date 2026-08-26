import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Ótimo atendimento e bom serviço! Fiquei muito satisfeito com o resultado. Equipe profissional e comprometida com a qualidade.',
    initials: 'EF',
    name: 'Elivelton Ferreira',
    avatarBg: 'bg-tropical-blue',
  },
  {
    text: 'Um ótimo atendimento. Serviço muito bem feito. Estão de Parabéns. Recomendo para todos que precisam de toldos e coberturas!',
    initials: 'ED',
    name: 'Edileuza Diniz',
    avatarBg: 'bg-tropical-navy',
  },
  {
    text: 'A melhor da cidade, não tem melhor! Serviço impecável, preço justo e entrega dentro do prazo. Com certeza recomendo.',
    initials: 'AP',
    name: 'André Pereira',
    avatarBg: 'bg-tropical-green',
  },
];

const patternBg =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-tropical-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: patternBg }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-tropical-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="lucide lucide-star text-yellow-400 fill-yellow-400"
                width={22}
                height={22}
              />
            ))}
            <span className="ml-2 text-blue-200 font-semibold text-sm">5.0 no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all duration-300 group"
            >
              <Quote className="lucide lucide-quote text-tropical-blue mb-4 opacity-80" width={36} height={36} />
              <p className="text-blue-100 leading-relaxed text-base mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="lucide lucide-star text-yellow-400 fill-yellow-400"
                        width={14}
                        height={14}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <p className="text-blue-200 text-base mb-6">
            Junte-se a centenas de clientes satisfeitos em toda a região!
          </p>
          <a
            href="http://wa.me/556684533788?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-tropical-blue hover:bg-white hover:text-tropical-navy text-white font-bold px-10 py-4 rounded-full text-base shadow-lg transition-all duration-300"
          >
            Quero ser o próximo cliente satisfeito!
          </a>
        </div>
      </div>
    </section>
  );
}
