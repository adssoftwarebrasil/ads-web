import { Star, Quote } from 'lucide-react';
import { GoogleMapPinIcon } from './icons';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  meta: string;
  featured: boolean;
}

const testimonials: Testimonial[] = [
  {
    text:
      '"Excelente preço e atendimento. Muito satisfeito com a qualidade dos produtos e a simpatia de toda a equipe. Recomendo sem hesitar!"',
    initial: 'V',
    name: 'Valdeir Aparecido Novais Lima',
    meta: 'Guia Local · 45 avaliações',
    featured: true,
  },
  {
    text:
      '"Contratei o serviço de pintura da minha residência e fiquei impressionado com o resultado. Mão de obra impecável, prazo cumprido e preço justo. Com certeza voltarei!"',
    initial: 'M',
    name: 'Marcos Henrique Souza',
    meta: 'Cliente verificado',
    featured: false,
  },
  {
    text:
      '"Melhor loja de tintas de Sinop! Atendimento personalizado, grande variedade de produtos e os profissionais de aplicação são realmente especializados. Nota 10!"',
    initial: 'A',
    name: 'Ana Paula Ferreira',
    meta: 'Cliente verificado',
    featured: false,
  },
];

function Stars({ size }: { size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="lucide lucide-star fill-current"
          width={size}
          height={size}
          style={{ color: 'rgb(217, 164, 0)' }}
        />
      ))}
    </>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(253, 253, 253)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 text-brand-dark"
            style={{ backgroundColor: 'rgb(164, 209, 58)' }}
          >
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'rgb(2, 2, 2)' }}>
            O que nossos <span style={{ color: 'rgb(164, 209, 58)' }}>clientes</span> dizem
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              <Stars size={24} />
            </div>
            <span className="text-4xl font-black" style={{ color: 'rgb(2, 2, 2)' }}>
              5.0
            </span>
            <div>
              <p className="text-sm font-medium" style={{ color: 'rgb(63, 63, 63)' }}>
                Avaliação média
              </p>
              <p className="text-xs" style={{ color: 'rgb(150, 150, 150)' }}>
                no Google
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-700 hover:-translate-y-1 hover:shadow-xl opacity-100 translate-y-0 ${
                t.featured
                  ? 'border-2 shadow-lg'
                  : 'border border-gray-100 bg-white shadow-sm'
              }`}
              style={
                t.featured
                  ? {
                      borderColor: 'rgb(164, 209, 58)',
                      backgroundColor: 'rgb(253, 253, 253)',
                      boxShadow: 'rgba(164, 209, 58, 0.15) 0px 8px 32px',
                      transition: 'opacity 0.6s, transform 0.6s, box-shadow 0.3s',
                    }
                  : { transition: 'opacity 0.6s, transform 0.6s, box-shadow 0.3s' }
              }
            >
              {t.featured && (
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold text-brand-dark"
                  style={{ backgroundColor: 'rgb(164, 209, 58)' }}
                >
                  Avaliação em destaque
                </div>
              )}
              <div className="mb-5">
                <Quote
                  className="lucide lucide-quote"
                  width={28}
                  height={28}
                  style={{ color: 'rgb(164, 209, 58)', opacity: 0.5 }}
                />
              </div>
              <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: 'rgb(63, 63, 63)' }}>
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: 'rgb(164, 209, 58)', color: 'rgb(2, 2, 2)' }}
                >
                  {t.initial}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: 'rgb(2, 2, 2)' }}>
                    {t.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgb(150, 150, 150)' }}>
                    {t.meta}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  <Stars size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/ATUAL+TINTAS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:underline"
            style={{ color: 'rgb(63, 63, 63)' }}
          >
            <GoogleMapPinIcon className="w-5 h-5" />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
