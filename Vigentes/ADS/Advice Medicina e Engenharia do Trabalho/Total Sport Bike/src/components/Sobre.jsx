import { siteConfig } from '../data/siteConfig'
import { imageUrl } from '../utils/image'
import { getIcon } from './iconMap'
import Section from './Section.jsx'

export default function Sobre() {
  return (
    <Section id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-ring aspect-[4/5]">
            <img
              src={imageUrl(siteConfig.sobre.imagem, `${siteConfig.empresa.nome} sobre`)}
              alt={siteConfig.sobre.titulo}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-accent/90 -z-10"
            aria-hidden
          />
          <div
            className="hidden md:block absolute -top-6 -left-6 w-24 h-24 rounded-2xl border-2 border-primary/20 -z-10"
            aria-hidden
          />
        </div>

        <div className="lg:col-span-7">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark mb-3">
            Sobre nós
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tightish leading-[1.05] text-balance">
            {siteConfig.sobre.titulo}
          </h2>
          <p className="text-secondary text-base md:text-lg leading-relaxed mb-10 whitespace-pre-line">
            {siteConfig.sobre.texto}
          </p>

          {siteConfig.sobre.diferenciais.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {siteConfig.sobre.diferenciais.map((item, i) => {
                const Icone = getIcon(item.icone)
                return (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent-dark flex items-center justify-center flex-shrink-0">
                      <Icone size={20} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-primary text-lg leading-tight mb-1">
                        {item.titulo}
                      </h4>
                      <p className="text-secondary text-sm leading-relaxed">{item.descricao}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </Section>
  )
}
