import { Check, Instagram, MessageCircle } from 'lucide-react';

const plansData = [
  {
    sport: 'Beach Tennis',
    subtitle: 'Venha conhecer e se apaixonar por esse esporte maravilhoso!',
    ctaText: 'Quero fazer aula de beach',
    whatsappMessage: 'Olá! Tenho interesse nas aulas de Beach Tennis.',
    color: 'from-purple-500 to-purple-600', // COR DO PRIMEIRO CARD
    plans: [
      {
        title: 'Mensal',
        options: [
          { frequency: '1x por semana', price: 'R$ 265,00/mês' },
          { frequency: '2x por semana', price: 'R$ 390,00/mês' },
          { frequency: '3x por semana', price: 'R$ 515,00/mês' }
        ]
      },
      {
        title: 'Trimestral',
        subtitle: '(3x no cartão)',
        options: [
          { frequency: '1x por semana', price: 'R$ 735,00/trimestre' },
          { frequency: '2x por semana', price: 'R$ 1.100,00/trimestre' },
          { frequency: '3x por semana', price: 'R$ 1.459,00/trimestre' }
        ]
      },
      {
        title: 'Semestral',
        subtitle: '(6x no cartão)',
        options: [
          { frequency: '1x por semana', price: 'R$ 1.407,00/semestre' },
          { frequency: '2x por semana', price: 'R$ 2.100,00/semestre' },
          { frequency: '3x por semana', price: 'R$ 2.790,00/semestre' }
        ]
      }
    ]
  },
  {
    sport: 'Futevôlei',
    subtitle: 'Venha conhecer e entrar na onda do Futevôlei!',
    ctaText: 'Quero fazer aula de futevôlei',
    whatsappMessage: 'Olá! Tenho interesse nas aulas de Futevôlei.',
    color: 'from-purple-400 to-green-400',
    plans: [
      {
        title: 'Mensal',
        options: [
          { frequency: '1x por semana', price: 'R$ 177,00/mês' },
          { frequency: '2x por semana', price: 'R$ 280,00/mês' },
          { frequency: '3x por semana', price: 'R$ 362,00/mês' }
        ]
      },
      {
        title: 'Trimestral',
        subtitle: '(3x no cartão)',
        options: [
          { frequency: '1x por semana', price: 'R$ 490,00/trimestre' },
          { frequency: '2x por semana', price: 'R$ 767,00/trimestre' },
          { frequency: '3x por semana', price: 'R$ 997,00/trimestre' }
        ]
      },
      {
        title: 'Semestral',
        subtitle: '(6x no cartão)',
        options: [
          { frequency: '1x por semana', price: 'R$ 897,00/semestre' },
          { frequency: '2x por semana', price: 'R$ 1.402,00/semestre' },
          { frequency: '3x por semana', price: 'R$ 1.822,00/semestre' }
        ]
      }
    ]
  },
  {
    sport: 'Vôlei de Praia',
    subtitle: 'Venha conhecer e se divertir com este esporte que é tradição!',
    ctaText: 'Quero fazer aula de vôlei',
    whatsappMessage: 'Olá! Tenho interesse nas aulas de Vôlei de Praia.',
    color: 'from-purple-500 to-purple-600', // COR ATUALIZADA AQUI
    plans: [
      {
        title: 'Mensal',
        options: [
          { frequency: '1x por semana', price: 'R$ 167,00/mês' },
          { frequency: '2x por semana', price: 'R$ 250,00/mês' },
          { frequency: '3x por semana', price: 'R$ 333,00/mês' }
        ]
      },
      {
        title: 'Trimestral',
        subtitle: '(3x no cartão)',
        options: [
          { frequency: '1x por semana', price: 'R$ 460,00/trimestre' },
          { frequency: '2x por semana', price: 'R$ 691,00/trimestre' },
          { frequency: '3x por semana', price: 'R$ 922,00/trimestre' }
        ]
      },
      {
        title: 'Semestral',
        subtitle: '(6x no cartão)',
        options: [
          { frequency: '1x por semana', price: 'R$ 840,00/semestre' },
          { frequency: '2x por semana', price: 'R$ 1.260,00/semestre' },
          { frequency: '3x por semana', price: 'R$ 1.680,00/semestre' }
        ]
      }
    ]
  }
];

export default function Aulas() {
  const handleWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5562983092884?text=${encodedMessage}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/speedarenagyn/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-green-400 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            Planos de <span className="text-white drop-shadow-lg">Aulas</span>
          </h1>
          <p className="text-white/90 text-center text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para você e comece a treinar com os melhores profissionais!
          </p>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="space-y-16">
          {plansData.map((sportData, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Sport Header */}
              <div className={`bg-gradient-to-r ${sportData.color} p-8 text-white`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{sportData.sport}</h2>
                <p className="text-white/90 text-lg">{sportData.subtitle}</p>
              </div>

              {/* Plans */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {sportData.plans.map((plan, planIdx) => (
                    <div key={planIdx} className="bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-purple-100">
                      <h3 className="text-2xl font-bold text-purple-700 mb-1">{plan.title}</h3>
                      {plan.subtitle && (
                        <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                      )}
                      <div className="space-y-3">
                        {plan.options.map((option, optIdx) => (
                          <div key={optIdx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-gray-700 font-medium">{option.frequency}</p>
                              <p className="text-purple-700 font-bold text-lg">{option.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-gray-200">
                  <button
                    onClick={() => handleWhatsApp(sportData.whatsappMessage)}
                    className={`group bg-gradient-to-r ${sportData.color} text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {sportData.ctaText}
                  </button>
                  <button
                    onClick={handleInstagram}
                    className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </button>
                </div>

                {/* Contact Info */}
                <div className="text-center mt-6 text-gray-600">
                  <p className="font-semibold">Contato: (62) 98309-2884</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-green-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Entre em contato conosco e agende sua primeira aula experimental!
          </p>
          <button
            onClick={() => handleWhatsApp('Olá! Gostaria de agendar uma aula experimental.')}
            className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar Aula Experimental
          </button>
        </div>
      </div>
    </div>
  );
}