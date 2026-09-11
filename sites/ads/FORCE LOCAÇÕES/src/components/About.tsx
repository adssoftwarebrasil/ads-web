import { Award, Settings, Users, Clock, CheckCircle } from 'lucide-react';

const highlights = [
  { icon: Award, text: '7 anos de empresa' },
  { icon: Settings, text: '50+ equipamentos na frota' },
  { icon: Users, text: '20+ anos de experiência' },
  { icon: Clock, text: 'Operação 7 dias por semana' },
  { icon: CheckCircle, text: '100% de satisfação' },
];

export default function About() {
  return (
    <section id="empresa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-force-blue text-center mb-4">
          Force Locações - Referência em Guindastes no Pará
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <div className="space-y-6 text-lg leading-relaxed text-force-gray">
              <p>
                A Force Locações é empresa referência em locação de guindastes e caminhões munck na
                região de Belém do Pará. Com 7 anos de atuação consolidada e mais de 20 anos de
                experiência do proprietário na profissão, oferecemos conhecimento avançado e paixão
                genuína pelo trabalho de movimentação de cargas.
              </p>
              <p>
                Nossa missão é fornecer soluções seguras, eficientes e profissionais para empresas de
                diversos segmentos: construção civil, indústria, mineração, petroquímica, siderurgia,
                energia e muito mais.
              </p>
              <p>
                Contamos com frota própria moderna e abrangente, atendendo desde pequenas
                movimentações até grandes projetos industriais com equipamentos de até 300 toneladas.
              </p>
              <div className="bg-yellow-50 border-4 border-force-yellow rounded-lg p-8 space-y-4 mt-8">
                {highlights.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center space-x-4">
                    <Icon className="w-8 h-8 text-force-yellow flex-shrink-0" />
                    <span className="text-force-gray font-semibold text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/force%2Fconstruction-site-crane.jpg"
              alt="Guindastes SANY Force Locações em operação terrestre"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
