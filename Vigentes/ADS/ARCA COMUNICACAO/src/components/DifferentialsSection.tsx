import { Shield, Wrench, HeartHandshake } from 'lucide-react';

export default function DifferentialsSection() {
  const differentials = [
    {
      icon: Shield,
      title: 'Materiais de alta qualidade',
      description: 'Só trabalhamos com o melhor. ACM de alta espessura e tratamento UV, acrílicos virgens de máxima resistência, LEDs de alta eficiência luminosa e estruturas metálicas com tratamento anticorrosivo.'
    },
    {
      icon: Wrench,
      title: 'Técnica e execução impecáveis',
      description: 'Nossa equipe técnica combina expertise e tecnologia. Cortes a laser, dobras precisas, acabamentos manuais detalhados e instalações seguras garantem não apenas um visual superior, mas também a qualidade duradoura além do que se pode ver.'
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento consultivo e personalizado',
      description: 'Não vendemos produtos prontos. Ouvimos você. Nossos especialistas analisam suas necessidades, o posicionamento da sua marca e as características do seu espaço para um resultado que comunica e encanta.'
    }
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-gradient-to-b from-[rgb(254,254,254)] to-[rgb(212,212,212)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(11,9,48)] mb-6">
            A diferença que garante<br />
            <span className="text-[rgb(255,204,44)]">seu investimento:</span>
          </h2>
          <p className="text-lg sm:text-xl text-[rgb(30,30,30)] max-w-3xl mx-auto">
            Por que nossos projetos vão além da estética?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-[rgb(255,204,44)]"
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-[rgb(11,9,48)] to-[rgb(30,30,30)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <differential.icon className="text-[rgb(255,204,44)]" size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[rgb(11,9,48)] mb-4">
                {differential.title}
              </h3>
              <p className="text-[rgb(30,30,30)] leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(11,9,48)] to-[rgb(30,30,30)] rounded-2xl opacity-90"></div>
          <div className="relative bg-cover bg-center rounded-2xl overflow-hidden">
            <img
              src="https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Fgaleria%2Ffachada-antes-depois.webp"
              alt="Antes e depois"
              className="w-full h-64 md:h-96 object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h3 className="text-3xl sm:text-4xl font-bold text-[rgb(254,254,254)] mb-4">
                  Transformação com Qualidade Comprovada
                </h3>
                <p className="text-lg sm:text-xl text-[rgb(212,212,212)] max-w-2xl mx-auto">
                  Projetos feitos para seu investimento durar. Zero desbotamento, visibilidade 24 horas e execução sem erros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
