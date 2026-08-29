import { Stethoscope, FlaskConical, MessageCircle, Calendar } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    iconClass: 'lucide lucide-stethoscope text-white',
    title: 'Consultas Veterinárias',
    text: 'Atendimento especializado para animais exóticos com protocolos específicos para cada espécie.',
    items: ['Avaliação completa', 'Diagnóstico preciso', 'Orientações personalizadas'],
  },
  {
    icon: FlaskConical,
    iconClass: 'lucide lucide-flask-conical text-white',
    title: 'Exame de Sexagem',
    text: 'Identificação do sexo de aves através de laboratórios parceiros certificados e confiáveis.',
    items: ['Resultado rápido', 'Laboratórios certificados', 'Procedimento seguro'],
  },
  {
    icon: MessageCircle,
    iconClass: 'lucide lucide-message-circle text-white',
    title: 'Orientação Online',
    text: 'Tire suas dúvidas sobre cuidados básicos através do WhatsApp e redes sociais.',
    items: ['Atendimento rápido', 'Dicas de cuidados', 'Suporte contínuo'],
  },
  {
    icon: Calendar,
    iconClass: 'lucide lucide-calendar text-white',
    title: 'Agendamento Flexível',
    text: 'Sistema de agendamento prático para melhor atender você e seu pet exótico.',
    items: ['Horários disponíveis', 'Agendamento via WhatsApp', 'Confirmação rápida'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendimento especializado e dedicado para o bem-estar do seu pet exótico
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3A9E3E] to-[#2E7D32] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={service.iconClass} width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.text}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#3A9E3E] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/556283177646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#3A9E3E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Calendar className="lucide lucide-calendar" width={24} height={24} />
            Agendar Consulta Agora
          </a>
        </div>
      </div>
    </section>
  );
}
