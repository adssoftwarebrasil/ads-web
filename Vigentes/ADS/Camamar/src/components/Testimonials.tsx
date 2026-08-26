import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  city: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Atendimento excelente e produtos de altíssima qualidade. Já é o terceiro projeto que faço com materiais da Camamar, sempre dentro do prazo."',
    name: 'Carlos Almeida',
    city: 'Goiânia - GO',
  },
  {
    text: '"Equipe muito atenciosa, indicaram exatamente o que eu precisava para a cobertura da minha varanda. Recomendo demais!"',
    name: 'Mariana Souza',
    city: 'Aparecida de Goiânia - GO',
  },
  {
    text: '"Melhor custo-benefício da região. Sempre encontro tudo que preciso e a entrega é super rápida."',
    name: 'Roberto Lima',
    city: 'Anápolis - GO',
  },
  {
    text: '"Profissionais que entendem do assunto e fazem questão de orientar bem o cliente. Loja de confiança."',
    name: 'Juliana Pereira',
    city: 'Goiânia - GO',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Depoimentos</p>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-foreground leading-none">
            O que dizem <span className="text-primary">nossos clientes</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        <div className="reveal relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full flex-shrink-0 px-2">
                <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center relative">
                  <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" width={24} height={24} strokeWidth={2} />
                  <p className="text-foreground text-lg md:text-xl leading-relaxed italic mb-8 max-w-3xl mx-auto">
                    {t.text}
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="w-5 h-5 fill-camamar-yellow text-camamar-yellow"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                    ))}
                  </div>
                  <p className="font-display font-bold text-xl uppercase text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Depoimento ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
