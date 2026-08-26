import { Shield, Zap, Leaf, CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';
import Star from './Star';
import { useReveal } from '../hooks/useReveal';

interface Feature {
  icon: ReactNode;
  title: string;
  text: string;
  delay: number;
}

const features: Feature[] = [
  {
    icon: <Shield width={18} height={18} className="lucide lucide-shield text-brand" />,
    title: 'Marcas Reconhecidas',
    text: 'Trabalhamos com Tramontina, Irwin, Morlan, Vonder e outras líderes de mercado.',
    delay: 200,
  },
  {
    icon: <Zap width={18} height={18} className="lucide lucide-zap text-brand" />,
    title: 'Atendimento Rápido',
    text: 'Obra não pode parar. Encontre o que precisa e saia na hora.',
    delay: 300,
  },
  {
    icon: <Leaf width={18} height={18} className="lucide lucide-leaf text-brand" />,
    title: 'Linha Rural Completa',
    text: 'Cercamento, arame, telas, produtos para sítios e propriedades rurais.',
    delay: 400,
  },
  {
    icon: <CheckCircle2 width={18} height={18} className="lucide lucide-check-circle2 text-brand" />,
    title: 'Tudo em Um Só Lugar',
    text: 'Da ferramenta manual ao material de construção: completo e conveniente.',
    delay: 500,
  },
];

export default function About() {
  const textCol = useReveal<HTMLDivElement>();
  const imgCol = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={textCol.ref}
            className={`transition-all duration-700 ${
              textCol.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-brand font-bold text-sm uppercase tracking-widest mb-3 block">Quem Somos</span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight mb-6">
              Referência em ferragens e <span className="text-brand">materiais em Maringá</span>
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              A Batuta Agroshop é uma loja especializada em ferramentas, ferragens e materiais voltados para construção,
              manutenção e atividades rurais. Localizada na Av. Brasil, em Maringá – PR, atendemos tanto o profissional
              da construção quanto o proprietário rural com a mesma dedicação e eficiência.
            </p>
            <p className="text-navy/70 leading-relaxed mb-10">
              Nossa estrutura física ampla garante facilidade de atendimento e um estoque robusto, para que você
              encontre tudo o que precisa em uma única visita — com preços competitivos e marcas em que você confia.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className={`flex gap-3 p-4 bg-cream rounded-xl border border-navy/8 card-hover transition-all duration-700 ${
                    textCol.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${f.delay}ms` }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">{f.title}</h4>
                    <p className="text-navy/60 text-sm leading-snug">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={imgCol.ref}
            className={`relative transition-all duration-700 delay-200 ${
              imgCol.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/fachada-loja-batuta-agroshop-dia-ensolarado_1536x1024.webp"
                alt="Fachada da Batuta Agroshop em dia ensolarado"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/2]"
              />
              <div className="absolute -bottom-5 -left-5 bg-navy rounded-2xl p-4 shadow-xl border border-brand/20">
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-black text-brand leading-none">4.9</div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} width={12} height={12} />
                      ))}
                    </div>
                    <p className="text-cream/70 text-xs">no Google</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-brand/20 -z-10"></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/homem-organizando-ferramentas-em-loja-de-ferragens_900x1600.webp"
                alt="Atendimento na loja de ferragens"
                className="w-full rounded-xl shadow-lg object-cover aspect-[9/10]"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/loja-de-ferramentas-e-materiais-de-construcao_900x1600.webp"
                alt="Interior da loja de ferramentas e materiais"
                className="w-full rounded-xl shadow-lg object-cover aspect-[9/10]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
