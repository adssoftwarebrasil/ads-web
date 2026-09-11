import { Gem, Users, CheckCircle, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Gem, title: 'Materiais Premium', desc: 'Trabalhamos com as melhores marcas e pedras selecionadas' },
  { icon: Users, title: 'Equipe Experiente', desc: 'Profissionais qualificados e comprometidos com a excelência' },
  { icon: CheckCircle, title: 'Garantia Total', desc: 'Asseguramos a qualidade de cada etapa do serviço' },
  { icon: TrendingUp, title: 'Inovação Constante', desc: 'Técnicas modernas e tendências do mercado' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Sua Parceira em <span className="text-amber-700">Elegância e Sofisticação</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A <strong>Marmoraria Anhanguera</strong> é referência em Goiânia no aparelhamento de placas e execução de trabalhos em mármore, granito, ardósia e outras pedras nobres. Fundada em 2025, já conquistamos a confiança de centenas de clientes que buscam qualidade superior e acabamento impecável.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa equipe especializada transforma ambientes comuns em espaços extraordinários, combinando técnica refinada, materiais premium e atendimento personalizado. Cada projeto é tratado com máxima atenção aos detalhes, garantindo resultados que superam expectativas.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
                      <p className="text-gray-600">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marmoraria%20anhanguera/img/bancada-marmore-cozinha.webp"
                  alt="Bancada de mármore para cozinha"
                  className="rounded-lg shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marmoraria%20anhanguera/img/banheiro-moderno-espelho.webp"
                  alt="Banheiro moderno com mármore"
                  className="rounded-lg shadow-xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marmoraria%20anhanguera/img/escada-marmore-moderna.webp"
                  alt="Escada moderna em mármore"
                  className="rounded-lg shadow-xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marmoraria%20anhanguera/img/pia-marmore-branca.webp"
                  alt="Pia de mármore branco"
                  className="rounded-lg shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-900 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
