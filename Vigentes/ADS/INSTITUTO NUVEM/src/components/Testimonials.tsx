import { Star, Quote } from 'lucide-react';
import { GoogleIcon } from './icons';

const testimonials = [
  {
    initials: 'BX',
    avatar: 'bg-primary/10 text-primary',
    name: 'Bruna Xavier',
    role: 'Mãe de paciente',
    quote:
      '"Em todas as sessões é possível observar a humanização, dedicação e acolhimento dos profissionais, deixando tudo mais leve e agradável. Meu muito obrigada a toda equipe do Instituto Nuvem."',
  },
  {
    initials: 'AB',
    avatar: 'bg-secondary/15 text-secondary',
    name: 'Amanda Bougleux',
    role: 'Guia Local · 20 avaliações',
    quote:
      '"Se você busca inclusão, afeto, acolhimento, escuta ativa e os profissionais mais atenciosos da região, pode vir para cá. Fora que o espaço é uma lindeza, parece casa de boneca!"',
  },
  {
    initials: 'SC',
    avatar: 'bg-cream-dark/60 text-primary',
    name: 'Suellem Camargo',
    role: 'Mãe de paciente',
    quote:
      '"Profissionais excelentes, atenciosos. Ambiente aconchegante. Meu filho quando chega não quer mais ir embora!"',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-observe text-center max-w-3xl mx-auto mb-16">
          <span className="tag mb-5 inline-block">Depoimentos</span>
          <h2 className="section-title mb-5">
            O Que as Famílias<br />
            <span className="text-primary">Dizem Sobre Nós</span>
          </h2>
          <p className="section-subtitle">
            A confiança das famílias é nossa maior conquista. Veja o que dizem quem vivencia o Instituto Nuvem de perto.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-heading font-bold text-gray-800 text-lg">5.0</span>
            <span className="text-gray-400 text-sm">no Google</span>
          </div>
        </div>
        <div className="stagger-observe grid md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${t.avatar} rounded-full flex items-center justify-center font-heading font-bold text-base shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-gray-800 text-sm">{t.name}</p>
                    <p className="font-sans text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
                <Quote size={20} className="text-cream-dark shrink-0 mt-1" />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-sans text-gray-600 text-sm leading-relaxed mt-4 flex-grow">{t.quote}</p>
              <div className="mt-5 pt-4 border-t border-gray-50 flex items-center gap-2">
                <div className="w-5 h-5">
                  <GoogleIcon className="w-full h-full" />
                </div>
                <span className="font-sans text-xs text-gray-400">Avaliação do Google</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 section-observe text-center">
          <p className="font-sans text-gray-500 text-sm mb-4">Confira todas as avaliações no Google</p>
          <a
            href="https://www.google.com/maps/place/Instituto+Nuvem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 bg-white hover:bg-surface text-gray-700 font-heading font-semibold text-sm px-6 py-3 rounded-full transition-colors hover:shadow-sm"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
