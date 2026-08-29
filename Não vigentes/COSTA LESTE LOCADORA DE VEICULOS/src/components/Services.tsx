import { Plane, Hotel, MapPin, Car, Wrench, Clock, Shield, Headphones } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Entrega no Aeroporto',
    desc: 'Receba seu carro assim que desembarcar. Atendimento no Aeroporto Internacional de Fortaleza com toda comodidade.',
  },
  {
    icon: Hotel,
    title: 'Entrega no Hotel',
    desc: 'Levamos o carro até o seu hotel. Facilidade e conforto para você começar sua viagem imediatamente.',
  },
  {
    icon: MapPin,
    title: 'Retirada na Locadora',
    desc: 'Venha até nossa loja na Meireles. Atendimento presencial com toda estrutura para recebê-lo.',
  },
  {
    icon: Car,
    title: 'Carros Novos',
    desc: 'Frota renovada constantemente com veículos de última geração para sua segurança e conforto.',
  },
  {
    icon: Wrench,
    title: 'Manutenção em Dia',
    desc: 'Todos os carros revisados e com manutenção preventiva. Tranquilidade durante toda sua viagem.',
  },
  {
    icon: Clock,
    title: 'Flexibilidade de Horários',
    desc: 'Atendemos conforme sua necessidade. Entrega e retirada em horários flexíveis.',
  },
  {
    icon: Shield,
    title: 'Seguro Completo',
    desc: 'Proteção total para você viajar com tranquilidade. Cobertura completa inclusa.',
  },
  {
    icon: Headphones,
    title: 'Suporte 24/7',
    desc: 'Assistência disponível a qualquer momento. Estamos sempre prontos para ajudar você.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-[rgb(255,254,252)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(16,14,13)] mb-4">
            Nossos <span className="text-[rgb(202,25,27)]">Diferenciais</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(202,25,27)] mx-auto mb-6"></div>
          <p className="text-xl text-[rgb(16,14,13)]/70 max-w-3xl mx-auto">
            Serviços exclusivos que tornam sua experiência única e inesquecível
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgb(202,25,27)]/10 rounded-full mb-4 group-hover:bg-[rgb(202,25,27)] transition-colors duration-300">
                <service.icon
                  size={32}
                  className="text-[rgb(202,25,27)] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[rgb(16,14,13)] mb-3">{service.title}</h3>
              <p className="text-[rgb(16,14,13)]/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="http://wa.me/5585986018954?text=Olá! Gostaria de saber mais sobre os serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-8 py-4 rounded-full hover:bg-[rgb(143,25,19)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <Headphones size={24} />
            <span>Fale Conosco</span>
          </a>
        </div>
      </div>
    </section>
  );
}
