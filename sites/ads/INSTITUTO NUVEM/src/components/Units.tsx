import { Stethoscope, Building2, ArrowRight } from 'lucide-react';

export default function Units() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream/40 to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-observe text-center max-w-3xl mx-auto mb-16">
          <span className="tag mb-5 inline-block">Instituto Nuvem</span>
          <h2 className="section-title mb-5">
            Duas Unidades,<br />
            <span className="text-primary">Um Único Propósito</span>
          </h2>
          <p className="section-subtitle">
            Do atendimento clínico geral ao tratamento especializado em TEA, oferecemos suporte completo para crianças e famílias.
          </p>
        </div>
        <div className="stagger-observe grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-7 hover:shadow-lg hover:-translate-y-2 transition-all duration-400 group flex flex-col">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
              <Stethoscope size={26} className="text-white" />
            </div>
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs px-3 py-1 rounded-full mb-3 self-start">
              Unidade Matriz
            </span>
            <h3 className="font-heading font-bold text-gray-800 text-xl mb-1">Instituto Nuvem</h3>
            <p className="font-sans text-sm text-gray-500 font-medium mb-4">Primavera do Leste</p>
            <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Nossa unidade origem, consolidada como referência em saúde multidisciplinar e desenvolvimento infantil no coração do Mato Grosso.
            </p>
            <ul className="space-y-2 mb-7">
              {['Autoridade de mercado', 'Equipe multidisciplinar', 'Atendimento personalizado'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-gray-600 font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-primary-light shrink-0"></div>
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/556696568775"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-primary-light text-white font-heading font-semibold text-sm py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-md"
            >
              Saiba Mais
              <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-secondary/5 border border-secondary/20 rounded-3xl p-7 hover:shadow-lg hover:-translate-y-2 transition-all duration-400 group flex flex-col">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
              <Building2 size={26} className="text-white" />
            </div>
            <span className="inline-block bg-secondary/15 text-secondary font-heading font-semibold text-xs px-3 py-1 rounded-full mb-3 self-start">
              Especialista em TEA
            </span>
            <h3 className="font-heading font-bold text-gray-800 text-xl mb-1">Instituto Nuvem</h3>
            <p className="font-sans text-sm text-gray-500 font-medium mb-4">Campo Verde</p>
            <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Focada exclusivamente no tratamento especializado de crianças neurodivergentes, com metodologia ABA e equipe treinada para o espectro autista.
            </p>
            <ul className="space-y-2 mb-7">
              {['Terapia ABA', 'TEA e neurodivergência', 'Abordagem integral'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-gray-600 font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-secondary to-secondary-light shrink-0"></div>
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/556699352163"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-secondary to-secondary-light text-white font-heading font-semibold text-sm py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-md"
            >
              Saiba Mais
              <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
