import { Quote, Star } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import Section from './Section.jsx'

function Estrelas({ n }) {
  const total = Math.max(0, Math.min(5, Math.round(n)))
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${total} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} className={i <= total ? 'fill-accent text-accent' : 'text-white/20'} />
      ))}
    </div>
  )
}

export default function Depoimentos() {
  if (!siteConfig.depoimentos.length) return null
  const secao = siteConfig.secoes.depoimentos

  return (
    <Section id="depoimentos" className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" aria-hidden />

      <div className="text-center mb-14 relative z-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-3">
          Depoimentos
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tightish text-balance">
          {secao.titulo}
        </h2>
        {secao.subtitulo && (
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">{secao.subtitulo}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {siteConfig.depoimentos.map((depoimento, i) => (
          <article
            key={i}
            className="bg-primary-light/40 rounded-3xl p-7 md:p-8 backdrop-blur-sm border border-white/10 hover:border-accent/40 transition-colors flex flex-col"
          >
            <Quote className="text-accent mb-4" size={32} />
            {typeof depoimento.estrelas === 'number' && <Estrelas n={depoimento.estrelas} />}
            <p className="text-white/90 leading-relaxed mb-7 italic flex-1 text-[15px]">
              "{depoimento.texto}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              {depoimento.foto ? (
                <img
                  src={depoimento.foto}
                  alt={depoimento.nome}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-display font-bold flex items-center justify-center">
                  {depoimento.nome.charAt(0)}
                </div>
              )}
              <div>
                <div className="font-semibold leading-tight">{depoimento.nome}</div>
                {depoimento.cargo && (
                  <div className="text-white/60 text-xs mt-0.5">{depoimento.cargo}</div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
