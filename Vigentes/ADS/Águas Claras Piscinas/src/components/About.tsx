import { Headphones, Trophy, Heart, ArrowRight } from 'lucide-react';

const features = [
  {
    Icon: Headphones,
    title: 'Atendimento Consultivo',
    text: 'Entendemos sua necessidade antes de propor a solução.',
  },
  {
    Icon: Trophy,
    title: 'Excelência Técnica',
    text: 'Equipe certificada e materiais de primeira linha.',
  },
  {
    Icon: Heart,
    title: 'Paixão pelo que fazemos',
    text: 'Cuidamos da sua obra como se fosse nossa casa.',
  },
];

const WHATSAPP_ORCAMENTO =
  'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 md:py-32 bg-slate-50 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-4 left-4 w-full h-full rounded-2xl border-2 border-accent/30 -z-10 translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src="https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FQuem%20somos.webp"
                alt="Equipe Águas Claras Piscinas em obra"
                className="w-full h-auto block"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-4">
              <span className="w-8 h-[2px] bg-accent"></span>Quem Somos
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 font-bold font-heading mb-6 leading-tight">
              Mais do que piscinas, construímos o seu refúgio.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A <strong>Águas Claras Piscinas</strong> nasceu com o propósito de levar lazer e
              qualidade de vida para as famílias. Em duas décadas de história, nos tornamos
              referência por unir técnica apurada, cumprimento rigoroso de prazos e um acabamento
              impecável.
            </p>
            <div className="space-y-6 mb-10">
              {features.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-transparent hover:border-slate-100"
                >
                  <div className="bg-accent/10 p-3 rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300"
            >
              Falar com um Especialista
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
