import { Heart, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Heart,
    iconClass: 'lucide lucide-heart text-white',
    title: 'Cuidado Dedicado',
    text: 'Atendimento personalizado para cada pet',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-white',
    title: 'Especialização',
    text: 'Expertise em animais exóticos',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock text-white',
    title: 'Horário Flexível',
    text: 'Segunda a sexta, 9h às 17h',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cuidado Especializado desde 2022
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A Pet Exotic é um consultório veterinário especializada no atendimento de animais
              exóticos e não convencionais. Nossa missão é proporcionar cuidados de excelência para
              aves, coelhos, hamsters, porquinhos da índia, répteis e outros pets especiais.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Com uma equipe dedicada e apaixonada por animais exóticos, oferecemos consultas
              especializadas e exames de sexagem em parceria com laboratórios de confiança.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-[#3A9E3E] rounded-full flex items-center justify-center mb-4">
                      <Icon className={feature.iconClass} width={32} height={32} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/petexotic%2Fquem-somos.jpeg"
                alt="Pet Exotic - Sobre nós"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
