import { CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  'Empresa familiar com mais de 10 anos de mercado',
  'Atendimento do início ao fim, sem terceirizar',
  'Também construímos casas para venda — visão real de mercado',
  'Segurança jurídica em cada etapa do processo',
  'Transparência e compromisso em cada detalhe',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img
                src="https://storage.lucasmendes.dev/site-sp/torreengenharia/cartao-visita-torre-engenharia-azul-branco_1600x900.webp"
                alt="Torre Engenharia — identidade visual"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 md:-bottom-6 md:-right-6 bg-brand-navy text-white rounded-2xl px-6 py-5 shadow-2xl">
              <p className="text-3xl font-extrabold leading-none">+10</p>
              <p className="text-xs text-white/70 mt-1 font-medium uppercase tracking-wide">
                Anos de Experiência
              </p>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-brand-sky/15 -z-10"></div>
            <div className="absolute -bottom-8 left-8 w-32 h-32 rounded-full bg-brand-blue/8 -z-10"></div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-brand-blue font-semibold uppercase tracking-widest text-xs mb-3">
              Sobre a Torre Engenharia
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Mais do que engenharia,
              <br />
              entregamos tranquilidade
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Torre Engenharia nasceu com um propósito claro: entregar segurança, qualidade e
              resultado para quem constrói, regulariza ou investe em imóveis.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Desde 2013, somos uma empresa familiar construída sobre valores sólidos como
              confiança, transparência e compromisso com cada detalhe. Somos especializados em
              atender empresários da construção civil, investidores e proprietários que buscam
              soluções completas — unindo conhecimento técnico, visão estratégica e acompanhamento
              próximo.
            </p>
            <ul className="space-y-3 mb-9">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-brand-blue mt-0.5 shrink-0"
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5566996194229?text=Ol%C3%A1%21+Gostaria+de+conhecer+mais+sobre+a+Torre+Engenharia+e+seus+servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-navy text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#263D80] transition-all duration-200 hover:shadow-lg hover:shadow-brand-navy/30 group"
            >
              Fale com a equipe
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
