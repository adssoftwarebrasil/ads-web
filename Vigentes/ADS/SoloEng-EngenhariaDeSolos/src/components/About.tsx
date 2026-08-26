import { Award, Shield, Users, Wrench } from 'lucide-react';

export default function About() {
  const differentials = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Comprometimento com os mais altos padrões de qualidade em cada projeto executado.',
    },
    {
      icon: Wrench,
      title: 'Maquinário Moderno',
      description: 'Equipamentos de última geração, sempre em perfeitas condições de operação.',
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais experientes e treinados para entregar resultados excepcionais.',
    },
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 46 anos construindo o desenvolvimento de Goiânia e região.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/solo-eng%2Fescavadeira-amarela-terreno.webp"
                alt="Escavadeira em terreno"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#cec643] rounded-2xl -z-10 hidden lg:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#6c6d71] rounded-full -z-10 hidden lg:block"></div>
          </div>

          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[#cec643]/10 rounded-full">
              <span className="text-[#6c6d71] font-semibold text-sm uppercase tracking-wide">
                Sobre Nós
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6c6d71] mb-6 leading-tight">
              Uma História de <span className="text-[#cec643]">Tradição e Inovação</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A Soloeng é uma empresa familiar que teve início em 1978, com o Sr. Elpídio
              Gervasio Pereira, um dos pioneiros nos serviços de escavação e aterros na
              cidade de Goiânia. Seu legado de excelência e dedicação foi transmitido para
              as gerações seguintes.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Oficialmente como Soloeng desde 2016, continuamos honrando essa tradição
              familiar, combinando décadas de experiência com as mais modernas tecnologias
              e equipamentos do mercado, sempre focados em entregar resultados superiores
              aos nossos clientes.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {differentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#cec643] rounded-lg flex items-center justify-center">
                      <Icon className="text-[#6c6d71]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#6c6d71] mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
