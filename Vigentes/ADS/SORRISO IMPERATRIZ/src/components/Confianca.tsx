import { Award, Cpu, Users, Heart, LucideIcon } from 'lucide-react';

interface Item {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const items: Item[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Mais de 15 Anos de Experiência',
    text: 'Tradição e excelência em cuidados odontológicos na região de Imperatriz',
  },
  {
    Icon: Cpu,
    iconClass: 'lucide lucide-cpu',
    title: 'Equipamentos Modernos',
    text: 'Tecnologia de ponta para diagnósticos precisos e tratamentos eficazes',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Especialistas em Diversas Áreas',
    text: 'Equipe multidisciplinar pronta para atender todas as suas necessidades',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart',
    title: 'Foco no Bem-Estar',
    text: 'Ambiente acolhedor e atendimento humanizado para seu conforto total',
  },
];

export default function Confianca() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(100,149,237)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[rgb(13,51,98)] font-semibold text-sm">
              Por Que Escolher a Clínica Sorriso Imperatriz
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(13,51,98)] mb-6">
            Nossos Pacientes Confiam em Nós
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Compromisso com a excelência em cada detalhe do seu tratamento
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(100,149,237)]/30"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[rgb(100,149,237)] to-[rgb(13,51,98)] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.Icon
                    className={`${item.iconClass} w-7 h-7 text-white`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-[rgb(13,51,98)] mb-3 group-hover:text-[rgb(100,149,237)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(13,51,98)] via-[rgb(100,149,237)] to-[rgb(13,51,98)] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Pronto Para Transformar Seu Sorriso?
            </h3>
            <p className="text-base sm:text-lg mb-8 text-white/90 leading-relaxed">
              Agende sua avaliação gratuita e descubra como nossa equipe pode
              ajudar você a conquistar o sorriso dos seus sonhos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contato"
                className="inline-block bg-[rgb(212,175,55)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl w-full sm:w-auto"
              >
                Agendar Avaliação Gratuita
              </a>
              <a
                href="https://wa.me/5599982501000?text=Olá! Gostaria de agendar uma avaliação gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
