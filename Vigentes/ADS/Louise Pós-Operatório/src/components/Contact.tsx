import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const reasons = [
  'Atendimento 24 horas',
  'Equipe especializada e humanizada',
  'Instalações modernas e confortáveis',
  'Acompanhamento completo pós-operatório',
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#282E6A] mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você e esclarecer todas as suas dúvidas
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#282E6A] to-[#624A7F] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">WhatsApp</h4>
                  <a
                    href="https://wa.me/5563992135677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4F4DB] hover:text-white transition-colors"
                  >
                    (63) 99213-5677
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Endereço</h4>
                  <p className="text-white/90">
                    603 Sul, Alameda 09, 15
                    <br />
                    Plano Diretor Sul
                    <br />
                    Palmas - TO, 77016-364
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Horário de Atendimento
                  </h4>
                  <p className="text-white/90">
                    24 horas por dia
                    <br />
                    Todos os dias da semana
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80">
                <strong>CNPJ:</strong> 54.875.826/0001-23
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-[#F4F4DB] rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-[#282E6A] mb-6">
                Agende Seu Atendimento
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Entre em contato conosco através do WhatsApp para agendar sua
                consulta ou esclarecer dúvidas sobre nossos serviços de cuidados
                pós-operatórios.
              </p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5563992135677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle size={24} />
                  Falar no WhatsApp
                </a>
                <a
                  href="tel:+5563992135677"
                  className="flex items-center justify-center gap-3 bg-[#624A7F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#7a5d9e] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone size={24} />
                  Ligar Agora
                </a>
              </div>
              <div className="mt-8 p-6 bg-white rounded-2xl shadow-md">
                <h4 className="font-semibold text-[#282E6A] mb-3">
                  Por que escolher a Louise?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-2">
                      <span className="text-[#624A7F] font-bold">•</span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
