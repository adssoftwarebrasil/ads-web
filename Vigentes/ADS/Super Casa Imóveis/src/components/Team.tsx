import { ZoomIn } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/supercasaimoveis/img/';

const team = [
  { src: 'equipe-imobiliaria-roupas-pretas-pose-interna_5516x4130.webp', alt: 'Equipe 1' },
  { src: 'equipe-pessoas-ternos-escuro-sala-decorada_6720x4480.webp', alt: 'Equipe 2' },
  { src: 'grupo-funcionarios-sorrindo-ternos-pretos-madeira_6262x3914.webp', alt: 'Equipe 3' },
  { src: 'grupo-mulheres-terno-preto-ambiente-interno_4369x6403.webp', alt: 'Equipe 4' },
  { src: 'grupo-pessoas-roupas-pretas-parede-verde_4480x6720.webp', alt: 'Equipe 5' },
  { src: 'grupo-pessoas-ternos-pretos-fundo-madeira_7163x3829.webp', alt: 'Equipe 6' },
  { src: 'grupo-pessoas-ternos-pretos-sofa-ambiente-interno_6116x4171.webp', alt: 'Equipe 7' },
  { src: 'grupo-pessoas-uniformizadas-parede-verde-decorada_4247x6535.webp', alt: 'Equipe 8' },
  { src: 'pessoas-sentadas-sofa-decoracao-painel-verde_6720x4480.webp', alt: 'Equipe 9' },
];

export default function Team() {
  return (
    <section id="equipe" className="bg-neutral-950 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#d5a222] text-sm tracking-[0.3em] uppercase font-semibold">
              Nossa Equipe
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 leading-tight">
              Especialistas que entregam resultados
            </h2>
          </div>
          <p className="text-neutral-400 text-lg md:max-w-xs leading-relaxed border-l border-[#d5a222]/30 pl-6">
            Comprometimento e expertise em cada negociação imobiliária.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.alt}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 aspect-[4/3]"
            >
              <img
                src={BASE + member.src}
                alt={member.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
