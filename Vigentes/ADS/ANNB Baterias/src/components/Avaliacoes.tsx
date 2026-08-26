import { Star, Quote } from 'lucide-react';

interface Review {
  text: string;
  name: string;
  role: string;
}

const reviews: Review[] = [
  {
    text: '"Foi atendida pelo Sr Cleiton, e quero externar minha gratidão, eficiente e o atendimento impecável, super indico esse profissional e a empresa. Obrigada! Que continue com esse atendimento impecável."',
    name: 'Cleice Cristiane de Souza',
    role: 'Atendimento nota 10',
  },
  {
    text: '"Excelente atendimento! O profissional Cleiton é extremamente solicito, resolveu o problema rapidamente e com maestria! Vou indicar o serviço para todos."',
    name: 'Sara Gabriela',
    role: 'Guia Local',
  },
  {
    text: '"Excelente profissional! Socorro rápido, comunicação fácil, honestidade (só troca algo se realmente precisar trocar), seriedade. Recomendo muito!"',
    name: 'Lauro Bogniotti',
    role: 'Avaliador Verificado',
  },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-20 bg-brand-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/caroba/annb%20baterias/img/baterias-heliar-real-zetta-moura-exposicao_900x1600.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 transition-all duration-700 opacity-0 translate-y-8">
          <span className="inline-block text-brand-muted font-bold text-sm uppercase tracking-widest mb-3">
            Avaliações do Google
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            O que nossos clientes falam
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  width={22}
                  height={22}
                  className="lucide lucide-star text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-white text-2xl font-black">4.9</span>
            <span className="text-gray-400 text-sm">/ 5.0 no Google</span>
          </div>
          <p className="text-gray-400">Nota baseada em avaliações reais de clientes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 flex flex-col gap-4 hover:bg-white/10 hover:border-brand-muted/30 transition-all duration-300
                opacity-0 translate-y-8"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote
                width={28}
                height={28}
                className="lucide lucide-quote text-brand-green opacity-60"
              />
              <p className="text-gray-300 text-sm leading-relaxed flex-1">{r.text}</p>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <span className="text-brand-muted text-xs">{r.role}</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      width={14}
                      height={14}
                      className="lucide lucide-star text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center transition-all duration-700 delay-500 opacity-0 translate-y-8">
          <a
            href="https://www.google.com/maps/place/ANNB+BATERIAS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
