import { Heart, Utensils, Home, Users, Stethoscope, Clock, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: Heart,
    title: 'Cuidados Pós-Operatórios',
    desc: 'Acompanhamento especializado durante toda sua recuperação, com monitoramento contínuo e atenção personalizada.',
  },
  {
    icon: Utensils,
    title: 'Alimentação Balanceada',
    desc: 'Refeições nutritivas e adequadas para o período de recuperação, elaboradas seguindo orientações médicas.',
  },
  {
    icon: Home,
    title: 'Hospedagem Confortável',
    desc: 'Ambiente acolhedor e equipado para proporcionar máximo conforto durante sua estadia.',
  },
  {
    icon: Users,
    title: 'Cuidadores Especializados',
    desc: 'Equipe treinada para oferecer suporte completo nas atividades diárias e cuidados pessoais.',
  },
  {
    icon: Stethoscope,
    title: 'Técnicas de Enfermagem',
    desc: 'Profissionais qualificados para administração de medicamentos, curativos e monitoramento de sinais vitais.',
  },
  {
    icon: Clock,
    title: 'Disponibilidade 24 Horas',
    desc: 'Atendimento ininterrupto, com equipe presente para qualquer necessidade a qualquer momento.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#F4F4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#282E6A] mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um conjunto completo de serviços para garantir sua
            recuperação tranquila e segura
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[#624A7F] to-[#282E6A] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#282E6A] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5563992135677"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#624A7F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#7a5d9e] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Solicitar Informações
          </a>
        </div>
      </div>
    </section>
  );
}
