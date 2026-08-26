import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'O atendimento da EXP Madeiras foi excelente! Ficamos muito satisfeitos com a qualidade dos produtos e os prazos foram cumpridos rigorosamente. Recomendo de olhos fechados!',
    name: 'João Silva',
    delay: '0ms',
  },
  {
    text: 'Tivemos uma ótima experiência com a EXP Madeiras. A equipe é muito competente e atenta a todos os detalhes. O resultado final ficou simplesmente incrível.',
    name: 'Maria Oliveira',
    delay: '150ms',
  },
  {
    text: 'As guarnições e forros de madeira que recebemos realmente superaram nossas expectativas. A qualidade é inigualável e o acabamento é perfeito!',
    name: 'Carlos Mendes',
    delay: '300ms',
  },
  {
    text: 'Recomendo a EXP Madeiras para quem busca qualidade superior e um ótimo atendimento. Profissionais dedicados e produtos de altíssima qualidade.',
    name: 'Ana Paula',
    delay: '450ms',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#F1F1FF]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E200F] mb-4 transition-all duration-800 opacity-100 translate-y-0">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-[#2E200F] opacity-70 transition-all duration-800 delay-200 translate-y-0">
            A satisfação de nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-10 rounded-xl shadow-md relative transition-all duration-800 opacity-100 translate-y-0"
              style={{ borderLeft: '4px solid rgb(184, 134, 84)', transitionDelay: t.delay }}
            >
              <div
                className="absolute top-4 right-6 text-[#2E200F] opacity-10"
                style={{ fontSize: '4rem', lineHeight: 1 }}
              >
                "
              </div>
              <p className="text-[#2E200F] opacity-80 leading-relaxed mb-6 italic text-lg relative z-10">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-[#2E200F]">{t.name}</div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="lucide lucide-star "
                      width={18}
                      height={18}
                      fill="#B88654"
                      stroke="#B88654"
                      strokeWidth={2}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
