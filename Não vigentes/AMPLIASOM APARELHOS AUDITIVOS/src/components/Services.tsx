import { ShoppingBag, Key, Wrench, ArrowRight, MessageCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'venda',
      icon: ShoppingBag,
      title: 'Venda',
      description: 'Modelos das melhores marcas de aparelhos auditivos do mercado, com alta tecnologia e conforto incomparável. Tudo para você ouvir melhor com clareza e tranquilidade.',
      cta: 'Ver aparelhos',
      gradient: 'from-[#007E7A] to-[#007E7A]',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      id: 'aluguel',
      icon: Key,
      title: 'Aluguel',
      description: 'Solução auditiva que cabe no seu bolso. Mais acessibilidade para quem precisa ouvir melhor sem abrir mão da qualidade. Opções flexíveis e todo cuidado que você merece.',
      cta: 'Saiba mais',
      gradient: 'from-[#ED0180] to-[#ED0180]',
      bgGradient: 'from-pink-50 to-pink-100'
    },
    {
      id: 'Cuidamos',
      icon: Wrench,
      title: 'Cuidamos do seu aparelho',
      description: 'Nossa equipe é formada por profissionais qualificados que realizam cuidados especializados, avaliações de desempenho e orientações personalizadas de uso, garantindo que seus aparelhos auditivos ofereçam conforto, eficiência e a melhor experiência auditiva no seu dia a dia.',
      cta: 'Ver serviços',
      gradient: 'from-[#007E7A] to-[#ED0180]',
      bgGradient: 'from-purple-50 to-blue-100'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para sua saúde auditiva
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                id={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-3 bg-gradient-to-r ${service.gradient}`}></div>

                {/* Cabeçalho do Card */}
                <div className={`bg-gradient-to-br ${service.bgGradient} p-10`}>
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                </div>

                {/* Corpo do Card */}
                <div className="p-10 flex flex-col flex-grow">
                  
                  <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <a
                    href="https://wa.me/5561994174249"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center w-full px-8 py-5 bg-gradient-to-r ${service.gradient} text-white text-xl font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Final de Dúvidas */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#007E7A] to-[#ED0180] rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Tem dúvidas? Fale agora mesmo!</h3>
            <p className="text-xl lg:text-2xl mb-10 opacity-95 max-w-4xl mx-auto">
              Nossa equipe está pronta para ajudar. Atendimento facilitado pelo WhatsApp e telefone para sua comodidade.
            </p>
            <a
              href="https://wa.me/5561994174249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#007E7A] text-xl font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-7 h-7 mr-3" />
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}