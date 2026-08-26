import { Zap, Settings, Wrench, Award, Clock, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Rebobinagem de Motores',
      description: 'Rebobinamento completo de motores elétricos com materiais de alta qualidade e tecnologia de ponta.',
      image: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fbobina-motor-eletrico.webp'
    },
    {
      icon: Settings,
      title: 'Manutenção Preventiva',
      description: 'Inspeções periódicas e manutenções programadas para garantir máxima eficiência e durabilidade.',
      image: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-manutencao-eletrica.webp'
    },
    {
      icon: Wrench,
      title: 'Manutenção Corretiva',
      description: 'Diagnóstico preciso e reparo rápido de falhas em motores e bombas elétricas industriais.',
      image: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-eletrico-desmontado.webp'
    },
    {
      icon: Award,
      title: 'Soluções Personalizadas',
      description: 'Desenvolvimento de soluções sob medida para otimizar o desempenho dos seus equipamentos.',
      image: 'https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fbomba-azul-industrial.webp'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Oficina Autorizada',
      description: 'Somos oficina autorizada Mercosul para manutenção e vendas'
    },
    {
      icon: Clock,
      title: 'Atendimento Ágil',
      description: 'Prazos precisos e compromisso com a pontualidade na entrega'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos com os melhores materiais e tecnologias avançadas'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#01904B] to-[#0379CB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em manutenção de motores elétricos com qualidade superior e tecnologia de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-gradient-to-r from-[#01904B] to-[#0379CB] p-3 rounded-xl">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#01904B]/10 to-[#0379CB]/10 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#01904B] to-[#0379CB] rounded-2xl mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
