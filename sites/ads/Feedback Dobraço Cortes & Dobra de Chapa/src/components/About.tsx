import { CheckCircle2 } from 'lucide-react';

const diferenciais = [
  'Pioneiros em corte a plasma e laser computadorizado',
  'Equipe técnica especializada com atendimento consultivo',
  'Maquinário de última geração',
  'Agilidade sem perder qualidade',
  'Atendimento personalizado do início ao fim',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl border-4 border-[rgb(139,0,2)] overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2Fquemsomos.png"
                alt="Dobraço Planaltina - Quem Somos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
              A DOBRAÇO PLANALTINA
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              Fundada em 2013, nascemos da união entre experiência e inovação.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Teodoro Edson, com mais de 23 anos no mercado de serralheria, uniu-se à administradora
              Vânia Costa para criar a Dobraço: uma empresa moderna, estruturada e pioneira em
              tecnologia de corte computadorizado na região.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[rgb(139,0,2)] mb-6">
              NOSSOS DIFERENCIAIS:
            </h3>
            <ul className="space-y-4 mb-10">
              {diferenciais.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    width={24}
                    height={24}
                    className="text-[rgb(139,0,2)] flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-300 text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-l-4 border-[rgb(139,0,2)] pl-6 py-6 bg-white bg-opacity-5 rounded-r-xl">
              <p className="text-lg sm:text-xl text-white italic leading-relaxed">
                "Trabalhamos lado a lado com cada cliente para entregar exatamente o que precisa — com
                o melhor atendimento da região."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
