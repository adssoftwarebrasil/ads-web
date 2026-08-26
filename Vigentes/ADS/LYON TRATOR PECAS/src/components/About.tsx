import { CheckCircle2, Users, Trophy, Target } from 'lucide-react';

export default function About() {
  const benefits = [
    'Equipe especializada e experiente',
    'Parceria com fornecedores de confiança',
    'Atendimento personalizado',
    'Rapidez na entrega',
    'Suporte técnico completo',
    'Preços competitivos'
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#fbba00] to-[#ff9500] rounded-lg opacity-20"></div>
              <div className="relative rounded-lg h-96 overflow-hidden shadow-xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Ffachada-loja-automoveis.webp"
                  alt="Equipe Lyon Trator Peças"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-[#fbba00]/10 border border-[#fbba00] rounded-full px-4 py-2 text-[#fbba00] text-sm font-semibold mb-4">
              Nossa História
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a18] mb-6">
              Mais de 10 Anos Atendendo o Norte do Brasil
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                A Lyon Trator Peças nasceu da necessidade do mercado de máquinas pesadas por um
                fornecedor confiável e ágil na região Norte do Brasil. Com mais de uma década de
                experiência, nos consolidamos como referência no segmento.
              </p>
              <p>
                Nossa missão é fornecer peças de qualidade com atendimento diferenciado, garantindo
                que seu equipamento volte a operar o mais rápido possível.
              </p>
              <p>
                Com 3 unidades estrategicamente localizadas em Roraima e Pará, atendemos com
                eficiência toda a região Norte, sempre priorizando a satisfação do cliente.
              </p>
            </div>

            <div className="bg-[#fbba00] rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 text-[#1a1a18]">
                <Trophy size={32} />
                <p className="font-bold text-lg">
                  Qualidade em Peças + Excelência em Atendimento
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-[#fbba00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-block bg-[#1a1a18] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a2a28] transition-all hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
