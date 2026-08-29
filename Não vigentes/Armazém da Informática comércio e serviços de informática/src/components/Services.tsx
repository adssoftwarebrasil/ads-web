import { Check, Laptop, Settings, Shield, Thermometer, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: 'Configuração de Sistema',
      description: 'Reinstalação e organização profissional do seu sistema operacional',
      features: ['Higienização de sistema', 'Instalação de Softwares', 'Otimização de performance'],
    },
    {
      icon: Wrench,
      title: 'Atualização de Hardware',
      description: 'Cuidados especializados para desktops, notebooks e periféricos',
      features: ['Análise detalhada de equipamentos', 'Substituição de componentes', 'Upgrade de performance'],
    },
    {
      icon: Laptop,
      title: 'Setup de Alta Performance',
      description: 'Montagem personalizada de computadores para jogos e trabalho',
      features: ['Consultoria de peças', 'Testes de estabilidade', 'Garantia de montagem'],
    },
    {
      icon: Thermometer,
      title: 'Gestão Térmica',
      description: 'Revisão preventiva para garantir a temperatura ideal dos equipamentos',
      features: ['Limpeza interna', 'Troca de pasta térmica', 'Substituição de ThermalPads'],
    },
    {
      icon: Shield,
      title: 'Substituição de Displays',
      description: 'Instalação de novas telas e monitores para notebooks',
      features: ['Peças de alta fidelidade', 'Instalação especializada', 'Garantia do serviço'],
    },
    {
      icon: Settings,
      title: 'Laboratório de Notebooks',
      description: 'Serviços avançados para equipamentos portáteis multimarcas',
      features: ['Microeletrônica', 'Troca de componentes', 'Análise de circuito'],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[rgb(46,47,147)]/10 text-[rgb(46,47,147)] px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">Nossas Soluções</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções em{' '}
            <span className="text-[rgb(46,47,147)]">Tecnologia e Informática</span>
          </h2>
          <p className="text-lg text-gray-600">
            Profissionais qualificados e tecnologia de ponta para garantir o melhor desempenho dos seus equipamentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[rgb(46,47,147)]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(46,47,147)] to-[rgb(0,168,89)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check size={20} className="text-[rgb(0,168,89)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[rgb(46,47,147)] to-[rgb(0,168,89)] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Busca Soluções para seu Equipamento?
          </h3>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e receba uma consultoria gratuita. Nossa equipe está pronta para atender você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/554191217176"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[rgb(46,47,147)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg font-semibold text-lg"
            >
              Falar com Especialista
            </a>
            <a
              href="tel:+554191217176"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border-2 border-white/30 font-semibold text-lg"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}