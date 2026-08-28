import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const depoimentos = [
  {
    nome: "Carlos Almeida",
    cidade: "Goiânia - GO",
    texto: "Atendimento excelente e produtos de altíssima qualidade. Já é o terceiro projeto que faço com materiais da Camamar, sempre dentro do prazo.",
  },
  {
    nome: "Mariana Souza",
    cidade: "Aparecida de Goiânia - GO",
    texto: "Equipe muito atenciosa, indicaram exatamente o que eu precisava para a cobertura da minha varanda. Recomendo demais!",
  },
  {
    nome: "Roberto Lima",
    cidade: "Anápolis - GO",
    texto: "Melhor custo-benefício da região. Sempre encontro tudo que preciso e a entrega é super rápida.",
  },
  {
    nome: "Juliana Pereira",
    cidade: "Goiânia - GO",
    texto: "Profissionais que entendem do assunto e fazem questão de orientar bem o cliente. Loja de confiança.",
  },
];

const DepoimentosSection = () => {
  useScrollReveal();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % depoimentos.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Depoimentos</p>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-foreground leading-none">
            O que dizem <span className="text-primary">nossos clientes</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="reveal relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {depoimentos.map((d) => (
              <div key={d.nome} className="w-full flex-shrink-0 px-2">
                <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center relative">
                  <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                  <p className="text-foreground text-lg md:text-xl leading-relaxed italic mb-8 max-w-3xl mx-auto">
                    "{d.texto}"
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-camamar-yellow text-camamar-yellow" />
                    ))}
                  </div>
                  <p className="font-display font-bold text-xl uppercase text-foreground">{d.nome}</p>
                  <p className="text-muted-foreground text-sm">{d.cidade}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;