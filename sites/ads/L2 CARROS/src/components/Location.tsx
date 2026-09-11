import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Localização
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Venha Nos Visitar</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos localizados em um ponto estratégico de Divinópolis para melhor atendê-lo
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="bg-red-600 p-4 rounded-2xl w-fit mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Endereço</h3>
            <p className="text-gray-600 leading-relaxed">
              Av. Paraná, 145 - Planalto<br />
              Divinópolis - MG<br />
              CEP: 35501-168
            </p>
            <a
              href="https://www.google.com/maps/place/L2+CARROS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 font-semibold mt-4 hover:gap-4 transition-all duration-300"
            >
              <Navigation className="w-5 h-5" />
              Como Chegar
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="bg-red-600 p-4 rounded-2xl w-fit mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Horário de Funcionamento</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span className="font-medium">Segunda a Sexta:</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sábado:</span>
                <span>08:00 - 12:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Agende Sua Visita</h3>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Prefere agendar um horário? Entre em contato pelo WhatsApp e garantimos um atendimento personalizado.
            </p>
            <a
              href="https://wa.me/5537999236447?text=Olá! Gostaria de agendar uma visita à loja."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Agendar Agora
            </a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.6237675079633!2d-44.90398852476702!3d-20.149737881288715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0a581f69c3e5d%3A0x71d822e586e39647!2sL2%20CARROS!5e0!3m2!1spt-BR!2sbr!4v1768414791992!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização L2 Carros"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
