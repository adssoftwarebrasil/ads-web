import { Leaf, Award, Plus } from 'lucide-react';

const cards = [
  {
    icon: Leaf,
    title: 'Redução de Apetite',
    text: 'Controle da fome de forma natural, sem sofrimento ou ansiedade.',
  },
  {
    icon: Award,
    title: 'Resultados Eficazes',
    text: 'Potencialização da perda de peso com compostos cientificamente comprovados.',
  },
  {
    icon: Plus,
    title: 'Complemento Ideal',
    text: 'Aliado perfeito à reeducação alimentar para resultados mais rápidos.',
  },
];

export default function Phytotherapy() {
  return (
    <section className="py-16 lg:py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-[rgb(157,111,88)]/20 border border-[rgb(157,111,88)]/30 px-4 py-2 rounded-full">
              <span className="text-[rgb(157,111,88)] font-normal">Fitoterapia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Por Que Terapias Fitoterápicas para{' '}
              <span className="text-[rgb(157,111,88)] font-normal">Perda de Peso</span>?
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              As fórmulas manipuladas fitoterápicas são uma ferramenta poderosa quando bem indicadas e
              acompanhadas. Elas podem auxiliar no processo de emagrecimento de forma segura e eficaz.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Utilizando compostos naturais e cientificamente estudados, é possível potencializar seus
              resultados e tornar o processo mais confortável e sustentável.
            </p>
            <div className="space-y-4 pt-4">
              {cards.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-6 hover:border-[rgb(157,111,88)] transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[rgb(157,111,88)]/10 rounded-full flex items-center justify-center border border-[rgb(157,111,88)]/30">
                      <Icon className="w-6 h-6 text-[rgb(157,111,88)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-white mb-2">{title}</h3>
                      <p className="text-gray-400 font-light">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-950/30 border-l-4 border-amber-600 p-4 rounded">
              <p className="text-sm text-amber-200/80 font-light">
                <strong className="font-normal text-amber-100">Importante:</strong> As fórmulas manipuladas são
                prescritas de forma individualizada e não substituem hábitos alimentares saudáveis. São um
                complemento ao tratamento nutricional.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-black/10 rounded-2xl pointer-events-none"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2F%EF%AC%81toterapicos-manipulados.webp"
              alt="Fitoterápicos manipulados"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover grayscale-[10%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
