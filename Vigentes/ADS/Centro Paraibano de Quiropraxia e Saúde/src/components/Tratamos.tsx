const conditions = [
  'Hérnia de Disco',
  'Dor Lombar',
  'Dor Cervical',
  'Dor Ciática',
  'Fibromialgia',
  'Dores de Cabeça',
  'Tensão Muscular',
  'Problemas Posturais',
  'Lesões Esportivas',
  'Assimetrias em Bebês',
  'Torcicolo',
  'Dores Crônicas',
];

export default function Tratamos() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2">
            <span className="inline-block text-cyan-brand text-sm font-semibold tracking-widest uppercase mb-3">
              O Que Tratamos
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight mb-4">
              Sentir dor não é normal. <span className="text-cyan-brand">Tem solução.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nosso propósito é tratar a causa da sua dor com eficiência e verdade. Atendemos
              diversas condições com um protocolo individualizado, desde dores crônicas até
              assimetrias em bebês.
            </p>
            <div className="bg-navy/5 border border-navy/10 rounded-2xl p-5">
              <p className="text-navy font-semibold text-sm mb-1">Nosso diferencial:</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Método Clix — desenvolvido pelo Dr. Jonas após 16 anos de pesquisa e prática
                clínica, integrando quiropraxia, terapia manual e reequilíbrio biomecânico para
                resultados duradouros.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-wrap gap-3">
              {conditions.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 bg-navy text-white text-sm font-medium px-4 py-2.5 rounded-2xl hover:bg-cyan-brand transition-colors duration-200 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand flex-shrink-0"></span>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
