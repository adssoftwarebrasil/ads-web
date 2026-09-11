import { site } from '../config/site';
import { getIcon } from '../lib/icons';
import Section from './Section';

export default function Process() {
  if (!site.processo.length) return null;
  const heading = site.secoes.processo;

  return (
    <Section id="processo">
      <div className="text-center mb-14 md:mb-20">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark mb-3">
          Etapas
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tightish text-balance">
          {heading.titulo}
        </h2>
        {heading.subtitulo && (
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {heading.subtitulo}
          </p>
        )}
      </div>

      <div className="relative">
        <div
          className="hidden md:block absolute top-14 left-16 right-16 h-px border-t-2 border-dashed border-gray-200 z-0 max-w-4xl mx-auto"
          aria-hidden
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 max-w-5xl mx-auto">
          {site.processo.map((etapa, i) => {
            const Icon = etapa.icone ? getIcon(etapa.icone) : null;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 md:p-8 shadow-soft hover:shadow-ring transition h-full border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-5">
                  <span className="font-display text-4xl font-bold text-accent leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {Icon && (
                    <div className="ml-auto w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2 tracking-tightish leading-tight">
                  {etapa.titulo}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">{etapa.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
