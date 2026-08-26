import { Quote } from 'lucide-react';

const clients: string[] = [
  'Giassi Supermercados',
  'Prosegur',
  'Intelbras',
  'Eletrobras',
];

const highlights: { title: string; text: string }[] = [
  {
    title: 'Geradores',
    text: 'de 8 kVA a 750 kVA disponíveis para locação',
  },
  {
    title: 'MWM',
    text: 'Assistência técnica autorizada, peças originais',
  },
  {
    title: 'NBR 14039 e 5410',
    text: 'Conformidade com norma de instalações elétricas',
  },
  {
    title: '20 anos',
    text: 'de experiência do corpo técnico especializado',
  },
];

export default function Clients() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Nossos Clientes
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
              Empresas que Confiam na Sulltec
            </h2>
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-6">
              <Quote
                width={28}
                height={28}
                className="lucide lucide-quote text-brand-red shrink-0 mt-1"
              />
              <p className="text-gray-600 text-base italic leading-relaxed">
                "Nossa equipe técnica com mais de 20 anos de experiência garante
                máxima confiabilidade em cada equipamento entregue. Fornecemos
                peças e serviços de qualidade para que nossos clientes tenham
                total segurança nos seus grupos geradores."
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {clients.map((client) => (
                <div
                  key={client}
                  className="bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-sm font-semibold px-5 py-2.5 rounded-xl"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-brand-blue rounded-2xl p-6 hover:bg-brand-blue-dark transition-colors duration-300"
              >
                <div className="text-2xl font-extrabold text-brand-red mb-2">
                  {highlight.title}
                </div>
                <p className="text-white/70 text-sm leading-snug">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
