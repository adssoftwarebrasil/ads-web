import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    'Equipe certificada NR10',
    'Projetos em conformidade com ABNT',
    'Suporte técnico disponível',
    'Garantia em todos os serviços'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-yellow-400">
              <img
                src="https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Festrutura-metalica-cabos.webp"
                alt="Infraestrutura elétrica"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-xl shadow-2xl">
              <div className="text-4xl font-bold text-yellow-400">5+</div>
              <div className="text-sm font-medium">Anos no mercado</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Mais de 5 Anos Transformando Energia em Desenvolvimento
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Desde 2019, a Mais Luz Engenharia é sinônimo de excelência técnica em soluções elétricas de alta complexidade. Nascemos da necessidade crescente por serviços profissionais, seguros e capazes de acompanhar o desenvolvimento da infraestrutura elétrica em Goiás e em todo Brasil.
              </p>

              <p>
                Com mais de 10 anos de experiência acumulada por nossa equipe, entregamos projetos completos para indústrias, construções e redes de distribuição — sempre com foco em segurança, eficiência e conformidade normativa.
              </p>

              <p className="font-semibold text-blue-900">
                Nossa missão é ser o parceiro técnico de confiança que sua empresa precisa para crescer com infraestrutura elétrica sólida e sustentável.
              </p>
            </div>

            {/* Achievements List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-900" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
