import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Comprei meu carro seminovo e estou muito satisfeita. Eles realmente oferecem garantias e o serviço é de qualidade.',
    name: 'Maria Oliveira',
  },
  {
    quote:
      'Vendi meu carro rapidamente e a avaliação foi justa. Recomendo a Grife do Carro a todos os meus amigos.',
    name: 'Lucas Andrade',
  },
  {
    quote:
      'O atendimento foi incrível! Agora estou rodando com o carro dos meus sonhos. Muito obrigada!',
    name: 'Fernanda Lima',
  },
  {
    quote:
      'A experiência com a Grife do Carro foi excelente. O atendimento foi diferenciado e encontrei o veículo ideal com facilidade.',
    name: 'João Silva',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">
            DEPOIMENTOS
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase leading-tight text-white">
            O que nossos <span className="text-gold">clientes dizem</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-ink-card p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-xs text-white/50">
                  Cliente Grife do Carro
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
