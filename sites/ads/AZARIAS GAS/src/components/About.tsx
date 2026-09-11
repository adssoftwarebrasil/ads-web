const ABOUT_IMG =
  'https://storage.lucasmendes.dev/site-sp/azaria%20gas%2Fimg%2Fhero.webp';

const stats = [
  { value: '1000+', label: 'Entregas Mensais', delay: '0ms' },
  { value: '99%', label: 'Satisfação', delay: '100ms' },
  { value: '100%', label: 'Cobertura Regional', delay: '200ms' },
];

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 opacity-0 translate-y-10">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="Sobre Azarias Gás"
                className="w-full h-auto rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-[rgb(219,138,69)] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm">Anos no Mercado</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              12 Anos de História e Tradição
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                AZARIAS GÁS nasceu há mais de uma década com um propósito claro:
                levar segurança e comodidade para residências e comércios da
                região.
              </p>
              <p>
                Nosso compromisso é simples: quando você liga, nós chegamos.
                Trabalhamos com os melhores fornecedores do mercado para garantir
                botijões de qualidade, revisados e seguros.
              </p>
              <p>
                Seja para sua casa ou seu negócio, conte com a Azarias Gás para
                entregas rápidas, atendimento personalizado e os melhores preços
                da região.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center transition-all duration-700 opacity-0 translate-y-10"
                  style={{ transitionDelay: s.delay }}
                >
                  <div className="text-3xl font-bold text-[rgb(219,138,69)] mb-2">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
