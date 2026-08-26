import { siteConfig } from '../data/siteConfig'
import { getIcon } from './iconMap'
import Section from './Section.jsx'

export default function Processo() {
  if (!siteConfig.processo.length) return null
  const secao = siteConfig.secoes.processo

  return (
    <Section id="processo">
      <div className="text-center mb-14 md:mb-20">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark mb-3">
          Etapas
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tightish text-balance">
          {secao.titulo}
        </h2>
        {secao.subtitulo && (
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {secao.subtitulo}
          </p>
        )}
      </div>

      <div className="relative">
        <div
          className="hidden lg:block absolute top-14 left-12 right-12 h-px border-t-2 border-dashed border-gray-200 z-0"
          aria-hidden
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {siteConfig.processo.map((etapa, i) => {
            const Icone = etapa.icone ? getIcon(etapa.icone) : null
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 md:p-8 shadow-soft hover:shadow-ring transition h-full border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-5">
                  <span className="font-display text-4xl font-bold text-accent leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {Icone && (
                    <div className="ml-auto w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                      <Icone size={20} />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2 tracking-tightish leading-tight">
                  {etapa.titulo}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">{etapa.descricao}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
