const marcas = [
  { nome: 'Husqvarna', delay: '0ms' },
  { nome: 'Ferramentas', delay: '100ms' },
  { nome: 'Makita', delay: '200ms' },
  { nome: 'Tramontina', delay: '300ms' },
  { nome: 'Ingco', delay: '400ms' },
  { nome: 'Vonder', delay: '500ms' },
  { nome: 'Trapp', delay: '600ms' },
  { nome: 'EPI', delay: '700ms' },
];

export default function Marcas() {
  return (
    <section className="py-20 bg-[rgb(19,57,94)]">
      <div className="container mx-auto px-5">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Trabalhamos com as Melhores Marcas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {marcas.map((m) => (
            <div
              key={m.nome}
              className="bg-white rounded-xl p-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-0"
              style={{ animationDelay: m.delay }}
            >
              <span className="text-[rgb(19,57,94)] text-xl font-bold text-center">
                {m.nome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
