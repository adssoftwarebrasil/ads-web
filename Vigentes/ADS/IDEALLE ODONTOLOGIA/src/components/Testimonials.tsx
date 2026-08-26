import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Gabriel Spontoni',
    role: 'Paciente',
    rating: 5,
    text: 'A Dra. Suzyane é uma profissional incrível! Além de extremamente competente e atualizada, transmite muita segurança em cada consulta. Explica tudo com clareza, tem uma escuta atenta e realmente se preocupa com o bem-estar do paciente. O atendimento é humanizado do início ao fim, com empatia e dedicação que fazem toda a diferença. Saí da consulta confiante e muito satisfeito com o cuidado recebido. Sem dúvidas, uma das melhores profissionais que já conheci, recomendo de olhos fechados!',
    initials: 'GS',
  },
  {
    name: 'Natalia Figueiredo',
    role: 'Paciente',
    rating: 5,
    text: 'Atendimento excelente com profissionais capacitados. A clínica é extremamente limpa, organizada e os materiais e equipamentos utilizados são de muita qualidade. Recomendo demais!!!',
    initials: 'NF',
  },
  {
    name: 'Marcos Lima',
    role: 'Paciente',
    rating: 5,
    text: 'Excelente, desde o atendimento no balcão a consulta, você vê que são pessoas que se preocupam com seu bem estar e te fazem se sentir acolhido.',
    initials: 'ML',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? '#e8b87a' : 'none'}
          stroke={i < rating ? '#e8b87a' : '#d1c4b4'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.animate-on-scroll').forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(146,114,84) 0%, rgb(138,117,90) 50%, rgba(131,123,109,0.996) 100%)' }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-3">
            O que dizem nossos pacientes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            A satisfação de quem{' '}
            <span className="text-white/80 italic">já transformou</span> o sorriso
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} fill="#e8c97a" stroke="#e8c97a" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">5.0 no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`animate-on-scroll delay-${(i + 1) * 100} bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="mb-4">
                <Quote size={24} className="text-white/30" />
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="mt-0.5">
                    <StarRating rating={t.rating} />
                  </div>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/40" fill="currentColor">
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center animate-on-scroll">
          <a
            href="https://wa.me/556696621999?text=Olá!%20Li%20os%20depoimentos%20no%20site%20e%20quero%20agendar%20minha%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[rgb(146,114,84)] hover:bg-white/90 font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Quero ter meu próprio resultado
          </a>
        </div>
      </div>
    </section>
  );
}
