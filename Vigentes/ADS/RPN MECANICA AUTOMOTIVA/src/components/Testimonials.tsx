import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Danilo Almeida',
    role: 'Cliente desde 2021',
    rating: 5,
    text: 'Recomendo a oficina, sou cliente desde 2021 e todas as vezes que precisei ir para serviços e orçamentos, fui muito bem atendido pela gerência e equipe. Todos os reparos ficaram de excelência. Levei ontem para revisão do meu novo carro e ficou excelente, sempre cumprindo com o prazo estabelecido.',
    avatar: 'DA',
  },
  {
    name: 'Kleber Fonseca Campos',
    role: 'Cliente há mais de 5 anos • Guia Local',
    rating: 5,
    text: 'Sou cliente da empresa a mais de 5 anos. Empresa de respeito, equipe nota 1000, serviços padrão internacional, atendimento padrão FIFA. Gerente super atencioso. Super recomendo para todos.',
    avatar: 'KF',
  },
  {
    name: 'Arinardo Marcelo',
    role: 'Cliente via Localiza',
    rating: 5,
    text: 'Atendimento excelente, equipe bem-humorada e acolhedora, profissionais sérios e competentes. Conheci através da Localiza e me tornei cliente individual por conta da qualidade dos serviços mecânicos e de lanternagem. Nota 1000.',
    avatar: 'AM',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.classList.add('observe-animate');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="avaliacoes" className="section-padding bg-rpn-light/40 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 observe-animate">
          <span className="section-tag">Avaliações reais</span>
          <h2 className="section-title mb-4">
            O que nossos clientes<br />dizem sobre nós
          </h2>
          <p className="section-subtitle">
            Avaliações 100% reais do Google. A satisfação dos nossos clientes é nosso maior prêmio.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-rpn-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-rpn-red flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-rpn-muted text-xs">{testimonial.role}</div>
                  </div>
                </div>
                <Quote size={28} className="text-rpn-light flex-shrink-0" />
              </div>

              <StarRating rating={testimonial.rating} />

              <p className="text-rpn-gray text-sm leading-relaxed mt-4 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="mt-4 pt-4 border-t border-rpn-light flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-rpn-muted">Avaliação no Google</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-rpn-light shadow-sm text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-5xl font-black text-gray-900">5.0</span>
            <div>
              <div className="flex gap-1 justify-start">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-rpn-gray text-sm text-left">no Google Reviews</div>
            </div>
          </div>
          <p className="text-rpn-gray text-sm mb-5">Mais de 50 avaliações positivas de clientes reais</p>
          <a
            href="http://wa.me/559182696336?text=Olá!%20Vi%20as%20avaliações%20e%20gostaria%20de%20agendar%20um%20serviço."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar agora
          </a>
        </div>
      </div>
    </section>
  );
}
