import { Award, Target, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2e3094] mb-4">
              Sobre a Vetorcontabil
            </h2>
            <p className="text-xl text-[#21201e]">
              Experiência e dedicação a serviço do seu sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#2e3094] to-[#1a1d5c] rounded-2xl p-8 text-white shadow-xl">
              <Award className="mb-6 text-[#f0851a]" size={48} />
              <h3 className="text-2xl font-bold mb-4">Denis Lima</h3>
              <p className="text-lg leading-relaxed text-blue-100">
                Líder da Vetorcontabil com mais de 10 anos de experiência no mercado contábil,
                Denis Lima é reconhecido por sua visão estratégica e compromisso com a excelência
                no atendimento aos clientes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#f0851a] p-3 rounded-lg flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2e3094] mb-2">Nossa Missão</h4>
                  <p className="text-[#21201e]">
                    Simplificar a gestão contábil e promover o sucesso sustentável de nossos clientes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#f0851a] p-3 rounded-lg flex-shrink-0">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2e3094] mb-2">Equipe Qualificada</h4>
                  <p className="text-[#21201e]">
                    Profissionais especializados e constantemente atualizados com as melhores práticas do mercado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#f0851a] p-3 rounded-lg flex-shrink-0">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2e3094] mb-2">Tecnologia de Ponta</h4>
                  <p className="text-[#21201e]">
                    Utilizamos as mais modernas ferramentas para garantir eficiência e precisão
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f0851a] to-[#d97616] rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Por que escolher a Vetorcontabil?</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Atendimento personalizado, equipe qualificada e tecnologia de ponta são os pilares
              que nos tornam referência em soluções contábeis. Somos parceiros do seu crescimento,
              oferecendo suporte estratégico para que você possa focar no que realmente importa:
              o sucesso do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
