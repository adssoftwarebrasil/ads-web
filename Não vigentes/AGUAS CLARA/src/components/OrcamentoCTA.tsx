import { MessageCircle } from 'lucide-react';

const WHATSAPP_ORCAMENTO =
  'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

export default function OrcamentoCTA() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col items-start text-left md:order-1">
          <div className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold inline-block mb-6 animate-pulse">
            Oferta Limitada
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Solicite seu orçamento
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
            Garanta agora sua piscina com preço especial
          </p>
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp hover:bg-[#1fb855] text-white px-8 md:px-10 py-4 md:py-5 text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Solicitar Orçamento Via WhatsApp</span>
          </a>
        </div>
        <div className="relative md:order-2">
          <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-xl -z-10"></div>
          <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <img
              src="https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FSolicite%20seu%20orc%CC%A7amento-paralax.webp"
              alt="Solicite seu orçamento"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
