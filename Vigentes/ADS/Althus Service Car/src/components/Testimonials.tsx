import { Star, Quote } from 'lucide-react';
import GoogleIcon from './GoogleIcon';

interface Testimonial {
  initials: string;
  name: string;
  meta: string;
  text: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'RC',
    name: 'Raphael Cardoso',
    meta: 'Local Guide · 37 avaliações',
    text: 'Excelente atendimento, preço e qualidade. Não tem comparação, equipe altamente capacitada e empenhada em resolver o problema do nosso carro. Parabéns a toda a equipe Althus Service pelo atendimento e cuidado.',
    avatarColor: 'bg-blue-600',
  },
  {
    initials: 'CG',
    name: 'Celso Gonçalves',
    meta: 'Local Guide · 189 avaliações',
    text: 'Oficina mecânica de fácil acesso, bem montada com toda estrutura incrível, excelente atendimento desde a chegada. Profissionais qualificados com vasta experiência. Honestidade em todos os serviços. Eu recomendo — 100% em todos os requisitos!',
    avatarColor: 'bg-green-600',
  },
  {
    initials: 'LB',
    name: 'Lucas Di Domenico Bertola',
    meta: '11 avaliações',
    text: 'Serviço bem feito, profissionais honestos que não empurram serviços desnecessários. Uma das poucas oficinas que eu tenho de confiança em Ribeirão Preto.',
    avatarColor: 'bg-orange-600',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 scrolled-hidden">
          <span className="text-[rgb(240,26,40)] text-sm font-bold uppercase tracking-widest mb-3 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            O Que Nossos Clientes <span className="text-[rgb(240,26,40)]">Dizem</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-3 bg-[#111] border border-white/10 rounded-2xl px-6 py-3">
              <div className="text-4xl font-black text-white">4.9</div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="lucide lucide-star text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-white/45 text-xs">Avaliação média no Google</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-16 bg-[rgb(240,26,40)] rounded-full"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col relative overflow-hidden hover:border-[rgb(240,26,40)]/25 transition-all duration-500 hover:shadow-xl hover:shadow-black/50 scrolled-hidden"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="absolute top-4 right-4 text-[rgb(240,26,40)]/20">
                <Quote size={40} className="lucide lucide-quote" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.meta}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="lucide lucide-star text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed flex-1 relative z-10">{t.text}</p>
              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/5">
                <GoogleIcon size={14} />
                <span className="text-white/40 text-xs">Avaliação no Google</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Althus+Service+Car"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors duration-200 border border-white/10 hover:border-white/20 px-6 py-2.5 rounded-full"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
