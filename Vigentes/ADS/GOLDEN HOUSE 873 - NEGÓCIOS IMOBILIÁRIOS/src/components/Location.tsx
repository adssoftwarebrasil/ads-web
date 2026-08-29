import { MapPin, Clock, Globe, Calendar } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Onde Nos Encontrar
            </h2>

            <div className="bg-gradient-to-r from-[#cfa165]/5 to-[#b88a4d]/5 p-6 rounded-xl border-l-4 border-[#cfa165]">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#cfa165] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm text-gray-500 uppercase mb-2">
                    Nosso Escritório
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Av. Luís Viana Filho, 13223, Sala 220, Torre 02 do Hangar Business Park - São Cristóvão, Salvador - BA, 41500-300
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#cfa165]/5 to-[#b88a4d]/5 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#cfa165] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-500 uppercase mb-2">
                    Horário de Atendimento
                  </p>
                  <p className="text-gray-700 text-lg">
                    Segunda a Sexta: 8h às 17h
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Atendimento via WhatsApp 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#cfa165]/5 to-[#b88a4d]/5 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-[#cfa165] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-500 uppercase mb-2">
                    Onde Atuamos
                  </p>
                  <p className="text-gray-700 text-lg">
                    Em todo o <spam>Brasil</spam>!
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/557193469993?text=Olá! Gostaria de agendar uma visita ao escritório da Golden House 873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#cfa165] hover:bg-[#b88a4d] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mt-8"
            >
              <Calendar className="w-5 h-5" />
              Agendar Visita ao Escritório
            </a>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=golden-house%2FWhatsApp%20Image%202026-02-10%20at%2003.27.51.jpeg&version_id=null"
              alt="Vista de Salvador - Bahia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#cfa165]/30 via-transparent to-transparent"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#cfa165] opacity-20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  <MapPin className="w-16 h-16 text-[#cfa165] mx-auto animate-bounce" />
                  <p className="text-center mt-4 font-bold text-gray-900">
                    Em Todo o Brasil
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {['Bahia', 'Minas Gerais', 'São Paulo', '...'].map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 bg-[#cfa165] text-white text-xs rounded-full font-semibold"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
