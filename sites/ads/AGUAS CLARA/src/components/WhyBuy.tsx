import { Medal, ClipboardCheck } from 'lucide-react';

const items = [
  {
    Icon: Medal,
    title: 'Experiência Comprovada',
    text: 'Mais de duas décadas no mercado de piscinas',
  },
  {
    Icon: ClipboardCheck,
    title: 'Planejamento Detalhado',
    text: 'Do projeto à execução com foco nos mínimos detalhes',
  },
];

const WHATSAPP_ORCAMENTO =
  'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

export default function WhyBuy() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col items-start text-left md:order-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Por que comprar sua piscina conosco?
          </h2>
          <div className="grid grid-cols-1 gap-6 w-full mb-10">
            {items.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-1">{title}</h3>
                  <p className="text-white/80 text-sm md:text-base">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent hover:bg-[#0096C7] text-white px-8 md:px-10 py-4 md:py-5 text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:-translate-y-1"
          >
            <span>Solicitar Orçamento</span>
          </a>
        </div>
        <div className="relative md:order-2">
          <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-xl -z-10"></div>
          <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <img
              src="https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FPor%20que%20contratar%3F.webp"
              alt="Por que comprar sua piscina conosco?"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
