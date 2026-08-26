import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const address = 'SHS, Qd 4, bloco I, Asa Sul, Brasília - DF';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  return (
    <section id="location" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Localização Estratégica
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Onde Nos Encontrar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Coração de Brasília, próximo aos principais pontos da capital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Mapa - Ocupa 3 colunas */}
          <div className="lg:col-span-3 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.4027775!2d-47.8927!3d-15.7987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3ad1c11d0e53%3A0x1c5a2e8b7c0e9e0f!2sSHS%20Quadra%204%20Bloco%20I%20-%20Asa%20Sul%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Informações - Ocupa 2 colunas */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card de Endereço */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    SHS, Qd 4, bloco I<br />
                    Asa Sul, Brasília – DF
                  </p>
                </div>
              </div>
            </div>

            {/* Card de Telefone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Telefone</h3>
                  <a
                    href="tel:+556132469520"
                    className="text-blue-600 hover:text-blue-700 text-lg font-semibold inline-flex items-center gap-2 group/link"
                  >
                    (61) 3246-9520
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card de Horário */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Horário</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    <span className="inline-flex items-center gap-2 text-green-600 font-semibold mb-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Aberto 24 horas
                    </span>
                    <br />
                    Todos os dias da semana
                  </p>
                </div>
              </div>
            </div>

            {/* Botão Como Chegar */}
            <button
              onClick={() => window.open(googleMapsUrl, '_blank')}
              className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-5 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Navigation className="group-hover:rotate-45 transition-transform duration-300" size={20} />
              Como Chegar
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Badge de Destaque */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
              <p className="text-sm text-blue-900 font-medium text-center">
                <span className="font-bold">📍</span> Próximo ao Congresso Nacional e Esplanada dos Ministérios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}