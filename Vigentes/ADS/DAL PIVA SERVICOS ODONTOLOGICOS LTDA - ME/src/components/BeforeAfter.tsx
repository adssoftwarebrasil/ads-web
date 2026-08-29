import { useState } from 'react';

const cases = [
  {
    id: 1,
    title: 'Facetas Dentárias',
    subtitle: 'Transformação completa do sorriso com lentes de contato dental',
    image:
      'https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/antes-e-depois-sorriso-dentes-antes-facetas_1440x1440.webp',
    tag: 'Estética',
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#098b90] text-sm font-semibold tracking-widest uppercase mb-3">
            Antes & Depois
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Resultados reais que{' '}
            <span className="text-[#a4376e]">falam por si</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cada sorriso é único. Veja algumas das transformações que realizamos e imagine o que podemos fazer pelo seu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              key={active}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src={cases[active].image}
                alt={cases[active].title}
                className="w-full h-full object-cover object-center animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-[#a4376e] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {cases[active].tag}
                </span>
                <h3 className="text-white text-xl font-bold">{cases[active].title}</h3>
                <p className="text-white/80 text-sm mt-1">{cases[active].subtitle}</p>
              </div>
            </div>

            <div
              className={`flex gap-2 justify-center mt-4 ${
                cases.length > 1 ? '' : 'hidden'
              }`}
            >
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-[#a4376e]' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Ver caso ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {cases.length > 1 &&
              cases.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-5 p-5 rounded-2xl text-left transition-all duration-300 ${
                  i === active
                    ? 'bg-[#a4376e]/5 border-2 border-[#a4376e] shadow-md'
                    : 'bg-gray-50 border-2 border-transparent hover:border-gray-200 hover:bg-gray-100'
                }`}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wide ${
                      i === active ? 'text-[#a4376e]' : 'text-gray-400'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h4
                    className={`text-base font-bold mt-0.5 ${
                      i === active ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </button>
              ))}

            <div className="mt-4 p-6 bg-gradient-to-br from-[#098b90]/10 to-[#a4376e]/10 rounded-2xl border border-[#098b90]/20">
              <p className="text-gray-700 font-medium mb-3 text-base">
                Quer ver sua transformação?
              </p>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Agende uma avaliação gratuita e descubra o tratamento ideal para o seu sorriso dos sonhos.
              </p>
              <a
                href="http://wa.me/556592693908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#a4376e] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#8e2d5e] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Quero Minha Transformação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
